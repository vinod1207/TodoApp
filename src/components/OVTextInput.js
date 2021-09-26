/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  APP_THEME_COLOR,
  BLACK,
  COLOR_TRANSPARENT,
  LIGHT_BLUE,
  WHITE,
} from '../utils/Colors';
import {poppinsRegular} from './OVText';

/**
 *
 * @param {*} props
 * This is a common input field.
 * If you pass the  @param props.leftIcon , Left icon will be display.
 * If you pass the  @param props.rightIcon , Right icon will be display.
 */
export const OVTextInput = props => {
  const {
    keyboardType,
    placeHolderText,
    value,
    onChange,
    secureTextEntry,
    editable,
    contentType,
    returnKeyType,
    multiline = false,
    textContentType = 'none',
    numberOfLines = 1,
    onPress,
    onFocus,
    onBlur,
    rightIcon,
    height,
    leftIcon,
    onRightPress,
    autoCapitalize = 'none',
    pointerEvents = 'auto',
    onSubmitEditing,
    passwordRules,
    rightText,
    maxLength,
    isBackground = true,
  } = props;

  return (
    <View
      style={
        isBackground === true
          ? styles.inputContainerStyle
          : styles.transparentInputContainerStyle
      }>
      {leftIcon && (
        <Image
          width={30}
          height={30}
          source={leftIcon}
          style={{
            marginHorizontal: 7,
            resizeMode: 'contain',
            width: 30,
            height: 30,
          }}
        />
      )}

      <TextInput
        placeholder={placeHolderText}
        contentType={contentType}
        value={value}
        onBlur={onBlur}
        passwordRules={passwordRules}
        textContentType={textContentType}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
        numberOfLines={numberOfLines}
        keyboardType={
          keyboardType === 'number'
            ? 'number-pad'
            : keyboardType && keyboardType != ''
            ? keyboardType
            : 'default'
        }
        secureTextEntry={secureTextEntry}
        editable={editable}
        returnKeyType={returnKeyType}
        style={editable === false ? styles.unEditableText : styles.editableText}
        onPress={onPress}
        onFocus={onFocus}
        height={height}
        multiline={multiline}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        pointerEvents={pointerEvents}
      />

      {rightIcon && (
        <TouchableOpacity
          style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}
          onPress={onRightPress}>
          <Image
            width={30}
            height={30}
            source={rightIcon}
            padding={0}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 10,
    marginTop: 10,
    paddingStart: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 1,
      },
    }),
    borderColor: LIGHT_BLUE,
    borderWidth: 1,
    height: 42,
  },
  transparentInputContainerStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editableText: {
    paddingVertical: 7,
    flex: 1,
    fontFamily: poppinsRegular,
  },

  unEditableText: {
    paddingVertical: 7,
    marginStart: 5,
    flex: 1,
    color: 'black',
  },
});
