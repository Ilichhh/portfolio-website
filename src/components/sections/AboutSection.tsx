import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  SectionWrapper,
  Container,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';
import { TechBadge } from '../../components/common';

import styled, { css } from 'styled-components';
import theme from '../../theme';

import { skillsListData } from '../../data/skillsList';

const About = styled.div<{ expanded: boolean }>`
  position: relative;
  flex: 1 1 0;
  max-height: ${({ expanded }) => (expanded ? '1500px' : '530px')};
  overflow: hidden;
  transition: 0.2s ease all;
  ${({ expanded }) =>
    !expanded &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), ${theme.colors.blue});
        pointer-events: none;
      }
    `};
  @media (max-width: 997px) {
    max-height: ${({ expanded }) => (expanded ? '1500px' : '360px')};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: start;
  justify-content: flex-start;
`;

const Photo = styled.img`
  width: 45%;
  object-fit: contain;
  filter: drop-shadow(10px 10px ${theme.colors.textDark});
  @media (max-width: 997px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 40px;
  }
`;

const Expander = styled.span`
  font-weight: 600;
  cursor: pointer;
`;

export const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  const SkillsListNodes = skillsListData.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>);

  return (
    <SectionWrapper id="about" bgColor={theme.colors.blue}>
      <Container>
        <SectionHeader>About me</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <Photo src="./photo_about.png" />
            <div>
              <SkillsList>{SkillsListNodes}</SkillsList>
              <About expanded={expanded}>
                <h3>Hi there! I&apos;m Ilia and I write code.</h3>
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
              <Expander onClick={() => setExpanded(!expanded)}>
                {expanded ? 'collapse' : 'read more'}
              </Expander>
            </div>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
