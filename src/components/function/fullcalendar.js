import { config } from "@fullcalendar/react";
import axios from "axios";
const jwt = localStorage.getItem('token')
export const createEvent = async(values)=>
                                                                  //get header
    await axios.post('http://127.0.0.1:8000/home/calender/',values,{headers:{authorization:`Bearer ${jwt}`}}); 

export const listEvent = async()=>
    await axios.get('http://127.0.0.1:8000/home/calender/', {headers:{authorization:`Bearer ${jwt}`}}); 

export const updateEvent = async(values,idl)=>
    await axios.put('http://127.0.0.1:8000/home/calender/'+idl+'/',values,{headers:{authorization:`Bearer ${jwt}`}});  

export const deleteEvent = async(values)=>
    await axios.delete('http://127.0.0.1:8000/home/calender/'+values+'/',{headers:{authorization:`Bearer ${jwt}`}});  

//-------

export const createSubject = async(values)=>
                                                                  //get header
    await axios.post('http://127.0.0.1:8000/add/subject/',values,{headers:{authorization:`Bearer ${jwt}`}}); 

export const listSubject = async()=>
    await axios.get('http://127.0.0.1:8000/add/subject/', {headers:{authorization:`Bearer ${jwt}`}}); 

export const deleteSubject = async(values)=>
    await axios.delete('http://127.0.0.1:8000/add/subject/'+values+'/',{headers:{authorization:`Bearer ${jwt}`}});  


//---------

export const createReminder = async(values)=>
                                                                  //get header
    await axios.post('http://127.0.0.1:8000/add/reminder/',values,{headers:{authorization:`Bearer ${jwt}`}}); 

export const listReminder = async()=>
    await axios.get('http://127.0.0.1:8000/add/reminder/', {headers:{authorization:`Bearer ${jwt}`}}); 

export const deleteReminder = async(values)=>
    await axios.delete('http://127.0.0.1:8000/add/reminder/'+values+'/',{headers:{authorization:`Bearer ${jwt}`}});