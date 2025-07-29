import { Avatar, Flex } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";

export default function NavBar({ discussion }) {
  return (
    <div>
      <Box
        minWidth="69vw"
        position="absolute"
        top="2"
        right="4"
        width="69vw"
        p="4"
        px="5"
        style={{
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          minHeight: "8vh",
          height: "9vh",
          maxHeight: "15vh",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          zIndex: 20,
          backgroundColor: "white",
        }}
      >
        <Avatar size="3" radius="full" fallback={discussion.name?.charAt(0)} color="indigo" />

        <p
          style={{
            textAlign: "left",
            marginLeft: "1rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#1e293b",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {discussion?.name || "Select a discussion"}
        </p>
      </Box>
    </div>
  );
}
