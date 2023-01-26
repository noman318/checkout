export interface IEventData {
  _id:String;
  threaterId: string;
  name: string;
  language: string;
  location: string;
  description: string;
  category: string;
  artist: string;
  startDate: Date;
  endDate: Date;
  map: string;
  price: number;
  seatAvailable: number;
  image: string;
}