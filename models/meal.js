class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients; // array of strings
    this.steps = steps; // array of strings
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree; // bool
    this.isVegan = isVegan; // bool
    this.isVegetarian = isVegetarian; // bool
    this.isLactoseFree = isLactoseFree; // bool
  }
}

export default Meal;
