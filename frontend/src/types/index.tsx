export interface Device {
  number: number;
  name?: string;
  type: string;
  signal: boolean;
  battery: number;
  address: string;
  latitude: number;
  longitude: number;
}
