import styled from 'styled-components';
import media from 'styled-media-query';
import backgroundImage from 'assets/images/background.png';

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: minmax(300px, 800px) 1fr;

  ${media.lessThan('huge')`
    grid-template-columns: minmax(340px, 800px) 1fr;
  `}
`;
export const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Logo = styled.img``;

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
