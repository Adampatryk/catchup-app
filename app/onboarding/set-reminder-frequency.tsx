import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SetReminderFrequency() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>How often should we remind you?</Text>
      <Button title="Next" onPress={() => router.push('/onboarding/notification-preferences')} />
    </View>
  );
}
