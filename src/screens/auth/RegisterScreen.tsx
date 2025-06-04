import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StatusBar,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleRegister = async () => {
        if (!email || !password || !name || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters long.');
            return;
        }

        if (!agreeToTerms) {
            Alert.alert('Error', 'Please agree to our Terms & Conditions.');
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Success', 'Account created successfully!');
            navigation.navigate('Login');
        }, 1500);
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <ScrollView className="flex-1 bg-gradient-to-b from-slate-50 to-white">
                {/* Header Section */}
                <View className="flex-1 justify-center px-8 pt-16">
                    {/* Welcome Icon */}
                    <View className="items-center mb-8">
                        <View className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full items-center justify-center mb-6 shadow-lg">
                            <Ionicons name="person-add-outline" size={40} color="white" />
                        </View>

                        {/* Welcome Text */}
                        <Text className="text-4xl font-black text-gray-900 text-center tracking-tight">
                            Create Account
                        </Text>
                        <Text className="text-lg text-gray-500 text-center mt-2 font-medium">
                            Join us and start your journey today
                        </Text>
                    </View>

                    {/* Form Section */}
                    <View className="space-y-6">
                        {/* Full Name Input */}
                        <View className="relative mb-2">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="person-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Full Name"
                                value={name}
                                onChangeText={setName}
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-green-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="words"
                            />
                        </View>

                        {/* Email Input */}
                        <View className="relative mb-2">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="mail-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Email address"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-green-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>

                        {/* Password Input */}
                        <View className="relative mb-2">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-green-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4"
                            >
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color="#6B7280"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password Input */}
                        <View className="relative mb-2">
                            <View className="absolute left-4 top-4 z-10">
                                <Ionicons name="shield-checkmark-outline" size={20} color="#6B7280" />
                            </View>
                            <TextInput
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                                className="bg-white border border-gray-200 rounded-2xl pl-12 pr-12 py-4 text-gray-900 text-base font-medium shadow-sm focus:border-green-500 focus:shadow-md"
                                placeholderTextColor="#9CA3AF"
                            />
                            <TouchableOpacity
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-4"
                            >
                                <Ionicons
                                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color="#6B7280"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Password Requirements */}
                        <View className="bg-gray-50 p-4 rounded-xl mb-2">
                            <Text className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</Text>
                            <View className="flex-row items-center mb-1">
                                <Ionicons
                                    name={password.length >= 6 ? "checkmark-circle" : "ellipse-outline"}
                                    size={16}
                                    color={password.length >= 6 ? "#10B981" : "#9CA3AF"}
                                />
                                <Text className={`text-sm ml-2 ${password.length >= 6 ? 'text-green-600' : 'text-gray-500'}`}>
                                    At least 6 characters
                                </Text>
                            </View>
                            <View className="flex-row items-center">
                                <Ionicons
                                    name={password === confirmPassword && password.length > 0 ? "checkmark-circle" : "ellipse-outline"}
                                    size={16}
                                    color={password === confirmPassword && password.length > 0 ? "#10B981" : "#9CA3AF"}
                                />
                                <Text className={`text-sm ml-2 ${password === confirmPassword && password.length > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                                    Passwords match
                                </Text>
                            </View>
                        </View>

                        {/* Terms & Conditions */}
                        <TouchableOpacity
                            onPress={() => setAgreeToTerms(!agreeToTerms)}
                            className="flex-row items-center"
                        >
                            <View className={`w-5 h-5 rounded border-2 mr-3 items-center justify-center ${agreeToTerms ? 'bg-green-500 border-green-500' : 'border-gray-300'
                                }`}>
                                {agreeToTerms && (
                                    <Ionicons name="checkmark" size={14} color="white" />
                                )}
                            </View>
                            <Text className="text-sm text-gray-600 flex-1">
                                I agree to the{' '}
                                <Text className="text-green-600 font-semibold">Terms & Conditions</Text>
                                {' '}and{' '}
                                <Text className="text-green-600 font-semibold">Privacy Policy</Text>
                            </Text>
                        </TouchableOpacity>

                        {/* Register Button */}
                        <TouchableOpacity
                            onPress={handleRegister}
                            disabled={isLoading}
                            className={`bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl shadow-lg ${isLoading ? 'opacity-70' : ''
                                }`}
                            style={{
                                shadowColor: '#10B981',
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
                                    <Ionicons name="person-add-outline" size={20} color="white" />
                                )}
                                <Text className="text-white text-center font-bold text-lg ml-2">
                                    {isLoading ? 'Creating Account...' : 'Create Account'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Social Login Options */}
                        <View className="mt-8">
                            <View className="flex-row items-center mb-6">
                                <View className="flex-1 h-px bg-gray-200" />
                                <Text className="px-4 text-gray-500 font-medium">Or sign up with</Text>
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
                <View className="pb-8 px-8 pt-8">
                    <View className="flex-row justify-center items-center">
                        <Text className="text-gray-600 font-medium">
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            className="ml-2"
                        >
                            <Text className="text-green-600 font-bold">
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}