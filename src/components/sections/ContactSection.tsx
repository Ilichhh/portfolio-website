import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';
import { Button } from '../common/Buttons';

import styled from 'styled-components';
import theme from '../../theme';

import { socialData } from '../../data/social';
import { SocialListItem } from '../../components/SocialListItem';

const SERVICE_ID = 'service_4hgt81h';
const TEMPLATE_ID = 'template_ll411ze';
const USER_ID = 'aoi3RUjI0fMvlih9Z';

const ContactData = styled.div`
  flex: 1 1 0;
`;

const ContactDescription = styled.p`
  margin-bottom: 50px;
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

const ContactForm = styled.form`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  min-height: 50px;
  padding-left: 10px;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const Textarea = styled.textarea`
  min-height: 50px;
  padding-left: 10px;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
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

  const { register, handleSubmit, reset } = useForm();

  const sendEmail: SubmitHandler<FieldValues> = async () => {
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, 'form', USER_ID);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SectionWrapper id="contact" bgColor={theme.colors.blue}>
      <Container>
        <SectionHeader>{`Contact Me`}</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <ContactData>
              <ContactDescription>
                The best way to get in touch with me quickly is to use Telegram. With business
                proposals you can write to e-mail. You can also subscribe to me on social networks.
              </ContactDescription>
              <SocialLinks>{contactsList}</SocialLinks>
            </ContactData>
            <ContactForm id="form" onSubmit={handleSubmit(sendEmail)}>
              <Input type="text" {...register('name')} placeholder="Your name"></Input>
              <Input type="email" {...register('email')} placeholder="Your email"></Input>
              <Input type="text" {...register('subject')} placeholder="Subject"></Input>
              <Textarea
                rows={6}
                {...register('message')}
                placeholder="How can I help you?"
              ></Textarea>
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
