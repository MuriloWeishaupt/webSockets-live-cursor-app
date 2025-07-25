import { useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';
import throttle from 'lodash.throttle';

export function Home({ username }) {

    const WS_URL = "ws://127.0.0.1:8000"
    const { sendJsonMessage } = useWebSocket(WS_URL, {
        queryParams: { username }
    })

    const THROTTLE = 50
    const sendJsonMessagethrottled = useRef(throttle(sendJsonMessage, THROTTLE))

    useEffect(() => {
        window.addEventListener("mousemove", e => {

            sendJsonMessagethrottled.current({
                x: e.clientX,
                y: e.clientY
            })

        })        
    }, [])

    return <h1>Hello, {username} </h1>
}