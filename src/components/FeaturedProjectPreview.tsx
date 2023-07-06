import { LinkButton } from './common';

import { ProjectPreviewData } from '../types';

import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  height: 426px;
`;

const Info = styled.div`
  flex: 1 1 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ScreenshotsWrapper = styled.div`
  flex: 1 1 0;
  position: relative;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    opacity: 0.5;
  }
`;

const DesktopScreenshot = styled.img<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${({ pos }) => (pos === 'left' ? 'left: 0' : 'right: 0')};
  width: 90%;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const MobileScreenshot = styled.img<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 70px;
  ${({ pos }) => (pos === 'left' ? 'right: 0' : 'left: 0')};
  width: 25%;
  border: 4px solid ${theme.colors.textDark};
  box-shadow: 6px 6px ${theme.colors.textDark};
`;

const Header = styled.h3`
  margin-top: 50px;
`;

const Description = styled.p`
  margin-bottom: 30px;
`;

interface ProjectPreviewProps {
  data: ProjectPreviewData;
  imagePositioning: 'left' | 'right';
}

export const FeaturedProjectPreview = ({ data, imagePositioning }: ProjectPreviewProps) => {
  const { name, description, desktopImageUrl, mobileImageUrl, githubUrl, deployUrl, caseStudyUrl } =
    data;

  const screenshots = (
    <ScreenshotsWrapper>
      <DesktopScreenshot
        src={desktopImageUrl}
        pos={imagePositioning}
        alt="Project desktop preview"
      ></DesktopScreenshot>
      <MobileScreenshot
        src={mobileImageUrl}
        pos={imagePositioning}
        alt="Project mobile preview"
      ></MobileScreenshot>
    </ScreenshotsWrapper>
  );

  return (
    <Wrapper>
      {imagePositioning === 'left' && screenshots}
      <Info>
        <Header>{name}</Header>
        <Description>{description}</Description>
        <LinksWrapper>
          <LinkButton color={theme.colors.purple} width={180} to={caseStudyUrl}>
            Case study
          </LinkButton>
        </LinksWrapper>
      </Info>
      {imagePositioning === 'right' && screenshots}
    </Wrapper>
  );
};
