import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';
import RecipeScreen from './screens/RecipeScreen';
import { colors } from './styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontWeight: 'bold',
                color: colors.indigo,
                fontSize: 20,
              },
            }}>
            <Stack.Screen
              name="CategoriesScreen"
              component={CategoriesScreen}
              options={{
                title: 'Categories',
              }}
            />
            <Stack.Screen
              name="MealsScreen"
              component={MealsScreen}
              options={{ title: 'Meals' }}
            />
            <Stack.Screen
              name="RecipeScreen"
              component={RecipeScreen}
              options={({ route }) => ({ title: route.params.meal.title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
