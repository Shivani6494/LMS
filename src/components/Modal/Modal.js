import React from 'react'
import {Modal} from '../../Bootstrapplayer/Bootstrapplayer';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';

const ModalWrap = ({title,children,lgShow,setLgShow,submit,isCreate,editSubmit}) => {
  const userClick = () => {
    submit();
  }

    return <Modal
    show={lgShow}
    onHide={() => setLgShow(false)}
    keyboard={false}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      <PrimaryButton text = "Submit" onClick = {isCreate ? submit : editSubmit} />
      <SecondaryButton text = "Close" onClick={() => setLgShow(false)}/>
    </Modal.Footer>
  </Modal>
}

export default ModalWrap;