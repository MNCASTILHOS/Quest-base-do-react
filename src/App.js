import Paragraph from './components/paragraph/paragraph'
import './App.css';
import Button from './components/button/button'

function App() {
  return (
    <>
      <Paragraph color='blue'>
        Desenvolvendo um aplicação sobre a base do React
      </Paragraph>

      <Button label='Clique aqui' />
    </>
  );
}

export default App;
