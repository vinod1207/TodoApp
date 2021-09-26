/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import OVText, {medium, poppinsMedium} from '../components/OVText';
import {BLACK} from '../utils/Colors';
const windowHeight = Dimensions.get('window').height;

export default function EmptyView(props) {
  const {title} = props;
  return (
    <View style={styles.container}>
      <OVText
        size={medium}
        fontType={poppinsMedium}
        color={BLACK}
        style={{
          marginTop: 4,
        }}>
        {title}
      </OVText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    height: windowHeight - 100,
  },
});
