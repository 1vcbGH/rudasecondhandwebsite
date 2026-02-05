import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, ShoppingBag } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onProductClick: (productId: number) => void;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const featuredProducts = [
  {
    id: 1,
    name: 'Chaqueta Denim Vintage',
    price: '45€',
    image: 'https://images.unsplash.com/photo-1742392133846-a8b416e81661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGVuaW0lMjBqYWNrZXQlMjBoYW5nZXJ8ZW58MXx8fHwxNzcwMjU3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente'
  },
  {
    id: 2,
    name: 'Chaqueta de Cuero',
    price: '89€',
    image: 'https://images.unsplash.com/photo-1606163015906-ad3c68002dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGVhdGhlciUyMGphY2tldHxlbnwxfHx8fDE3NzAxODM3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno'
  },
  {
    id: 3,
    name: 'Vestido Floral Vintage',
    price: '38€',
    image: 'https://images.unsplash.com/photo-1759398756369-729ef24332e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmxvcmFsJTIwZHJlc3N8ZW58MXx8fHwxNzcwMTk0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente'
  },
  {
    id: 4,
    name: 'Suéter de Punto',
    price: '32€',
    image: 'https://images.unsplash.com/photo-1597954222037-77adcb50f9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3dlYXRlciUyMGtuaXR8ZW58MXx8fHwxNzcwMjU3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno'
  },
  {
    id: 5,
    name: 'Camiseta Band Vintage',
    price: '28€',
    image: 'https://images.unsplash.com/photo-1565609339309-10c53fbe68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFuZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAxODcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno'
  },
  {
    id: 6,
    name: 'Trench Coat Beige',
    price: '76€',
    image: 'https://images.unsplash.com/photo-1766804627026-9aa49b8294f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHJlbmNoJTIwY29hdCUyMGJlaWdlfGVufDF8fHx8MTc3MDI1NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente'
  }
];

export function HomePage({ onNavigate, onProductClick, toggleFavorite, isFavorite }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765597114285-bf96a92c5367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDE5NDIxMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ruda Second Hand Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl mb-4">
              RUDA SECOND HAND
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
              Cada prenda cuenta una historia
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-neutral-200"
              onClick={() => onNavigate('catalog')}
            >
              Explorar Colección
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="size-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                ♻️
              </div>
              <h3 className="font-semibold mb-2">Moda Sostenible</h3>
              <p className="text-sm text-neutral-600">
                Contribuye al planeta comprando ropa de segunda mano
              </p>
            </div>
            <div>
              <div className="size-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                ✨
              </div>
              <h3 className="font-semibold mb-2">Piezas Únicas</h3>
              <p className="text-sm text-neutral-600">
                Encuentra tesoros vintage que nadie más tendrá
              </p>
            </div>
            <div>
              <div className="size-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                💰
              </div>
              <h3 className="font-semibold mb-2">Precios Increíbles</h3>
              <p className="text-sm text-neutral-600">
                Calidad premium a precios accesibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Productos Destacados
            </h2>
            <p className="text-neutral-600">
              Descubre nuestras piezas más populares
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
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
                    className={`absolute top-2 right-2 size-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white ${
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
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {product.condition}
                  </div>
                </div>
                <h3 className="text-sm mb-1">{product.name}</h3>
                <p className="font-semibold">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('catalog')}
            >
              Ver Toda la Colección
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}