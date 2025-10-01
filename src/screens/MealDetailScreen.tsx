import React, { useState, useEffect } from 'react';
import { 
  Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { api } from '../services/api';
import { styles } from '../styles';
import { Meal, Ingredient } from '../types';

const MealDetailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as { mealId: string };
  
  const [meal, setMeal] = useState<Meal | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    loadMealDetails();
  }, [mealId]);

  const loadMealDetails = async () => {
    try {
      // console.log('Loading details for meal ID:', mealId);
      const response = await api.getMealById(mealId);
      const mealData = response.data.meals[0];
    
      setMeal(mealData);
      processIngredients(mealData);
    } catch (error) {
      console.error('Error loading meal details:', error);
    }
  };

  const processIngredients = (mealData: Meal) => {
    const ingredientsList: Ingredient[] = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}` as keyof Meal] as string;
      const measure = mealData[`strMeasure${i}` as keyof Meal] as string;
      
      if (ingredient && ingredient.trim() !== '') {
        const formattedIngredient = ingredient.replace(/\s+/g, '_');
        const imageUrl = `https://www.themealdb.com/images/ingredients/${formattedIngredient}-Small.png`;
        
        ingredientsList.push({ 
          name: ingredient, 
          measure: measure || '', 
          image: imageUrl 
        });
      }
    }
    
    setIngredients(ingredientsList);
  };

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Atras</Text>
        </TouchableOpacity>
        <Text style={styles.detailTitle}>{meal.strMeal}</Text>
      </View>

      <ScrollView>
        <Image source={{ uri: meal.strMealThumb }} style={styles.detailImage} />
        
        <Text style={styles.sectionTitle}>INGREDIENTES:</Text>
        <View style={styles.ingredientsContainer}>
          {ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientRow}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.ingredientImage}
                onError={() => console.log('Error loading image:', item.image)}
              />
              <Text style={styles.ingredientText}>
                {item.measure} {item.name}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>OTRAS RECETAS</Text>
        <View style={styles.otherRecipes}>
          <Text style={styles.recipeLink}>BESH BARMAK</Text>
          <Text style={styles.recipeLink}>PANQUEQUES</Text>
          <Text style={styles.recipeLink}>HAMBUGUESAS</Text>
          <Text style={styles.recipeLink}>FRESAS ROMAN</Text>
          <Text style={styles.recipeLink}>PASTEL DE FRESA</Text>
          <Text style={styles.recipeLink}>FUDGE</Text>
          <Text style={styles.recipeLink}>HINOJO</Text>
          <Text style={styles.recipeLink}>SOPA DE PESCADO</Text>
          <Text style={styles.recipeLink}>MIGAS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailScreen;