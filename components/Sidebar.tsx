import React, { useState } from 'react';
import { Menu, X, Home, Sparkles, Box, Zap, Type, Layers, ChevronRight } from 'lucide-react';

interface SidebarProps {
  onNavigate: (category: string) => void;
  activeCategory: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activeCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Buttons', icon: Home, count: 82 },
    { id: 'fluid', name: 'Fluid Interface', icon: Sparkles, count: 18 },
    { id: '3d', name: 'Depth & Dimension', icon: Box, count: 16 },
    { id: 'interaction', name: 'Interaction Lab', icon: Zap, count: 16 },
    { id: 'typography', name: 'Typography', icon: Type, count: 16 },
    { id: 'aesthetic',name: 'Design Aesthetics', icon: Layers, count: 16 },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-3 rounded-xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className
