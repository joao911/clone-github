import React from 'react';

import { Container, Githublogo, SearchForm} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <Githublogo/>
        <SearchForm>
          <input placeholder="Enter Username or repo..."/>
        </SearchForm>
      </Container>
  );
}

export default Header;