/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   Text,
   View,
   Switch,
   StyleSheet,
 } from 'react-native';
 
 const switchMode = () => {
 
   const [isdarkTheme, setDarkTheme] = useState(false);
   const toggleSwitch = () => setDarkTheme((previousState) => !previousState);
   
   return (
       <View style={isdarkTheme ? styles.darkTheme : styles.lightTheme}>
         <Text style={isdarkTheme ? {color: 'white'} : {color: 'black'}}>
           Switch to Dark Mode:
         </Text>
         <Switch
           trackColor={{false: '#767577', true: '#81b0ff'}}
           thumbColor={isdarkTheme ? '#f5dd4b' : '#f4f3f4'}
           ios_backgroundColor="#3e3e3e"
           onValueChange={toggleSwitch}
           value={isdarkTheme}
         />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 
   lightTheme: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#fff',
     color: '#444444',
   },
 
   darkTheme: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#18191A',
     color: 'white',
   },
 });
 
 export default switchMode;
 