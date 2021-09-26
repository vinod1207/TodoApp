import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import {COLOR_BLACK} from '../../utils/Colors';

const Loader = props => {
  const {loading} = props;
  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size={'large'}
          animating={loading}
          color={COLOR_BLACK}
        />
      </View>
    </View>
  ) : null;
};

export default Loader;
