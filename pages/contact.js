import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (<Fragment>
    <Head>
      <title>Jay's Blog</title>
      <meta name="description" content="Send me an email" />
    </Head>
    <ContactForm />
  </Fragment>
  );
}

export default ContactPage;