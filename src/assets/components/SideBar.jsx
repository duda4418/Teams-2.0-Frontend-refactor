import { Flex } from "@radix-ui/themes";
import DiscussionCard from './DiscussionCard';
import DiscussionSearch from './DiscussionSearch';
import { ScrollArea } from '@radix-ui/themes';
import InputBar from './InputBar';

export function SideBar() {
  return (
    <div>
      <Flex direction="column" gap="2" className='w-1/4 h-screen px-4 py-6'>
        <div className="w-full">
          <DiscussionSearch />
        </div>

        <ScrollArea type="always" scrollbars="vertical" style={{ height: "calc(100vh - 21vh)" }}>
          <div className='w-full pr-2'> {/* pr-2 helps with scrollbar overlap */}
            {[...Array(45)].map((_, index) => (
              <DiscussionCard key={index} />
            ))}
          </div>
        </ScrollArea>
      </Flex>
    </div>
  );
}
