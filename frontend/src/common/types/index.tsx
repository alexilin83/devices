export interface Device {
  _id: number;
  number: number;
  name: string;
  type: DeviceType;
  signal: boolean;
  battery: number;
  address: string;
  latitude: number;
  longitude: number;
}

export type DeviceType = 'sensor' | 'hub';