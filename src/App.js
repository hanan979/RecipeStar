import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ListView from './ListView';
import DetailView from './DetailView';
import AddRecipeForm from './AddRecipeForm';

import Mushroom_Soup from './Mushroom_Soup.jpg';
import spaghetti from './Spaghetti.jpg';
import coffee from './coffee.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [recipes, setRecipes] = React.useState([
    { id: 1, 
      name: 'Mushroom Soup', 
      imageFile: Mushroom_Soup, 
      ingredients: ['8 cups water', '2 cups chicken broth', '4 medium potatoes (peeled, diced and rinsed)','2 lb. mushrooms (sliced)', '2 cups half & half (or 1 cup milk + 1 cup heavy cream)', 
      '4 Tbsp. flour (add 5 Tbsp if you like a creamier soup)', '1 medium onion (finely diced)', '3 Tbsp. butter', '2 Tbsp. seasoning ', 'salt', 'black pepper', 
      '1/3 cup chopped parsley ' ], 
      instructions: ['Add potatoes to a pot with 8 cups water and 2 cups stock. Bring potatoes to a light boil and continue to cook for about 10 minutes or until potatoes are almost cooked. Meanwhile saute sliced mushrooms over medium high heat until they are lightly browned and softened. Add mushrooms to the soup pot and continue cooking 5-8 min.', 'Meanwhile, heat the same skillet over medium/high heat. Add 3 Tbsp butter along with diced onion and grated carrot, and saute until golden (8-10 min) then add to the soup pot. For picky eaters who don’t like the onion texture, you can puree the sautéed carrots and onion in a blender or food processor. ', 'Whisk together 2 cups half and half and 4 Tbsp flour until smooth. Add cream mixture to the soup. Add seasonings to taste (If not using mushroom seasoning, we recommend the following seasoning combination: 1 Tbsp salt, 1/2 tsp pepper, and 1/2 Tbsp Mrs. Dash). Stir in 1/3 cup chopped Parsley or Dill or a mix of both. Bring to a boil for a few minutes, check potatoes for doneness and remove from heat.'],
      nutritionalInfo: 240
    },
    { id: 2, 
      name: 'Easy Baked Spaghetti', 
      imageFile: spaghetti, 
      ingredients: ['nonstick cooking spray (for baking dish and meat sauce)', '1 lb. spaghetti', 
      'salt (for pasta water)', '1 lb. 85% lean ground beef', 
      '1/2 tsp. salt (for meat sauce)', '1/4 tsp. black pepper (for meat sauce)', 
      '1 tsp. garlic powder (for meat sauce)', '1 1/2 tsp. Italian seasoning (for meat sauce)',
      '4 cups marinara sauce (4 cups is about 36 oz.)', '15 oz. low-moisture ricotta cheese', 
      '1/2 cup grated Parmesan cheese (1/2 cup is about 2 oz.)', '3/4 tsp. salt (for ricotta mixture)', 
      '1/2 tsp. black pepper (for ricotta mixture)', '1/2 tsp. garlic powder (for ricotta mixture)',
      '1 tsp. Italian seasoning (for ricotta mixture)', '1 cup shredded mozzarella cheese (for ricotta mixture, 1 cup is about 4 oz.)', '2 cups shredded mozzarella cheese (for top of dish, 2 cups is about 8 oz.)', 'fresh basil leaves (optional, for serving)'], 
      instructions: ['Preheat the oven to 375°F.', 'Spray a 9x13-inch baking dish with nonstick cooking spray. Set aside.', 'Bring a large pot of water to a boil. Add a generous pinch of salt. Once boiling, add the spaghetti to the water. Cook, stirring occasionally, until the pasta is al dente, 9-10 minutes. Drain the pasta in a large colander, and rinse thoroughly with cold water. While the pasta cooks, prepare the meat sauce.' ,'Spray an extra-large skillet generously with nonstick cooking spray, then set over medium-high heat. Add the ground beef, salt, black pepper, garlic powder, and Italian seasoning to the skillet. Cook the beef, breaking it up with a spatula, until thoroughly browned, 5-6 minutes..','Drain the fat from the skillet. Return the skillet to the stove, and reduce heat to medium-low. Pour the marinara sauce over the meat and stir to combine. Cover and simmer for 2-3 minutes. While the sauce simmers, prepare the cheese mixture.', 'Place the ricotta, Parmesan, salt, black pepper, garlic powder, and Italian seasoning, the mozzarella cheese in a large mixing bowl. Stir with a rubber spatula to thoroughly combine.' ,'Return the drained spaghetti to the pot. Add the meat sauce and stir to thoroughly coat the noodles..','Transfer half of the sauced pasta to the prepared baking dish. Drop the ricotta mixture by spoonfuls over the spaghetti, and gently spread it into an even layer. Sprinkle half the mozzarella over the top. Cover with the remaining noodles. Sprinkle the remaining mozzarella cheese in an even layer over the top of the dish.', 'Cover the baking dish with a sheet of aluminum foil.' ,'Bake the spaghetti on middle rack of oven for 40 minutes..','Remove the aluminum foil and continue baking until cheese on top is golden brown, about 15 minutes.', 'Check to see that spaghetti is done. Remove from oven or add time as needed.' ,'Allow the spaghetti to rest for 20 minutes before serving. Scatter fresh basil leaves on top if you like..'],
      nutritionalInfo: 520
    },
    { 
      id: 3, 
      name: 'V60 drip coffee',
      imageFile: coffee,
      ingredients: ['Coffee beans', 'Hot water'],
      instructions: ['Grind 18 grams of coffee beans to a 16 size', 'Bring a kettle of water to 205F (96C).', 'Prepare your brew-stack', 'Pour a little bonus water through your brew-stack. You’re doing this to wet the filter, and wash away any paper-y taste it has.', 'Throw out your water, and add the ground coffee to the filter.','Zero-out (tare) the scale, and bloom your coffee. ', 'Now, pour the rest of your water volume. '],
      nutritionalInfo: 3
    }
  ]);

  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectedRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="App-link">
            <h1 className='App-title'>Recipes Star</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul className="add-recipe">
              <li> 
                <Link to="/add-recipe" className="links"> <FontAwesomeIcon icon={faUpload} />  Add Recipe</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/RecipeStar" element={<ListView recipes={recipes} />} />
        <Route path="/recipe/:id" element={<DetailView recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
