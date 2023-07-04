import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';

import styled from 'styled-components';
import theme from '../../theme';

import { socialData } from '../../data/social';
import { SocialListItem } from '../../components/SocialListItem';

const ContactData = styled.div`
  flex: 1 1 0;
`;

const ContactForm = styled.form`
  flex: 1 1 0;
`;

const SocialLinks = styled.ul`
  flex: 1 1 0;
  padding: 0;
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

  return (
    <SectionWrapper bgColor={theme.colors.blue}>
      <Container>
        <SectionHeader>{`Contact Me`}</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <ContactData>
              <p>
                The best way to get in touch with me quickly is to use Telegram. With business
                proposals you can write to e-mail. You can also subscribe to me on social networks.
              </p>
              <SocialLinks>{contactsList}</SocialLinks>
            </ContactData>
            <ContactForm></ContactForm>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
