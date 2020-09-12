import React from 'react';
import ProfileData from '../../components/ProfileData';
import { Container, Main, LeftSide, RightSide } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
           username={'joaodeveloper'}
           name={'João Paulo Duarte'}
           avatarurl={'https://avatars2.githubusercontent.com/u/49724031?s=460&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4'}
           followers={7}
           following={10}
           company={'Desenvolvedor Front-End'}
           location={'São Paulo, Brazil'}
           email={'joaopaulolacerda911@gmail.com'}
           blog={'https://www.linkedin.com/in/joaopauloduarte'}

          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;