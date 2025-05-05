'use client';

import { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

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
        className="w-full flex items-center text-left px-6 py-4 text-lg font-normal bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDownIcon className="w-5 h-5 mr-2 text-gray-500" />
        ) : (
          <ChevronRightIcon className="w-5 h-5 mr-2 text-gray-500" />
        )}
        {title}
      </button>
      {isOpen && (
        <div className="pt-2 pb-6 px-8 space-y-6 text-left">{children}</div>
      )}
    </div>
  );
}
