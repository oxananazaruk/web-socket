import io from "socket.io-client";

import Chat from "./Chat/Chat";
import ChatForm from "./ChatForm/ChatForm";
import SinginChatForm from "./SinginChatForm/SinginChatForm";
import { useState, useCallback, useEffect } from "react";
import { nanoid } from "nanoid";

const socket = io.connect("http://localhost:3001")

export const App = () => {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat-message", message => {
      setMessages(prevMessages => {
        const newMessage = {
          id: nanoid(),
          type: "user",
          message,
        }
      
        return [newMessage, ...prevMessages]
      })
    })
  }, [])

  const addNickname = useCallback(({ name }) => setNickname(name), [])
  
  const addMessage = useCallback(({ message }) => {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        message,
      }
      
      return [newMessage, ...prevMessages]
    })
    
    socket.emit("chat-message", message)
  }, [])

  return (
    <div>
      {nickname && <Chat items={messages } />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {!nickname && <SinginChatForm onSubmit={addNickname} />}
    </div>
  )
}

 