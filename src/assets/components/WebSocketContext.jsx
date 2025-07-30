import { createContext, useContext, useEffect, useRef, useState } from "react";

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ user, children }) => {
  const socketRef = useRef(null);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    if (!user) return;

    socketRef.current = new WebSocket(`ws://localhost:8000/ws/${user.id}`);

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket Connected");
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLastMessage(data);
    };

    socketRef.current.onclose = () => {
      console.log("❌ WebSocket Disconnected");
    };

    return () => {
      socketRef.current.close();
    };
  }, [user]);

  const send = (data) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(data));
    } else {
      console.warn("WebSocket is not open");
    }
  };

  return (
    <WebSocketContext.Provider value={{ send, lastMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
