import { Box } from "@radix-ui/themes";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";

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
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
            </Box>
        </div>
    );
}
