import cssMainPage from '../../pages/MainPage/MainPage.module.css';
import css from './DrinksSearch.module.css';
import { Link } from 'react-router-dom';

export const SearchSvg = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="#F3F3F3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.5 17.5L13.875 13.875" stroke="#F3F3F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const DrinkCard = ({ drink, drinkThumb, id }) => (
  <li className={css.drinkCard}>
    <Link className={cssMainPage.card_link} to={`/recipe/${id}`}>
      <img src={drinkThumb} alt="drink" className={css.drinkImg} />
      <div className={cssMainPage.card_text_wrapper}>
        <p className={cssMainPage.card_name}>{drink}</p>

        <p className={cssMainPage.ingredients_text}>ingredients</p>
      </div>
    </Link>
  </li>
);
