'use client'
import { styled } from 'styled-components';

const ProfileContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  height: 91.5vh;
  overflow: hidden;
`;

const FirstColumn = styled.div`
  width: 23vw;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Column = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Box = styled.div`
  padding: 30px;
  background: rgba(255,255,255, 0.5);
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin: auto;
  background-color: white;
  & img {
    width: 100%;
  }
`;

const Adjectives = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const AdjectiveCard = styled.div`
  background: rgba(245,245,220, 1);
  padding: 5px 10px;
  border-radius: 7px;

`;

const H2 = styled.h2`
  margin-top: 0;
`;

const PersonalitySliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    margin: 0;
  }
`;

const Slider = styled.input`
  width: 100%;
`;

const MotivationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & progress {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <ProfileContainer>
      <FirstColumn>
        <Box>
          <div style={{ textAlign: 'center' }}>
            <ImageContainer>
              <img src="/images/spongebob.avif" />
            </ImageContainer>
            <h1>Spongebob Squarepants</h1>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '400' }}>frycook</h2>
            <p>
              <i>&ldquo;I&apos;m Ready&rdquo;</i>
            </p>
          </div>
          <Box style={{ padding: '5px 25px 15px', marginTop: '40px' }}>
            <p>
              <b>Location:</b> Bikini Bottom
            </p>
            <p>
              <b>Contact:</b>{' '}
              <a href="mailto:frycook@krustykrab.com">frycook@krusty.krab</a>
            </p>
            <Adjectives>
              <AdjectiveCard>optimistic</AdjectiveCard>
              <AdjectiveCard>friendly</AdjectiveCard>
              <AdjectiveCard>nice</AdjectiveCard>
              <AdjectiveCard>loyal</AdjectiveCard>
              <AdjectiveCard>hard-woking</AdjectiveCard>
            </Adjectives>
          </Box>
        </Box>
      </FirstColumn>
      <Column>
        <Box>
          <H2>bio</H2>
          <p>
            A square yellow sponge that lives in a pineapple with my pet snail,
            Gary, in the city of Bikini Bottom on the floor of the Pacific
            Ocean. I works as a fry cook at the Krusty Krab. During my time off,
            I have a knack for attracting trouble with my best friend, Patrick.
          </p>
        </Box>
        <Box>
          <H2>goals</H2>
          <ul>
            <li>Obtain a boating license</li>
            <li>Be the best fry cook at the Krusty Krab </li>
            <li>Catch jellyfish</li>
          </ul>
        </Box>
        <Box>
          <H2>frustrations</H2>
          <ul>
            <li>Squidward&apos;s constant negativity</li>
            <li>Plankton trying to steal the secret formula</li>
            <li>Not passing the boating exam</li>
          </ul>
        </Box>
      </Column>
      <Column>
        <Box>
          <H2>personality</H2>
          <PersonalitySliderLabel>
            <p>introvert</p>
            <p>extrovert</p>
          </PersonalitySliderLabel>
          <span>
            <Slider type="range" min="1" max="100" value="100" />
          </span>
          <PersonalitySliderLabel>
            <p>analytical</p>
            <p>creative</p>
          </PersonalitySliderLabel>
          <span>
            <Slider type="range" min="1" max="100" value="100" />
          </span>
          <PersonalitySliderLabel>
            <p>loyal</p>
            <p>fickle</p>
          </PersonalitySliderLabel>
          <span>
            <Slider type="range" min="1" max="100" value="0" />
          </span>
          <PersonalitySliderLabel>
            <p>passive</p>
            <p>active</p>
          </PersonalitySliderLabel>
          <span>
            <Slider type="range" min="1" max="100" value="100" />
          </span>
        </Box>
        <Box>
          <H2>motivations</H2>
          <MotivationsContainer>
            <label htmlFor="file">work</label>
            <progress id="file" max="100" value="90">
              {' '}
              90%{' '}
            </progress>
            <label htmlFor="file">friendship</label>
            <progress id="file" max="100" value="100">
              {' '}
              100%{' '}
            </progress>
            <label htmlFor="file">fun & adventure</label>
            <progress id="file" max="100" value="80">
              {' '}
              80%{' '}
            </progress>
            <label htmlFor="file">kindness % helpfulness</label>
            <progress id="file" max="100" value="90">
              {' '}
              90%{' '}
            </progress>
          </MotivationsContainer>
        </Box>
        {/* <Box>
          <H2>favorite brands</H2>
        </Box> */}
      </Column>
    </ProfileContainer>
  )
}
