import { ReactComponent as SpinIcon } from '../../assets/spin.svg';
import './styles.scss';

/**
 * Spinner Component
 */
const Spinner = ({ size = '1.5rem' }) => {
  return (
    <div className="spinner">
      <SpinIcon height={size} width={size} />
    </div>
  );
};

export default Spinner;
