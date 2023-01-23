export default interface EventData {
  id?: string | null;
  threaterId: string;
  name: string;
  language: string;
  location: string;
  description: string;
  artist: string;
  startDate: Date;
  endDate: Date;
  map: string;
  price: number;
  seatAvailable: Number;
  image: String;
}
