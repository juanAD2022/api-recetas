import React, { useState, useEffect } from 'react';
import { 
  Text, View, Image, FlatList, TouchableOpacity, SafeAreaView 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { api } from '../services/api';
import { styles } from '../styles';
import { Meal } from '../types';

const MealsByCategory: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryName } = route.params as { categoryName: string };

  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    loadMeals();
  }, [categoryName]);

  const loadMeals = async () => {
    try {
      const response = await api.getMealsByCategoryName(categoryName);
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error cargando comidas:', error);
    }
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity 
      style={styles.mealItem}
      onPress={() => navigation.navigate('MealDetail', { mealId: item.idMeal })}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
      <Text style={styles.mealText}>{item.strMeal}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>
        Recetas con {categoryName}
      </Text>

      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.idMeal}
        numColumns={2} // grilla de 2 columnas
        contentContainerStyle={styles.mealsList}
      />
    </SafeAreaView>
  );
};

export default MealsByCategory;
