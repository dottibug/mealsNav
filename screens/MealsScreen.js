import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MEALS, CATEGORIES } from '../data/sampleData';
import { appStyles } from '../styles/appStyles';
import MealGridItem from '../components/MealGridItem';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function MealsScreen({ route }) {
  const navigation = useNavigation();

  const { categoryId } = route.params;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderItem = ({ item }) => (
    <MealGridItem item={item} onPress={() => handleMealPress(item)} />
  );

  function handleMealPress(item) {
    navigation.navigate('RecipeScreen', {
      meal: item,
    });
  }

  return (
    <SafeAreaView style={[appStyles.fullHeight, appStyles.mainContainer]}>
      <FlatList data={meals} renderItem={renderItem} />
    </SafeAreaView>
  );
}
