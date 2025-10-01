
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
  interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
  }
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularMeals, setPopularMeals] = useState<Meal[]>([]);
// categories=[];
// <div>categories</div> none []
// setCategories([1,2,3]);
// useState
// <div>categories</div> [1,2,3]

  useEffect(() => {
    loadData();
  }, []); 
 
  const loadData = async () => {
    try {
      // Cargar categorías
      const categoryResponse = await api.getMealsByCategory();
      setCategories(categoryResponse.data.categories.slice(0,3));
      
      // Cargar comidas populares
      const popularResponse = await api.getAllMeals();
      setPopularMeals(popularResponse.data.meals.slice(0, 9));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('MealCategoty', { mealId: item.idCategory })}
    >
      <Image 
        source={{ uri: item.strCategoryThumb }} 
        style={styles.categoryImage} 
      />
      <Text style={styles.categoryText}>{item.strCategory}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
  
      <ScrollView>
        <Text style={styles.sectionTitleFirst}>CATEGORIAS</Text>

        <FlatList
          data={categories} 
          renderItem={renderCategoryItem}
          keyExtractor={item => item.idCategory} 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />


        <Text style={styles.sectionTitle}>LOS MAS POPULARES</Text>
        <View style={styles.popularGrid}>
          {popularMeals.map((item) => (
            <TouchableOpacity 
              key={item.idMeal} 
              style={styles.popularGridItem}
              onPress={() => navigation.navigate('MealDetail', { mealId: item.idMeal })}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.popularGridImage} />
              <Text style={styles.popularGridText}>{item.strMeal}</Text>
            </TouchableOpacity>
          ))}
          
        </View>
        {/* {category.map((cat) => (
          <CategoryCard
            key={cat.idCategory}
            image={cat.strCategoryThumb}
            text={cat.strCategory}
          />
        ))} */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;