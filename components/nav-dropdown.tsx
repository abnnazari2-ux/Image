'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="btn-ghost font-medium flex items-center gap-1"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="nav-dropdown">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-dropdown-item"
              onClick={() => setOpen(false)}
            >
              {item.icon && <span className="text-base leading-none">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
