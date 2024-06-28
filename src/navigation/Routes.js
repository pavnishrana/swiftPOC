// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../screens/SecondScreen'
import FirstScreen from '../screens/FirstScreen';
import { Button, Image, Text,  BackHandler, TouchableOpacity, NativeModules } from 'react-native';
import ChooseYourApps from '../screens/ChooseYourApps';

const Stack = createNativeStackNavigator();
const handleBackButton = () => {
  BackHandler.exitApp(); 
};
const {TestConnectNative} = NativeModules

const Routes = ({rootTag}) => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="FirstScreen" component={FirstScreen}  options={{
     headerTitle: 'Choose a plan to watch',
          headerLeft: () => (
           <>
           <TouchableOpacity onPress={()=>{
          TestConnectNative?.dismissViewController?.(rootTag)
        }    }>
           <Image
                source={require('../assets/png/backArrowPng.png')}
                style={{ width: 25, height: 25, marginRight: 10}}
              />
           </TouchableOpacity>
           </>
          ),
        }}/>
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen initialParams={{rootTag}} name="ChooseYourApps" component={ChooseYourApps} options={{
     headerTitle: 'Click to choose any 6 Apps',

        }}/>
    </Stack.Navigator>
  );
};

export default Routes;
