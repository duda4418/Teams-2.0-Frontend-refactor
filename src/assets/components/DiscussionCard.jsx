import { Flex, Text, Box, Card, Avatar } from "@radix-ui/themes";

export function DiscussionCard({ selected, onClick }) {
  return (
    <Box width="30vw">
      <Card
        size="2"
        mx="1"
        style={{
          cursor: 'pointer',
          backgroundColor: selected ? 'lightblue' : 'transparent',
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseOver={(e) => {
          if (!selected) e.currentTarget.style.backgroundColor = 'lightblue';
        }}
        onMouseOut={(e) => {
          if (!selected) e.currentTarget.style.backgroundColor = 'transparent';
        }}
        onClick={onClick}
      >
        <Flex gap="4" align="center">
          <Avatar size="4" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default DiscussionCard;
