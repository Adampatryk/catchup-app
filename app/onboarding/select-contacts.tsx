import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SelectContacts() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Who do you want to stay in touch with?</Text>
      <Text style={{ marginVertical: 16 }}>Pick the people that matter — we’ll remind you to reach out.</Text>
      <Button title="Next" onPress={() => router.push('/onboarding/set-reminder-frequency')} />
      <Button title="Skip for now" onPress={() => router.push('/onboarding/set-reminder-frequency')} />
    </View>
  );
}
