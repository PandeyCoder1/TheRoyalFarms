// Product type definition
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// Review type definition
export interface Review {
  id: string;
  product_id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with premium chocolate chips',
    price: 1099,
    category: 'cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Red Velvet Cake',
    description: 'Moist red velvet cake with cream cheese frosting',
    price: 3899,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Vanilla Cupcakes',
    description: 'Light and fluffy vanilla cupcakes with buttercream',
    price: 1599,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    name: 'Oatmeal Raisin Cookies',
    description: 'Chewy oatmeal cookies with plump raisins',
    price: 999,
    category: 'cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '5',
    name: 'Chocolate Fudge Cake',
    description: 'Rich chocolate cake with fudge frosting',
    price: 4199,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '6',
    name: 'Brownie Bites',
    description: 'Decadent chocolate brownies in bite-sized pieces',
    price: 1349,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '7',
    name: 'Sugar Cookies',
    description: 'Classic sugar cookies with colorful decorations',
    price: 899,
    category: 'cookies',
    image: 'https://images.unsplash.com/photo-1576717383838-c6d7b2d32c27?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '8',
    name: 'Carrot Cake',
    description: 'Moist carrot cake with cream cheese frosting and walnuts',
    price: 3599,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop&q=60',
  },
];

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: 'r1',
    product_id: '1',
    author: 'Priya Sharma',
    rating: 5,
    comment: 'Best cookies I\'ve ever had! Soft and chewy with perfect chocolate chips. Worth every rupee!',
    date: '2024-03-15',
  },
  {
    id: 'r2',
    product_id: '1',
    author: 'Rajesh Kumar',
    rating: 4,
    comment: 'Really good cookies, my kids loved them! Fresh and tasty.',
    date: '2024-03-10',
  },
  {
    id: 'r3',
    product_id: '1',
    author: 'Ananya Patel',
    rating: 5,
    comment: 'Amazing quality! The chocolate chips are premium and the texture is perfect.',
    date: '2024-03-20',
  },
  {
    id: 'r4',
    product_id: '2',
    author: 'Neha Gupta',
    rating: 5,
    comment: 'Absolutely delicious! Perfect for my daughter\'s birthday party. Everyone loved it!',
    date: '2024-03-12',
  },
  {
    id: 'r5',
    product_id: '2',
    author: 'Vikram Singh',
    rating: 5,
    comment: 'Best red velvet cake in town! The cream cheese frosting is divine.',
    date: '2024-03-18',
  },
  {
    id: 'r6',
    product_id: '3',
    author: 'Kavita Reddy',
    rating: 5,
    comment: 'Light, fluffy, and perfectly sweet. Highly recommend!',
    date: '2024-03-08',
  },
  {
    id: 'r7',
    product_id: '3',
    author: 'Arjun Mehta',
    rating: 4,
    comment: 'Very good cupcakes. Fresh and delicious!',
    date: '2024-03-16',
  },
  {
    id: 'r8',
    product_id: '4',
    author: 'Deepa Iyer',
    rating: 4,
    comment: 'Great flavor, very fresh! Perfect with evening tea.',
    date: '2024-03-14',
  },
  {
    id: 'r9',
    product_id: '4',
    author: 'Sanjay Kapoor',
    rating: 5,
    comment: 'Healthy and tasty! Love the oatmeal and raisin combination.',
    date: '2024-03-22',
  },
  {
    id: 'r10',
    product_id: '5',
    author: 'Meera Nair',
    rating: 5,
    comment: 'The chocolate is so rich and decadent. Amazing! Best cake ever!',
    date: '2024-03-11',
  },
  {
    id: 'r11',
    product_id: '5',
    author: 'Rahul Joshi',
    rating: 5,
    comment: 'Ordered for anniversary, everyone was impressed. Highly recommended!',
    date: '2024-03-19',
  },
  {
    id: 'r12',
    product_id: '6',
    author: 'Sneha Desai',
    rating: 5,
    comment: 'Perfect brownies! Not too sweet, just the right amount of chocolate.',
    date: '2024-03-13',
  },
  {
    id: 'r13',
    product_id: '6',
    author: 'Amit Shah',
    rating: 4,
    comment: 'Good quality brownies. Kids love them!',
    date: '2024-03-21',
  },
  {
    id: 'r14',
    product_id: '7',
    author: 'Pooja Verma',
    rating: 5,
    comment: 'Beautiful decorations and taste is excellent! Perfect for festivals.',
    date: '2024-03-17',
  },
  {
    id: 'r15',
    product_id: '7',
    author: 'Karan Malhotra',
    rating: 4,
    comment: 'Nice cookies, colorful and tasty. Good value for money.',
    date: '2024-03-09',
  },
  {
    id: 'r16',
    product_id: '8',
    author: 'Divya Krishnan',
    rating: 5,
    comment: 'Moist and flavorful! The walnuts add a great crunch. Loved it!',
    date: '2024-03-23',
  },
  {
    id: 'r17',
    product_id: '8',
    author: 'Rohan Bose',
    rating: 5,
    comment: 'Best carrot cake I\'ve tasted. The cream cheese frosting is perfect!',
    date: '2024-03-07',
  },
];

// Simulated API functions
export const getProducts = async (): Promise<Product[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
};

export const getAllReviews = async (): Promise<Review[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockReviews;
};

export const getReviewsByProductId = async (productId: string): Promise<Review[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockReviews.filter(review => review.product_id === productId);
};
