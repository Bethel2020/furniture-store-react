export const products = [
  // Living Room
  {
    id: 1,
    name: "Modern Velvet Sofa",
    price: 899,
    category: "sofa",
    material: "velvet",
    room: "living-room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    description: "Luxurious velvet sofa with modern design, perfect for contemporary living rooms.",
    dimensions: "85\" W x 38\" D x 35\" H",
    color: "Emerald Green",
    inStock: true
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    price: 299,
    category: "table",
    material: "wood",
    room: "living-room",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500",
    description: "Sleek minimalist coffee table with solid wood construction.",
    dimensions: "48\" W x 24\" D x 18\" H",
    color: "Walnut",
    inStock: true
  },
  {
    id: 3,
    name: "Leather Recliner Chair",
    price: 599,
    category: "chair",
    material: "leather",
    room: "living-room",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
    description: "Comfortable leather recliner with adjustable positions.",
    dimensions: "32\" W x 38\" D x 41\" H",
    color: "Brown",
    inStock: true
  },
  
  // Bedroom
  {
    id: 4,
    name: "Upholstered Bed Frame",
    price: 699,
    category: "bed",
    material: "fabric",
    room: "bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    description: "Elegant upholstered bed frame with tufted headboard.",
    dimensions: "Queen Size",
    color: "Beige",
    inStock: true
  },
  {
    id: 5,
    name: "Nightstand Set (2 pcs)",
    price: 199,
    category: "storage",
    material: "wood",
    room: "bedroom",
    image: "https://images.unsplash.com/photo-1532372320978-9d4b1a3b3b3b?w=500",
    description: "Set of two matching nightstands with drawer storage.",
    dimensions: "22\" H x 18\" W x 15\" D",
    color: "White",
    inStock: true
  },
  {
    id: 6,
    name: "Wooden Wardrobe",
    price: 899,
    category: "storage",
    material: "wood",
    room: "bedroom",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
    description: "Spacious wardrobe with hanging space and drawers.",
    dimensions: "72\" H x 48\" W x 22\" D",
    color: "Oak",
    inStock: false
  },
  
  // Dining Room
  {
    id: 7,
    name: "Dining Table Set (6 seats)",
    price: 799,
    category: "table",
    material: "wood",
    room: "dining-room",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500",
    description: "Complete dining set with table and 6 upholstered chairs.",
    dimensions: "72\" W x 36\" D x 30\" H",
    color: "Natural Wood",
    inStock: true
  },
  {
    id: 8,
    name: "Buffet Cabinet",
    price: 499,
    category: "storage",
    material: "wood",
    room: "dining-room",
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=500",
    description: "Buffet cabinet with ample storage for dining essentials.",
    dimensions: "60\" W x 18\" D x 34\" H",
    color: "Gray",
    inStock: true
  },
  
  // Office
  {
    id: 9,
    name: "Ergonomic Office Chair",
    price: 349,
    category: "chair",
    material: "mesh",
    room: "office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
    description: "Ergonomic mesh chair with lumbar support.",
    dimensions: "Adjustable",
    color: "Black",
    inStock: true
  },
  {
    id: 10,
    name: "L-shaped Desk",
    price: 449,
    category: "table",
    material: "wood",
    room: "office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500",
    description: "Spacious L-shaped desk for home office.",
    dimensions: "70\" W x 70\" D",
    color: "Espresso",
    inStock: true
  },
  
  // Outdoor
  {
    id: 11,
    name: "Outdoor Patio Set",
    price: 599,
    category: "sofa",
    material: "rattan",
    room: "outdoor",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=500",
    description: "Weather-resistant rattan patio set with cushions.",
    dimensions: "Various",
    color: "Brown",
    inStock: true
  },
  {
    id: 12,
    name: "Hanging Egg Chair",
    price: 299,
    category: "chair",
    material: "rattan",
    room: "outdoor",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=500",
    description: "Comfortable hanging egg chair with stand.",
    dimensions: "40\" H x 35\" W",
    color: "Natural",
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'sofa', name: 'Sofas' },
  { id: 'chair', name: 'Chairs' },
  { id: 'table', name: 'Tables' },
  { id: 'bed', name: 'Beds' },
  { id: 'storage', name: 'Storage' }
];

export const materials = [
  { id: 'all', name: 'All Materials' },
  { id: 'wood', name: 'Wood' },
  { id: 'velvet', name: 'Velvet' },
  { id: 'leather', name: 'Leather' },
  { id: 'fabric', name: 'Fabric' },
  { id: 'mesh', name: 'Mesh' },
  { id: 'rattan', name: 'Rattan' }
];

export const rooms = [
  { id: 'all', name: 'All Rooms' },
  { id: 'living-room', name: 'Living Room' },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'dining-room', name: 'Dining Room' },
  { id: 'office', name: 'Office' },
  { id: 'outdoor', name: 'Outdoor' }
];