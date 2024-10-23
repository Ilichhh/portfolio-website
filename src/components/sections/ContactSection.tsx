import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
  StyledLink,
} from '../common';
import { Button } from '../common/Buttons';

import styled from 'styled-components';
import theme from '../../theme';

import { socialData } from '../../data/social';
import { SocialListItem } from '../../components/SocialListItem';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../constants';

const ContactData = styled.div`
  flex: 1 1 0;
`;

const ContactDescription = styled.p`
  margin-bottom: 50px;
  @media (max-width: 997px) {
    margin-bottom: 20px;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  @media (max-width: 997px) {
    margin-bottom: 40px;
  }
`;

const ContactForm = styled.form`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 997px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  min-height: 50px;
  padding-left: 10px;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding-left: 10px;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const ErrorMessage = styled.div`
  padding-top: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${theme.colors.error};
`;

export const ContactSection = () => {
  const contactsList = socialData.map((item) => (
    <SocialListItem
      key={item.name}
      icon={item.icon}
      link={item.link}
      description={item.description}
    />
  ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail: SubmitHandler<FieldValues> = async () => {
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, 'form', USER_ID);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SectionWrapper id="contact" bgColor={theme.colors.green}>
      <Container>
        <SectionHeader>Contact Me</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <ContactData>
              <ContactDescription>
                The best way to quickly get in touch with me is through{' '}
                <StyledLink to="https://t.me/ilichhh">Telegram</StyledLink>. For business proposals,
                you can reach me via{' '}
                <StyledLink to="mailto:shakurov.ia@gmail.com">email</StyledLink>. I speak Russian
                and English. Additionally, feel free to subscribe to my social networks.
              </ContactDescription>
              <SocialLinks>{contactsList}</SocialLinks>
            </ContactData>
            <ContactForm id="form" onSubmit={handleSubmit(sendEmail)} noValidate>
              <div>
                <Input
                  type="text"
                  {...register('name', {
                    required: 'Please enter your name',
                    minLength: 1,
                  })}
                  placeholder="Your name"
                ></Input>
                {errors.name && <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>}
              </div>
              <div>
                <Input
                  type="email"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="Your email"
                ></Input>
                {errors.email && <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>}
              </div>
              <Input type="text" {...register('subject')} placeholder="Subject"></Input>
              <div>
                <Textarea
                  rows={6}
                  {...register('message', {
                    required: 'Please enter your message',
                    minLength: 1,
                  })}
                  placeholder="How can I help you?"
                ></Textarea>
                {errors.message && (
                  <ErrorMessage>{errors.message?.message?.toString()}</ErrorMessage>
                )}
              </div>
              <Button type="submit" color={theme.colors.yellow}>
                Get in touch
              </Button>
            </ContactForm>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
