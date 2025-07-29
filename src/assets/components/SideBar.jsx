import { useState, useEffect } from 'react';
import { Flex } from "@radix-ui/themes";
import DiscussionCard from './DiscussionCard';
import DiscussionSearch from './DiscussionSearch';
import { ScrollArea } from '@radix-ui/themes';
const API_URL = import.meta.env.VITE_API_URL;


export default function SideBar({user}) {
  
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [discussions, setDiscussions] = useState([]);
    useEffect(() => {

      const getDiscussions = async () => {
        try {
          const response = await fetch(`${API_URL}/discussions`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch discussions");
          }

          const data = await response.json();
          setDiscussions(data);
          console.log("Fetched discussions:", data);

        } catch (error) {
          console.error("Failed to fetch discussions:", error);
        }
      };

      getDiscussions(); 
    }, []);
  
  return (
    <Flex
      direction="column"
      gap="2"
      className="w-1/4 px-4 py-6"
      style={{ height: '100dvh', maxHeight: '100dvh' }}
    >
      <div className="w-full">
        <DiscussionSearch user={user}/>
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
          {discussions.map((discussion, index) => (
            <DiscussionCard
              key={index}
              selected={index === selectedCardIndex}
              onClick={() => setSelectedCardIndex(index)}
              discussion={discussion}
              user={user}
            />
          ))}
        </div>
      </ScrollArea>
    </Flex>
  );
}
