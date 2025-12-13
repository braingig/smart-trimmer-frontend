export interface OrderDetails {
  fullName: string;
  phoneNumber: string;
  address: string;
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum DeliveryZone {
  INSIDE_DHAKA = 'Inside Dhaka',
  OUTSIDE_DHAKA = 'Outside Dhaka'
}