import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks'
import { getRoomBookingThunk, selectRoomBookingState } from '../../redux-toolkit/room/room-slice'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getRoomBooking } from '../../services/room.service'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import {format} from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import {th} from 'date-fns/locale'
import { RoomBooking } from '../../interface/room-booking.type';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';

const locales = {
  'th-TH': th,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})



export default function DHome() {
  const dispatch = useAppDispatch()
  const { roomBooking } = useAppSelector(selectRoomBookingState)

  const onSelectEvent = (event : any) => {
      let data = {
        id: event.id,
        title : event.title,
        start: format(Date.parse(event.start), 'dd MMMM yyyy HH:mm:ss', {locale: th}),
        end: format(Date.parse(event.start), 'dd MMMM yyyy HH:mm:ss', {locale: th}),
        createdBy: event.created_by,
      }
      alert(JSON.stringify(data))
  }

  let myEvents = roomBooking?.events.map((item) =>{
    return {
      id: item.id,
      title: item.title,
      start: new Date(item.start),
      end: new Date(item.end),

    }
  })

  useEffect(() => {
    dispatch(getRoomBookingThunk());
    console.log(roomBooking?.events);
  
  },[])



  return (
    <Grid templateAreas={'main'} bgColor={useColorModeValue('white','#F7FAFC')} padding={'10'} color={'#000'} boxShadow='2xl'>
       <Calendar
          culture='th-TH'
          localizer={localizer}
          events={[...(myEvents? myEvents:[])]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views = {['month','week','day','agenda']}
          onSelectEvent={onSelectEvent}
        />
    </Grid>
  )
}
