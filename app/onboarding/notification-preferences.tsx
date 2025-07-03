import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function NotificationPreferences() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>When should we nudge you?</Text>
      <Button title="Enable Notifications" onPress={() => router.push('/onboarding/final')} />
      <Button title="Skip" onPress={() => router.push('/onboarding/final')} />
    </View>
  );
}
