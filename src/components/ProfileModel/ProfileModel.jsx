import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <form action="" className="InfoForm">
            <h3>Your info that you have sold already...</h3>
        </form>
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}