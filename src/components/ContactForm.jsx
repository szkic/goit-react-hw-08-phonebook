import { Button, TextField } from '@mui/material';

const styles = {
  container: ['flex', 'justify-center'].join(' '),
  form: ['flex', 'flex-col', 'items-start', 'max-w-sm'].join(' '),
  label: ['flex', 'flex-col', 'mb-5', 'w-60'].join(' '),
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <TextField
            type="text"
            size="small"
            name="name"
            label="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          <TextField
            type="tel"
            size="small"
            name="number"
            label="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit" variant="contained" style={{ margin: '0 auto' }}>
          Save
        </Button>
      </form>
    </div>
  );
};
