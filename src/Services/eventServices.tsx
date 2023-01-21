import http from '../http/http';
import EventData from '../Interface/eventInterface';
const getAll=()=>{
     return http.get<Array<EventData>>("/api/getall");
}
const getById=(id:any)=>{
   return http.get<EventData>(`/todo/${id}`)
}
const create=(data:EventData)=>{
    return http.post<EventData>(`/todo`,data)
}
const remove=(id:any)=>{
    return http.delete<any>(`/todo/${id}`)
}
const update=(id:any,data:EventData)=>{
     return http.put<any>(`/todo/${id}`,data)
}
const eventServices={getAll,getById,create,remove,update}
export default eventServices;