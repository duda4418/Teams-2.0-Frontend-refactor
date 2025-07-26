import { Box, Button, TextArea } from "@radix-ui/themes";

export default function MessagesSection() {
    return (
        <div className="">
            <Box
                position="absolute"
                top="14vh"
                right="4"
                width="69vw"
                backgroundColor="white"
                p="4"
                style={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
                height={'calc(100vh - 14vh - 10vh)'}
            >
                <p>HERE ARE ALL THE MESSAGES</p>
            </Box>
        </div>
    );
}
