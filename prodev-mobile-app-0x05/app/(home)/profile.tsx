import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Image
              source={require("@/assets/images/user-image.png")}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@example.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome name="edit" size={16} color="#34967C" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIcon}>
                <FontAwesome name="user" size={20} color="#34967C" />
              </View>
              <Text style={styles.menuText}>Personal Information</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#C2C2C2"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="heart-outline" size={20} color="#34967C" />
              </View>
              <Text style={styles.menuText}>Saved Properties</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#C2C2C2"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="settings-outline" size={20} color="#34967C" />
              </View>
              <Text style={styles.menuText}>Settings</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#C2C2C2"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIcon}>
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#34967C"
                />
              </View>
              <Text style={styles.menuText}>Help & Support</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#C2C2C2"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIcon}>
                <MaterialIcons name="logout" size={20} color="#E74C3C" />
              </View>
              <Text style={[styles.menuText, { color: "#E74C3C" }]}>
                Logout
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#C2C2C2"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: "white",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  editButton: {
    padding: 8,
  },
  menuSection: {
    backgroundColor: "white",
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F5E8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default Profile;
