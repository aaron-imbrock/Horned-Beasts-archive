import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';

function App() {
  return (
    <>
      <Container>
        <Header title='Horned Beasts' />
        <Main heading="Choose Your Favorite!" imageUrls={imageUrls} />
        <Footer title='Your opinion counts!' />
      </Container>

    </>
  );
}

export default App;