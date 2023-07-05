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
  gap: 60px;
  margin-bottom: 50px;
`;

const MoreProjectsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const ButtonsWrapper = styled.div`
  margin: 0 auto;
`;

export const ProjectsSection = () => {
  const [isMoreProjectsOpen, setIsMoreProjectsOpen] = useState(false);

  const projectsList = projectsData.map((project, index) => (
    <FeaturedProjectPreview
      key={project.name}
      data={project}
      imagePositioning={index % 2 === 0 ? 'left' : 'right'}
    />
  ));

  return (
    <SectionWrapper id="projects" bgColor={theme.colors.pink}>
      <Container>
        <SectionHeader>{`Featured projects`}</SectionHeader>
        <SectionContent>
          <FeaturedProjectsWrapper>{projectsList}</FeaturedProjectsWrapper>
          {isMoreProjectsOpen && <MoreProjectsWrapper>coming soon</MoreProjectsWrapper>}
          <ButtonsWrapper>
            <Button centered onClick={() => setIsMoreProjectsOpen(!isMoreProjectsOpen)}>
              {isMoreProjectsOpen ? 'see less' : 'see more'}
            </Button>
          </ButtonsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
