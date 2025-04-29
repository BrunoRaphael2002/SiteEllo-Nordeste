// src/components/VisitCounter.jsx
import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export function VisitCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    let count = parseInt(localStorage.getItem('siteVisits') || '0', 10);
    count += 1;
    localStorage.setItem('siteVisits', count.toString());
    setVisits(count);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-50">
      <Eye className="w-5 h-5" />
      <span>{visits} visitas</span>
    </div>
  );
}
