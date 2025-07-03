import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useOnboardingStore } from '../../store/onboardingStore';

export default function FinalScreen() {
  const router = useRouter();
  const setOnboardingComplete = useOnboardingStore((s) => s.setOnboardingComplete);

  const handleFinish = async () => {
    await setOnboardingComplete(true);
    router.replace('/home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>All set! 🎉</Text>
      <Text style={{ marginVertical: 16 }}>We’ll remind you when it’s time to catch up. You’re in control.</Text>
      <Button title="Take Me to CatchUp" onPress={handleFinish} />
    </View>
  );
}
