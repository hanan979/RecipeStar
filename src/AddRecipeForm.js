import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './AddRecipeForm.scss';

const AddRecipeForm = ({ onAddRecipe }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [nutritionalInfo, setNutritionalInfo] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        // Split the ingredients string into an array
        const ingredientsArray = ingredients.split('\n').map(item => item.trim());
        const instructionsArray = ingredients.split('\n').map(item => item.trim());

        // Create a new FormData object to handle file uploads
        const formData = new FormData();
        formData.append('name', name);
        formData.append('ingredients', JSON.stringify(ingredientsArray)); // Convert array to string
        formData.append('instructions', JSON.stringify(instructionsArray));
        formData.append('nutritionalInfo', nutritionalInfo);
        formData.append('image', imageFile); // Append the image file

        // Create a new recipe object
        const newRecipe = {
            id: Date.now(),
            name,
            ingredients: ingredientsArray,
            instructions: instructionsArray,
            nutritionalInfo,
            imageFile,
        };

        // Pass the new recipe to the parent component's callback function
        onAddRecipe(newRecipe);

        // Clear the form fields after submission
        setName('');
        setIngredients('');
        setInstructions('');
        setNutritionalInfo('');
        setImageFile(null);
        setImagePreview('');
        // go back to main after submission 
        navigate("/");
        }


        const handleImageChange = (e) => {
            const file = e.target.files[0];            if (file instanceof Blob) {
                // Read the image file as a data URL
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreview(reader.result); // Set image preview to the data URL
                };
                reader.readAsDataURL(file);
                setImageFile(file);
            } else {
                console.error("File is not an object.");
            }
        };
    
    return (
        <div className="addR">
            <h2>New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                <label>Calories:</label>
                <input type="number" min="0" value={nutritionalInfo} onChange={(e) => setNutritionalInfo(parseInt(e.target.value))}></input>
                <label>Photo</label>
                <input type="file" onChange={handleImageChange} required />
                {/* {imagePreview && <img src={imagePreview} alt="Preview" className="prev" />} */}
                <button type="submit">Add Recipe</button> 
            </form>
        </div>
    );
};
export default AddRecipeForm;
