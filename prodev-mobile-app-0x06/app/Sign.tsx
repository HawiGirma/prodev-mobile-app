import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_mainstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Sign() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top logo and back button */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <Text style={styles.titleText}>Sign in to your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.titleSubText}>
          Enter your email and password to sign in.
        </Text>

        {/* Form fields */}
        <View style={{ marginTop: 40, gap: 20 }}>
          <View>
            <Text style={{ fontSize: 18, color: "#7B7B7B", marginBottom: 7 }}>
              Email
            </Text>
            <TextInput
              keyboardType="email-address"
              style={{
                borderWidth: 1,
                borderColor: "#E9E9E9",
                borderRadius: 10,
                height: 50,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#7B7B7B", marginBottom: 7 }}>
              Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#E9E9E9",
                borderRadius: 10,
                height: 50,
                paddingHorizontal: 10,
              }}
            >
              <TextInput style={{ flex: 1 }} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Sign in button */}
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#e6e6e6" }} />
          <Text
            style={{ marginHorizontal: 10, color: "#C2C2C2", fontSize: 17 }}
          >
            OR
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#e6e6e6" }} />
        </View>

        {/* Social media buttons */}
        <View style={{ gap: 15 }}>
          <TouchableOpacity style={styles.buttonSecondary}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={require("../assets/images/google.png")} />
              <Text style={styles.buttonSecondaryText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={require("../assets/images/facebook.png")} />
              <Text style={styles.buttonSecondaryText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Join now text */}
        <View style={styles.buttonGroupSubText}>
          <Text style={{ fontSize: 18 }}>Don&apos;t have an account?</Text>
          <Text style={{ fontSize: 18, color: "#FFA800", fontWeight: "bold" }}>
            Join now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
