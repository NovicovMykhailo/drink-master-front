import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';
import useAuth from 'hooks/useAuth';
import { nanoid } from '@reduxjs/toolkit';

import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipePageHero/RecipeIngredientsList/RecipeIngredientsList';
import RecipeIngredientsItem from 'components/RecipePageHero/RecipeIngredientsItem/RecipeIngredientsItem';
import RecipePreparation from 'components/RecipePageHero/RecipePreparation/RecipePreparation';
import { getFavPage } from 'redux/FavoriteCocktails/FavoritesSelectors';
import { fetchFavorites } from 'redux/FavoriteCocktails/FavoritesOperation';

import css from './RecipePage.module.css'

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { ReduxToken } = useAuth();
  const { recipeId } = useParams();
  const page = useSelector(getFavPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const getRecipe = async (token, recipeId) => {
      try {
        setAuthHeader(token);
        const { data } = await axios.get(`/api/recipes/${recipeId}`);
        return data;
      } catch (e) {
        throw new Error(e.message);
      }
    };

    getRecipe(ReduxToken, recipeId)
      .then(res => {
        setRecipe(res);
      })
      .catch(e => console.log(e));
  }, [ReduxToken, recipeId]);

  useEffect(() => {
    dispatch(fetchFavorites(page));
  }, [dispatch, page]);

  return (
    <>
      {recipe && (
        <div className={css.container}>
          <RecipePageHero data={recipe} />
          <RecipeIngredientsList data={recipe}>
            {recipe.ingredients.map(item => (
              <RecipeIngredientsItem data={item} key={nanoid()} />
            ))}
          </RecipeIngredientsList>
          <RecipePreparation data={recipe} />
        </div>
      )}
    </>
  );
};

export default RecipePage;
