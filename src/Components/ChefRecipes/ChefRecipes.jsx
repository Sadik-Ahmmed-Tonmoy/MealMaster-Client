import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardRecipe from '../CardRecipe/CardRecipe';
import Lottie from "lottie-react";
import cooking2 from "../../assets/94436-cooking-animation.json"

const ChefRecipes = () => {

  const chefDetails = useLoaderData()
  const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, bio, recipe_name, ingredients, cooking_method, rating, recipes } = chefDetails;
  
  console.log(recipes)



  const { id } = useParams();
  return (
    <div>
      <div className="chef-banner md:w-6/12 container mx-auto border p-2">
        <img className='md:h- bg-black mx-auto rounded-md' src={chefPicture} alt={chefName} />
        <div className="chef-info mx-auto ">
          <h2 className='font-bold text-2xl'>{chefName}</h2>
          <p>{yearsOfExperience} years of experience</p>
          <p>{numberOfRecipes} recipes</p>
          <br />
          <p><span className='font-bold'>Description:</span> {bio}</p>
          <br />
          <p>{likes} likes</p>
        </div>
      </div>
      <div className='grid md:grid-cols-3 container mx-auto'>
      {
        recipes.map(recipe => <CardRecipe key={recipe.recipe_id} recipe={recipe}></CardRecipe>)
      }
      </div>
      <div className='static h-56 md:w-6/12 pb-40 border rounded mx-auto'>
         
         <Lottie className='h-72 pb-16 md:pb-12 ' animationData={cooking2} loop={true} />
         
     </div>
    </div>
  );
};

export default ChefRecipes;