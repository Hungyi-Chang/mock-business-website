import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import Head from 'next/head';
import {
  UnstyledButton as Button,
  reuseableStyles,
  Padding,
  Font_1,
  FlexVertical,
  FlexItem,
  Content_left2,
  PageH2Minor6,
  ImgBanner
} from '../../../../Styles';

const LoadingIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 2rem;
  height: 2rem;
  background-image: url('../resources/images/icon/loading-icon.gif');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 0.5rem;
`;

const SubmitButton = styled(Button)`
  padding: 1rem 1.5rem;
  width:18rem;
  border-radius: 3px;
  font-size: 1.8rem;
  font: 600 2rem/1.4 "Gill Sans", sans-serif;
  color: white;
  transition: transform 0.2s ease-out;
  ${(props) => {
    const { loading } = props;
    if (loading) {
      return `
        background: #337ab7;
        font-size: 1.6rem;
      `;
    }
    return `background: black;`;
  }};

  &:hover {
    transform: scale(1.2);
  }
`;

const Result = styled.p`
  color: ${(props) => {
    const { success } = props;
    if (success) return '#88c332';
    return '#CE272D';
  }};
`;

const SelectWrapper = styled.div`
 width:100%;
 margin-bottom:2rem;
 height: 4rem;
   border-radius:1.5rem;
   display:inline-block;
  overflow:hidden;
  border: 1.5px solid #cccccc;
`;

const ContactForm = styled.div`
  ${reuseableStyles.contentStyle};

  input
  {
    height: 4rem;
    width: 100%;
    padding: 1rem;
    background: white;
    border: 1.5px solid #cccccc;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
  }
  textarea{
  height: 25rem;
    width: 100%;
    padding: 1rem;
    background: white;
    border: 1.5px solid #cccccc;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
  }

  select {
  padding:1rem;
  background: white;
  height: 4rem;
  width:100%;
  border:0px;
  outline:none;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  display: block;
  font: 600 2rem/1.4 'Open Sans', arial, sans-serif;
`;

export default () => {
  const [submit, setSubmit] = useState(false);
  const [category, setCategory] = useState('General');
  const [name, setName] = useState('');
  const nameInput = useRef();
  const [message, setMessage] = useState('');
  const messageInput = useRef();
  const [email, setEmail] = useState('');
  const emailInput = useRef();
  const [result, setResult] = useState('');
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setSubmit(false);
    setLoading(true);
    setResult('');

    const data = {
      name,
      email_address: email,
      category,
      message,
    };

    fetch(process.env.EMAIL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setResult('Your message has been sent.');
        setSuccess(true);
      })
      .catch((response) => {
        const statusCode = response.status;
        switch (statusCode) {
          case 400:
            setResult(
              'Your message has been logged, but there was a problem processing your message.',
            );
            break;
          case 401:
            setResult(
              'Your message was not sent because we could not verify that your request is authentic. Please make sure reCAPTCHA is working.',
            );
            break;
          default:
            setResult(
              'The contact service is not available at the moment. Please try at a later time.',
            );
            break;
        }
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
        setCategory('General');
      });
  };

  return (
    <>
      <Head>
        <title>Contact Form</title>
        <meta name="Description" content="Contact page" />
      </Head>
      <ImgBanner
        src="/cached/iTrazo_tracetech_contact_us.png"
        alt="COVID19-iTrazo-TraceTech">
      </ImgBanner>
      <Padding padding="3rem 20rem 0" middlePadding={"3rem 15rem 0"} smallPadding={"2rem 8rem 0"}>
      <ContactForm>
          <Font_1>CONTACT FORM</Font_1>
          <form
            onSubmit={(event) => {
              setSubmit(true);
              event.preventDefault();
            }}
          >
            <div>
              <Label htmlFor="category">Category</Label>
              <SelectWrapper>
              <select
                id="category"
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                value={category}
              >
                <option>General</option>
                <option>Products</option>
                <option>Business partnership</option>
                <option>Job application</option>
                <option>Other</option>
              </select>
              </SelectWrapper>
            </div>
            <div>
              <Label htmlFor="name">Your name</Label>
              <input
                type="text"
                pattern=".{1,}"
                required
                id="name"
                ref={nameInput}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
            </div>
            <div>
              <Label htmlFor="email">Your email address</Label>
              <input
                  id="email"
                  pattern=".{1,}"
                  required
                  ref={emailInput}
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                ref={messageInput}
                rows="5"
                pattern=".{1,1500}"
                required
                placeholder="Max. 1500 characters"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                value={message}
              />
            </div>


            <Result success={success}>{result}</Result>
            <SubmitButton
              type="submit"
              loading={loading}
              aria-label="send email"
              onClick={()=>{onSubmit();}}
            >
              {loading ? (
                <>
                  <LoadingIcon />
                  <span>Sending Message</span>
                </>
              ) : (
                <span>SEND</span>
              )}
            </SubmitButton>
            <FlexVertical>
              <FlexItem margin={"0 0 0 -1.5rem"}>
                <PageH2Minor6>
                  HEAD OFFICE:
                </PageH2Minor6>
              </FlexItem>
              <FlexItem margin={"0 0 0 -1.5rem"}>
                <Content_left2 >
                  City Road, Southbank,
                </Content_left2>
                <Content_left2 margin={"-1rem 0 0"}>
                  VIC, 3006
                </Content_left2>
                <Content_left2 margin={"0.5rem 0 0"} >
                  Australia
                </Content_left2>

              </FlexItem>


            </FlexVertical>

          </form>
        </ContactForm>
      </Padding>
    </>
  );
};
