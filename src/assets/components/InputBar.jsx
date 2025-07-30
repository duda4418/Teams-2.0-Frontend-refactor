import { Box, Button, TextArea } from "@radix-ui/themes";
import { SendHorizontal } from "lucide-react";
import {useState, useEffect } from "react";
import { useWebSocket } from "./WebSocketContext";
const API_URL = import.meta.env.VITE_API_URL;

export default function InputBar({discussion, user}) {

    const [typedMessage, setTypedMessage] = useState("");
    const { send } = useWebSocket();

    const sendMessage = async () => {
        console.log("Sending message:", typedMessage);
        console.log("Discussion ID:", discussion.id);
        console.log("User ID:", user.id);
        try {
            const response = await fetch(`${API_URL}/messages`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    discussion_id: discussion.id,
                    user_id: user.id,
                    value: typedMessage
                }),
        });

        if (!response.ok) {
            throw new Error("Send message failed");
        }

        const data = await response.json();
        setTypedMessage("");
        send({ ...data, type: "message" });
        console.log("Message sent:", data);
        } catch (error) {
        console.error("Send message error:", error);
        }
    };


    return (
        <div>
            <Box
                position="absolute"
                bottom="1"
                right="4"
                width="69vw"
                p="4"
                style={{
                    backgroundColor: "white",
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    zIndex:20
                }}
            >
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                    <TextArea
                        value={typedMessage}
                        onChange={(e) => setTypedMessage(e.target.value)}
                        size="2"
                        placeholder="Type a message"
                        style={{ width: '100%', height:"4rem" }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                    />
                    <Button
                        style={{ height: '3rem' }}
                        my="2"
                        radius="full"
                        onClick={sendMessage}
                    >
                        <SendHorizontal />
                    </Button>
                </div>
            </Box>
        </div>
    );
}
