/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import OVText, {large, medium, poppinsMedium} from '../components/OVText';
import {AuthContext} from '../services/authProvider';
import {APP_THEME_COLOR, BLACK, WHITE} from '../utils/Colors';

const Splash = props => {
  const {user} = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    setTimeout(() => {
      if (user) {
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HomeScreen',
            },
          ],
        });
      } else {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    }, 4000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_THEME_COLOR,
      }}>
      <OVText size={large} fontType={poppinsMedium} color={WHITE}>
        TODO
      </OVText>
    </View>
  );
};
export default Splash;
