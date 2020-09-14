import React from 'react';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon,Tab} from './styles';

const Profile: React.FC = () => {
  const TabContent = () =>(
    <div className="content">
      <RepoIcon/>
      <span className="label">Repositories</span>
      <span className="number">58</span>
    </div>
  )
  return (
    <Container>
      <Tab className="descktop">
        <div className="wrapper">
          <span className="offset"/>
        <TabContent/>
        </div>
        
        <span className="line"/>
      </Tab>
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

        <RightSide>
          <Tab className="mobile">
            <TabContent/>
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4 ,5 ,6 ].map(n => (
                <RepoCard
                key={n}
                username={'joaodeveloper'}
                reponame={'clone-github'}
                description={'Contains all of my YouTube Lessons code'}
                language={n % 3 === 0 ? 'Javascripit': 'Typescritp'}
                stars={8}
                forks={4}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Radom Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar/>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;