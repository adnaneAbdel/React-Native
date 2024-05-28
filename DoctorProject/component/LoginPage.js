// HomeScreen.js
import { Link } from '@react-navigation/native';
import React ,{useState} from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity,ImageBackground,Alert,Form ,SafeAreaView,ScrollView,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import './styleForms.css'
import axios from 'axios';


const image = {uri: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'};
const Login = () => {

  const navigation = useNavigation();

  return (


    
    <Formik
  initialValues={{ email: '', password: '' }}
  onSubmit={async values => {
    try {
      const response = await axios.post('http://172.20.10.2:3000/api/auth/login', values);
      console.log(response.data); // Log the response from the server
      // Handle successful login
      const token = response.data.Data.token;
      await AsyncStorage.setItem('userToken', token);
      // Add logic for handling successful login
      navigation.navigate('Dashobrad');
    } catch (error) {
      Alert.alert('Error', "Invalid email or passwerod")
 
      // Add logic for handling errors
    }
  }}
  validate={values => {
    const errors = {};
    // Add validation logic here if needed
    return errors;
  }}
>
  {({ handleChange, handleBlur, handleSubmit, values }) => (
    
    <View style={styles.allForm}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container1}>
     <ScrollView style={styles.scrollView}>
        <View style={styles.pdForm}>
          <Text style={styles.title}>Login in</Text>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.iptEmail}
            keyboardType="email-address"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.iptPassword}
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <Text style={styles.pargr}>
            For Create An Account Click{' '}
            <Link to={'/Register'}>
              <Text style={styles.link}>Here</Text>
            </Link>
          </Text>
          <View style={styles.bgBtn}>
            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
              <Text style={styles.btnText}>Connection</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
      </ImageBackground>
    </View>
   
  )}
</Formik>
  
  );
};
const styles = {
  pdForm:{
    padding:20,
    backgroundColor: 'rgba(245, 245, 245, 0.29)',
    
  },
  allForm: {
    flex:1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'#007bff',
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  iptEmail: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5,
  },
  iptPassword: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  pargr: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
  },
  bgBtn: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    width:100,
    marginTop:15,
    marginLeft:140

  },
  btnLogin: {
    padding: 10,

  

    
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container1: {
   
    
  },
  scrollView: {
  
    
  },

};
export default Login;
