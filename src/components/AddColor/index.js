import { useMutation } from '@apollo/client';
import { ADD_ONE_COLOR } from '../../graphql';
import Spinner from '../Spinner';

import generateLabel from '../../utils/generateLabel';
import generateColor from '../../utils/generateColor';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import './styles.scss';

const AddColor = () => {
  const [addColor, { loading, error }] = useMutation(ADD_ONE_COLOR);

  const handleAddColor = () => {
    const code = generateColor();
    const label = generateLabel(code);

    addColor({ variables: { label, code } });
  };

  return (
    <div className="add-color">
      <p className="color-box--label">add new color here</p>
      <button className="add-color__body" onClick={handleAddColor}>
        {loading && !error ? (
          <Spinner />
        ) : (
          <PlusIcon className="add-color__plus" />
        )}
      </button>
    </div>
  );
};

export default AddColor;
