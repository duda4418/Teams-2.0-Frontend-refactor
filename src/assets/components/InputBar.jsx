import { Box, TextArea } from "@radix-ui/themes";

export default function InputBar() {
    return (
        <Box
            position="absolute"
            bottom="8"
            right="8"
            width="60vw"
            backgroundColor="white"
            p="4"
            style={{
                borderRadius: '0.5rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
        >
            <TextArea size="2" placeholder="Reply to comment…" style={{ width: '100%' }} />
        </Box>
    );
}
