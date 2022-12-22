import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        an example of what happens when you log in 
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='flex'>
        <Button variant="Profile"><a href="https://github.com/aminelaarif">Profile</a> </Button>
        <Button variant="Goals"><a href="https://media.tenor.com/SImrhJKWRYYAAAAC/jalel-jalel-ok.gif">Goals</a></Button>
        <Button variant="achievments"><a href="https://i.makeagif.com/media/2-02-2017/QRzyYe.gif">achievements</a></Button>

         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;