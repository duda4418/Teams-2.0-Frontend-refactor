import { useState, useEffect } from 'react'
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon} from "@radix-ui/react-icons";
import { EllipsisVertical } from "lucide-react"
import { DropdownMenu } from '@radix-ui/themes';
import { MessageCirclePlus } from "lucide-react";
import NewChatDialog from './NewChatDialog';
const API_URL = import.meta.env.VITE_API_URL;

export function DiscussionSearch({user}) {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (user) {
        const getContacts = async () => {
            try {
                const response = await fetch(`${API_URL}/contacts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
                });

                if (!response.ok) {
                throw new Error("Contacts fetch failed");
                }

                const data = await response.json();
                setContacts(data);
                console.log("User contacts:", data);
            } catch (error) {
                console.error("Contacts fetch error:", error);
            }
            };
        getContacts();
        }
    }, [user]);
    return (
        <Box maxWidth="30vw" p="3" pt="1" style={{ textAlign: 'left' }}>
            <Flex justify="between" align="center" gap="2">
                <h2 style={{ fontFamily: '"Segoe UI", Arial, sans-serif', marginLeft: '1vh' }}>Teams 2.0</h2>
                <Flex align="center" gap="2">
                    <NewChatDialog
                        trigger={
                            <MessageCirclePlus />
                        }
                        contacts={contacts}
                        user={user}
                    />
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <EllipsisVertical />
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item >Settings</DropdownMenu.Item>
                            <DropdownMenu.Separator />                       
                            <DropdownMenu.Item color="red">
                                Log out
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Flex>
            <TextField.Root placeholder="Search discussions…" radius='full' size="3">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </Box>
    );
}

export default DiscussionSearch;
