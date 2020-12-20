import { ReactComponent as SpinIcon } from '../../assets/spin.svg';
import './styles.scss';

const Spinner = ({ size = '1.5rem' }) => {
  return (
    <div className="spinner">
      <SpinIcon height={size} width={size} />
    </div>
  );
};

export default Spinner;
