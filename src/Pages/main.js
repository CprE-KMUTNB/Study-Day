import React , {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import BackspaceIcon from '@mui/icons-material/Backspace';
import {createEvent , listEvent ,updateEvent,deleteEvent ,createSubject ,listSubject, deleteSubject,createReminder,listReminder,deleteReminder} from '../components/function/fullcalendar';

import {useNavigate} from 'react-router-dom'

import '../Styles/Main.css'
import { Cookie } from '@mui/icons-material'
import { border } from '@mui/system'



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
    loadData()

  },[])
  useEffect(()=>{
    loadDatasubject()

  },[])
  useEffect(()=>{
    loadDatareminder()

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
    .then (res=>{
      loadDatasubject()
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
  }
  const onChangeValuessubject=(e)=>{
    console.log(e.target.value)
    setSubjectvalue({...subjectvalue,[e.target.name]:e.target.value})
    .then (res=>{
      loadDatasubject()
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
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
  
  const delSubject =(info) =>{
    console.log(info.target)
    deleteSubject(info.target.id)
    .then (res=>{
      loadDatasubject()
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
  }

//----------reminder



const [reminder, setReminder] = useState([]);
const [remindervalue,setRemindervalue] = useState({
  "user": user_id, 
  reminder:'',  
})
const  sentreminder =(info)=>{
  console.log(remindervalue)
  createReminder(remindervalue)
  .then (res=>{
    loadDatareminder()
    console.log(res.data)

  }).catch(err=>{
    console.log(err)
  })
}
const onChangeValuesreminder=(e)=>{
  console.log(e.target.value)
  setRemindervalue({...remindervalue,[e.target.name]:e.target.value})
  .then (res=>{
    loadDatareminder()
    console.log(res.data)

  }).catch(err=>{
    console.log(err)
  })
}
const loadDatareminder=()=>{
  listReminder()
  .then(res=>{
    console.log(res)
    setReminder(res.data)
  }).catch(err=>{
    console.log(err)
  })
}

const delReminder =(info) =>{
  console.log(info.target)
  deleteReminder(info.target.id)
  .then (res=>{
    loadDatareminder()
    console.log(res.data)

  }).catch(err=>{
    console.log(err)
  })
}
  return (
    <div className='componentmain'>
      <div className='leftside'>
          <h1>Welcome {localStorage.getItem('username')}</h1>
          <div className='Subject'>
            <h1>Subject</h1>
            <input name = 'subject'  placeholder='title' onChange = {onChangeValuessubject} />
            <select type ='color' name ='color' onChange = {onChangeValuessubject} >
                      <option value=''>--Select tag--</option>
                      <option value='#4285F4'>Blue</option>
                      <option value='#DB4437'>Red</option>
                      <option value ='#8DDD6A'>Green</option>
                      <option value='#FFBD59'>Orange</option>
                      <option value='#89CFF0'>Ocean blue</option>
                      <option value='#FFDE59'>Yellow</option>
            </select>
            <Button variant="primary" onClick={sentsubject}>Ok</Button>
            <ul className='list'>
              {subject.map((subject) => 
              <li id = {subject.id} style={{backgroundColor :subject.color, borderRadius:'5px' , width:'50%' ,margin: '4%' }}>
                {subject.subject}
                <button id = {subject.id} style ={{backgroundColor:'transparent',border:'none'}} onClick= {delSubject}>
                  <BackspaceIcon id = {subject.id} style={{fontSize:'small',margin: '3%' }}>
                  </BackspaceIcon>
                </button>
                </li>)}
            </ul>
            
            
          </div>
          <div className='Riminder'>
                <h1>Reminder</h1>
                <input name = 'reminder'placeholder='Enter reminder' onChange = {onChangeValuesreminder} ></input>
                <Button variant="primary" onClick={sentreminder}>Ok</Button>
           <ul className='list1'>
                {reminder.map((reminder) => 
                <li id = {reminder.id} style={{borderRadius:'5px' , width:'50%' ,margin: '4%'}}>
                  {reminder.reminder}
                  <button id = {reminder.id} style ={{backgroundColor:'transparent',border:'none' }} onClick= {delReminder}>
                    <BackspaceIcon id = {reminder.id} style={{fontSize:'small',margin: '3%' }}>
                    </BackspaceIcon>
                  </button>
                  </li>)}
              </ul>
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
                        <option value='#4285F4'>Blue
                        </option>
                        <option value='#DB4437'>Red
                        </option>
                        <option value ='#8DDD6A'>Green
                        </option>
                        <option value='#FFBD59'>Orange
                        </option>
                        <option value='#89CFF0'>Ocean blue
                        </option>
                        <option value='#FFDE59'>Yellow
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
                        <option value='#4285F4'>Blue</option>
                        <option value='#DB4437'>Red</option>
                        <option value ='#8DDD6A'>Green</option>
                        <option value='#FFBD59'>Orange</option>
                        <option value='#89CFF0'>Baby blue</option>
                        <option value='#FFDE59'>Yellow</option>
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