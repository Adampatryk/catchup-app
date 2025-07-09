import { create } from 'zustand';

export type PermissionStatus = 'granted' | 'denied' | 'undetermined';

interface PermissionsState {
  contacts: PermissionStatus;
  notifications: PermissionStatus;
  callLogs: PermissionStatus;
  setPermission: (type: keyof Omit<PermissionsState, 'setPermission'>, status: PermissionStatus) => void;
}

export const usePermissionsStore = create<PermissionsState>((set) => ({
  contacts: 'undetermined',
  notifications: 'undetermined',
  callLogs: 'undetermined',
  setPermission: (type, status) => set({ [type]: status }),
}));
