import { View, Text, Pressable } from 'react-native';
import { categoryStyles } from '../styles/categoryStyles';
import { textStyles } from '../styles/textStyles';

const gridTileStyles = (color) => [categoryStyles.gridTile, { backgroundColor: color }];

const gridTilePressedStyles = (color) => [
  categoryStyles.gridTile,
  { backgroundColor: color },
  categoryStyles.gridTilePressed,
];

export default function CategoryGridTile({ item, onPress }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? gridTilePressedStyles(item.color) : gridTileStyles(item.color)
        }
        onPress={onPress}>
        <Text style={[textStyles.primaryText, textStyles.h2]}>{item.title}</Text>
      </Pressable>
    </View>
  );
}
