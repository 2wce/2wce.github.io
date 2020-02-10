/* eslint-disable react/prop-types */
import axios from 'axios';
import { Button, Input } from 'components/common';
import { ErrorMessage, FastField, Form, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Center, Error, InputField } from './styles';

const ContactForm = ({ isSubmitting, values, errors, touched }) => (
  <Form
    name="portfolio-dev"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="bot-field"
  >
    <InputField>
      <Input
        as={FastField}
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Full name*"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="_replyto"
        placeholder="Email*"
        error={touched._replyto && errors._replyto}
      />
      <ErrorMessage component={Error} name="_replyto" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Message*"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {/* {values.name && values._replyto && values.message && (
      <InputField>
        <FastField
          component={Recaptcha}
          sitekey="6LeozdUUAAAAAOZgZFg_TTWqPyNwliJCdSs9Fi_o"
          name="recaptcha"
          onChange={value => setFieldValue('recaptcha', value)}
        />
        <ErrorMessage component={Error} name="recaptcha" />
      </InputField>
    )} */}
    {values.success && (
      <InputField>
        <Center>
          <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
        </Center>
      </InputField>
    )}
    <Center>
      <Button secondary type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    _replyto: '',
    message: '',
    // recaptcha: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      _replyto: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      // recaptcha: Yup.string().required('Robots are not welcome yet!'),
    }),
  handleSubmit: async (data, { setSubmitting, resetForm, setFieldValue }) => {
    try {
      delete data.success;
      await axios({
        method: 'POST',
        url: 'https://formspree.io/mnqdgrkr',
        data,
      });
      await setSubmitting(false);
      await setFieldValue('success', true);
      setTimeout(() => resetForm(), 2000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
			alert('Something went wrong, please try again!') // eslint-disable-line
    }
  },
})(ContactForm);
