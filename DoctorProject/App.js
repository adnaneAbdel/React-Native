

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/HomePage';
import Login from './component/LoginPage';
import Register from './component/RegisterPage';
import Dashobrad from './component/Dashobrad';
import Profil from './component/Profil';
import ListDoctors from './component/ListDoctors';
import InfoUser from './component/InfoUsers';
import EditProfil from './component/EditProfil';
const Stack = createStackNavigator(); 
export default function App() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator  >
      <Stack.Screen  name="Home"
        component={Home}
        options={{  title: '' }} />
      <Stack.Screen name="Login" component={Login}  options={{ title: '' }}/>
      <Stack.Screen name="Register" component={Register}  options={{ title: '' }}/>
      <Stack.Screen name="Dashobrad" component={Dashobrad}  options={{ headerShown: false }}/>
      <Stack.Screen name="Profil" component={Profil}  options={{ title: ''}}/>
      <Stack.Screen name="ListDoctors" component={ListDoctors}  options={{ title: '' }}/>
      <Stack.Screen name="InfoUser" component={InfoUser}  options={{ title: 'Details Personal' }}/>
      <Stack.Screen name="EditProfil" component={EditProfil}  options={{ title: 'Edit info' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};



