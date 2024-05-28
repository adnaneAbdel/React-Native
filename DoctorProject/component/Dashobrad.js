// HomeScreen.js
import React from 'react';
import { View,StyleSheet,Text,Alert,ImageBackground} from 'react-native';
import { Button } from '@rneui/themed';
import ListDoctors from './ListDoctors';
import Profil from './Profil';
import { useNavigation } from '@react-navigation/native';



const image = {uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMl9waG90b19vZl9hX2JsYWNrX3BsdXNfc2l6ZV9mZW1hbGVfZG9jdG9yX2luX2hvc19mOGU4MTBlMi1kOWEyLTQ5OTMtOWM0Zi1kNWI2OTQ5ODVmZTNfMi5qcGc.jpg'}
const Dashobrad = ({navigation}) => {

  return (
   
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <View style={styles.container}>
    <Text style={styles.textS}>Welcome to Dashobrad</Text>
    <Button
     style={styles.test}
     color="secondary"
        title="List Of Doctors"
        onPress={() => navigation.navigate('ListDoctors')}
      />
       <Button
       color="error"
        title="Your Profil"
       
        onPress={() => navigation.navigate('Profil')}
      />
        <Button
     style={styles.test2}
        title="Login Out"
       
        onPress={() => navigation.navigate('Home')}
      />
      </View>
 </ImageBackground>

  );
};
const styles = StyleSheet.create({
    container: {
      flex: 2,
      position:'relative',
      top:-20,
      justifyContent: 'center',
marginLeft:15,
marginRight:15,
      color: 'black'
    },
    textS:{
      margin:5,
      fontSize:30,
      fontWeight:'bold',
      color: 'black',
      textAlign:'center',
      paddingBottom:15
    },
    test:{
   marginBottom:10,
   


    },
    test2:{
      marginBottom:10,
      marginTop:10,
      width:200,
      position:'relative',
      left: '24%'
   
   
       },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  });
export default Dashobrad;
