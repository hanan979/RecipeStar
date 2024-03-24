import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.scss';

const ListView = ({ recipes }) => {
  return (
      <div className="containerr">
        {recipes.map(recipe => (
          <div className="item" key={recipe.id}>
            <Link className="links" to={`/recipe/${recipe.id}`}>
              <img src={recipe.imageFile} alt={recipe.name} />  
            </Link>
            <Link className="linksL" to={`/recipe/${recipe.id}`}>
              {recipe.name}
            </Link>
          </div>
        ))}
      </div>
  );
};

export default ListView;
