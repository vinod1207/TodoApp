/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EmptyView from '../../common/EmptyView';
import {Header} from '../../common/Header';
import {OVButton} from '../../components/OVButton';
import OVText, {medium, poppinsMedium, small} from '../../components/OVText';
import {DELETE} from '../../images';
import {AuthContext} from '../../services/authProvider';
import {resetTodoList} from '../../state/auth/Actions';

import {BLACK, BLUE, GRAY_600, WHITE} from '../../utils/Colors';
import styles from '../../utils/styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {setLogout} = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  const dispatch = useDispatch();
  const {todoListData, error} = useSelector(state => state.todo);

  /**
   * Use effect will call when user successfully added todo
   */
  useEffect(() => {
    if (todoListData) {
      console.log('\n\n\n\n\n response =>' + JSON.stringify(todoListData));

      const data = {
        id: toDoList.length + 1,
        title: todoListData.title,
        description: todoListData.description,
      };
      const todoArray = toDoList;
      todoArray.push(data);
      setToDoList(todoArray);
      setLoading(!loading);
      dispatch(resetTodoList());
    } else if (error) {
      console.log('\n\n\n\n\n Error response =>', error.error_description);

      setLoading(false);
    }
  }, [todoListData, error]);

  const deleteItemFromList = index => {
    const todoArray = toDoList;
    todoArray.splice(index, 1);
    setToDoList(todoArray);
    setLoading(!loading);
  };

  const renderItem = ({item, index}) => (
    <View
      style={{
        backgroundColor: WHITE,
        borderRadius: 10,
        marginVertical: 2,
        padding: 10,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, 0.4)',
            shadowOffset: {height: 1, width: 1},
            shadowOpacity: 0.7,
            shadowRadius: 1,
          },
          android: {
            elevation: 2,
          },
        }),
      }}>
      <OVText
        size={medium}
        fontType={poppinsMedium}
        color={BLACK}
        style={{
          marginTop: 4,
        }}>
        {item.title}
      </OVText>

      <OVText
        size={small}
        fontType={poppinsMedium}
        color={GRAY_600}
        style={{
          marginTop: 4,
        }}>
        {item.description}
      </OVText>
      <TouchableOpacity
        onPress={() => deleteItemFromList(index)}
        style={{
          position: 'absolute',
          end: 0,
          margin: 10,
          justifyContent: 'center',
          zIndex: 1,
        }}>
        <Image source={DELETE} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Header
        onLogoutClick={() => {
          setLogout(true);
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
      <View style={[styles.container]}>
        <FlatList
          data={toDoList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          extraData={loading}
          ListEmptyComponent={<EmptyView title="No TODO found" />}
        />
      </View>
      <OVButton
        title="Add TODO"
        color={BLUE}
        textColor={WHITE}
        marginTop={20}
        marginBottom={20}
        borderRadius={25}
        onPress={() => navigation.navigate('AddTodo')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
