import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function WhyWeNeedAccess() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>How it works</Text>
      <Text style={{ marginVertical: 16 }}>CatchUp uses your contacts and call activity (only the metadata!) to remind you when it’s time to reach out.\nNothing is uploaded or shared. Everything stays on your phone.</Text>
      <Button title="Sounds good →" onPress={() => router.push('/onboarding/contact-permissions')} />
    </View>
  );
}
