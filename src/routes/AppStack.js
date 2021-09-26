import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../module/forgotPassword/ForgotPassword';
import HomeScreen from '../module/homeScreen/HomeScreen';
import MerchantHomeScreen from '../module/homeScreen/MerchantHomeScreen';
import Login from '../module/login/Login';
import OrderHisotry from '../module/orderHistory/OrderHisotry';
import MerchantOrderSummary from '../module/orderSummary/MerchantOrderSummary';
import OrderSummary from '../module/orderSummary/OrderSummary';
import MakePayment from '../module/payment/MakePayment';
import StripePaymentView from '../module/payment/PaymentUI';
import PaymentView from '../module/payment/PaymentView';
import PrivacyPolicy from '../module/privacy/PrivacyPolicy';
import MyProfile from '../module/profile/MyProfile';
import SignUp from '../module/signUp/SignUp';
import Splash from '../module/Splash';
import TrackOrder from '../module/trackOrder/TrackOrder';
import VerifyOtp from '../module/verifyOtp/VerifyOtp';
import ViewOrder from '../module/viewOrder/ViewOrder';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MerchantHomeScreen"
        component={MerchantHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MerchantOrderSummary"
        component={MerchantOrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderHisotry"
        component={OrderHisotry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MakePayment"
        component={MakePayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StripePayment"
        component={StripePaymentView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentView"
        component={PaymentView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewOrder"
        component={ViewOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
