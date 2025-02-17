import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../data/sampleData';
import CategoryGridTile from '../components/CategoryGridTile';
import { categoryStyles } from '../styles/categoryStyles';
import { appStyles } from '../styles/appStyles';
import { useNavigation } from '@react-navigation/native';

export default function CategoriesScreen() {
  const navigation = useNavigation();

  const handleCategoryPress = (itemId) => {
    navigation.navigate('MealsScreen', {
      categoryId: itemId,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryGridTile item={item} onPress={() => handleCategoryPress(item.id)} />
  );

  return (
    <SafeAreaView style={appStyles.mainContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={categoryStyles.gridContainer}
        key={2}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
