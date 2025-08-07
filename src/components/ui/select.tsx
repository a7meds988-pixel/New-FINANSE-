import * as React from "react";

export function Select({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ children, className = "" }) {
  return <button className={`border px-4 py-2 rounded w-full text-left ${className}`}>{children}</button>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="absolute left-0 mt-1 w-full border bg-white rounded shadow">{children}</div>;
}

export function SelectItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {children}
    </div>
  );
}
