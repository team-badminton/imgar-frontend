import React, { ReactElement } from 'react';
import { LogoContainer } from './Logo.styled';
import { LogoProps } from './Logo.type';
import { ReactComponent as LogoSvg } from './assets/imgarLogo.svg';
import logoPng from './assets/imgarLogoIcon.png';
import { Image } from '..';
import { a11yHidden } from '@/util/styleUtils';

function Logo({ as, icon }: LogoProps): ReactElement {
  return (
    <LogoContainer as={as} icon={icon}>
      <span
        css={`
          ${a11yHidden}
        `}
      >
        Imgar Logo
      </span>
      {icon ? <Image src={logoPng} /> : <LogoSvg />}
    </LogoContainer>
  );
}

Logo.defaultProps = {
  as: 'div',
};

export default React.memo(Logo);
