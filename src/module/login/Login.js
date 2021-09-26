/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Alert, Keyboard, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/loader';
import {OVButton} from '../../components/OVButton';
import {OVTextInput} from '../../components/OVTextInput';
import {LOGIN_IMAGE, RESET} from '../../images';
import {AuthContext} from '../../services/authProvider';
import {loginAccount, resetLoginAccount} from '../../state/auth/Actions';
import {BLUE, WHITE} from '../../utils/Colors';
import {emailValidation, passwordValidate} from '../../utils/FormValidation';
import styles from '../../utils/styles';

const Login = () => {
  const navigation = useNavigation();
  const {setUser, setLogout} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const {loginData, error} = useSelector(state => state.auth);

  /**
   * Use effect will call when user successfully login from accont
   */
  useEffect(() => {
    if (loginData) {
      setLoading(false);
      console.log('\n\n\n\n\n response =>' + JSON.stringify(loginData));

      dispatch(resetLoginAccount());
    } else if (error) {
      console.log('\n\n\n\n\n Error response =>', error);
      setLoading(false);

      Alert.alert('Alert', 'Email id and password is not match', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetLoginAccount());
            navigation.reset({
              index: 0,
              routes: [{name: 'HomeScreen'}],
            });
          },
        },
      ]);
    }
  }, [loginData, error]);

  const onSignInPressed = () => {
    Keyboard.dismiss();

    var emailResult = emailValidation(email);
    var passwordResult = passwordValidate(password);

    if (emailResult !== '') {
      Alert.alert('', emailResult);
    } else if (passwordResult !== '') {
      Alert.alert('', passwordResult);
    }

    if (emailResult == '' && passwordResult == '') {
      setLoading(true);
      const payload = {
        email: email.trim(),
        password: password.trim(),
      };
      setUser(payload);
      dispatch(loginAccount(payload));
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <OVTextInput
          editable={true}
          keyboardType="email-address"
          isBackground={true}
          placeHolderText="Email address"
          leftIcon={LOGIN_IMAGE}
          rightIcon={RESET}
          onChange={text => {
            setEmail(text);
          }}
        />
        <OVTextInput
          editable={true}
          secureTextEntry={true}
          isBackground={true}
          placeHolderText="Password"
          leftIcon={LOGIN_IMAGE}
          rightIcon={RESET}
          onChange={text => {
            setPassword(text);
          }}
        />
        <OVButton
          title="LOG IN"
          color={BLUE}
          textColor={WHITE}
          marginTop={40}
          borderRadius={25}
          onPress={() => onSignInPressed()}
        />
      </View>
      <Loader loading={loading} />
    </SafeAreaView>
  );
};

export default Login;
