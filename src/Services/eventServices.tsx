import { evnethttp } from "../http/http";
import {IEventData} from "../Screens/Home/Interface";
export const getAll = () => {
  return evnethttp.get<Array<IEventData>>("/api/getall");
};
export const getById = (id:any) => {
  return evnethttp.get<IEventData>(`/api/getbyid/${id}`);
};

