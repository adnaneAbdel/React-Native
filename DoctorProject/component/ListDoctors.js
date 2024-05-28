import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from "react-native";

const image = { uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg' };

const ListDoctors = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/usersData');
      setDoctors(response.data);
      setFilteredDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={handleSearch}
      />
      <View style={styles.container1}></View>
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('InfoUser', { doctorId: item._id })}>
            <View style={styles.container2}>
              <Image style={styles.image} source={image} />
              <View>
                <Text style={styles.texting}>{item.name}</Text>
                <Text style={styles.ShowData}>Click For More Details</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginLeft: 15,
    marginRight: 15,
  },
  container1: {
    position: 'relative',
    marginTop: 20,
  },
  container2: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    position: 'relative',
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  texting: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform: 'capitalize',
    margin: 5,
  },
  ShowData: {
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform: 'capitalize',
    fontSize: 'small',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#eee',
    borderStyle: 'solid',
    padding: 20,
  },
});

export default ListDoctors;
