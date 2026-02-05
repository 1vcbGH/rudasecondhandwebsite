import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface CatalogPageProps {
  onProductClick: (productId: number) => void;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const allProducts = [
  {
    id: 1,
    name: 'Chaqueta Denim Vintage',
    price: '45€',
    image: 'https://images.unsplash.com/photo-1742392133846-a8b416e81661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGVuaW0lMjBqYWNrZXQlMjBoYW5nZXJ8ZW58MXx8fHwxNzcwMjU3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'mujer',
    type: 'chaquetas'
  },
  {
    id: 2,
    name: 'Chaqueta de Cuero',
    price: '89€',
    image: 'https://images.unsplash.com/photo-1606163015906-ad3c68002dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGVhdGhlciUyMGphY2tldHxlbnwxfHx8fDE3NzAxODM3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'hombre',
    type: 'chaquetas'
  },
  {
    id: 3,
    name: 'Vestido Floral Vintage',
    price: '38€',
    image: 'https://images.unsplash.com/photo-1759398756369-729ef24332e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmxvcmFsJTIwZHJlc3N8ZW58MXx8fHwxNzcwMTk0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'mujer',
    type: 'vestidos'
  },
  {
    id: 4,
    name: 'Suéter de Punto',
    price: '32€',
    image: 'https://images.unsplash.com/photo-1597954222037-77adcb50f9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3dlYXRlciUyMGtuaXR8ZW58MXx8fHwxNzcwMjU3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'mujer',
    type: 'sueteres'
  },
  {
    id: 5,
    name: 'Camiseta Band Vintage',
    price: '28€',
    image: 'https://images.unsplash.com/photo-1565609339309-10c53fbe68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFuZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAxODcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'hombre',
    type: 'camisetas'
  },
  {
    id: 6,
    name: 'Trench Coat Beige',
    price: '76€',
    image: 'https://images.unsplash.com/photo-1766804627026-9aa49b8294f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHJlbmNoJTIwY29hdCUyMGJlaWdlfGVufDF8fHx8MTc3MDI1NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'mujer',
    type: 'abrigos'
  },
  {
    id: 7,
    name: 'Abrigo de Lana',
    price: '95€',
    image: 'https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vbCUyMGNvYXR8ZW58MXx8fHwxNzcwMjU3NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'hombre',
    type: 'abrigos'
  },
  {
    id: 8,
    name: 'Camisa a Rayas',
    price: '24€',
    image: 'https://images.unsplash.com/photo-1764046697690-03c6533e13d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3RyaXBlZCUyMHNoaXJ0fGVufDF8fHx8MTc3MDIxODI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'hombre',
    type: 'camisas'
  },
  {
    id: 9,
    name: 'Jeans Denim Clásico',
    price: '36€',
    image: 'https://images.unsplash.com/photo-1741939483735-6923b430ca89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGVuaW0lMjBqZWFuc3xlbnwxfHx8fDE3NzAyNTQ3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'mujer',
    type: 'pantalones'
  },
  {
    id: 10,
    name: 'Pañuelo de Seda',
    price: '18€',
    image: 'https://images.unsplash.com/photo-1551028442-ee84b4d3a50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc2lsayUyMHNjYXJmfGVufDF8fHx8MTc3MDI0MDI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'accesorios',
    type: 'accesorios'
  },
  {
    id: 11,
    name: 'Bomber Jacket',
    price: '67€',
    image: 'https://images.unsplash.com/photo-1764722755324-628edfbd5502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9tYmVyJTIwamFja2V0fGVufDF8fHx8MTc3MDI1NzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'hombre',
    type: 'chaquetas'
  },
  {
    id: 12,
    name: 'Botas de Cuero',
    price: '85€',
    image: 'https://images.unsplash.com/photo-1758854486670-98ccb5d1d240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGVhdGhlciUyMGJvb3RzfGVufDF8fHx8MTc3MDI1NzQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'accesorios',
    type: 'zapatos'
  },
  {
    id: 13,
    name: 'Bolso Vintage',
    price: '52€',
    image: 'https://images.unsplash.com/photo-1767230523786-c7d924e1dc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaGFuZGJhZyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MDI1NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    category: 'accesorios',
    type: 'bolsos'
  },
  {
    id: 14,
    name: 'Gafas de Sol Retro',
    price: '22€',
    image: 'https://images.unsplash.com/photo-1764722755097-b503a93e5e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3VuZ2xhc3NlcyUyMHJldHJvfGVufDF8fHx8MTc3MDI1NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    category: 'accesorios',
    type: 'accesorios'
  }
];

export function CatalogPage({ onProductClick, toggleFavorite, isFavorite }: CatalogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredProducts = selectedCategory === 'todos' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2">Catálogo</h1>
          <p className="text-neutral-600">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'todos' && (
              <span className="ml-1">
                en <span className="font-semibold capitalize">{selectedCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="size-5" />
            <span className="font-semibold">Categorías</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCategory === 'todos' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
              onClick={() => handleCategoryChange('todos')}
            >
              Todos
            </Badge>
            <Badge 
              variant={selectedCategory === 'mujer' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
              onClick={() => handleCategoryChange('mujer')}
            >
              Mujer
            </Badge>
            <Badge 
              variant={selectedCategory === 'hombre' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
              onClick={() => handleCategoryChange('hombre')}
            >
              Hombre
            </Badge>
            <Badge 
              variant={selectedCategory === 'accesorios' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
              onClick={() => handleCategoryChange('accesorios')}
            >
              Accesorios
            </Badge>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
              onClick={() => onProductClick(product.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-neutral-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button 
                  className={`absolute top-3 right-3 size-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white ${
                    isFavorite(product.id) ? '!opacity-100' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                >
                  <Heart 
                    className={`size-4 ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                </button>
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {product.condition}
                </div>
              </div>
              <h3 className="text-sm mb-1 group-hover:underline">{product.name}</h3>
              <p className="font-semibold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar Más Productos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}