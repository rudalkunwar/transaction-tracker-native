import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Success', 'Logged in successfully!');
        }, 1500);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <View className="flex-1 bg-gradient-to-b from-slate-50 to-white">
                {/* Header Section */}
                <View className="flex-1 justify-center px-8">
                    {/* Welcome Icon */}
                    <View className="items-center mb-8">
                        <View className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full items-center justify-center mb-6 shadow-lg">
                            <Ionicons name="person-circle-outline" size={40} color="white" />
                        </View>

                        {/* Welcome Text */}
                        <Text className="text-4xl font-black text-gray-900 text-center tracking-tight">
                            Welcome Back
                        </Text>
                        <Text className="text-lg text-gray-500 text-center mt-2 font-medium">
                            Sign in to continue your journey
                        </Text>
                    </View>

                    {/* Form Section */}
                    <View className="space-y-6">
                        {/* Email Input */}
                        <View className="relative mb-4">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="mail-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Email address"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-blue-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>

                        {/* Password Input */}
                        <View className="relative">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-blue-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                            />

                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 "
                            >
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color="#6B7280"
                                />
                            </TouchableOpacity>

                        </View>

                        {/* Forgot Password */}
                        <TouchableOpacity className="items-end">
                            <Text className="text-blue-600 font-semibold text-sm">
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        {/* Login Button */}
                        <TouchableOpacity
                            onPress={handleLogin}
                            disabled={isLoading}
                            className={`bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg ${isLoading ? 'opacity-70' : ''
                                }`}
                            style={{
                                shadowColor: '#3B82F6',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 8,
                                elevation: 8,
                            }}
                        >
                            <View className="flex-row items-center justify-center">
                                {isLoading ? (
                                    <Ionicons name="refresh-outline" size={20} color="white" />
                                ) : (
                                    <Ionicons name="log-in-outline" size={20} color="white" />
                                )}
                                <Text className="text-white text-center font-bold text-lg ml-2">
                                    {isLoading ? 'Signing In...' : 'Sign In'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Social Login Options */}
                        <View className="mt-8">
                            <View className="flex-row items-center mb-6">
                                <View className="flex-1 h-px bg-gray-200" />
                                <Text className="px-4 text-gray-500 font-medium">Or continue with</Text>
                                <View className="flex-1 h-px bg-gray-200" />
                            </View>

                            <View className="flex-row space-x-4">
                                <TouchableOpacity className="flex-1 bg-white border border-gray-200 p-4 rounded-2xl items-center shadow-sm">
                                    <Ionicons name="logo-google" size={24} color="#EA4335" />
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 bg-white border border-gray-200 p-4 rounded-2xl items-center shadow-sm">
                                    <Ionicons name="logo-apple" size={24} color="#000000" />
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 bg-white border border-gray-200 p-4 rounded-2xl items-center shadow-sm">
                                    <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Bottom Section */}
                <View className="pb-8 px-8">
                    <View className="flex-row justify-center items-center">
                        <Text className="text-gray-600 font-medium">
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                            className="ml-2"
                        >
                            <Text className="text-blue-600 font-bold">
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}