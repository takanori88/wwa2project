'use client';

import { useState, useEffect } from 'react';

export default function PersistentAccordion({ season, title, children }) {
  const storageKey = `open-season-${season}`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'true') {
      setIsOpen(true);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, isOpen.toString());
  }, [isOpen, storageKey]);

  return (
    <div className="rounded-md bg-gray-50">
      <button
        className="w-full text-left px-6 py-4 text-lg font-normal bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▼' : '▶'} {title}
      </button>
      {isOpen && (
        <div className="pt-2 pb-6 px-8 space-y-6 text-left">{children}</div>
      )}
    </div>
  );
}
