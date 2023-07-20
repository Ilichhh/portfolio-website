import { Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';

import { LinkButton, TechBadge } from './common';
import EastIcon from '@mui/icons-material/East';

import { ProjectPreviewData } from '../types';

import styled from 'styled-components';
import theme from '../theme';

const ProjectPreview = styled.div<{ pos: 'left' | 'right' }>`
  display: flex;
  flex-direction: ${({ pos }) => (pos === 'left' ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: flex-start;
  gap: 10%;
  @media (max-width: 997px) {
    flex-direction: column;
  }
`;

const DesktopScreenshot = styled.img`
  width: 100%;
  box-shadow: 10px 10px ${theme.colors.textDark};
  transition: 0.2s filter;
  @media (max-width: 997px) {
    width: 88%;
  }
`;

const MobileScreenshot = styled.img<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 20%;
  ${({ pos }) => (pos === 'left' ? 'right: -60px' : 'left: -60px')};
  width: 28%;
  box-shadow: 10px 10px ${theme.colors.textDark};
  transition: 0.2s filter;
  @media (max-width: 997px) {
    right: 0;
    left: auto;
    width: 22%;
  }
`;

const DeployLink = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 20px;
  font-size: 32px;
  text-decoration: none;
  opacity: 0;
  background-color: ${theme.colors.bgDark};
  color: ${theme.colors.purple};
  transform: translate(-50%, -50%);
  transition: 0.2s all;
`;

const ScreenshotsWrapper = styled(Link)`
  position: relative;
  flex: 1 1 0;
  @media (min-width: 769px) {
    &:hover {
      ${DesktopScreenshot}, ${MobileScreenshot} {
        filter: blur(3px);
      }
      ${DeployLink} {
        opacity: 1;
      }
    }
  }
  @media (max-width: 997px) {
    margin-top: 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  flex: 1 1 0;
`;

const Header = styled.h3`
  margin: 20px 0 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: start;
  justify-content: flex-start;
`;

const Description = styled.p`
  margin: 0;
`;

interface ProjectPreviewProps {
  data: ProjectPreviewData;
  imagePositioning: 'left' | 'right';
}

export const FeaturedProjectPreview = ({ data, imagePositioning }: ProjectPreviewProps) => {
  const { name, stack, description, desktopImageUrl, mobileImageUrl, deployUrl, caseStudyUrl } =
    data;

  const desktopParallax = useParallax<HTMLImageElement>({ speed: 3 });
  const mobileParallax = useParallax<HTMLImageElement>({ speed: 6 });

  const TechList = stack.map((skill) => (
    <TechBadge small key={skill}>
      {skill}
    </TechBadge>
  ));

  return (
    <ProjectPreview pos={imagePositioning}>
      <Info>
        <Header>{name}</Header>
        <SkillsList>{TechList}</SkillsList>
        <Description>{description}</Description>
        <LinkButton color={theme.colors.purple} to={caseStudyUrl}>
          Case study
          <EastIcon />
        </LinkButton>
      </Info>
      <ScreenshotsWrapper to={deployUrl} target="_blank">
        <DesktopScreenshot
          src={desktopImageUrl}
          alt="Project desktop preview"
          ref={desktopParallax.ref}
        ></DesktopScreenshot>
        <MobileScreenshot
          src={mobileImageUrl}
          pos={imagePositioning}
          alt="Project mobile preview"
          ref={mobileParallax.ref}
        ></MobileScreenshot>
        <DeployLink>Open Deploy</DeployLink>
      </ScreenshotsWrapper>
    </ProjectPreview>
  );
};
