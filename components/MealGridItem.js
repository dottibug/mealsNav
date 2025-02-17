import { View, Image, Text, Pressable } from 'react-native';
import { cardStyles } from '../styles/cardStyles';

export default function MealGridItem({ item, onPress }) {
  const pressedStyles = (pressed) =>
    pressed
      ? [cardStyles.mealGridCard, cardStyles.mealGridCardPressed]
      : cardStyles.mealGridCard;

  return (
    <Pressable style={({ pressed }) => pressedStyles(pressed)} onPress={onPress}>
      <Image source={{ uri: item.imageUrl }} style={cardStyles.mealGridCardImage} />
      <View style={cardStyles.mealGridCardInfo}>
        <Text style={cardStyles.mealGridCardTitle}>{item.title}</Text>
        <View style={cardStyles.mealGridCardSummary}>
          <Text style={cardStyles.mealGridCardSummaryText}>
            {item.duration}
            <Text style={{ textTransform: 'lowercase' }}>min</Text>
          </Text>
          <Text style={cardStyles.mealGridCardSummaryText}>{item.complexity}</Text>
          <Text style={cardStyles.mealGridCardSummaryText}>{item.affordability}</Text>
        </View>
      </View>
    </Pressable>
  );
}
