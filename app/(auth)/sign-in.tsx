import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function SignIn() {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-up"> Sign Up with new account</Link>
        </View>
    )
}
