import { Flex } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";

export function NavBar() {
  return (
    <div>
         <Box 
                minWidth="69vw"
                position="absolute"
                top="2"
                right="4"
                width="69vw"
                backgroundColor="white"
                p="4"
                style={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}
            >
           <p style={{ textAlign: "left" }}>DISCUSSION TITLE</p>
        </Box>
    </div>
  );
}
