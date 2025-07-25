import { useState } from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";
import DiscussionCard from './DiscussionCard';
import DiscussionSearch from './DiscussionSearch';
import { ScrollArea } from '@radix-ui/themes';
import InputBar from './InputBar';

export function SideBar() {
  return (
    <div>
      <Flex direction="column" gap="2" className='w-30vw h-screen px-4 py-6'>
        <div className="w-full">
          <DiscussionSearch />
        </div>
        
          <div className='w-full'>
            {[...Array(45)].map((_, index) => (
              <DiscussionCard key={index} />
            ))}
          </div>
      </Flex>
    </div>
  );
}
export default SideBar;
