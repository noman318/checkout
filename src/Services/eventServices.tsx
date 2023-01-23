import { evnethttp } from '../http/http';
import EventData from '../Screens/eventInterface';
const getAll=()=>{
     return evnethttp.get<Array<EventData>>("/api/getall");
}
const eventServices={getAll}
export default eventServices;