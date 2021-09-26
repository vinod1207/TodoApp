import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import AddTodo from './module/home/AddTodo';
import HomeScreen from './module/home/HomeScreen';
import Login from './module/login/Login';
import Splash from './module/Splash';
import AuthContextProvider from './services/authProvider';
import createStore from './state';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export var userCurrentLocation = null;

const store = createStore();

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <SafeAreaView style={styles.container}>
          {(console.disableYellowBox = true)}
          <View style={styles.bottomSafeArea}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Splash">
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
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="AddTodo"
                  component={AddTodo}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </SafeAreaView>
      </AuthContextProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSafeArea: {
    flex: 1,
  },
});

export default App;
