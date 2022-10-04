import * as Styles from './styles';

import beerGif from '../../../images/beer-18.gif';

function Logo() {
  return (
    <Styles.LogoDiv>
      <Styles.ImgConfig src={ beerGif } />
    </Styles.LogoDiv>
  );
}

export default Logo;
