import { create } from 'zustand';

export interface TrackedContact {
  id: string;
  name: string;
  avatar?: string;
  lastContacted?: Date | null;
}

interface ContactsStore {
  trackedContacts: TrackedContact[];
  addTrackedContact: (contact: TrackedContact) => void;
  removeTrackedContact: (id: string) => void;
  setTrackedContacts: (contacts: TrackedContact[]) => void;
  clearTrackedContacts: () => void;
}

export const useContactsStore = create<ContactsStore>((set) => ({
  trackedContacts: [],
  addTrackedContact: (contact) => set((state) => ({
    trackedContacts: [...state.trackedContacts, contact],
  })),
  removeTrackedContact: (id) => set((state) => ({
    trackedContacts: state.trackedContacts.filter((c) => c.id !== id),
  })),
  setTrackedContacts: (contacts) => set({ trackedContacts: contacts }),
  clearTrackedContacts: () => set({ trackedContacts: [] }),
}));
