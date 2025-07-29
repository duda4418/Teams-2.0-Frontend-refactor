import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";

export function ContactCard({ selected, onClick, contact }) {
  return (
    <Card
      size="1"
      mx="1"
      onClick={onClick}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'background-color 0.2s, border 0.2s',
        backgroundColor: selected ? '#e0f2ff' : 'transparent',
        border: selected ? '1px solid #3b82f6' : '1px solid transparent',
      }}
      className="hover:bg-blue-100"
    >
      <Flex gap="3" align="center">
        <Avatar size="3" radius="full" fallback={contact.name?.charAt(0) || "?"} color="indigo" />
        <Box style={{ overflow: 'hidden' }}>
          <Text as="div" weight="bold" className="truncate">
            {contact.name}
          </Text>
          <Text as="div" color="gray" size="2" className="truncate">
            {contact.role}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}

export default ContactCard;
