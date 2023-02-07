import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationPage from './pages/RegistrationPage';

const Stack = createNativeStackNavigator();
//Labelled each screen with a title which will be reflected as a header in the actual app
//for now.
//Will check and update how to hide it. 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={RegistrationPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


