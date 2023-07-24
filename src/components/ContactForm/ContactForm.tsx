import {
  ContactFormValues,
  useSubmitContactForm,
} from '@/hooks/useSubmitContactForm';
import { Box, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SubmitButton } from '../Buttons';
import TextFormField from './TextFormField';

const contactFormInitialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const { onSubmit, loading } = useSubmitContactForm();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    email: Yup.string().email().required('Your email is required'),
    message: Yup.string().max(
      100,
      'Your message is too long, less than 250 characters please!'
    ),
  });

  return (
    <Formik<ContactFormValues>
      initialValues={contactFormInitialValues}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ dirty, isValid }) => (
        <Box
          component={Form}
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <Stack spacing={4}>
            <Typography
              variant="h6"
              fontWeight={900}
              sx={{
                textShadow:
                  '#C1FAFF 0px 2px 5px, #C1FAFF 2px 0px 5px, #C1FAFF 0px -2px 5px, #C1FAFF -2px 0px 5px',
              }}
            >
              Feel free to get in touch using the contact form below. Whether
              you have questions, feedback, or exciting new opportunities, this
              form is the perfect way to reach out. Let&apos;s collaborate!
            </Typography>
            <TextFormField name="name" label="Name" />
            <TextFormField name="email" label="Email" />
            <TextFormField name="message" label="Leave a Message!" />
            <SubmitButton
              status={loading}
              buttonProps={{
                variant: 'contained',
                type: 'submit',
                disabled: !dirty || !isValid || loading !== 'inactive',
                sx: { minWidth: '50%' },
              }}
              badgeProps={{
                anchorOrigin: { horizontal: 'left', vertical: 'top' },
              }}
            />
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
