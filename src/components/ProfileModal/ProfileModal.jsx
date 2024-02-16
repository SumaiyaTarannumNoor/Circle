import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
       <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form action="" className="InfoForm">
            <h3>Your info that you have sold already...</h3>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal