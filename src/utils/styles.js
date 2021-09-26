/** LOGIN PAGE STYLE */

import {Dimensions, StyleSheet} from 'react-native';
import {poppinsRegular} from '../components/OVText';
import {COLOR_BACKGROUND, WHITE} from './Colors';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },

  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    margin: 10,
  },

  loginBox: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: WHITE,
  },

  alignItem: {
    marginLeft: width * 0.13,
    marginTop: height * 0.02,
  },

  loginTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    alignSelf: 'center',
    fontFamily: poppinsRegular,
  },
});

export default styles;
