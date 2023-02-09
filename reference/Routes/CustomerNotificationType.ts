import { ApiDefaultRoute } from './ApiDefaultRoute'

export class CustomerNotificationRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'CompanyNotifications')
  }

  ReturnNotificationTypeExists(customerId: number | null, notificationTypeId: number): string {
    customerId = (customerId === undefined) ? 0 : customerId
    notificationTypeId = (notificationTypeId === undefined) ? 0 : notificationTypeId
    return `${this.uri}?CompanyId=${customerId}&NotificationTypeId=${notificationTypeId}&MappingType=1`
  }
}
