import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const recipeStyles = StyleSheet.create({
  recipeImage: {
    width: '100%',
    height: '40%',
  },
  recipeInstructions: {
    marginTop: 24,
  },
  recipeDetails: {
    gap: 12,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  recipeSummary: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'center',
  },
  recipeSummaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'medium',
    textTransform: 'uppercase',
  },
  section: {
    marginTop: 24,
    marginHorizontal: 32,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.melon,
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  listWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: colors.melon,
    borderRadius: 4,
    marginBottom: 8,
  },
  listText: {
    fontSize: 18,
  },
});
