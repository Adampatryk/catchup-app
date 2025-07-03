import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function ContactPermissions() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sync your contacts</Text>
      <Text style={{ marginVertical: 16 }}>We’ll help you prioritize the people you care about most.</Text>
      <Button title="Allow Access" onPress={() => router.push('/onboarding/select-contacts')} />
    </View>
  );
}
