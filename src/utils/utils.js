import defaultIngrImgM from '../assets/defaultIngredientImageM.png';

export const formatIngredientImg = poster => poster ? poster : defaultIngrImgM;


export const filteredQuery =(obj)=>{
    const filtered = Object.entries(obj).filter(([key, value])=> value !== null)
    const doubleFiltered = filtered.filter(([key, value])=> value !== "null")
    return Object.fromEntries(doubleFiltered)
}