'use client'

import { useEffect, useState } from 'react';

export default function TermsPage() {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    fetch('/terms.html')
      .then(res => res.text())
      .then(setHtml);
  }, []);

  if (!html) return <p>Loading...</p>;

  return (
    <div
      className="p-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
