import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Search section
  searchGroup: {
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    height: 60,
    justifyContent: "space-between",
  },
  searchControlGroup: {
    flex: 1,
    justifyContent: "center",
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    flex: 1,
    fontSize: 14,
    color: "#7B7B7B",
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  // Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    columnGap: 15,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 20,
  },

  // Listings
  listingContainer: {
    marginTop: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
