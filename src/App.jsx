import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
const App = () => {
  return (
      <nav>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"/>
      </nav>
      
  
  );
};

export default App;
