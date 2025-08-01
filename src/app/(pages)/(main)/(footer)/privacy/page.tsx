'use client';

import { useEffect, useRef } from 'react';

export default function PrivacyPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const resizeIframe = () => {
    const iframe = iframeRef.current;
    if (
      iframe &&
      iframe.contentDocument &&
      iframe.contentDocument.body
    ) {
      const height = iframe.contentDocument.body.scrollHeight;
      iframe.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => resizeIframe();
    iframe.addEventListener('load', onLoad);
    window.addEventListener('resize', resizeIframe);

    return () => {
      iframe.removeEventListener('load', onLoad);
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/privacy.html"
      width="100%"
      className="border-none transition-all duration-300"
      style={{ overflow: 'hidden' }}
    />
  );
}
