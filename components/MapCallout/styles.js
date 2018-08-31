import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // backgroundColor: colors.background,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    // borderColor: colors.primary,
    borderColor: 'blue',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  calloutContainer: {
    width: 140,
  },
  headerText: {
    // color: colors.defaultText,
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    fontSize: 12,
  },
});