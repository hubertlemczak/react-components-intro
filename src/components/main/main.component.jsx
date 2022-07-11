import './main.styles.css';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';

const Main = () => (
  <main>
    <Logo />
    <input className="search-bar" type="search" />
    <div className="buttons">
      <Button buttonText={'Google Search'} />
      <Button buttonText={'Feeling Lucky'} />
    </div>
  </main>
);

export default Main;
