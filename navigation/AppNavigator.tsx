import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import MealDetailScreen from '../src/screens/MealDetailScreen';
import MealCategory from '../src/screens/MealCategory';
import { RootStackParamList } from '../src/types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{ 
        headerShown: false,
        cardStyle: { backgroundColor: '#fff9e6' }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      <Stack.Screen name="MealCategoty" component={MealCategory} />

    </Stack.Navigator>
  );
};