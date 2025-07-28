import { useState } from 'react'
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { EllipsisVertical } from "lucide-react"
import { DropdownMenu } from '@radix-ui/themes';


export function DiscussionSearch() {
    return (
        <Box maxWidth="30vw" p="3" pt="1" style={{ textAlign: 'left' }}>
            <Flex justify="between" align="center" gap="2">
                <h2 style={{ fontFamily: '"Segoe UI", Arial, sans-serif', marginLeft: '1vh' }}>Teams 2.0</h2>
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
            <TextField.Root placeholder="Search discussions…" radius='full' size="3">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </Box>
    );}
    
export default DiscussionSearch;
