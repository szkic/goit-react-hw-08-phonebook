import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styles = {
  box: [
    'absolute',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'rounded-xl',
    'bg-slate-50',
    'p-9',
    'shadow-lg',
  ].join(' '),
  boxTitle: ['text-center', 'pb-7', 'uppercase', 'font-semibold'].join(' '),
};

export const ContactModal = ({ open, handleModalClose, children, title }) => {
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.box}>
        <h3 className={styles.boxTitle}>{title}</h3>
        {children}
      </Box>
    </Modal>
  );
};
