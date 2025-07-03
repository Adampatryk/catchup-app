import { router } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useOnboardingStore } from "../store/onboardingStore";

export default function Index() {
  const onboardingComplete = useOnboardingStore((s) => s.onboardingComplete);
  const hydrate = useOnboardingStore((s) => s.hydrate);

  useEffect(() => {
    // Hydrate onboarding state from storage
    hydrate();
  }, []);

  useEffect(() => {
    if (onboardingComplete) {
      router.replace("/home");
    }
  }, [onboardingComplete]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Start Onboarding"
        onPress={() => router.push("/onboarding")}
      />
    </View>
  );
}