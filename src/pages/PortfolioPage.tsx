import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import StarRating from '../components/StarRating';
import { Product, Review, getProducts, getReviewsByProductId } from '../lib/supabase';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<{ [key: string]: Review[] }>({});
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'desserts', name: 'Desserts' },
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);

      const allReviews: { [key: string]: Review[] } = {};
      for (const product of data) {
        const productReviews = await getReviewsByProductId(product.id);
        allReviews[product.id] = productReviews;
      }
      setReviews(allReviews);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAverageRating = (productId: string): number => {
    const productReviews = reviews[productId] || [];
    if (productReviews.length === 0) return 0;
    const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / productReviews.length) * 10) / 10;
  };

  const addToCart = (product: Product) => {
    setSelectedProduct(product);
    setCart([...cart, { product, quantity: 1 }]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = (product: Product) => {
    const cartItems = [...cart, { product, quantity: 1 }];
    const cartSummary = cartItems
      .map((item) => `${item.product.name} ($${item.product.price.toFixed(2)})`)
      .join(', ');
    const message = encodeURIComponent(
      `Hi, I'd like to order: ${cartSummary}. Please confirm availability and delivery options.`
    );
    window.open(`https://wa.me/919122122708?text=${message}`, '_blank');
  };

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-organic-green-200 border-t-organic-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading our delicious selection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {showNotification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Added to cart! View via WhatsApp to checkout.
        </div>
      )}

      <section className="natural-gradient organic-texture py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Explore our exquisite collection of handcrafted cookies, cakes, and desserts.
            Each creation is a testament to our commitment to quality and taste.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-organic-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-organic-green-50 hover:text-organic-green-600 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const avgRating = getAverageRating(product.id);
              const reviewCount = reviews[product.id]?.length || 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <span className="inline-block w-fit bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold capitalize mb-3">
                      {product.category}
                    </span>

                    {reviewCount > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={Math.round(avgRating)} size="sm" />
                        <span className="text-xs text-gray-600">
                          {avgRating.toFixed(1)} ({reviewCount})
                        </span>
                      </div>
                    )}

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-organic-green-600">
                      ₹{product.price}
                    </span>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="bg-organic-green-600 text-white p-2 rounded-lg hover:bg-organic-green-700 transition-colors duration-300 shadow-md"
                        title="Buy Now"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Didn't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We specialize in custom orders for weddings, birthdays, corporate events, and more.
            Let us bring your vision to life with a personalized creation.
          </p>
          <a
            href="mailto:info@theroyalfarms.com"
            className="bg-organic-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-organic-green-700 transition-colors duration-300 inline-block shadow-lg"
          >
            Request Custom Order
          </a>
        </div>
      </section>
    </div>
  );
}
