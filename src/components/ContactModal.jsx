import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styles = [
  'absolute',
  'top-1/2',
  'left-1/2',
  '-translate-x-1/2',
  '-translate-y-1/2',
  'rounded-xl',
  'bg-slate-50',
  'p-9',
  'shadow-lg',
].join(' ');

export const ContactModal = ({ open, handleModalClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles}>{children}</Box>
    </Modal>
  );
};
