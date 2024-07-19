let data = [
  {
    id: 0,
    name: "Adidas Ultraboost 21",
    image:
      "https://m.media-amazon.com/images/I/414FfrsToBL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Blue"],
    brand: "Adidas",
    price: 13500,
    category: "Male",
    type: "Shoes",
    rating: 4.7,
    inStock: true,
    description:
      "High-performance running shoe with responsive Boost midsole and adaptive Primeknit upper for superior comfort and energy return.",
  },
  {
    id: 1,
    name: "Adidas Stan Smith",
    image:
      "https://m.media-amazon.com/images/I/8169RvcpPKL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["White", "Green", "Navy"],
    brand: "Adidas",
    price: 6000,
    category: "Male",
    type: "Shoes",
    rating: 4.5,
    inStock: true,
    description:
      "Iconic tennis-inspired sneaker with a clean, minimalist design featuring a leather upper and perforated 3-Stripes.",
  },
  {
    id: 2,
    name: "Adidas Superstar",
    image:
      "https://m.media-amazon.com/images/I/71YgZ+wVdQL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["White", "Black", "Red"],
    brand: "Adidas",
    price: 6375,
    category: "Male",
    type: "Shoes",
    rating: 4.6,
    inStock: true,
    description:
      "Classic shell-toe sneaker with iconic 3-Stripes design, perfect for street style and everyday wear.",
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    image:
      "https://m.media-amazon.com/images/I/61ILsOc77PL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Pink", "White", "Grey"],
    brand: "Adidas",
    price: 14250,
    category: "Female",
    type: "Shoes",
    rating: 4.8,
    inStock: true,
    description:
      "Women's specific fit running shoe with adaptive knit upper and responsive Boost midsole for ultimate comfort and performance.",
  },
  {
    id: 4,
    name: "Adidas NMD R1",
    image:
      "https://m.media-amazon.com/images/I/61SNAIvsV7L._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "White", "Red"],
    brand: "Adidas",
    price: 9750,
    category: "Male",
    type: "Shoes",
    rating: 4.5,
    inStock: true,
    description:
      "Modern lifestyle sneaker combining heritage Adidas elements with cutting-edge Boost cushioning technology for style and comfort.",
  },
  {
    id: 5,
    name: "Adidas Gazelle",
    image:
      "https://m.media-amazon.com/images/I/71cseSM718L._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [3, 4, 5, 6],
    colors: ["Blue", "Pink", "Black"],
    brand: "Adidas",
    price: 4500,
    category: "Kids",
    type: "Shoes",
    rating: 4.4,
    inStock: true,
    description:
      "Iconic suede sneaker scaled down for kids, featuring a durable outsole and timeless style.",
  },

  // Puma Shoes
  {
    id: 6,
    name: "Puma RS-X",
    image:
      "https://m.media-amazon.com/images/I/71uEBGZ+5HL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["White", "Black", "Red"],
    brand: "Puma",
    price: 8250,
    category: "Male",
    type: "Shoes",
    rating: 4.5,
    inStock: true,
    description:
      "Chunky retro-inspired sneaker featuring PUMA's Running System technology for maximum cushioning and style.",
  },
  {
    id: 7,
    name: "Puma Cali",
    image:
      "https://m.media-amazon.com/images/I/51V+htDvNjL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["White", "Black", "Pink"],
    brand: "Puma",
    price: 6000,
    category: "Female",
    type: "Shoes",
    rating: 4.3,
    inStock: true,
    description:
      "Sleek and stylish low-top sneaker inspired by California vibes, featuring a stacked sole for added height and attitude.",
  },
  {
    id: 8,
    name: "Puma Suede Classic",
    image:
      "https://m.media-amazon.com/images/I/618sUEIWr0L._AC_UL480_FMwebp_QL-65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Blue", "Red", "Black"],
    brand: "Puma",
    price: 5250,
    category: "Male",
    type: "Shoes",
    rating: 4.6,
    inStock: true,
    description:
      "Timeless street-style icon with a soft suede upper and the classic formstrip design.",
  },
  {
    id: 9,
    name: "Puma Mayze",
    image:
      "https://m.media-amazon.com/images/I/51BbH6OmLXL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9],
    colors: ["White", "Black", "Beige"],
    brand: "Puma",
    price: 7500,
    category: "Female",
    type: "Shoes",
    rating: 4.4,
    inStock: true,
    description:
      "Fashion-forward platform sneaker with a stacked midsole and leather upper for a bold, elevated look.",
  },
  {
    id: 10,
    name: "Puma Future Rider",
    image:
      "https://m.media-amazon.com/images/I/61lIE80eMtL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Blue", "Yellow", "Grey"],
    brand: "Puma",
    price: 6750,
    category: "Male",
    type: "Shoes",
    rating: 4.5,
    inStock: true,
    description:
      "Retro-inspired running shoe with vibrant color blocking and comfortable cushioning for everyday wear.",
  },
  {
    id: 11,
    name: "Puma Smash v2",
    image:
      "https://m.media-amazon.com/images/I/51xgQrBUhVL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [3, 4, 5, 6],
    colors: ["White", "Black", "Blue"],
    brand: "Puma",
    price: 3750,
    category: "Kids",
    type: "Shoes",
    rating: 4.2,
    inStock: true,
    description:
      "Classic tennis-inspired sneaker for kids with a durable leather upper and iconic PUMA formstrip.",
  },

  // Nike Shoes
  {
    id: 12,
    name: "Nike Air Force 1",
    image:
      "https://m.media-amazon.com/images/I/71G8KDyRjAL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Red"],
    brand: "Nike",
    price: 7500,
    category: "Male",
    type: "Shoes",
    rating: 4.8,
    inStock: true,
    description:
      "Timeless basketball-inspired sneaker with a durable leather upper, Air-Sole unit, and classic design that's stood the test of time.",
  },
  {
    id: 13,
    name: "Nike Air Max 90",
    image:
      "https://m.media-amazon.com/images/I/81qf3IoQTZL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["White", "Black", "Blue"],
    brand: "Nike",
    price: 9750,
    category: "Male",
    type: "Shoes",
    rating: 4.7,
    inStock: true,
    description:
      "Iconic running shoe featuring visible Air cushioning, waffle outsole, and classic '90s styling.",
  },
  {
    id: 14,
    name: "Nike React Infinity Run",
    image:
      "https://m.media-amazon.com/images/I/614pu2a28wL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "White", "Pink"],
    brand: "Nike",
    price: 11250,
    category: "Female",
    type: "Shoes",
    rating: 4.6,
    inStock: true,
    description:
      "High-performance running shoe designed to reduce injury, featuring responsive React foam and a stable platform.",
  },
  {
    id: 15,
    name: "Nike Blazer Mid '77",
    image:
      "https://m.media-amazon.com/images/I/61C7TlRwYlL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["White", "Black", "Green"],
    brand: "Nike",
    price: 7125,
    category: "Male",
    type: "Shoes",
    rating: 4.5,
    inStock: true,
    description:
      "Vintage-inspired basketball shoe with a leather upper, exposed foam tongue, and retro styling.",
  },
  {
    id: 16,
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://m.media-amazon.com/images/I/71subBFxFLL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Grey", "Pink", "Blue"],
    brand: "Nike",
    price: 9000,
    category: "Female",
    type: "Shoes",
    rating: 4.7,
    inStock: true,
    description:
      "Versatile running shoe with responsive Nike React foam and Zoom Air unit for a smooth, springy ride mile after mile.",
  },
  {
    id: 17,
    name: "Nike Air Max 270",
    image:
      "https://m.media-amazon.com/images/I/81y0OVaQCiL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [3, 4, 5, 6],
    colors: ["Black", "White", "Red"],
    brand: "Nike",
    price: 8250,
    category: "Kids",
    type: "Shoes",
    rating: 4.4,
    inStock: true,
    description:
      "Lifestyle shoe for kids featuring Nike's largest Air unit yet in the heel for maximum comfort and style.",
  },

  // Adidas Flip Flops
  {
    id: 18,
    name: "Adidas Adilette Comfort",
    image:
      "https://m.media-amazon.com/images/I/41kx26cPKWL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["Black", "Navy", "White"],
    brand: "Adidas",
    price: 2625,
    category: "Male",
    type: "Slides",
    rating: 4.5,
    inStock: true,
    description:
      "Classic slide with a contoured footbed for enhanced comfort and a quick-drying synthetic upper.",
  },
  {
    id: 19,
    name: "Adidas Eezay Flip Flop",
    image:
      "https://m.media-amazon.com/images/I/51v04dihPrL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "Pink", "Blue"],
    brand: "Adidas",
    price: 1875,
    category: "Female",
    type: "Slides",
    rating: 4.3,
    inStock: true,
    description:
      "Lightweight and water-friendly flip flop with a soft, textured footbed for comfort and grip.",
  },
  {
    id: 20,
    name: "Adidas Comfort Flip Flop",
    image:
      "https://m.media-amazon.com/images/I/71o227QRuyL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Grey", "Black", "Blue"],
    brand: "Adidas",
    price: 2250,
    category: "Male",
    type: "Slides",
    rating: 4.4,
    inStock: true,
    description:
      "Casual flip flop with a cushioned footbed and textured outsole for traction and durability.",
  },
  {
    id: 21,
    name: "Adidas Adilette Aqua",
    image:
      "https://m.media-amazon.com/images/I/71d3B+AjpsL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9],
    colors: ["Pink", "White", "Black"],
    brand: "Adidas",
    price: 1875,
    category: "Female",
    type: "Slides",
    rating: 4.5,
    inStock: true,
    description:
      "Sleek and stylish slide with a soft, quick-drying bandage upper and cushioned footbed.",
  },
  {
    id: 22,
    name: "Adidas Duramo Slide",
    image:
      "https://m.media-amazon.com/images/I/61MPTeetpDL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Navy", "Black", "White"],
    brand: "Adidas",
    price: 1500,
    category: "Male",
    type: "Slides",
    rating: 4.6,
    inStock: true,
    description:
      "Lightweight, durable slide with a contoured footbed and textured surface for comfort and grip.",
  },
  {
    id: 23,
    name: "Adidas Adilette Kids",
    image:
      "https://m.media-amazon.com/images/I/81iFPRvs-mL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Blue", "Pink", "Black"],
    brand: "Adidas",
    price: 1500,
    category: "Kids",
    type: "Slides",
    rating: 4.2,
    inStock: true,
    description:
      "Classic three-stripe slide sized down for kids, featuring a comfortable footbed and durable construction.",
  },

  // Puma Flip Flops
  {
    id: 24,
    name: "Puma Epic Flip v2",
    image:
      "https://m.media-amazon.com/images/I/51BX+E91exL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["Black", "White", "Blue"],
    brand: "Puma",
    price: 1500,
    category: "Male",
    type: "Slides",
    rating: 4.3,
    inStock: true,
    description:
      "Lightweight and durable flip flop with a soft foam footbed and grippy outsole.",
  },
  {
    id: 25,
    name: "Puma Cozy Flip",
    image:
      "https://m.media-amazon.com/images/I/51YBeRGjAQL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9],
    colors: ["Black", "White", "Pink"],
    brand: "Puma",
    price: 1875,
    category: "Female",
    type: "Slides",
    rating: 4.2,
    inStock: true,
    description:
      "Comfortable flip flop with a plush, cushioned footbed and slim straps for a feminine look.",
  },
  {
    id: 26,
    name: "Puma Divecat v2",
    image:
      "https://m.media-amazon.com/images/I/41VyVyC-8bL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "White", "Red"],
    brand: "Puma",
    price: 1650,
    category: "Male",
    type: "Slides",
    rating: 4.4,
    inStock: true,
    description:
      "Sporty slide with a wide strap featuring the PUMA cat logo and a comfortable, molded footbed.",
  },
  {
    id: 27,
    name: "Puma Popcat 20",
    image:
      "https://m.media-amazon.com/images/I/51nqf-tekAL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "White", "Pink"],
    brand: "Puma",
    price: 1350,
    category: "Female",
    type: "Slides",
    rating: 4.5,
    inStock: true,
    description:
      "Classic slide with a bold PUMA wordmark across the strap and a soft, comfortable footbed.",
  },
  {
    id: 28,
    name: "Puma Cool Cat",
    image:
      "https://m.media-amazon.com/images/I/41Hw3zHcyEL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Blue", "Black", "Grey"],
    brand: "Puma",
    price: 1500,
    category: "Male",
    type: "Slides",
    rating: 4.3,
    inStock: true,
    description:
      "Lightweight and flexible slide with a contoured footbed and textured outsole for grip.",
  },
  {
    id: 29,
    name: "Puma Purecat Junior",
    image:
      "https://m.media-amazon.com/images/I/41UlJC8M9xL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Black", "Blue", "Pink"],
    brand: "Puma",
    price: 1125,
    category: "Kids",
    type: "Slides",
    rating: 4.1,
    inStock: true,
    description:
      "Simple and comfortable slide for kids featuring the PUMA cat logo on a wide, easy-to-wear strap.",
  },

  // Nike Flip Flops
  {
    id: 30,
    name: "Nike Benassi JDI",
    image:
      "https://m.media-amazon.com/images/I/619uQ4R7oHL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Navy"],
    brand: "Nike",
    price: 1875,
    category: "Male",
    type: "Slides",
    rating: 4.7,
    inStock: true,
    description:
      "Iconic slide with a textured footbed for massage-like comfort and a bold Nike logo on the strap.",
  },
  {
    id: 31,
    name: "Nike Kawa",
    image:
      "https://m.media-amazon.com/images/I/71pBQFLUB1L._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "White", "Pink"],
    brand: "Nike",
    price: 1650,
    category: "Female",
    type: "Slides",
    rating: 4.5,
    inStock: true,
    description:
      "Comfortable slide with a soft foam footbed and flexible groove pattern for natural motion.",
  },
  {
    id: 32,
    name: "Nike Victori One",
    image:
      "https://m.media-amazon.com/images/I/51IKpP342YL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Navy"],
    brand: "Nike",
    price: 1875,
    category: "Male",
    type: "Slides",
    rating: 4.6,
    inStock: true,
    description:
      "Sleek slide with a dual-density foam footbed for cushioned comfort and a grippy outsole.",
  },
  {
    id: 33,
    name: "Nike Bella Kai",
    image:
      "https://m.media-amazon.com/images/I/51FGCi15lUL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9],
    colors: ["Black", "White", "Coral"],
    brand: "Nike",
    price: 2250,
    category: "Female",
    type: "Slides",
    rating: 4.4,
    inStock: true,
    description:
      "Thong-style sandal with a sleek profile, featuring a cushioned footbed and durable rubber outsole.",
  },
  {
    id: 34,
    name: "Nike Solay",
    image:
      "https://m.media-amazon.com/images/I/61q6jryAIML._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Blue"],
    brand: "Nike",
    price: 1500,
    category: "Male",
    type: "Slides",
    rating: 4.3,
    inStock: true,
    description:
      "Lightweight thong sandal with a soft midsole foam and flex grooves for natural movement.",
  },
  {
    id: 35,
    name: "Nike Kawa Kids",
    image:
      "https://m.media-amazon.com/images/I/51zi6Z1p0qL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Black", "Pink", "Blue"],
    brand: "Nike",
    price: 1350,
    category: "Kids",
    type: "Slides",
    rating: 4.2,
    inStock: true,
    description:
      "Kid-sized slide with a soft, flexible sole and adjustable strap for a secure fit.",
  },

  // Adidas Sandals
  {
    id: 36,
    name: "Adidas Terrex Cyprex Ultra II",
    image:
      "https://m.media-amazon.com/images/I/71ALQ-6RVfL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Grey", "Blue"],
    brand: "Adidas",
    price: 4875,
    category: "Male",
    type: "Sandals",
    rating: 4.6,
    inStock: true,
    description:
      "Versatile outdoor sandal with adjustable straps, quick-drying materials, and a rugged outsole for excellent traction.",
  },
  {
    id: 37,
    name: "Adidas Comfort Sandal",
    image:
      "https://m.media-amazon.com/images/I/71xhps7xYmL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "White", "Pink"],
    brand: "Adidas",
    price: 3000,
    category: "Female",
    type: "Sandals",
    rating: 4.5,
    inStock: true,
    description:
      "Lightweight sandal with adjustable straps and a cushioned footbed for all-day comfort.",
  },
  {
    id: 38,
    name: "Adidas Adilette Sandal",
    image:
      "https://m.media-amazon.com/images/I/81KoflBWHKL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "White", "Grey"],
    brand: "Adidas",
    price: 3750,
    category: "Male",
    type: "Sandals",
    rating: 4.4,
    inStock: true,
    description:
      "Sport-inspired sandal with the classic three-stripe design and a contoured footbed for comfort.",
  },
  {
    id: 39,
    name: "Adidas Terrex Sumra",
    image:
      "https://m.media-amazon.com/images/I/71WLKWqS-VL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "Pink", "Blue"],
    brand: "Adidas",
    price: 3375,
    category: "Female",
    type: "Sandals",
    rating: 4.3,
    inStock: true,
    description:
      "Lightweight hiking sandal with adjustable straps and a grippy outsole for outdoor adventures.",
  },
  {
    id: 40,
    name: "Adidas Adipure CF",
    image:
      "https://m.media-amazon.com/images/I/81G7Lk5KLoL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Brown", "Navy"],
    brand: "Adidas",
    price: 3000,
    category: "Male",
    type: "Sandals",
    rating: 4.5,
    inStock: true,
    description:
      "Minimalist sandal with a premium look, featuring a soft footbed and durable outsole.",
  },
  {
    id: 41,
    name: "Adidas Water Sandal",
    image:
      "https://m.media-amazon.com/images/I/71w-L974A4L._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Blue", "Pink", "Green"],
    brand: "Adidas",
    price: 2250,
    category: "Kids",
    type: "Sandals",
    rating: 4.2,
    inStock: true,
    description:
      "Playful and practical sandal for kids with adjustable straps and quick-drying materials.",
  },

  // Puma Sandals
  {
    id: 42,
    name: "Puma Softride Sandal",
    image:
      "https://m.media-amazon.com/images/I/41ACVASdSYL._AC_UL480_FMwebp_QL65_.jpgs",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Navy"],
    brand: "Puma",
    price: 3000,
    category: "Male",
    type: "Sandals",
    rating: 4.5,
    inStock: true,
    description:
      "Comfortable sport sandal featuring PUMA's Softride foam technology for enhanced cushioning and support.",
  },
  {
    id: 43,
    name: "Puma Leadcat YLM",
    image:
      "https://m.media-amazon.com/images/I/61cowatfQfS._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "White", "Pink"],
    brand: "Puma",
    price: 2250,
    category: "Female",
    type: "Sandals",
    rating: 4.4,
    inStock: true,
    description:
      "Sleek and stylish sandal with a wide strap and molded footbed for fashion-forward comfort.",
  },
  {
    id: 44,
    name: "Puma Wild Sandal",
    image:
      "https://m.media-amazon.com/images/I/710U6KQnAQL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Olive", "Brown"],
    brand: "Puma",
    price: 3375,
    category: "Male",
    type: "Sandals",
    rating: 4.3,
    inStock: true,
    description:
      "Rugged outdoor-inspired sandal with adjustable straps and durable construction for adventurous wear.",
  },
  {
    id: 45,
    name: "Puma Anzarun Sandal",
    image:
      "https://m.media-amazon.com/images/I/51KXlGpl37L._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "White", "Purple"],
    brand: "Puma",
    price: 2625,
    category: "Female",
    type: "Sandals",
    rating: 4.2,
    inStock: true,
    description:
      "Sporty sandal with a sleek silhouette, featuring adjustable straps and a cushioned footbed.",
  },
  {
    id: 46,
    name: "Puma Fusion Sandal",
    image:
      "https://m.media-amazon.com/images/I/51SFnuPcDxL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Red"],
    brand: "Puma",
    price: 3000,
    category: "Male",
    type: "Sandals",
    rating: 4.4,
    inStock: true,
    description:
      "Versatile sandal with a mix of sporty and casual elements, perfect for everyday wear.",
  },
  {
    id: 47,
    name: "Puma Divecat v2 Kids",
    image:
      "https://m.media-amazon.com/images/I/81UFJyjcPGL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Black", "Blue", "Pink"],
    brand: "Puma",
    price: 1500,
    category: "Kids",
    type: "Sandals",
    rating: 4.1,
    inStock: true,
    description:
      "Kid-sized version of the popular Divecat sandal, featuring a comfortable footbed and easy-to-wear design.",
  },

  // Nike Sandals
  {
    id: 48,
    name: "Nike Canyon Sandal",
    image:
      "https://m.media-amazon.com/images/I/71xhps7xYmL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Khaki", "Grey"],
    brand: "Nike",
    price: 4500,
    category: "Male",
    type: "Sandals",
    rating: 4.6,
    inStock: true,
    description:
      "Rugged outdoor-inspired sandal with adjustable straps and Nike's React foam for responsive cushioning.",
  },
  {
    id: 49,
    name: "Nike Bella Kai Thong",
    image:
      "https://m.media-amazon.com/images/I/61Y8qVPJgtL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "White", "Rose Gold"],
    brand: "Nike",
    price: 2625,
    category: "Female",
    type: "Sandals",
    rating: 4.4,
    inStock: true,
    description:
      "Elegant thong sandal with a slim profile and comfortable foam midsole, perfect for casual outings.",
  },
  {
    id: 50,
    name: "Nike Sunray Protect 2",
    image:
      "https://m.media-amazon.com/images/I/71DXltcQ3iL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [1, 2, 3, 4],
    colors: ["Black", "Blue", "Pink"],
    brand: "Nike",
    price: 2250,
    category: "Kids",
    type: "Sandals",
    rating: 4.5,
    inStock: true,
    description:
      "Durable and protective kids' sandal with adjustable straps and quick-drying materials for active summer play.",
  },
  {
    id: 51,
    name: "Nike Owaysis",
    image:
      "https://m.media-amazon.com/images/I/81l41MpiktL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "White", "Tan"],
    brand: "Nike",
    price: 3750,
    category: "Female",
    type: "Sandals",
    rating: 4.7,
    inStock: true,
    description:
      "Stylish and comfortable sandal with a dual-density foam midsole and adjustable strap for a custom fit.",
  },
  {
    id: 52,
    name: "Nike Tanjun Sandal",
    image:
      "https://m.media-amazon.com/images/I/71l67SoiBkL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Navy"],
    brand: "Nike",
    price: 3000,
    category: "Male",
    type: "Sandals",
    rating: 4.3,
    inStock: true,
    description:
      "Minimalist sandal inspired by the popular Tanjun sneaker, featuring a comfortable foam midsole and sleek design.",
  },
  {
    id: 53,
    name: "Nike Sunray Adjust 5",
    image:
      "https://m.media-amazon.com/images/I/61E3Q0mzEbL._AC_UL480_FMwebp_QL65_.jpg",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Grey", "Blue"],
    brand: "Nike",
    price: 3375,
    category: "Male",
    type: "Sandals",
    rating: 4.5,
    inStock: true,
    description:
      "Versatile sandal with multiple adjustable straps for a custom fit, perfect for both land and water activities.",
  },
];

localStorage.setItem("data", JSON.stringify(data));
