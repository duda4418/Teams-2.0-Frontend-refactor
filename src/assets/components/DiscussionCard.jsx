import { useState } from 'react'
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";

export function DiscussionCard() {
    return (
        <Box width="30vw"  >
            <Card size="2" my="1" mx="1" >
                <Flex gap="4" align="center">
                    <Avatar size="4" radius="full" fallback="T" color="indigo" />
                    <Box>
                        <Text as="div" weight="bold">
                            Teodros Girmay
                        </Text>
                        <Text as="div" color="gray">
                            Engineering
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
}
export default DiscussionCard;
