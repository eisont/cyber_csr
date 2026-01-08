type RecipeItem = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: Number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipesType = {
  recipes: RecipeItem[];
  total: number;
  skip: number;
  limit: number;
};
