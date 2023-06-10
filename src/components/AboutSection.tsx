import { Container, SectionHeader, SectionContent } from './common';

import theme from '../theme';

export const AboutSection = () => {
  const codeText = `  skills = {
    mainStack: [
      HTML,
      CSS/SASS,
      JavaScript,
      TypeScript,
      React JS,
    ],
    otherStack: [
      Webpack,
      Vite,
      Git,
      Figma,
    ],
    nowLearning: [
      nodeJS,
      Solidity
    ],
  }
`;

  return (
    <section>
      <Container>
        <SectionHeader color={theme.colors.yellow}>{`<about>`}</SectionHeader>
        <SectionContent>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <pre>{codeText}</pre>
        </SectionContent>
        <SectionHeader color={theme.colors.yellow}>{`</about>`}</SectionHeader>
      </Container>
    </section>
  );
};
