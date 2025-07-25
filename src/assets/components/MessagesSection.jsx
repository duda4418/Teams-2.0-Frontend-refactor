import { Box, Button, TextArea } from "@radix-ui/themes";

export default function MessagesSection() {
    return (
        <div className="">
            <Box
                position="absolute"
                bottom="2"
                right="4"
                width="69vw"
                backgroundColor="white"
                p="4"
                style={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <p>HERE ARE ALL THE MESSAGES</p>
            </Box>
        </div>
    );
}
