import { Modal, useMantineTheme, Button } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
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
        size="40%"
        overlayColor={
          theme.colorScheme === "dark"
          ? theme.colors.dark[10]
          : theme.colors.blue[6]
        }
      >
        <form style={{alignItems: "center"}} className='YourInfo' action="">
          <h3>Your INFO that you have already SOLD!!!</h3>

          <div style={{alignItems: "center"}} className='InfoCard'>
            <input type="text" className="InfoCard" name='FirstName' placeholder='First Name'/>
            <input type="text" className="InfoCard" name='LastName' placeholder='Last Name'/>
            <input type="text" className="InfoCard" name='WorksAt' placeholder='Works At'/>
            <input type="text" className="InfoCard" name='LivesIn' placeholder='Lives In'/>
          </div>
          <div style={{alignItems:"left"}} className='InfoCard'>
           <h4>Profile Image</h4><input type="file" name="profileImage" className="InfoCard"/>
            <h4>Cover Image</h4> <input type="file" name="coverImage" className="InfoCard" />

            <buttont className="button InfoButton">UPDATE</buttont>
          </div>
        </form>
      </Modal>

     
  
  );
}

export default ProfileModal