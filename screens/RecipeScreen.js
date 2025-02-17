import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text, FlatList, ScrollView } from 'react-native';
import { appStyles } from '../styles/appStyles';
import { recipeStyles } from '../styles/recipeStyles';
import List from '../components/List';

export default function RecipeScreen({ route }) {
  const { meal } = route.params;

  return (
    <SafeAreaView
      style={[appStyles.fullHeight, appStyles.mainContainer]}
      edges={['left', 'right', 'bottom']}>
      <Image source={{ uri: meal.imageUrl }} style={recipeStyles.recipeImage} />
      <ScrollView style={recipeStyles.recipeInstructions}>
        {/* RECIPE TITLE AND SUMMARY */}
        <View style={recipeStyles.recipeDetails}>
          <Text style={recipeStyles.recipeTitle}>{meal.title}</Text>
          <View style={recipeStyles.recipeSummary}>
            <Text style={recipeStyles.recipeSummaryText}>
              {meal.duration}
              <Text style={{ textTransform: 'lowercase' }}>min</Text>
            </Text>
            <Text style={recipeStyles.recipeSummaryText}>{meal.complexity}</Text>
            <Text style={recipeStyles.recipeSummaryText}>{meal.affordability}</Text>
          </View>
        </View>

        {/* RECIPE INGREDIENTS */}
        <List title="Ingredients" list={meal.ingredients} />

        {/* RECIPE STEPS */}
        <List title="Steps" list={meal.steps} numberList={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
