import { useState } from 'react';
import { Flex } from "@radix-ui/themes";
import DiscussionCard from './DiscussionCard';
import DiscussionSearch from './DiscussionSearch';
import { ScrollArea } from '@radix-ui/themes';

export default function SideBar() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <Flex
      direction="column"
      gap="2"
      className="w-1/4 px-4 py-6"
      style={{ height: '100dvh', maxHeight: '100dvh' }}
    >
      <div className="w-full">
        <DiscussionSearch />
      </div>

      <ScrollArea
        type=""
        scrollbars="none"
        style={{
          flex: 1,
          minHeight: 0,
          maxHeight: "100%",
        }}
      >
        <div className="w-full pr-2">
          {[...Array(45)].map((_, index) => (
            <DiscussionCard
              key={index}
              selected={index === selectedCardIndex}
              onClick={() => setSelectedCardIndex(index)}
            />
          ))}
        </div>
      </ScrollArea>
    </Flex>
  );
}
