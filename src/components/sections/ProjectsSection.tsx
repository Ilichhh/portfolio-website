import { useState } from 'react';

import { SectionWrapper, Container, SectionHeader, SectionContent } from '../common';
import { Button } from '../common/Buttons';
import { FeaturedProjectPreview } from '../../components';

import styled from 'styled-components';
import theme from '../../theme';

import { projectsData } from '../../data/projects';

const FeaturedProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-bottom: 50px;
`;

const MoreProjectsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const ButtonsWrapper = styled.div`
  display: none;
  margin: 120px auto 0;
`;

export const ProjectsSection = () => {
  const [isMoreProjectsOpen, setIsMoreProjectsOpen] = useState(false);

  const projectsList = projectsData.map((project, index) => (
    <FeaturedProjectPreview
      key={project.name}
      data={project}
      imagePositioning={index % 2 === 0 ? 'right' : 'left'}
    />
  ));

  return (
    <SectionWrapper id="projects" bgColor={theme.colors.pink} border>
      <Container>
        <SectionHeader>Featured projects</SectionHeader>
        <SectionContent>
          <FeaturedProjectsWrapper>{projectsList}</FeaturedProjectsWrapper>
          {isMoreProjectsOpen && <MoreProjectsWrapper>coming soon</MoreProjectsWrapper>}
          <ButtonsWrapper>
            <Button
              color={theme.colors.green}
              centered
              onClick={() => setIsMoreProjectsOpen(!isMoreProjectsOpen)}
            >
              {isMoreProjectsOpen ? 'See less' : 'See more'}
            </Button>
          </ButtonsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
