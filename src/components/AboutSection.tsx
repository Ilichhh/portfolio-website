import { Container, SectionHeader, SectionContent, TwoColumnsWrapper } from './common';

import styled from 'styled-components';
import theme from '../theme';

import { skillsListData } from '../data/skillsList';

const About = styled.div`
  flex: 1 1 0;
  color: ${theme.colors.red};
`;

const SkillsList = styled.pre`
  margin: 0;
  flex: 1 1 0;
  color: ${theme.colors.green};
`;

export const AboutSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader color={theme.colors.yellow}>{`<about>`}</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <About>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </About>
            <SkillsList>{skillsListData}</SkillsList>
          </TwoColumnsWrapper>
        </SectionContent>
        <SectionHeader color={theme.colors.yellow}>{`</about>`}</SectionHeader>
      </Container>
    </section>
  );
};
