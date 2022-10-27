import { config } from "@fullcalendar/react";
import axios from "axios";
const idp=localStorage.getItem('eventid')

export const createEvent = async(values)=>
    await axios.post('http://127.0.0.1:8000/home/calender/',values); //API Path,values

export const listEvent = async()=>
    await axios.get('http://127.0.0.1:8000/home/calender/') //API Path

export const updateEvent = async(values,idl)=>
    await axios.put('http://127.0.0.1:8000/home/calender/'+idl+'/',values) //API Path

export const deleteEvent = async(values)=>
    await axios.delete('http://127.0.0.1:8000/home/calender/'+values+'/') //API Path