import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from '@react-navigation/native';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Dummy validation
        if (!email || !password || !name) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        Alert.alert('Success', 'Account created successfully!');
        // Navigate or call API here
    };

    return (
        <View className="flex-1 bg-white justify-center px-6">
            <Text className="text-3xl font-bold text-center mb-6">Create Account</Text>

            <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                className="border border-gray-300 rounded-lg p-3 mb-4"
                placeholderTextColor="#999"
            />

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="border border-gray-300 rounded-lg p-3 mb-4"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#999"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                className="border border-gray-300 rounded-lg p-3 mb-6"
                secureTextEntry
                placeholderTextColor="#999"
            />

            <TouchableOpacity
                onPress={handleRegister}
                className="bg-blue-600 p-4 rounded-lg"
            >
                <Text className="text-white text-center font-semibold">Register</Text>
            </TouchableOpacity>

            <Text className="text-center text-gray-600 mt-4">
                Already have an account?
                <Text onPress={() => navigation.navigate('Login')} className="text-blue-600 font-semibold"> Login</Text>
            </Text>
        </View>
    );
}
