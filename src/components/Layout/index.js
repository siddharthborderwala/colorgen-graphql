import Header from '../Header';
import Playground from '../Playground';

import './styles.scss';

/**
 * Layout of the application
 */
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Playground />
    </div>
  );
};

export default Layout;
