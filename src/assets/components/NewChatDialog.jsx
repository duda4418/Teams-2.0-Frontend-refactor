import { Dialog } from "@radix-ui/themes";
import { Flex, Button, TextField, ScrollArea} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import ContactCard from "./ContactCard";
import ContactLabel from "./ContactLabel";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export function NewChatDialog({trigger, contacts}) {

    const [selectedContacts, setSelectedContacts] = useState([]);

    const toggleSelect = (contact) => {
        setSelectedContacts((prev) =>
        prev.some((c) => c.id === contact.id)
            ? prev.filter((c) => c.id !== contact.id)
            : [...prev, contact]
        );
    };

    const createDiscussion = async () => {
      try {
        const response = await fetch(`${API_URL}/discussions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contacts: selectedContacts.map((c) => c.id),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create discussion");
        }

        const data = await response.json();
        console.log("Discussion created:", data);
      } catch (error) {
        console.error("Error creating discussion:", error);
      }
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {trigger}
            </Dialog.Trigger>

           <Dialog.Content
                maxWidth="450px"
                style={{
                    maxHeight: '88vh',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                <Dialog.Title>Start a New Chat</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Choose a contact to start a new chat with.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <TextField.Root placeholder="Search contacts…" radius="full" size="2">
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    </TextField.Root>
                </Flex>

                <Flex direction="column" style={{ flex: 1, gap: '0.5rem', minHeight: 0 }}>
                    <Flex
                    wrap="wrap"
                    gap="2"
                    style={{
                        width: '100%',
                        padding: '0.25rem 0',
                    }}
                    >
                    {selectedContacts.map((contact) => (
                        <ContactLabel
                            key={contact.id}
                            contact={contact}
                            onRemove={() =>
                                setSelectedContacts((prev) =>
                                    prev.filter((c) => c.id !== contact.id)
                                )
                            }
                        />
                    ))}

                    </Flex>

                    <ScrollArea
                        scrollbars="vertical"
                        style={{
                            flex: 1,
                            minHeight: 0,
                        }}
                        >
                        <div
                            className="w-full pr-2"
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingTop: '2rem',
                            }}
                        >
                        {contacts.map((contact) => (
                            <ContactCard
                                key={contact.id}
                                selected={selectedContacts.some((c) => c.id === contact.id)}
                                onClick={() => toggleSelect(contact)}
                                contact={contact}
                            />
                        ))}

                        </div>
                    </ScrollArea>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={createDiscussion}>New Chat</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>

        </Dialog.Root>

    );}
    
export default NewChatDialog;
