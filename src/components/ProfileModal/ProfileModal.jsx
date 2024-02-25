import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ColorSchemeProvider } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
       <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        title="Authentication"
        overlayColor={
          ColorSchemeProvider === ""
        }
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 4,
          size: 60
        }}
      >
        <form action="" className="InfoForm">
            <h3>Your info that you have sold already...</h3>

            <div>
              <input type="text" className='InfoInput' name="FirstName" placeholder='First Name' />
              
              <input type="text" className='InfoInput' name="LastName" placeholder='Last Name' />
            </div>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal