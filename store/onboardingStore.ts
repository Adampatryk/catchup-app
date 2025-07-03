import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface OnboardingStore {
  onboardingComplete: boolean;
  setOnboardingComplete: (complete: boolean) => Promise<void>;
  hydrate: () => Promise<void>;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  onboardingComplete: false,
  setOnboardingComplete: async (complete: boolean) => {
    await AsyncStorage.setItem('onboardingComplete', complete ? '1' : '0');
    set({ onboardingComplete: complete });
  },
  hydrate: async () => {
    const value = await AsyncStorage.getItem('onboardingComplete');
    set({ onboardingComplete: value === '1' });
  },
}));
