import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  searchFormText: {
    fontSize: 16,
    color: "#7B7B7B",
  },
  searchControl: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    gap: 12,
    padding: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    backgroundColor: "#F5F5F5",
    borderRadius: 36,
    marginRight: 8,
  },
  listingContainer: {
    flex: 1,
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { styles };
