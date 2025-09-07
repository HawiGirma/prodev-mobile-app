import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  The best prices for over 2{" "}
                </Text>
                <Text style={styles.titleSubText}>
                  million properties worldwide
                </Text>
              </View>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.buttonPrimary}
                  onPress={() => router.push("/join")}
                >
                  <Text style={styles.buttonPrimaryText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonSecondary}
                  onPress={() => router.push("/signin")}
                >
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonGroupSubText}>
                <Text style={styles.titleSubText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
