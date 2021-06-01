import styled from 'styled-components';
import media from 'styled-media-query';
import backgroundImage from 'assets/images/background.jpg';

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: minmax(300px, 800px) 1fr;
  grid-template-areas: 'backgroundImage outletWrapp';
  position: relative;

  ${media.lessThan('huge')`
    grid-template-columns: minmax(340px, 800px) 1fr;
  `}

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
    grid-template-areas: 'outletWrapp';
  `}
`;
export const BackgroundImage = styled.div`
  grid-area: backgroundImage;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Logo = styled.img``;

export const OutletWrapper = styled.div`
  display: flex;
  grid-area: outletWrapp;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  transition-property: height;
`;
