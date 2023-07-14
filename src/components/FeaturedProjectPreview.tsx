import { Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';

import { LinkButton, TechBadge, TwoColumnsWrapper } from './common';

import { ProjectPreviewData } from '../types';

import styled from 'styled-components';
import theme from '../theme';

const DesktopScreenshot = styled.img`
  width: 100%;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const MobileScreenshot = styled.img<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 80px;
  ${({ pos }) => (pos === 'left' ? 'right: -60px' : 'left: -60px')};
  width: 28%;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
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
  color: ${theme.colors.yellow};
  transform: translate(-50%, -50%);
  transition: 0.2s all;
`;

const ScreenshotsWrapper = styled(Link)`
  position: relative;
  flex: 1 1 0;
  &:hover {
    ${DesktopScreenshot}, ${MobileScreenshot} {
      filter: blur(3px);
    }
    ${DeployLink} {
      opacity: 1;
    }
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

  const { ref } = useParallax<HTMLImageElement>({ speed: 5 });

  const TechList = stack.map((skill) => (
    <TechBadge small key={skill}>
      {skill}
    </TechBadge>
  ));

  const screenshots = (
    <ScreenshotsWrapper to={deployUrl} target="_blank">
      <DesktopScreenshot src={desktopImageUrl} alt="Project desktop preview"></DesktopScreenshot>
      <MobileScreenshot
        src={mobileImageUrl}
        pos={imagePositioning}
        alt="Project mobile preview"
        ref={ref}
      ></MobileScreenshot>
      <DeployLink>Open Deploy</DeployLink>
    </ScreenshotsWrapper>
  );

  return (
    <TwoColumnsWrapper>
      {imagePositioning === 'left' && screenshots}
      <Info>
        <Header>{name}</Header>
        <SkillsList>{TechList}</SkillsList>
        <Description>{description}</Description>
        <LinkButton color={theme.colors.purple} width={180} to={caseStudyUrl}>
          Case study
        </LinkButton>
      </Info>
      {imagePositioning === 'right' && screenshots}
    </TwoColumnsWrapper>
  );
};
