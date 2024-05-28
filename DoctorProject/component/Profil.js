import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = { uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg' };
const editIcon = { uri: 'https://static-00.iconduck.com/assets.00/edit-alt-icon-256x256-o4z7b7b4.png' };

const Profil = ({ navigation}) => {
  const [infouser, setInfouser] = useState(null);
  const formatPassword = (password, visibleChars = 0 ) => {
    if (!password) return ''; // Return empty string if password is null or undefined
    const firstChars = password.slice(0, visibleChars);
    const maskedChars = '*'.repeat(Math.max(10));
    return firstChars + maskedChars;
  };
  const fetchData = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('userToken');

      if (token) {
        // Fetch user data with the token
        const response = await axios.get('http://172.20.10.2:3000/api/auth/profil', {
          headers: {
            'x-access-token': token
          }
        });
        const formattedUserData = {
          ...response.data,
          password: formatPassword(response.data.password)
        };
        setInfouser(formattedUserData);
      } else {
        console.error('No token found');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!infouser) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={image} />
      </View>

      <Text style={styles.sectionInfo}>
        First Name: <Text style={styles.data}>{infouser.name}</Text>
      </Text>
      <Text style={styles.sectionInfo}>
        Email: <Text style={styles.data}>{infouser.email}</Text>
      </Text>
      <Text style={styles.sectionInfo}>
        Password: <Text style={styles.data}>{infouser.password}</Text>
      </Text>

      <Button
        title="Edit Your Profile"
        color="error"
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfil')}
      />
    </View>
  );
};
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 10,
  },
  sectionInfo: {
    padding: 10,
    backgroundColor: 'whitesmoke',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  data: {
    color: 'gray',
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Profil;
