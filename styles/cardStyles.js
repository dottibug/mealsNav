import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const cardStyles = StyleSheet.create({
  mealGridCard: {
    borderRadius: 8,
    width: 300,
    marginBottom: 24,
  },
  mealGridCardPressed: {
    opacity: 0.6,
  },
  mealGridCardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mealGridCardInfo: {
    backgroundColor: colors.white,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    gap: 8,
  },
  mealGridCardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  mealGridCardSummary: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  mealGridCardSummaryText: {
    textTransform: 'uppercase',
    fontWeight: 'medium',
    fontSize: 14,
  },
});
