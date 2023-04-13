import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';

function App() {
  return (
   <>
    <Header title='Horned Beasts'/>
    <Main heading="Main soon" imageUrls={imageUrls}/>
    <Footer title='Your opinion counts!'/>
   </>
  );
}

export default App;