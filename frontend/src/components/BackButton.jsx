import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function BackButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-600 hover:text-gray-900"
    >
      <ChevronLeft className="h-5 w-5 ml-1" />
      <span>{label}</span>
    </button>
  );
}