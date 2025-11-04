import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  demoMenus,
  demoNutritionTips,
  demoRecipes,
  demoShoppingList
} from '../../data/nutrition';

export const nutritionRouter = Router();

nutritionRouter.get('/menus/:phase', (req, res) => {
  const menus = demoMenus.filter((menu) => menu.phase === req.params.phase);
  return res.json({ items: menus });
});

nutritionRouter.get('/recipes/:id', (req, res) => {
  const recipe = demoRecipes.find((item) => item.id === req.params.id);

  if (!recipe) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      error: 'Recette introuvable.'
    });
  }

  return res.json(recipe);
});

nutritionRouter.get('/shopping-list/:phase', (req, res) => {
  if (demoShoppingList.phase !== req.params.phase) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      error: 'Aucune liste disponible pour cette phase.'
    });
  }

  return res.json(demoShoppingList);
});

nutritionRouter.get('/tips', (_req, res) => {
  return res.json({ items: demoNutritionTips });
});
