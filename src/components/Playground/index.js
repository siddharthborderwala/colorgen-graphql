import ColorBox from '../ColorBox';
import namer from 'color-namer';

import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import './styles.scss';

const generateName = (color) => {
  return namer('#' + color, { pick: ['ntc'] }).ntc[0].name;
};

const colorsList = [
  'F87171',
  'FDE68A',
  'A7F3D0',
  '2563EB',
  'A78BFA',
  'EC4899',
  'D97706',
];

const Playground = () => {
  return (
    <main className="playground">
      {colorsList.map((color, index) => (
        <ColorBox key={index} label={generateName(color)} hexCode={color} />
      ))}
      <div className="playground--add-new">
        <p className="color-box--label">add new color here</p>
        <button className="playground--add-new__body">
          <PlusIcon className="playground--add-new__plus" />
        </button>
      </div>
    </main>
  );
};

export default Playground;
