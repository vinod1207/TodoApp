import React, {useState, useEffect} from 'react';
import {getItem, setItem, removeItem} from './storageService';

export const AuthContext = React.createContext();

const STORAGE_USER_KEY = 'user';
const STORAGE_TOKEN_KEY = 'token';
const USER_ID_KEY = 'userId';

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (logout) {
      (async () => {
        setUser('');
        setToken('');
        setLogout(false);
        removeItem(STORAGE_USER_KEY).then(result => {
          console.log('user logout', result);
        });
        removeItem(STORAGE_TOKEN_KEY).then(result => {
          console.log('user logout', result);
        });
      })();
    } else if (user && token && user !== '' && token !== '') {
      setItem(STORAGE_USER_KEY, user);
      setItem(STORAGE_TOKEN_KEY, token);
      setItem(USER_ID_KEY, userId);
    } else if (!user && !token) {
      (async () => {
        getItem(STORAGE_USER_KEY).then(userValue => {
          if (userValue) {
            setUser(JSON.parse(userValue));
          } else {
            setUser('');
          }
        });
        getItem(STORAGE_TOKEN_KEY).then(tokenValue => {
          if (tokenValue) {
            setToken(tokenValue);
          } else {
            setToken('');
          }
        });
      })();
    }
  }, [logout, user, token, userId]);
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        logout,
        userId,
        setUser,
        setToken,
        setLogout,
        setUserId,
      }}>
      {user !== undefined && token !== undefined ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
