import { Header, Footer } from '../components';
import { Container, SectionHeader, SectionContent } from '../components/common';

import styled from 'styled-components';
import theme from '../theme';

import { projectsData } from '../data/projects';

const Screenshot = styled.img`
  width: 100%;
`;

export const MessengerCaseStudyPage = () => {
  return (
    <>
      <Header />
      <Container>
        <SectionHeader>Messenger App</SectionHeader>
        <SectionContent>
          <p>
            This application is a clone of the well-known messenger Telegram. Implemented sending
            text and photos, creating and deleting both private and group chats, photo gallery in
            each chat, profile editing, light and dark themes, adaptive design.
          </p>
          <p>Tech stack</p>
          <Screenshot src={projectsData[0].desktopImageUrl}></Screenshot>
          <h3>Project Purpose and Goal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur odio
            provident harum reprehenderit, eligendi corrupti animi laborum deserunt et, quo hic
            illum quos, nesciunt voluptates nobis. Nam, doloremque! Libero.
          </p>
          <h3>Web Stack and Explanation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur odio
            provident harum reprehenderit, eligendi corrupti animi laborum deserunt et, quo hic
            illum quos, nesciunt voluptates nobis. Nam, doloremque! Libero.
          </p>
          <h3>Problems and Thought Process</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur odio
            provident harum reprehenderit, eligendi corrupti animi laborum deserunt et, quo hic
            illum quos, nesciunt voluptates nobis. Nam, doloremque! Libero.
          </p>
          <h3>Lessons Learned</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur odio
            provident harum reprehenderit, eligendi corrupti animi laborum deserunt et, quo hic
            illum quos, nesciunt voluptates nobis. Nam, doloremque! Libero.
          </p>
        </SectionContent>
      </Container>
      <Footer />
    </>
  );
};
