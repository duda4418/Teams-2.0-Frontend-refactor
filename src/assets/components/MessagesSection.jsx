import { Box, ScrollArea } from "@radix-ui/themes";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import { useEffect, useRef, useState } from "react";
import { useWebSocket } from "./WebSocketContext"; 
const API_URL = import.meta.env.VITE_API_URL;

export default function MessagesSection({ discussion, user }) {
    const [messages, setMessages] = useState([]);
    const { lastMessage } = useWebSocket();
    const bottomRef = useRef(null);

    useEffect(() => {
        if (user && discussion) {
            const getMessages = async () => {
                try {
                    const response = await fetch(`${API_URL}/messages?user_id=${user.id}&discussion_id=${discussion.id}`, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    });

                    if (!response.ok) throw new Error("Get messages failed");

                    const data = await response.json();
                    setMessages(data);
                } catch (error) {
                    console.error("Get messages error:", error);
                }
            };
            getMessages();
        }
    }, [user, discussion]);

    // Append new WebSocket messages
    useEffect(() => {
        if (lastMessage && lastMessage.discussion_id === discussion.id) {
            setMessages((prev) => [...prev, lastMessage]);
        }
    }, [lastMessage]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Box
            position="absolute"
            top="8vh"
            right="4"
            width="69vw"
            p="4"
            style={{
                borderRadius: '0.5rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                height: 'calc(100vh - 14vh)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <ScrollArea
                type="scroll"
                scrollbars="vertical"
                style={{
                    flex: 1,
                    minHeight: 0,
                    maxHeight: 'calc(100vh - 14vh - 4rem)',
                    zIndex: 10,
                    paddingRight: '16px',
                    background: 'transparent',
                }}
                viewportprops={{
                    style: {
                        marginRight: '-16px',
                        overflowX: 'hidden',
                    }
                }}
            >
                {messages.map((msg) => {
                    let formattedTime = "";
                    if (msg.time) {
                        const date = new Date(msg.time);
                        if (!isNaN(date.getTime())) {
                            formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        } else {
                            const match = msg.time.match(/\d{2}:\d{2}/);
                            formattedTime = match ? match[0] : msg.time;
                        }
                    }
                    return msg.user_id === user.id ? (
                        <OutgoingMessage key={msg.id} message={msg.value} time={formattedTime} />
                    ) : (
                        <IncomingMessage key={msg.id} text={msg.value} sender={msg.name} time={formattedTime} />
                    );
                })}

                <div ref={bottomRef} />
            </ScrollArea>
        </Box>
    );
}
