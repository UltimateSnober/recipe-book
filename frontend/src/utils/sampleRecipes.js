const sampleRecipes = [
  {
    id: 1,
    name: 'كبسة الدجاج',
    category: 'أطباق رئيسية',
    cookTime: 45,
    servings: 6,
    difficulty: 'متوسط',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    ingredients: ['دجاج كامل', 'أرز بسمتي', 'بصل', 'طماطم', 'بهارات الكبسة', 'ملح', 'زيت'],
    instructions: ['نظف الدجاج واتركه جانباً', 'اقلي البصل حتى يذبل', 'أضف الطماطم والبهارات', 'أضف الدجاج واتركه ينضج', 'أضف الأرز والماء واتركه ينضج'],
    isFavorite: false
  },
  {
    id: 2,
    name: 'حمص بالطحينة',
    category: 'مقبلات',
    cookTime: 20,
    servings: 4,
    difficulty: 'سهل',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1571197119282-7c4a2b4aa3ce?w=400&h=300&fit=crop',
    ingredients: ['حمص مسلوق', 'طحينة', 'ليمون', 'ثوم', 'ملح', 'زيت زيتون'],
    instructions: ['اخلط الحمص في الخلاط', 'أضف الطحينة والليمون', 'أضف الثوم والملح', 'اخلط حتى يصبح ناعماً', 'قدمه مع زيت الزيتون'],
    isFavorite: true
  },
  {
    id: 3,
    name: 'كنافة بالجبن',
    category: 'حلويات',
    cookTime: 60,
    servings: 8,
    difficulty: 'صعب',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    ingredients: ['كنافة', 'جبن موتزاريلا', 'سكر', 'ماء ورد', 'فستق حلبي', 'سمن'],
    instructions: ['حضر الشيرة', 'افرد الكنافة واضعها في الصينية', 'أضف الجبن', 'اخبزها في الفرن', 'اسكب الشيرة وزين بالفستق'],
    isFavorite: false
  }
];

export default sampleRecipes;