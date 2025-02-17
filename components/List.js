import { View, Text } from 'react-native';
import { recipeStyles } from '../styles/recipeStyles';

export default function List({ title, list, numberList = false }) {
  return (
    <View style={recipeStyles.section}>
      <Text style={recipeStyles.sectionTitle}>{title}</Text>
      {list.map((item, i) => {
        return (
          <View key={item} style={recipeStyles.listWrapper}>
            <Text style={recipeStyles.listText}>
              {numberList ? `${i + 1}. ${item}` : item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
