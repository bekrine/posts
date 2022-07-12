import {Routes ,Route} from 'react-router-dom'
import Layout from './compenents/Layout';
import SignUp from "./pages/SignUp";
import Navbar from "./compenents/Navbar";
import Home from './pages/Home'
import Signin from './pages/Signin';
import Postes from './pages/Postes';
import Missing from './pages/Missing';

function App() {
  return (
          <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/postes' element={<Postes/>}/>
                <Route path='*' element={<Missing/>}/>
            </Route>
          </Routes>

          </>
  );
}

export default App;
