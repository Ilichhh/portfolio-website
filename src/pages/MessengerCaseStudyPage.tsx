import { Header, Footer } from '../components';
import {
  Container,
  SectionHeader,
  SectionContent,
  StyledLink,
  TwoColumnsWrapper,
  SectionWrapper,
} from '../components/common';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import styled from 'styled-components';
import theme from '../theme';

const Screenshot = styled.img<{ width?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  box-shadow: 6px 6px ${theme.colors.purple};
`;

const LinsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 28px;
`;

export const MessengerCaseStudyPage = () => {
  return (
    <>
      <Header />
      <SectionWrapper>
        <Container>
          <SectionHeader>Messenger App</SectionHeader>
          <SectionContent>
            <LinsWrapper>
              <StyledLink to="https://netelegram.netlify.app/" target="_blank">
                Deploy <OpenInNewIcon />
              </StyledLink>
              <StyledLink to="https://github.com/Ilichhh/telegram-clone" target="_blank">
                Source code <OpenInNewIcon />
              </StyledLink>
            </LinsWrapper>
            <p>
              <b>This project is the final project of the JS course</b> and was developed by a team
              of three people. The task was to create a clone of any application of our choice and
              implement as many features as possible in a short period of time.
            </p>
            <p>
              We decided to take Telegram as a basis, because you can relatively quickly make an MVP
              with working functionality, after which there is absolutely limitless room for all
              sorts of improvements. It&apos;s also fun to communicate during development right in
              the app you&apos;re building from scratch.{' '}
              <b>It was my first real experience of teamwork.</b>
            </p>
            <Screenshot src="messenger_full.png"></Screenshot>
          </SectionContent>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <TwoColumnsWrapper>
            <Screenshot src="messenger_form.png" width="400px"></Screenshot>
            <div>
              <h3>Tech Stack and Explanation</h3>
              <p>
                <b>TypeScript</b> was one of the few prerequisites for this project. The biggest
                gamble was choosing <b>React</b> for development, simply because none of us were
                familiar with this technology at all before we started – we were all learning from
                scratch.
              </p>
              <p>
                Since time was short, and we had no idea how to implement it initially, we decided
                to opt for the simplest option{' '}
                <b>
                  for the backend - using Firebase for authorization, database, and file storage.
                </b>
              </p>
              <p>
                <b>Styles were written using SCSS and BEM</b> because all three of us were familiar
                with this approach from previous projects and agreed on our preferences. No UI
                libraries were used, all styles were written from scratch.
              </p>
            </div>
          </TwoColumnsWrapper>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <SectionContent>
            <TwoColumnsWrapper>
              <div>
                <h3>Realized Features</h3>
                <p>A list of what we have managed to implement:</p>
                <ul>
                  <li>Sending text messages, images and emoji.</li>
                  <li>Create and delete both private and group chats.</li>
                  <li>Image gallery for each chat.</li>
                  <li>Edit profile - change avatar, nickname and description.</li>
                  <li>Read/unread status of messages.</li>
                  <li>Switch between light and dark theme.</li>
                  <li>Of course, the application is adaptive to any screen size.</li>
                </ul>
                <p>
                  And also a lot of different little things like grouping messages by date, search,
                  autoscroll to the last message, etc.
                </p>
              </div>
              <Screenshot src="messenger_settings.png" width="400px"></Screenshot>
            </TwoColumnsWrapper>
          </SectionContent>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <TwoColumnsWrapper>
            <Screenshot src="messenger_group.png" width="400px"></Screenshot>
            <div>
              <h3>Problems and Thought Process</h3>
              <p>
                <b>Initially, we made a mistake in planning and distributing tasks.</b> We decided
                to build all the components first, and then add functionality. As a result, a week
                later we found ourselves in a situation where we have a very beautiful, but
                absolutely static website. And now we need someone to deal with authorization and
                database configuration, and what to do the rest - it is unclear. Somehow we have
                distributed the tasks, but lost time. And in the end we had to cut out components
                with unrealized functionality.
              </p>
              <p>
                It was also completely unclear how to properly break the application into
                components, how to organize the code, how to work with the database. In short,
                <b> everything was one big problem.</b> Development discussions were going on 24/7.
              </p>
              <p>
                I also wrote an infinite loop that sent 50000 requests to the server and blocked
                Firebase because of exceeding the limit on the free plan.
              </p>
            </div>
          </TwoColumnsWrapper>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <TwoColumnsWrapper>
            <div>
              <h3>Lessons Learned</h3>
              <p>
                First and foremost, of course, we learned how to develop applications using React.
                It turned out that it is{' '}
                <b>
                  entirely possible to write such an application from scratch, learning on the go
                  with all the technologies
                </b>
                , and there&apos;s nothing scary about it. However, one must be prepared for the
                fact that the code quality will be pretty bad.
              </p>
              <p>
                I came back to this project later, refactored some things, but honestly, even from
                my current level of experience, it pains me to look at it. I want to rewrite almost
                everything. We didn&apos;t even use local state for caching data, so every minor
                event triggered a request to the server, which is terribly inefficient.
              </p>
            </div>
            <div></div>
          </TwoColumnsWrapper>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <TwoColumnsWrapper>
            <div></div>
            <div>
              <h3>Let&apos;s Build Something Together</h3>
              <p>
                Fill free to reach out if you are looking for a developer, <br></br> have a
                question, or just want to connect.
              </p>
              <StyledLink to="mailto:shakurov.ia@gmail.com">shakurov.ia@gmail.com</StyledLink>
            </div>
          </TwoColumnsWrapper>
        </Container>
      </SectionWrapper>
      <Footer />
    </>
  );
};
