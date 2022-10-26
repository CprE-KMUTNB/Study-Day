import { config } from "@fullcalendar/react";
import axios from "axios";

export const createEvent = async(values)=>
    await axios.post('http://127.0.0.1:8000/home/calender/',values); //API Path,values

export const listEvent = async()=>
    await axios.get('http://127.0.0.1:8000/home/calender/') //API Path