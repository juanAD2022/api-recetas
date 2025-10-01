
import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../services/api';
import { styles } from '../styles';
import { Meal, RootStackParamList } from '../types';
import { CategoryCard } from '../components';

// Definir el tipo de navegación
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [categories, setCategories] = useState<Meal[]>([]);
  const [popularMeals, setPopularMeals] = useState<Meal[]>([]);

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

    const category: Category[] = [
      {
        idCategory: "1",
        strCategory: "Beef",
        strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      },
      {
        idCategory: "2",
        strCategory: "Chicken",
        strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
      },
      {
        idCategory: "3",
        strCategory: "Dessert",
        strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      },
    ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Cargar categorías
      const categoryResponse = await api.getMealsByCategory('Seafood');
      setCategories(categoryResponse.data.meals.slice(0, 3));
      
      // Cargar comidas populares
      const popularResponse = await api.getAllMeals();
      setPopularMeals(popularResponse.data.meals.slice(0, 9));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const renderCategoryItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity 
      style={styles.categoryItem}
      onPress={() => navigation.navigate('MealDetail', { mealId: item.idMeal })}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.strMeal}</Text>
    </TouchableOpacity>
  );



  return (
    <SafeAreaView style={styles.container}>
  
      <ScrollView>
        <Text style={styles.sectionTitleFirst}>CATEGORIAS</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.idMeal}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />

        <Text style={styles.sectionTitle}>LOS MAS POPULARES</Text>
        <View style={styles.popularGrid}>
          {/* {popularMeals.map((item) => (
            <TouchableOpacity 
              key={item.idMeal} 
              style={styles.popularGridItem}
              onPress={() => navigation.navigate('MealDetail', { mealId: item.idMeal })}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.popularGridImage} />
              <Text style={styles.popularGridText}>{item.strMeal}</Text>
            </TouchableOpacity>
          ))} */}
          
        {category.map((cat) => (
        <CategoryCard
          key={cat.idCategory}
          image={cat.strCategoryThumb}
          text={cat.strCategory}
        />
      ))}
          
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;