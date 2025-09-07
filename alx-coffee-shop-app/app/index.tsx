import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CoffeeShopApp = () => {
  const coffeeItems = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$4.50",
      image: "☕",
      description: "Rich espresso with steamed milk foam",
    },
    {
      id: 2,
      name: "Latte",
      price: "$5.00",
      image: "☕",
      description: "Smooth espresso with steamed milk",
    },
    {
      id: 3,
      name: "Americano",
      price: "$3.50",
      image: "☕",
      description: "Classic espresso with hot water",
    },
    {
      id: 4,
      name: "Mocha",
      price: "$5.50",
      image: "☕",
      description: "Espresso with chocolate and steamed milk",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-50">
        {/* Header */}
        <View className="bg-white px-4 py-3 shadow-sm">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-2xl font-bold text-gray-800">☕</Text>
              <Text className="text-xl font-bold text-gray-800 ml-2">
                Coffee Corner
              </Text>
            </View>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity>
                <Ionicons name="search-outline" size={24} color="#374151" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="cart-outline" size={24} color="#374151" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Hero Section */}
        <View className="bg-gradient-to-r from-amber-600 to-amber-800 px-4 py-8">
          <Text className="text-3xl font-bold text-white mb-2">
            Welcome to Coffee Corner
          </Text>
          <Text className="text-amber-100 text-lg mb-4">
            Discover the perfect cup of coffee
          </Text>
          <TouchableOpacity className="bg-white px-6 py-3 rounded-full self-start">
            <Text className="text-amber-800 font-semibold">Order Now</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View className="px-4 py-4">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Categories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {["Hot Coffee", "Cold Coffee", "Pastries", "Tea"].map(
                (category, index) => (
                  <TouchableOpacity
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      index === 0 ? "bg-amber-600" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`font-medium ${
                        index === 0 ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </ScrollView>
        </View>

        {/* Coffee Items */}
        <View className="px-4 py-2">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Popular Items
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {coffeeItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="bg-white rounded-lg p-4 mb-3 shadow-sm"
              >
                <View className="flex-row items-center">
                  <View className="w-16 h-16 bg-amber-100 rounded-lg items-center justify-center mr-4">
                    <Text className="text-3xl">{item.image}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </Text>
                    <Text className="text-gray-600 text-sm mb-1">
                      {item.description}
                    </Text>
                    <Text className="text-amber-600 font-bold text-lg">
                      {item.price}
                    </Text>
                  </View>
                  <TouchableOpacity className="bg-amber-600 w-8 h-8 rounded-full items-center justify-center">
                    <Ionicons name="add" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Bottom Navigation */}
        <View className="bg-white border-t border-gray-200 px-4 py-2">
          <View className="flex-row items-center justify-around">
            <TouchableOpacity className="items-center py-2">
              <Ionicons name="home" size={24} color="#D97706" />
              <Text className="text-amber-600 text-xs mt-1">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center py-2">
              <Ionicons name="search-outline" size={24} color="#6B7280" />
              <Text className="text-gray-500 text-xs mt-1">Search</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center py-2">
              <Ionicons name="heart-outline" size={24} color="#6B7280" />
              <Text className="text-gray-500 text-xs mt-1">Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center py-2">
              <Ionicons name="person-outline" size={24} color="#6B7280" />
              <Text className="text-gray-500 text-xs mt-1">Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CoffeeShopApp;
