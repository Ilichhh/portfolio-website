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
  height: 200px;
  flex: 1 1 0;
  margin: 0;
`;

export const AboutSection = () => {
  const SkillsListNodes = skillsListData.map((skill) => (
    <SkillBadge key={skill}>{skill}</SkillBadge>
  ));

  return (
    <SectionWrapper id="about" bgColor={theme.colors.bgLight}>
      <Container>
        <SectionHeader>About me</SectionHeader>
        <SectionContent>
          <TwoColumnsWrapper>
            <About>
              <p>
                I have a degree in architecture. I worked as a restoration architect for a while.
                That experience strengthened my understanding of design and helped me develop my
                spatial thinking.
              </p>
              <p>
                After a while I became interested in online poker. Behind the simple rules there is
                an incredible depth to this game. Years of playing professionally helped me develop
                self-discipline and mental stability.
              </p>
              <p>
                At some point, after trying to write code and learning more about the modern
                development industry, I suddenly realized that programming is even more like
                assembling a construction set, which I loved so much in my childhood, than
                architecture. And the ever-changing rules of the game and the incredible potential
                for growth in breadth is something I, as a scanner personality type, sorely lacked
                in poker.
              </p>
              <p>
                I spent the last year learning the basic technologies of frontend development at RS
                School. I have done several team projects, in one of them I was a team leader and in
                addition to development I was responsible for team coordination.
              </p>
              <p>
                Maybe in 10 years I will come to my senses and will give up the development, open my
                own bar on some Philippine island and will talk to the natives about life. But this
                will definitely not happen in the near future, I will be in IT for a long time.
              </p>
            </About>
            <SkillsList>{SkillsListNodes}</SkillsList>
          </TwoColumnsWrapper>
        </SectionContent>
      </Container>
    </SectionWrapper>
  );
};
