import "@/global.css"
import { Text } from "react-native";
import {Link} from "expo-router";
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-7xl font-bold font-sans-extrabold">
                Home
            </Text>
            <Text className="text-7xl font-bold ">
                Home
            </Text>

            <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-amber-800 p-4">
                Go to onboarding
            </Link>

            <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-amber-800 p-4">
                Sign In with Existing Account
            </Link>

            <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-amber-800 p-4">
                Sign Up with New Account
            </Link>




        </SafeAreaView>

    );
}