import React from 'react';
import { Link } from 'react-router-dom';

import { Container,
         Breadcrump,
         Stars, 
         StarIcon, 
         ForkIcon, 
         LinkButton, 
         GithubIcon,
         RepoIcon } from './styles';

const Repo: React.FC = () => {
  return (
      <Container>
        <Breadcrump>
        <RepoIcon/>
         <Link className={'username'} to ={'/joao911'}>
           joao911
         </Link>
         <span>/</span>
         <Link className={'reponame'} to={'/joao911/clone-github'}>
           clone-linkedin
         </Link>
        </Breadcrump>
        <p>Contains all of my YouTube lesson code.</p>
        <Stars>
          <li>
            <StarIcon/>
            <b>9</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon/>
            <b>0</b>
            <span>forks</span>
          </li>
        </Stars>
        <LinkButton>
          <GithubIcon href={'https://github.com/joao911/clone-github'}/>
          <span>View on GitHub</span>
      </LinkButton>
      </Container>
  );
}

export default Repo;