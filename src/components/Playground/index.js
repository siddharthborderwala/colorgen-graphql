import { useSubscription } from '@apollo/client';

import ColorBox from '../ColorBox';
import AddColor from '../AddColor';
import Spinner from '../Spinner';
import { COLORS_SUBSCRIPTION } from '../../graphql';

import './styles.scss';

/**
 * Displays a grid of ColorBoxes and AddColor component
 */
const Playground = () => {
  const { data, loading, error } = useSubscription(COLORS_SUBSCRIPTION);

  if (loading)
    return (
      <main className="playground">
        <Spinner size="2rem" />
      </main>
    );
  else if (error) {
    return (
      <main className="playground">
        <p>Error 💥</p>
      </main>
    );
  }

  return (
    <main className="playground">
      {data.colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
      <AddColor />
    </main>
  );
};

export default Playground;
