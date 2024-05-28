// HomeScreen.js
import { Link } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity,ImageBackground ,Alert ,onChangeText} from 'react-native';
import './styleForms.css'
import { color } from '@rneui/base';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const image = {uri: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'};
const Resgiter = () => {

  const navigation = useNavigation();
  return (
    <Formik 
    initialValues={{ name: '', email: '', password: '' }}
    onSubmit={async values => {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', values);
        console.log(response.data); // Log the response from the server
        // Add logic for handling successful login
        navigation.navigate('Login');
      } catch (error) {
        console.error('Error:', error);
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
          <View style={styles.pdForm}>
            <Text style={styles.title}>Create An Account</Text>
            <Text style={styles.label}>Name:</Text>
            <TextInput 
              style={styles.iptEmail} 
             
              onChangeText={handleChange('name')} 
              value={values.name}  
              onBlur={handleBlur('name')}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput 
              style={styles.iptEmail} 
               
              onChangeText={handleChange('email')} 
              value={values.email}  
              onBlur={handleBlur('email')}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput 
              style={styles.iptPassword} 
              secureTextEntry={true}  
              onChangeText={handleChange('password')} 
              value={values.password}  
              onBlur={handleBlur('password')}
            />
            <Text style={styles.pargr}>
              Login in From   
              <Link to={'/Login'}>
                <Text style={styles.link}>Here</Text>
              </Link>
            </Text>
            <View style={styles.bgBtn}>
              <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )}
  </Formik>
  );
};
const styles = {
  pdForm:{
    padding:20,
    backgroundColor: 'rgba(245, 245, 245, 0.29)'
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
    textAlign:'center'
  },
};
export default Resgiter;
