/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';

import styled from 'styled-components';
import theme from '../../theme';

import { skillsListData } from '../../data/skillsList';
import { SkillBadge } from '../../components/common';

const About = styled.div`
  flex: 1 1 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: start;
  justify-content: flex-start;
  height: 180px;
  flex: 1 1 0;
  margin: 0;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 45%;
  object-fit: contain;
  filter: drop-shadow(10px 10px ${theme.colors.textDark});
`;

export const AboutSection = () => {
  const SkillsListNodes = skillsListData.map((skill) => (
    <SkillBadge key={skill}>{skill}</SkillBadge>
  ));

  return (
    <SectionWrapper id="about" bgColor={theme.colors.green}>
      <Container>
        <SectionHeader>About me</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <Photo src="./photo_about.png" />
            <div>
              <SkillsList>{SkillsListNodes}</SkillsList>
              <About>
                <h3>Hi there! I'm Ilya and I write code.</h3>
                <p>
                  Since childhood, I have been captivated by building with constructors, drawing,
                  and solving logical problems. To maximize my strengths, I chose a career as an
                  architect, graduating from university and working in the field.
                </p>
                <p>
                  Alongside my main job, I discovered a passion for online poker, which eventually
                  became my profession. This unique journey not only allowed me to travel to 30
                  different countries but also enhanced my logical thinking, concentration, and
                  patience.
                </p>
                <p>
                  In 2020, I delved into coding for the first time and realized its potential to
                  combine my skills and past experiences in an intriguing way. I explored various
                  directions, starting with general courses in CS50, then diving into JS and Python.
                  Blockchain also captured my interest. After learning how the technology works, I
                  rented servers and ran validator nodes on various networks. Eventually, my journey
                  brought me full circle, where I found the greatest enjoyment in implementing UI.
                </p>
                <p>
                  In 2022, I made a firm decision to focus on frontend development, with a clear
                  plan for future employment. Throughout the year, I enrolled in courses at Rolling
                  Scopes School, covering{' '}
                  <Link to="https://app.rs.school/certificate/5xcwku8b" target="_blank">
                    JS/TS
                  </Link>{' '}
                  and{' '}
                  <Link to="https://app.rs.school/certificate/u4b8q4a1" target="_blank">
                    React
                  </Link>
                  . The program included engaging in team projects, where I not only wrote code but
                  also participated in code reviews. In one particular project, I took on the role
                  of a team leader, responsible for organizing the development processes.
                </p>
              </About>
            </div>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
