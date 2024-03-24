import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.scss';

const DetailView = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div className='App'>Recipe not found</div>;
  }

  return (
    <div className='container'>
      <div className='content'>
        <div className='right-panel'>
          <h2>{recipe.name}</h2>
          <p>{typeof recipe.nutritionalInfo === 'number' ? recipe.nutritionalInfo : '..'} <span className="cals">CALS</span></p>
        </div>
        <div className='left-panel'>
          <img src={recipe.imageFile} alt={recipe.name} />
        </div>
      </div>
      <div className='instructions'>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DetailView;
