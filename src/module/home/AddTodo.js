/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../common/Header';
import {OVButton} from '../../components/OVButton';
import {OVTextInput} from '../../components/OVTextInput';
import {addTodoList} from '../../state/todo/Actions';
import {BLUE, WHITE} from '../../utils/Colors';
import styles from '../../utils/styles';

const AddTodo = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const {todoListData, error} = useSelector(state => state.todo);

  const onAddToClick = () => {
    if (title === '') {
      Alert.alert('', 'Please enter title');
      return;
    } else if (description === '') {
      Alert.alert('', 'Please enter description');
      return;
    }

    const payload = {title: title, description: description};
    dispatch(addTodoList(payload));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Header isHome={false} title="Add Todo" />
      <View style={[styles.container]}>
        <OVTextInput
          editable={true}
          keyboardType="email-address"
          isBackground={true}
          placeHolderText="Title"
          onChange={text => {
            setTitle(text);
          }}
        />
        <OVTextInput
          editable={true}
          isBackground={true}
          placeHolderText="Description"
          onChange={text => {
            setDescription(text);
          }}
        />
        <OVButton
          title="Add TODO"
          color={BLUE}
          textColor={WHITE}
          marginTop={20}
          marginBottom={20}
          borderRadius={25}
          onPress={() => onAddToClick()}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
