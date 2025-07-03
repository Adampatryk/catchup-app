import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function OnboardingLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa", // pastel purple
    paddingTop: 48,
    paddingHorizontal: 0,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 8,
    tintColor: "#6ee7f7", // pastel cyan
  },
  brand: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6d28d9", // deep pastel purple
    letterSpacing: 1.5,
  },
  content: {
    flex: 1,
    backgroundColor: "#f0f9ff", // very light cyan
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
});
