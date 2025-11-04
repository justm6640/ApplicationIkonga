import { Phase } from '../types/common';

export interface MenuItem {
  id: string;
  phase: Phase;
  day: number;
  mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  title: string;
  calories: number;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

export const demoMenus: MenuItem[] = [
  {
    id: 'menu-1',
    phase: 'detox',
    day: 1,
    mealType: 'breakfast',
    title: 'Smoothie vert énergisant',
    calories: 320
  },
  {
    id: 'menu-2',
    phase: 'detox',
    day: 1,
    mealType: 'lunch',
    title: 'Buddha bowl protéiné',
    calories: 540
  }
];

export const demoRecipes: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Smoothie vert énergisant',
    ingredients: [
      '1 poignée d\'épinards',
      '1 pomme verte',
      '1 kiwi',
      '250ml d\'eau de coco'
    ],
    steps: ['Mixer tous les ingrédients', 'Servir frais'],
    macros: {
      protein: 8,
      carbs: 55,
      fats: 6
    }
  }
];

export const demoShoppingList = {
  week: 1,
  phase: 'detox' as Phase,
  items: [
    { name: 'Épinards', quantity: '3 poignées' },
    { name: 'Pommes vertes', quantity: '6 pièces' },
    { name: 'Graines de chia', quantity: '200g' }
  ]
};

export const demoNutritionTips = [
  {
    id: 'tip-1',
    title: 'Préparez vos menus le dimanche',
    content: 'Anticipez votre semaine en batch-cookant vos repas.'
  }
];
