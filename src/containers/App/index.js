import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Widget from '../Widget'
import { createWS } from '../../websocket'
import { useDispatch } from 'react-redux'
import { setData } from './actions'

export default function AppWrapper() {
  const [socket, setSocket] = useState(null)
  const dispatch = useDispatch()
  const [isOnline, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    createWebSocket()
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
  }, [])

  function handleOnline() {
    createWebSocket()
    setOnline(true)
  }

  function handleOffline() {
    closeWebSocket()
    setOnline(false)
  }

  function createWebSocket() {
    if (!isOnline) return;
    if (socket) return;
    setSocket(createWS(getDataByWS))
  }

  function closeWebSocket() {
    socket && socket.close && socket.close()
    setSocket(null)
  }

  function getDataByWS(data) {
    dispatch(setData(data))
  }

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Widget />
        </Col>
        <Col md="12" className="p-0 pt-1 pl-1">
          {socket && <Button onClick={closeWebSocket} size="sm" variant="outline-danger">Disconnect</Button>}
          {!socket && <Button onClick={createWebSocket} size="sm" variant="outline-success" disabled={!isOnline}>Connect</Button>}
        </Col>
      </Row>
    </Container>
  )
}