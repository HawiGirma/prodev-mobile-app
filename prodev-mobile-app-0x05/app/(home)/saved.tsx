import { View, Text, StyleSheet, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Saved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Properties</Text>
        <Text style={styles.subtitle}>Your favorite places to stay</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.emptyState}>
          <EvilIcons name="heart" size={80} color="#E0E0E0" />
          <Text style={styles.emptyTitle}>No saved properties yet</Text>
          <Text style={styles.emptySubtitle}>
            Start exploring and save properties you love
          </Text>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#7B7B7B",
  },
  content: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#7B7B7B",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default Saved;
