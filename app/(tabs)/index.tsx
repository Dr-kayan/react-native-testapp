import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-amber-800 p-4">
                Go to onboarding
            </Link>

            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-amber-800 p-4">
                Sign in with existing account
            </Link>

            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-amber-950 p-4">
                Sign Up with new account
            </Link>


            <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-amber-950 p-4">
                Spotify Sub
            </Link>

            <Link href={{
                pathname: '/subscriptions/[id]',
                params: { id : 'kayan'}
            }} className="mt-4 rounded bg-primary text-amber-950 p-4">
                kayan sub
            </Link>


        </SafeAreaView>

    );
}