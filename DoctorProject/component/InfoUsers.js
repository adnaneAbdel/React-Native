import React from "react";
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
const InfoUser = () => {
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={{ uri: user.image }} />
          <View style={styles.headerText}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.specialization}>{user.specialization}</Text>
          </View>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Contact Information</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${user.phoneNumber}`)}>
            <Text style={styles.infoText}>Phone: {user.phoneNumber}</Text>
          </TouchableOpacity>
          
          <Text style={styles.infoTitle}>Working Hours</Text>
          <Text style={styles.infoText}>{user.workingHours}</Text>
          
          <Text style={styles.infoTitle}>Location</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: user.location.latitude,
              longitude: user.location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={user.location} title={user.name} description={user.specialization} />
          </MapView>
        </View>
      </View>
           
      
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 20,
    },
    headerText: {
      flex: 1,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    specialization: {
      fontSize: 16,
      color: 'gray',
    },
    infoContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 10,
    },
    map: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
  });

    const user = {
      name: 'John Doe',
      phoneNumber: '+1234567890',
      specialization: 'Cardiologist',
      workingHours: 'Mon-Fri: 9 AM - 5 PM',
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      image: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg',
    };
  
 
export default InfoUser ;