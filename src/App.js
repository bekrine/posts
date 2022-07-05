import {Routes ,Route} from 'react-router-dom'
import SignUp from "./pages/SignUp";
import Navbar from "./compenents/Navbar";
import Home from './pages/Home'
import Signin from './pages/Signin';
import Postes from './pages/Postes';

function App() {
  return (
          <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/postes' element={<Postes/>}/>
          </Routes>

          </>
  );
}

export default App;
