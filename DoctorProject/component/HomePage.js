// HomeScreen.js
import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import { Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import { BVLinearGradient } from 'react-native';
const Home = ({ navigation }) => {
  return (
 

   
  


    <View style={styles.container}>
     
    <Text style={styles.textS}>Welcome To Our App</Text>
    <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
   
 
  </View>
 

  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      backgroundColor:"#4f9cd5"
    },
    textS:{
      margin:5,
      fontWeight:'bold',
      color: 'black',
      paddingBottom:15
    }
  });
export default Home;
