import { Backdrop, Fade, Modal } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import EomState from '../store/EomState';

const ImageModal = observer(() => {

  const [store] = useState(EomState);

    const handleCloseImage = () => {
        store.setOpenImage(false);
    }
  return (
    <Modal
    className="modal"
    open={store.isOpenedImage}
    onClose={handleCloseImage}
    closeAfterTransition
    slotProps={{
      backdrop: {
        timeout: 500
      }
    }}
    slots={{
      backdrop: Backdrop
    }}
  >
    <Fade in={store.isOpenedImage} timeout={500} className="img">
      <img
        src={store.image}
        alt="FullScreen"
        style={{ maxHeight: "95%", maxWidth: "95%", cursor: 'zoom-out' }}
        onClick={handleCloseImage}
      />
    </Fade>
  </Modal>
  )
})

export default ImageModal