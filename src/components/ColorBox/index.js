import { useMemo, useState } from 'react';
import { useMutation } from '@apollo/client';
import { hex } from 'color-convert';

import Spinner from '../Spinner';
import { DELETE_ONE_COLOR, UPDATE_LABEL } from '../../graphql';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';

import './styles.scss';

const ColorBox = ({ color }) => {
  const { code, label, id } = color;
  const [rgbCode, setRgbCode] = useState('');
  const [cmykCode, setCmykCode] = useState('');
  const [deleteColor, { loading, error }] = useMutation(DELETE_ONE_COLOR, {
    variables: { id },
  });
  const [updateLabel] = useMutation(UPDATE_LABEL, {
    variables: { id, label },
  });

  const handleDelete = () => {
    deleteColor();
    if (error) alert('Sorry, something got messed up 🙁');
  };

  const handleBlur = (e) => {
    let updatedLabel = e.target.textContent;
    if (updatedLabel === label) return;
    if (updatedLabel === '') updatedLabel = label;
    updateLabel({ variables: { id, label: updatedLabel } });
  };

  useMemo(() => {
    const rgbCodeFromHex = hex.rgb(code);
    setRgbCode(
      `(${rgbCodeFromHex[0]}, ${rgbCodeFromHex[1]}, ${rgbCodeFromHex[2]})`
    );
    const cmykCodeFromHex = hex.cmyk(code);
    setCmykCode(
      `(${cmykCodeFromHex[0]}, ${cmykCodeFromHex[1]}, ${cmykCodeFromHex[2]}, ${cmykCodeFromHex[3]})`
    );
  }, [code]);

  return (
    <div className="color-box">
      <div className="color-box--head">
        <p
          contentEditable
          onInput={() => undefined}
          className="color-box--label"
          onBlur={handleBlur}
        >
          {label}
        </p>
        <button className="color-box--trash-icon" onClick={handleDelete}>
          {loading ? <Spinner size="1.25rem" /> : <TrashIcon />}
        </button>
      </div>
      <div className="color-box--body">
        <div
          className="color-box--color"
          style={{ backgroundColor: `#${code}` }}
        />
        <div className="color-box--info">
          <div className="color-box--info__hex">
            <span className="badge">HEX</span>
            <p className="color-box--info__value">{code}</p>
          </div>
          <div className="color-box--info__rgb">
            <span className="badge">RGB</span>
            <p className="color-box--info__value">{rgbCode}</p>
          </div>
          <div className="color-box--info__cmyk">
            <span className="badge">CMYK</span>
            <p className="color-box--info__value">{cmykCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
