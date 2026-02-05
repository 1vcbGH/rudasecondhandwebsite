import { ShoppingBag, Search, Menu, Heart, User } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (page: string) => void;
  favoritesCount: number;
}

export function Header({ onNavigate, favoritesCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
          </Button>

          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="size-6" />
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl tracking-tight">RUDA</span>
                <span className="text-xs tracking-widest -mt-1">SECOND HAND</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className="text-sm font-medium hover:underline"
            >
              Inicio
            </button>
            <button 
              onClick={() => onNavigate('catalog')}
              className="text-sm font-medium hover:underline"
            >
              Catálogo
            </button>
            <button className="text-sm font-medium hover:underline">
              Nosotros
            </button>
            <button className="text-sm font-medium hover:underline">
              Contacto
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="size-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex relative"
              onClick={() => onNavigate('favorites')}
            >
              <Heart className="size-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-1 -right-1 size-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}