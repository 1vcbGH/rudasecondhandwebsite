import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductDetailPageProps {
  productId: number;
  onBack: () => void;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const productDetails: Record<number, any> = {
  1: {
    id: 1,
    name: 'test',
    price: '45€',
    image: 'https://media.tenor.com/SIAiO7He2f4AAAAM/ronaldo-meme-ronaldo.gif',
    condition: 'Excelente',
    description: 'Clásica chaqueta de denim en tono azul desgastado. Perfecta para cualquier ocasión casual. Corte oversize con detalles vintage auténticos.',
    size: 'M',
    brand: 'Levi\'s',
    year: '1995',
    material: '100% Algodón'
  },
  2: {
    id: 2,
    name: 'Chaqueta de Cuero',
    price: '89€',
    image: 'https://images.unsplash.com/photo-1606163015906-ad3c68002dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGVhdGhlciUyMGphY2tldHxlbnwxfHx8fDE3NzAxODM3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Muy bueno',
    description: 'Elegante chaqueta de cuero genuino en color negro. Estilo motero atemporal que nunca pasa de moda. Con cremallera metálica y múltiples bolsillos.',
    size: 'L',
    brand: 'Vintage Original',
    year: '1990',
    material: 'Cuero genuino'
  },
  3: {
    id: 3,
    name: 'Vestido Floral Vintage',
    price: '38€',
    image: 'https://images.unsplash.com/photo-1759398756369-729ef24332e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmxvcmFsJTIwZHJlc3N8ZW58MXx8fHwxNzcwMTk0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excelente',
    description: 'Hermoso vestido midi con estampado floral. Corte romántico perfecto para primavera y verano. Cintura elástica y falda vaporosa.',
    size: 'S',
    brand: 'Retro Fashion',
    year: '2000',
    material: 'Viscosa'
  }
};

export function ProductDetailPage({ productId, onBack, toggleFavorite, isFavorite }: ProductDetailPageProps) {
  // Get product or default to first product
  const product = productDetails[productId] || productDetails[1];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm mb-6 hover:underline"
        >
          <ChevronLeft className="size-4" />
          Volver al catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-black/70">
              {product.condition}
            </Badge>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold">{product.price}</p>
            </div>

            {/* Product Info */}
            <div className="space-y-4 mb-6 pb-6 border-b">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-600">Talla:</span>
                  <p className="font-medium">{product.size}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Marca:</span>
                  <p className="font-medium">{product.brand}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Año aprox:</span>
                  <p className="font-medium">{product.year}</p>
                </div>
                <div>
                  <span className="text-neutral-600">Material:</span>
                  <p className="font-medium">{product.material}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Descripción</h2>
              <p className="text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-8">
              <Button size="lg" className="w-full">
                Añadir al Carrito
              </Button>
              <Button 
                variant={isFavorite(product.id) ? "default" : "outline"}
                size="lg" 
                className="w-full"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart className={`size-5 mr-2 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                {isFavorite(product.id) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 border-t pt-6">
              <div className="flex items-start gap-3 text-sm">
                <Truck className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Envío gratis</p>
                  <p className="text-neutral-600 text-xs">En pedidos superiores a 50€</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <RotateCcw className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Devolución fácil</p>
                  <p className="text-neutral-600 text-xs">14 días para devolver tu compra</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Shield className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Garantía de calidad</p>
                  <p className="text-neutral-600 text-xs">Todas las prendas revisadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl mb-6">También te puede gustar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                id: 4,
                name: 'Suéter de Punto',
                price: '32€',
                image: 'https://images.unsplash.com/photo-1597954222037-77adcb50f9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3dlYXRlciUyMGtuaXR8ZW58MXx8fHwxNzcwMjU3NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                id: 5,
                name: 'Camiseta Band Vintage',
                price: '28€',
                image: 'https://images.unsplash.com/photo-1565609339309-10c53fbe68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFuZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAxODcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                id: 6,
                name: 'Trench Coat Beige',
                price: '76€',
                image: 'https://images.unsplash.com/photo-1766804627026-9aa49b8294f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHJlbmNoJTIwY29hdCUyMGJlaWdlfGVufDF8fHx8MTc3MDI1NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                id: 7,
                name: 'Abrigo de Lana',
                price: '95€',
                image: 'https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vbCUyMGNvYXR8ZW58MXx8fHwxNzcwMjU3NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-neutral-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm mb-1">{item.name}</h3>
                <p className="font-semibold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}