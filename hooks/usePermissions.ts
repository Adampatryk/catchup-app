import * as Contacts from 'expo-contacts';
import * as Notifications from 'expo-notifications';
import { PermissionStatus, usePermissionsStore } from '../store/permissionsStore';

export function usePermissions() {
  const setPermission = usePermissionsStore((s) => s.setPermission);

  // Request contacts permission
  const requestContacts = async (): Promise<PermissionStatus> => {
    const { status } = await Contacts.requestPermissionsAsync();
    setPermission('contacts', status);
    return status;
  };

  // Request notifications permission
  const requestNotifications = async (): Promise<PermissionStatus> => {
    const { status } = await Notifications.requestPermissionsAsync();
    setPermission('notifications', status);
    return status;
  }

  return {
    requestContacts,
    requestNotifications,
  };
}
