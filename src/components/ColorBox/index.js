import { hex } from 'color-convert';

import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import './styles.scss';

const ColorBox = ({ label = '', hexCode = 'f8f8f8' }) => {
  return (
    <div className="color-box">
      <div className="color-box--head">
        <p className="color-box--label">{label}</p>
        <button className="color-box--trash-icon">
          <TrashIcon />
        </button>
      </div>
      <div className="color-box--body">
        <div
          className="color-box--color"
          style={{ backgroundColor: `#${hexCode}` }}
        />
        <div className="color-box--info">
          <div className="color-box--info__hex">
            <span className="badge">HEX</span>
            <p className="color-box--info__value">{`#${hexCode}`}</p>
          </div>
          <div className="color-box--info__rgb">
            <span className="badge">RGB</span>
            <p className="color-box--info__value">{hex.rgb(hexCode)}</p>
          </div>
          <div className="color-box--info__cmyk">
            <span className="badge">CMYK</span>
            <p className="color-box--info__value">{hex.cmyk(hexCode)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
