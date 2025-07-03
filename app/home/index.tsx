import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>This is the home page.</Text>
      <Button 
        title="Back to Onboarding" 
        onPress={() => router.push("/onboarding")}
      />
    </View>
  );
}