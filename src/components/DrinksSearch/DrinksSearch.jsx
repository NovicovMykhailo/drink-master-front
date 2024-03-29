import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import Select from 'react-select';
// components
import { Paginator } from 'components/Paginator/Paginator';
import { SearchSvg } from './additionalComponents';
import DrinkItemCard from './DrinkItemCard/DrinkItemCard';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';
// redux
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';
//helping functions
import { categoryOptions, ingredientOptions, filteredParams, getObjFromParams} from './helpers';
import { readFromLocalStore, writeToLoaclStore } from 'helpers/localStorageApi';
// hooks
import useDrinks from 'hooks/useDrinks';
import useWindowSize from 'hooks/useWindowSize';
// styles
import { selectStylesCoktails, selectStylesIngredients } from './selectStyles';
import css from './DrinksSearch.module.css';

export const DrinksSearch = () => {
  const dispatch = useDispatch();
  const isMounted = useRef(false);



  const { categoryList, ingredientList, isLoading, entities, totalPages, currentPage } = useDrinks();
  const [searchParams, setSearchParams] = useSearchParams();


  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [q, setQ] = useState('');

  const [cachedData, setCachedData] = useState({ isExists: false, data: null });

  const { state } = useLocation();
  const { width } = useWindowSize();

  //init and reset on leave page and handle prevParams if they existed
  useEffect(() => {

      if (state?.category) {
        setCachedData({ isExists: false, data: null });
        writeToLoaclStore('cache', { isExists: false, data: null });
        setCategory(state.category);
        searchParams.set('category', category);
        setSearchParams(searchParams);
        dispatch(fetchDrinks({ category, page: currentPage, q, ingredient }));
       
      } else {
        dispatch(fetchDrinks({ category, page: currentPage, q, ingredient }));
       
      }
    // }

    // делает запрос за категориями и ингридиентами
    if (categoryList.length === 0) dispatch(fetchCategories());
    if (ingredientList.length === 0) dispatch(fetchIngredients());

    // caching on leave page
    return () => {
      dispatch(changeDrinksPage(1));
      dispatch(fetchDrinks({ category, page: currentPage, q, ingredient }));
      writeToLoaclStore('cache', { isExists: true, data: entities });
     

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  useEffect(() => {
    if (readFromLocalStore('cache') && !cachedData?.isExists) {
      const { isExists, data } = readFromLocalStore('cache');
      setCachedData({ isExists, data });
     
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Change search form
  useEffect(() => {
    if (isMounted.current) {
      const prev = getObjFromParams(searchParams);
      const obj = {
        page: currentPage,
        ingredient,
        q,
        category,
      };
      setSearchParams(filteredParams({ ...prev, ...obj }));
      dispatch(fetchDrinks({ category, page: currentPage, q, ingredient }));
      writeToLoaclStore('cache', { isExists: false, data: null });
      setCachedData({ isExists: false, data: null });
     
    }
    isMounted.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category, q, ingredient, currentPage]);

  /// /// ///
  // hanglers Categories
  const handleCategoryChange = e => {
    dispatch(changeDrinksPage(1));
    setSearchParams({ category: e.value });
   
    setCategory(e.value);
  };
  // hanglers Ingredients
  const handleIngredientChange = e => {
    dispatch(changeDrinksPage(1));
    setSearchParams({ ingredient: e.value });
    setIngredient(e.value);

    setCategory(e.value);
   
  };
  // hanglers Query
  const handleQChange = e => {
    dispatch(changeDrinksPage(1));
    setQ(e.target.value);
    setSearchParams({ q: e.target.value });
    
  };

  return (
    <div>
      <form className={css.drinkRequestForm}>
        <label className={css.inputContainer}>
          <input
            value={q}
            id="inputSearch"
            onChange={e => handleQChange(e)}
            className={css.inputDrinks}
            disabled={isLoading}
            placeholder="Enter the text"
          />
          {width >= 768 && <SearchSvg className={css.searchSvg} />}
        </label>
        <Select
          value={category}
          disabled={isLoading}
          placeholder={category ? category : 'All categories'}
          options={categoryOptions(categoryList)}
          styles={selectStylesCoktails}
          onChange={e => handleCategoryChange(e)}
          maxMenuHeight={405}
        />
        <Select
          value={ingredient}
          disabled={isLoading}
          placeholder={ingredient ? ingredient : 'Ingredients'}
          options={ingredientOptions(ingredientList)}
          styles={selectStylesIngredients}
          onChange={e => handleIngredientChange(e)}
        />
      </form>

      {entities?.length > 0 && !isLoading &&  !cachedData?.isExists && (
        <ul className={css.drinkCardContainer}>
          {entities?.map(({ _id, drink, drinkThumb, ingredients }) => (
            <DrinkItemCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients} />
          ))}
        </ul>
      )}
      {entities?.length === 0 && !isLoading && (
        <div className={css.noDrinksContainer}>
          <NoRecipe title={'No results'} />
        </div>
      )}
      {cachedData?.isExists && (
        <ul className={css.drinkCardContainer}>
          {cachedData.data.map(({ _id, drink, drinkThumb, ingredients }) => (
            <DrinkItemCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients} />
          ))}
        </ul>
      )}

      {totalPages > 1 && !isLoading && <Paginator page={currentPage} totalPages={totalPages} onChangePage={changeDrinksPage} />}
    </div>
  );
};
