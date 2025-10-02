import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const api = {
  // Obtener comidas por categoría
  //https://www.themealdb.com/api/json/v1/1/categories.php
  getMealsByCategory: () => 
    axios.get(`${API_BASE_URL}/categories.php`),
  //https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
  //https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken
  getMealsByCategoryName: (category: string) => 
    axios.get(`${API_BASE_URL}/filter.php?c=${category}`),
  
  // Obtener todas las comidas
  getAllMeals: () => 
    axios.get(`${API_BASE_URL}/search.php?s=`),
  
  // Obtener detalles de una comida por ID
  getMealById: (id: string) => 
    axios.get(`${API_BASE_URL}/lookup.php?i=${id}`,{timeout: 3000,}),
  
  // Obtener comidas por ingrediente
  getMealsByIngredient: (ingredient: string) => 
    axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`),
};