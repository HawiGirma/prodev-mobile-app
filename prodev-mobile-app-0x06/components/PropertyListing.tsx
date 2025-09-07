import { View, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native";

interface Listing {
  id: string;
  title: string;
  location: string;
  price: string;
  image: any;
}

interface Props {
  listings: Listing[];
}

const { width } = Dimensions.get("window");

const PropertyListing = ({ listings }: Props) => {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    width: width - 32,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
});

export default PropertyListing;
