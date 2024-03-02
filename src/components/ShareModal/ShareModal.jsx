import React, {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme, Button } from '@mantine/core';

import PostShare from '../PostShare/PostShare'

function ShareModal({modalOpened, setModalOpened}) {
  // const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        // overlayProps={{
        //   backgroundOpacity: 0.60,
        //   blur: 6,
        //   size: '80%',
        // }}
        overlayOpacity={0.60}
        overlayBlur={6}
        size="60%"
        overlayColor={
          theme.colorScheme === "dark"
          ? theme.colors.dark[10]
          : theme.colors.blue[6]
        }
      >
        <PostShare/>
      </Modal>

     
  
  );
}

export default ShareModal