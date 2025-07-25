import { useState } from 'react'
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";


export function DiscussionSearch() {
	return (
        <Box maxWidth="30vw" p="3" pt="6">
            <TextField.Root placeholder="Search discussions…" radius='full' size="3">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </Box>
	);}
export default DiscussionSearch;
