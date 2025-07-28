import { Box, ScrollArea } from "@radix-ui/themes";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";


export default function MessagesSection() {
    // Adjust the container and ScrollArea to be responsive and stop above the input bar.
    // Assume the input bar has a fixed height (e.g., 64px or 4rem). Adjust as needed.
    return (
        <Box
            position="absolute"
            top="8vh"
            right="4"
            width="69vw"
            p="4"
            style={{
                borderRadius: '0.5rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                height: 'calc(100vh - 14vh)', // container height
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <ScrollArea
                type="scroll"
                scrollbars="vertical"
                style={{
                    flex: 1,
                    minHeight: 0,
                    maxHeight: 'calc(100vh - 14vh - 4rem)',
                    zIndex: 10,
                    paddingRight: '16px',
                    background: 'transparent',
                }}
                viewportProps={{
                    style: {
                        marginRight: '-16px',
                        overflowX: 'hidden',
                    }
                }}
            >
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
                <IncomingMessage text="Hello!" sender="Alice" time="10:00 AM" />
                <OutgoingMessage message="Hi there!" time="10:01 AM" />
            </ScrollArea>
        </Box>
    );
}
