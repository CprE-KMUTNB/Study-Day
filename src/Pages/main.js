import React , {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import Form from 'react-bootstrap/Form';
import CreateIcon from '@mui/icons-material/Create';
import subjecetcom from '../components/subject'
import {createEvent , listEvent ,updateEvent,deleteEvent ,createSubject ,listSubject} from '../components/function/fullcalendar';

import {useNavigate} from 'react-router-dom'

import '../Styles/Main.css'
import { Cookie } from '@mui/icons-material'



const Main = () => {
  const navigate=useNavigate()

  const user_id = localStorage.getItem('userid')
  const [show, setShow] = useState(false);

  const [showevent,setShowevent] = useState(false);

  const handleCloseevent = () => setShowevent(false);
  const handleShowevent = () => setShowevent(true);

  const handleOkevent=()=>{
    const edit_value ={
      id:localStorage.getItem('eventid'),
      start:localStorage.getItem('start'),
      end:localStorage.getItem('end'),
      title:value.title,
      user:value.user, //<-- Problem !!!!!
      color:value.color
    }
    console.log(edit_value) 
    updateEvent(edit_value,edit_value.id)
    .then (res=>{
      setValue({...value,tittle:''})
      loadData()
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
    setShowevent(false);
  }

  const [value,setValue] = useState({
    "user": user_id, // <-- Problem
    title:'',
    start:'',
    end:'',
  })
  const [events, setEvents] = useState([]);
  
  const hadleClick = (info)=>{
    console.log(info)
    handleShowevent()
    const eventid = info.event._def.publicId
    const titleevent = info.event._def.title
    const start = info.event.startStr
    const end = info.event.endStr
    console.log(info)
    console.log(eventid)
    console.log(titleevent)
    localStorage.setItem('title',titleevent)
    localStorage.setItem('eventid',eventid)
    localStorage.setItem('start',start)
    localStorage.setItem('end',end)
  }

  useEffect(()=>{
    loadDatasubject()
    loadData()

  },[])

  const loadData=()=>{

    listEvent()
    .then(res=>{
      console.log(res)
      setEvents(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleOk=()=>{
    //sent to API
    console.log(value) 
    createEvent(value)
    .then (res=>{
      setValue({...value,tittle:''})
      loadData()
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
    setShow(false);
  }

  const handleSelect=(info)=>{
    handleShow();
    console.log(info)
    setValue({
      ...value,
      start:info.startStr,
      end:info.endStr
    })
  }

  const onChangeValues=(e)=>{
    console.log(e.target.value)
    setValue({...value,[e.target.name]:e.target.value})
  }
  const handdleChange=(info)=>{
    console.log(info)
    
    const value ={
      id:info.event._def.publicId,
      start:info.event.startStr,
      end:info.event.endStr,
      title:info.event._def.title,
      user:user_id, //<-- Problem !!!!!
      color:info.event.backgroundColor
    }
    console.log(value)
    const idl=value.id
    updateEvent(value,idl)
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
  const handdleDelete=(info)=>{
    const ide=localStorage.getItem('eventid')
    deleteEvent(ide)
      .then(res=>{
        loadData()
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      setShowevent(false);


  }

//------ Subject

  const [subject, setSubject] = useState([]);
  const [subjectvalue,setSubjectvalue] = useState({
    "user": user_id, 
    subject:'',  
  })
  const  sentsubject =(info)=>{
    console.log(subjectvalue)
    createSubject(subjectvalue)
  }
  const onChangeValuessubject=(e)=>{
    console.log(e.target.value)
    setSubjectvalue({...subjectvalue,[e.target.name]:e.target.value})
  }
  const loadDatasubject=()=>{
    listSubject()
    .then(res=>{
      console.log(res)
      setSubject(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  var arr =console.log(subject)
  
  
  return (
    <div className='componentmain'>
      <div className='leftside'>
          <h1>Welcome {localStorage.getItem('username')}</h1>
          <div className='Subject'>
            <h1>Subject</h1>
            <input name = 'subject'  placeholder='title' onChange = {onChangeValuessubject} />
            <select type ='color' name ='color' onChange = {onChangeValuessubject} >
                      <option value=''>--Select tag--</option>
                      <option value='#4285F4'>blue</option>
                      <option value='#DB4437'>red</option>
                      <option value ='#8DDD6A'>green</option>
                      <option value='#FFBD59'>orange</option>
            </select>
            <Button variant="primary" onClick={sentsubject}>Ok</Button>
            <ul className='list'>
              {subject.map((subject) => <li style={{backgroundColor :subject.color, borderRadius:'5px' , width:'50%' ,margin: '4%'}}>{subject.subject}</li>)}
            </ul>
            
          </div>
          <div className='Riminder'>
                <h1>Reminder</h1>
                <input placeholder='Enter reminder'></input>
                <Button variant="primary" >Ok</Button>
          </div>
            
      </div>
      <div className='rightside'>
          <div className='calendar'>
          <FullCalendar
              plugins={[ dayGridPlugin, timeGridPlugin,interactionPlugin ]}
              headerToolbar={{
                center:'title',
                left:'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={
                events
              }
              selectable={true}
              select={handleSelect}
              eventClick={hadleClick}
              editable={true}
              eventChange={handdleChange}

            />
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Adding Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input name = 'title' onChange = {onChangeValues} placeholder='title'/>
                      <select type ='color' name ='color' onChange = {onChangeValues} >
                        <option value=''>--Select color--</option>
                        <option value='#4285F4'>blue
                        </option>
                        <option value='#DB4437'>red
                        </option>
                        <option value ='#8DDD6A'>green
                        </option>
                        <option value='#FFBD59'>orange
                        </option>
                      </select>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleOk}>
                        Ok
                      </Button>
                    </Modal.Footer>
              </Modal>

              <Modal show={showevent} onHide={handleCloseevent}>
                    <Modal.Header closeButton>
                      <Modal.Title>{localStorage.getItem('title')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input name = 'title' placeholder='Edit this event'onChange = {onChangeValues}></input>
                      <select type ='color' name ='color' onChange = {onChangeValues} >
                        <option value=''>--Select tag--</option>
                        <option value='#4285F4'>blue</option>
                        <option value='#DB4437'>red</option>
                        <option value ='#8DDD6A'>green</option>
                        <option value='#FFBD59'>orange</option>
                      </select>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={handdleDelete}>Delete
                        <DeleteForeverIcon fontSize='small'></DeleteForeverIcon>
                      </Button>
                      <Button variant="secondary" onClick={handleCloseevent}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleOkevent}>
                        Ok
                      </Button>
                    </Modal.Footer>
              </Modal>
          </div>
          

      </div>
      
    </div>

  )
}
export default Main