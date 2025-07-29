import { useEffect, useState } from "react";
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";

const API_URL = import.meta.env.VITE_API_URL;

export function DiscussionCard({ selected, onClick, discussion, user }) {
  const [nameList, setNameList] = useState([]);

  return (
    <Box width="30vw">
      <Card
        size="2"
        mx="1"
        style={{
          cursor: "pointer",
          backgroundColor: selected ? "lightblue" : "transparent",
          transition: "background-color 0.2s ease-in-out",
        }}
        onMouseOver={(e) => {
          if (!selected) e.currentTarget.style.backgroundColor = "lightblue";
        }}
        onMouseOut={(e) => {
          if (!selected) e.currentTarget.style.backgroundColor = "transparent";
        }}
        onClick={onClick}
      >
        <Flex gap="4" align="center">
          <Avatar size="4" radius="full" fallback={discussion.name?.charAt(0)} color="indigo" />
          <Box>
            <Text as="div" weight="bold">
              {discussion.name || "Unnamed discussion"}
            </Text>
            <Text as="div" color="gray">
              {discussion.contacts.length === 1
                ? "1 participant"
                : `${discussion.contacts.length} participants`}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default DiscussionCard;
