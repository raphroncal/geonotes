import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Image } from "expo-image";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });
    const router = useRouter();

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen
                    name="notes/[note]"
                    options={{
                        title: "Map View",
                        headerTitle: "",
                        // statusBarTranslucent: true,
                        // headerShown: true,
                        headerTransparent: true,
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.dismiss();
                                }}
                            >
                                <Image
                                    className="w-5 h-5"
                                    source={require("@/assets/images/back.png")}
                                ></Image>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.dismiss();
                                }}
                            >
                                <Image
                                    className="w-5 h-6"
                                    source={require("@/assets/images/check.png")}
                                ></Image>
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
