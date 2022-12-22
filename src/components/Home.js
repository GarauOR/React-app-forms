import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Home(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <Button variant="primary" onClick={handleShow} style={{marginTop:"100px"}}>
        Launch modal!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lasagna Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ol>
                <li>Preheat the oven to160C/325F/Gas 3.</li>
                <li>For the ragu, heat a large frying pan until hot and add the oil. Cook the mince until browned all over. Remove from the heat and transfer to a plate. Add the onion, celery (if using) and garlic to the pan and cook until softened. Return the meat to the pan and stir in the flour. Add the stock and bring to the boil. Add the redcurrant jelly (or sugar), tomato purée and thyme, then stir well.</li>
                <li>Stir in the canned tomatoes. Bring to the boil again, cover and simmer in the oven for 1-½ hours, or until the beef is tender.</li>
                <li>For the white sauce, melt the butter in a saucepan. Add the flour and cook over the heat for one minute. Gradually whisk in the hot milk, whisking until thickened. Add the Dijon mustard and parmesan cheese and season well with salt and pepper.</li>
                <li>For the lasagne, put one third of the meat sauce in the base of a 2.3 litre/4 pint shallow ovenproof dish. Spoon one third of the white sauce on top. Arrange one layer of lasagne sheets on top. Season. Spoon half of the remaining meat sauce on top and then half of the white sauce. Put another layer of lasagne sheets on top, then the remaining meat sauce and remaining white sauce. Sprinkle over the cheddar cheese.</li>
                <li>Leave for six hours before cooking so that the pasta can start to soften.</li>
                <li>Preheat the oven temperature to 200C/400F/Gas 6.</li>
                <li>Cook in the middle of the oven for about 45 minutes- or until golden brown on top, bubbling around the edges and the pasta is soft.</li>
            </ol>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Let's Prepare it!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
