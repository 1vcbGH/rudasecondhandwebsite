import { useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePage } from './components/home-page';
import { CatalogPage } from './components/catalog-page';
import { ProductDetailPage } from './components/product-detail-page';
import { FavoritesPage } from './components/favorites-page';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'product-detail') {
      setSelectedProductId(null);
    }
  };

  const handleBackToCatalog = () => {
    setCurrentPage('catalog');
    setSelectedProductId(null);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.includes(productId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} favoritesCount={favorites.length} />
      
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onProductClick={handleProductClick}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )}
        
        {currentPage === 'catalog' && (
          <CatalogPage 
            onProductClick={handleProductClick}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )}
        
        {currentPage === 'product-detail' && selectedProductId && (
          <ProductDetailPage 
            productId={selectedProductId} 
            onBack={handleBackToCatalog}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {currentPage === 'favorites' && (
          <FavoritesPage 
            favorites={favorites}
            onProductClick={handleProductClick}
            toggleFavorite={toggleFavorite}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}