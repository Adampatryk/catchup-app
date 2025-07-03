import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Let’s help you keep in touch</Text>
      <Text style={{ marginVertical: 16 }}>Stay close to the people who matter — even when life gets busy.</Text>
      <Button title="Get Started" onPress={() => router.push('/onboarding/why-we-need-access')} />
    </View>
  );
}
