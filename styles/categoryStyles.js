import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const categoryStyles = StyleSheet.create({
  gridContainer: {
    gap: 18,
    paddingTop: 0,
    paddingBottom: 24,
  },
  gridTile: {
    alignItems: 'center',
    backgroundColor: colors.powderBlue,
    borderRadius: 4,
    height: 120,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
    width: 150,
  },
  gridTilePressed: {
    opacity: 0.5,
  },
});
