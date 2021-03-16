/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SwitchMode from '../other/Tugas2';
import Calculator from '../other/Tugas3';
import FormData from '../other/Tugas5';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Pengalih Mode') {
              iconName = focused
                ? 'ios-code-slash-outline'
                : 'ios-code-slash-sharp';
            } else if (route.name === 'Calculator') {
              iconName = focused ? 'ios-calculator-sharp' : 'ios-calculator-outline';
            }
            else if (route.name === 'Data Diri') {
              iconName = focused ? 'ios-reader-sharp' : 'ios-reader-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} style={{paddingTop:5}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#18191A',
          inactiveTintColor: 'gray',
          style:{paddingBottom:5, height:55}
        }}>
        <Tab.Screen name="Pengalih Mode" component={SwitchMode} />
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Data Diri" component={FormData} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
