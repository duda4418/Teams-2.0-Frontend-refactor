import { Flex } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";

export default function NavBar() {
  return (
    <div>
      <Box
        minWidth="69vw"
        position="absolute"
        top="2"
        right="4"
        width="69vw"
        p="4"
        style={{
          borderRadius: '0.5rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          minHeight: '8vh',
          height: '9vh',
          maxHeight: '15vh',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          zIndex:20,
          backgroundColor: 'white',
        }}
        
      >
        <p style={{ textAlign: "left", margin: 0 }}>DISCUSSION TITLE</p>
      </Box>
    </div>
  );
}
