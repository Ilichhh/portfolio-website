import {
  Container,
  SectionDark,
  SectionHeader,
  SectionContent,
  TwoColumnsWrapper,
} from '../common';
import { ProjectPreview } from '../../components/ProjectPreview';

import theme from '../../theme';

import { projectsData } from '../../data/projects';

export const ProjectsSection = () => {
  const projectsList = projectsData.map((project) => (
    <ProjectPreview
      key={project.name}
      name={project.name}
      description={project.description}
      imageUrl={project.imageUrl}
      githubUrl={project.githubUrl}
      deployUrl={project.deployUrl}
      caseStudyUrl={project.caseStudyUrl}
    />
  ));

  return (
    <SectionDark>
      <Container>
        <SectionHeader color={theme.colors.red}>{`<projects>`}</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>{projectsList}</TwoColumnsWrapper>
        </SectionContent>
        <SectionHeader color={theme.colors.red}>{`</projects>`}</SectionHeader>
      </Container>
    </SectionDark>
  );
};
