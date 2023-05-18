import Container from './components/container/Container';
import Modal from './components/modal/Modal';
import Tabs from './components/tabs/Tabs';
import Title from './components/title/Title';
import { useTheme } from './hooks/useTheme';
// styles
import './styles/style.scss';

function App() {
  let clazz = 'app';
  const { font, color } = useTheme();
  switch (color) {
    case '#F87070':
      clazz += ' orange-theme';
      break;
    case '#70F3F8':
      clazz += ' blue-theme';
      break;
    case '#D881F8':
      clazz += ' pink-theme';
      break;
    default:
      clazz += ' orange-theme';
      break;
  }
  return (
    <div className={clazz} style={{ fontFamily: font }}>
      <Container>
        <Title />
        <Tabs />
        <Modal />
      </Container>
    </div>
  );
}

export default App;
