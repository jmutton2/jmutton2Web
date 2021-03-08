import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper >
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I am an aspiring software engineer with a strong passion for learning about cybersecurity. I am also a huge beleiver in FOSS.
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
