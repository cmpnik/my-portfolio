import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqazznyl");
  const [open, setOpen] = useState(false); // State to manage Snackbar visibility
  const [formValues, setFormValues] = useState({ email: '', message: '' });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpen(false); // Close Snackbar
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Effect to trigger Snackbar when form submission succeeds
  React.useEffect(() => {
    // TO-DO: Rerender snackbar alert when form is resubmitted
    if (state.succeeded) {
      setOpen(true); // Open Snackbar
      setFormValues({ email: '', message: '' }); // Reset form values
    }
  }, [state.succeeded]);

  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Card>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className={styles.cardContent}
          >
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact form
              </Typography>
              <TextField
                id="email"
                type="email"
                name="email"
                label="Email Address"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}
                value={formValues.email}
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                sx={{ marginBottom: 2 }}
                value={formValues.message}
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={state.submitting}
                className={styles.submitButton}
              >
                Submit
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks for joining!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
