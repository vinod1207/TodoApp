/**
 * Loader Components Styles.
 */

import {Dimensions, StyleSheet} from 'react-native';
import {COLOR_BLACK_OPACITY} from '../../utils/Colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height: height,
    width: width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLOR_BLACK_OPACITY,
    color: 'red',
  },
  indicator: {
    height: 40,
    width: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
