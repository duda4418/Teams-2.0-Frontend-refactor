import { Box, Button, TextArea } from "@radix-ui/themes";

export default function InputBar() {
    return (
        <div className="">
            <Box
                position="absolute"
                bottom="1"
                right="4"
                width="69vw"
                backgroundColor="white"
                p="4"
                style={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                    <TextArea size="2" placeholder="Type a message" style={{ width: '100%' }} />
                    <Button style={{ height: '3rem' }} my="2">Send</Button>
                </div>
            </Box>
        </div>
    );
}
