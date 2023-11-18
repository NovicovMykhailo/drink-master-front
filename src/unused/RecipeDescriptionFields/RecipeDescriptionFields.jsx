// import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css'
import { useState, useEffect } from "react"
import Select from 'react-select';
import {fetchCategory , fetchGlasses} from '../../fetchAPI/fetchAPI'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import React from 'react';
import styled from 'styled-components';
// import LoadingCircle from 'components/Spinner/LoadingCircle';


const StyledSelect = styled(Select)`
  .react-select__slider {
    background-color: #007bff; 
    height: 10px; 
  }

  
  .react-select__control {
    border: 2px solid #007bff; 
    border-radius: 10px; 
  }

   border: "none",
                  
    paddingLeft: "24px",
    backgroundColor: "rgba(22, 31, 55, 0)"
`;

export const RecipeDescriptionFields = ({ drinkThumb, cocktailImg, itemTitle, category, glass}) => {
  const [allCategory, setCategory] = useState([{ value: ``, label: ``, descr: `category` }]);
  const [allGlasses, setGlasses] = useState([]);

  const [addImage, setAddImage] = useState(false);

  // const [сategoryInput, setCategoryInput] = useState('');

  useEffect(() => {
		fetchCategory()
      .then(res => {
         const result = res.map(r => {
                        return ({ value: `${r.name}`, label: `${r.name}`, descr: `category` })
                  });
        setCategory([ ...result]);
      })
      .catch(err => console.log(err))
  
  }, []);

  useEffect(() => {
		fetchGlasses()
      .then(res => {
        const result = res.map(r => {
                        return ({ value: `${r.name}`, label: `${r.name}`, descr: `glasses` })
                  });
        setGlasses(result );
      })
      .catch(err => console.log(err))
  
  }, []);

  useEffect(() => {
		console.log(drinkThumb)
    if (drinkThumb === "") {
      setAddImage(false)
      return
    } else {
      setAddImage(true)
    }
  
  }, [drinkThumb]);

  const handleChangeSelect = (e) => {
   
     switch (e.descr) {
       case "category":
          category(e.value)
         break;
       
       case "glasses":
          glass(e.value)
         break;
       
       default:
      break;
     }
   }
  
      const handleChange = (e) => {
        const { name, value } = e.currentTarget;
          // console.log(name)
     switch (name) {
       case "cocktailImg":
          cocktailImg(value)
      break;
       
       case "itemTitle":
           itemTitle(value)
         break;
       
      default:
      break;
     }
     
  }
    return (
        <div className={s.recipeDescriptionSection}>
        <label className={s.recipeDescription_labelImg}>

          {addImage ?
            <div className={s.recipeDescription_showImgContainerActive} > <img className={s.recipeDescription_showImg} src={drinkThumb} alt="Cocktail_Photo" /></div>
            :<div><BsFillPlusSquareFill className={s.recipeDescription_addImgIcon} /> <p className={s.recipeDescription_addImgDescr}>Add image</p> </div>
          }
                <input type="file" className={s.recipeDescription_inputImg} id="cocktailImg" name="cocktailImg"  accept=".jpg, .jpeg, .png" multiple  onChange={cocktailImg}/>
            </label>
            

        <div className={s.recipeDescriptionFields}>
          
                 <label className={s.recipeDescriptionFields_label}>
                    <input placeholder="" className={s.recipeDescriptionFields_input} type="text"  name="itemTitle"  required  onChange={handleChange}/>
                    <div className={s.recipeDescriptionFields_labelContent}>Enter item title</div>
                </label>
          
                <label className={s.recipeDescriptionFields_label}>
                   <input placeholder="" className={s.recipeDescriptionFields_input} type="text"  name="about"  onChange={handleChange}/>
                   <div className={s.recipeDescriptionFields_labelContent}>Enter about recipe</div>
               </label> 
       
          {/* <label className={s.recipeDescriptionFields_labelSelect} >
              <input disabled placeholder="" className={s.recipeDescriptionFields_input} type="text"  name="about"  onChange={handleChange}/>
              <div className={s.recipeDescriptionFields_labelContent}>Category</div>

          <select name="select" className={s.recipeDescriptionFields_select} aria-invalid="false">
            {allCategory.map(category => {
              return <option selectstart='' placeholder='' value="value1" className={s.recipeDescriptionFields_option}>{category.value}</option>
            })}
    
            </select>
          </label> */}

           <StyledSelect options={allCategory}/>
  
                      
          <label className={s.recipeDescriptionFields_label}>
            Category          
              <Select
              className={s.recipeDescriptionFields_input}
        classNamePrefix="select"
        isSearchable={true}
      name="category"
      onChange={handleChangeSelect}
      required
              options={allCategory}
              styles={{
                control: (baseStyles, state) => ({
                   ...baseStyles,
                  border: "none",
                  
                   paddingLeft: "24px",
                   backgroundColor: "rgba(22, 31, 55, 0)"
                }),
                option: (base) => ({
                ...base,
              
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
              }}
            /> 
           
          </label> 

          <label >
                  Glass            
             <Select  className={s.recipeDescriptionFields_input}
              classNamePrefix="select"
              isSearchable={true}
              name="glass"
              onChange={handleChangeSelect}
              options={allGlasses}
              required
              styles={{
              control: (baseStyles, state) => ({
      ...baseStyles,
                  border: "none",
                   paddingLeft: "24px",
                   backgroundColor: "rgba(22, 31, 55, 0)"}),
              option: (base) => ({
                ...base,
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
    }}
            />
          </label>
        </div>

          </div>
        )
}



// Создайте стилизованный компонент
// Опции для React Select