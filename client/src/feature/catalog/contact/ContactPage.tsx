import { Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterState, DECREMENT_COUNTER, INCREMENT_COUNTER } from './counterReducer'

const ContactPage = () => {
  const dispatch = useDispatch();
  const {data, title} = useSelector((state: CounterState) => state )

  return (
    <>
    <Typography variant='h4'> {data}</Typography>
    <Typography variant='h4'>{title} </Typography>
    <ButtonGroup>
      <Button onClick={() => dispatch({type: DECREMENT_COUNTER})} variant='contained' color='error'>Decrement</Button>
      <Button onClick={() => dispatch({type: INCREMENT_COUNTER})} variant='contained' color='primary'>Increment</Button>
    </ButtonGroup>
    </>
  )
}

export default ContactPage