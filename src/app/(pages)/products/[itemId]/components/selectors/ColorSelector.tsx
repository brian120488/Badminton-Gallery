'use client';

import { useItemContext } from '../../contexts/ItemContext'

interface Props {
  colors: string[];
}

export default function ColorSelector({ colors }: Props) {
  const { item, updateItem } = useItemContext();
  const color = item.selection.color;

  return (
    <>
      Color: {color}
      <div className='flex gap-3'>
        {colors.map((c, i) => (
          // <button
          //   key={c}
          //   onClick={() => updateItem({
          //     selection: {
          //       'color': c
          //     }
          //   })}
          //   className={`w-8 h-8 rounded-full border-2 ${color === c ? 'border-black' : 'border-gray-300'}`}
          //   style={{ backgroundColor: color }}
          // />
          <ColorButton key={i} colors={c} />
        ))}
      </div>
    </>
  );
}

function ColorButton({ colors }: { colors: string }) {
  const { item, updateItem } = useItemContext();
  const buttonColors = parseColors(colors);
  const size = 20;

  let style: React.CSSProperties = {
    width: size,
    height: size,
  };
  
  if (buttonColors.length === 1) {
    style.backgroundColor = buttonColors[0];
  } else if (buttonColors.length === 2) {
    const [color1, color2] = buttonColors;
    style.backgroundImage = `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`;
  }

  const borderColor = item.selection.color === colors ? 'border-black' : 'border-gray-300';

  return (
    <button
      style={style}
      onClick={() => updateItem({ selection: { color: colors } })}
      className={`rounded-sm border ${borderColor}`}
    />
  );
}


function isValidColor(color: string): boolean {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
}

function parseColors(input: string): string[] {
  return input
    .split('/')
    .map(raw => {
      const cleaned = raw.trim().toLowerCase().replace(/\s+/g, '');
      if (isValidColor(cleaned)) return cleaned;

      // Fallback: last word
      const words = raw.trim().toLowerCase().split(/\s+/);
      const lastWord = words[words.length - 1];
      return isValidColor(lastWord) ? lastWord : 'gray'; // fallback fallback
    });
}
