import { Box, ScrollArea } from "@radix-ui/themes";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export default function MessagesSection({discussion, user}) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (user!=null && discussion!=null) {
            console.log("Fetching messages for discussion:", discussion.id, "and user:", user.id);
            const getMessages = async () => {
                try {
                    const response = await fetch(`${API_URL}/messages?user_id=${user.id}&discussion_id=${discussion.id}`, {
                        method: "GET",
                        headers: {
                        "Content-Type": "application/json",
                        }
                });

                if (!response.ok) {
                    throw new Error("Get messages failed");
                }

                const data = await response.json();
                setMessages(data);
                console.log("Messages fetched:", data);
                } catch (error) {
                console.error("Get messages error:", error);
                }
            };
            getMessages();
        }
    }, [user, discussion]);

    // Adjust the container and ScrollArea to be responsive and stop above the input bar.
    // Assume the input bar has a fixed height (e.g., 64px or 4rem). Adjust as needed.
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
                height: 'calc(100vh - 14vh)', // container height
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
                    // Format time to HH:MM
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
            </ScrollArea>
        </Box>
    );
}
