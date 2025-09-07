import { Stack } from "expo-router";
import "../styles/global.css";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
