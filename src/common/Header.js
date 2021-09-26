/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import OVText, {large, poppinsMedium} from '../components/OVText';
import {AuthContext} from '../services/authProvider';
import {APP_THEME_COLOR, TEXT_COLOR_BLUE, WHITE} from '../utils/Colors';

/**
 *
 * @param {*} props
 * This is a common header component among most of the screen.
 *
 */
export const Header = props => {
  const {isHome = true, navigation, title = 'Home', onLogoutClick} = props;
  const {user, token, setLogout} = useContext(AuthContext);

  const [] = useState(false);
  return (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: APP_THEME_COLOR,
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            color: TEXT_COLOR_BLUE,
            flex: 1,
            borderBottomColor: WHITE,
            marginStart: 20,
            flexDirection: 'row',
            marginEnd: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <OVText
            size={large}
            fontType={poppinsMedium}
            color={WHITE}
            style={{textAlign: 'center'}}>
            {title}
          </OVText>
        </View>

        {isHome === true && (
          <OVText
            size={large}
            fontType={poppinsMedium}
            color={WHITE}
            style={{textAlign: 'center'}}
            onPress={() => onLogoutClick()}>
            Logout
          </OVText>
        )}
      </View>
    </View>
  );
};
