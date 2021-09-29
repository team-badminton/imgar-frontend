import React, { ReactElement } from 'react';
import { LogoContainer } from './Logo.styled';
import { LogoProps } from './Logo.type';
import { ReactComponent as LogoSvg } from './assets/imgarLogo.svg';
import logoPng from './assets/imgarLogoIcon.png';
import { Picture } from '..';
import { a11yHidden } from '@/util/styleUtils';
import { Link } from 'react-router-dom';

function Logo({ as, icon, to }: LogoProps): ReactElement {
  return to ? (
    <Link to={to}>
      <LogoContainer as={as} icon={icon}>
        <span
          css={`
            ${a11yHidden}
          `}
        >
          Imgar Logo
        </span>
        {icon ? <Picture src={logoPng} /> : <LogoSvg />}
      </LogoContainer>
    </Link>
  ) : (
    <LogoContainer as={as} icon={icon}>
      <span
        css={`
          ${a11yHidden}
        `}
      >
        Imgar Logo
      </span>
      {icon ? <Picture src={logoPng} /> : <LogoSvg />}
    </LogoContainer>
  );
}

Logo.defaultProps = {
  as: 'div',
};

export default React.memo(Logo);
