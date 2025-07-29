import { useEffect, useState } from "react";
import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";

const API_URL = import.meta.env.VITE_API_URL;

export function DiscussionCard({ selected, onClick, discussion, user }) {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    if (discussion.contacts?.length) {
      fetchContactNames(discussion.contacts);
    }
  }, [discussion.contacts]);

  const fetchContactNames = async (contactIds) => {
    try {
      const responses = await Promise.all(
        contactIds.map((id) =>
          fetch(`${API_URL}/contacts/${id}`, {
            headers: { "Content-Type": "application/json" },
          })
        )
      );

      const users = await Promise.all(
        responses.map((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load contact ${res.url}`);
          }
          return res.json();
        })
      );

      const names = users.map((u) => u.name);
      setNameList(names);
    } catch (error) {
      console.error("Error fetching contact names:", error);
    }
  };

  const getDiscussionTitle = () => {
    if (discussion.name) return discussion.name;

    if (!nameList.length || !discussion.contacts?.length) return "Unnamed discussion";

    // Replace your own name with "You"
    const titleParts = discussion.contacts.map((id, index) =>
      id === user.id ? "You" : nameList[index]
    );

    return titleParts.join(", ");
  };

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
          <Avatar size="4" radius="full" fallback={getDiscussionTitle().charAt(0)} color="indigo" />
          <Box>
            <Text as="div" weight="bold">
              {getDiscussionTitle()}
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
