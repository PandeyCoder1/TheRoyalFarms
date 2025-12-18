import { ArrowRight, Award, Clock, Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import StarRating from '../components/StarRating';
import { Product, Review, getProducts, getAllReviews, getReviewsByProductId } from '../lib/supabase';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [reviews, setReviews] = useState<{ [key: string]: Review[] }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const products = await getProducts();
      const reviewsData = await getAllReviews();
      setAllReviews(reviewsData);
      setFeaturedProducts(products.slice(0, 4));

      const allReviewsMap: { [key: string]: Review[] } = {};
      for (const product of products) {
        const productReviews = await getReviewsByProductId(product.id);
        allReviewsMap[product.id] = productReviews;
      }
      setReviews(allReviewsMap);
    } catch (error) {
      console.error('Error loading data:', error);
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

  const handleBuyNow = (product: Product) => {
    const message = encodeURIComponent(
      `Hi, I'd like to order: ${product.name} (₹${product.price}). Please confirm availability and delivery options.`
    );
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients make it into our creations',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Everything is baked fresh every single day',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each item is crafted with passion and attention to detail',
    },
  ];

  return (
    <div>
      <section className="relative natural-gradient organic-texture py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Artisan Desserts
              <span className="block text-organic-green-600">Baked to Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our handcrafted collection of premium cookies, cakes, and desserts
              made fresh daily with love and the finest ingredients.
            </p>
            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-organic-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-organic-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <span>View Our Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white leaf-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-organic-green-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-organic-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50 organic-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Creations
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse of our most popular handcrafted delights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => {
              const avgRating = getAverageRating(product.id);
              const reviewCount = reviews[product.id]?.length || 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-organic-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{product.description}</p>

                    {reviewCount > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={Math.round(avgRating)} size="sm" />
                        <span className="text-xs text-gray-600">
                          {avgRating.toFixed(1)} ({reviewCount})
                        </span>
                      </div>
                    )}

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-organic-green-600">
                      ₹{product.price}
                    </span>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="bg-organic-green-600 text-white p-2 rounded-lg hover:bg-organic-green-700 transition-colors duration-300"
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

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Loved by customers around the world
            </p>
          </div>

          {allReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allReviews.slice(0, 6).map((review) => {
                const product = featuredProducts.find(
                  (p) => p.id === review.product_id
                ) || featuredProducts[0];
                return (
                  <div
                    key={review.id}
                    className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {review.author}
                      </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {product?.name || 'TheRoyalFarms'}
                        </p>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="text-gray-700 italic">"{review.comment}"</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              Loading reviews...
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-organic-green-600 text-white leaf-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Orders Welcome
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Planning a special event? Let us create a custom cake or dessert table
            that will leave your guests amazed. Contact us to discuss your vision.
          </p>
          <a
            href="mailto:info@theroyalfarms.com"
            className="bg-white text-organic-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
