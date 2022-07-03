import {Routes ,Route} from 'react-router-dom'
import SignUp from "./pages/SignUp";
import Navbar from "./compenents/Navbar";
import Home from './pages/Home'
import Signin from './pages/Signin';

function App() {
  return (
          <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<Signin/>}/>
          </Routes>

          </>
  );
}

export default App;
