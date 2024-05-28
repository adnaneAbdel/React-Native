import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button ,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditProfile = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                setToken(userToken);
            } catch (error) {
                console.error('Error retrieving token:', error);
            }
        };
        getToken();
    }, []);

    const handleChange = (fieldName, value) => {
        setUserInfo(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSave = async () => {
        try {
            // Send updated user information to backend with token
            await axios.put('http://172.20.10.2:3000/api/auth/edit-profile', userInfo, {
                headers: {
                    'x-access-token': token
                }
            });
            // Navigate back to profile screen after saving
            navigation.navigate('Profil');
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <View>
            <Text>Edit Profile</Text>
            <TextInput
                placeholder="Name"
                value={userInfo.name}
                onChangeText={value => handleChange('name', value)}
            />
            <TextInput
                placeholder="Email"
                value={userInfo.email}
                onChangeText={value => handleChange('email', value)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={userInfo.password}
                onChangeText={value => handleChange('password', value)}
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default EditProfile;
