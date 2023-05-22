import  GoogleTranslate  from './pages/GoogleTranslate';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Protected from './Protected';
//import RegisterData from './pages/RegisterData';


function App() {
  const str = "?search=Tides%20&%20Storm%20Surge";
  const updatedText = decodeURI(str);
  
  console.log(updatedText); // ?search= Tides & Storm Surge  => Tides & Storm Surge
  return (
   <div>
    <BrowserRouter>
    <Routes> <Route index element = {<Login />} /> </Routes>
    <Routes> <Route path = '/login' element = {<Login />} /> </Routes>
    <Routes> <Route path = '/translate' element = {<GoogleTranslate />} /> </Routes>
    {/* <Routes> <Route path='/home' element= {<Protected Component ={Home} />} /> </Routes> */}
     <Routes> <Route path='/register' element={<Register />} /> </Routes>
     <Routes> <Route path='/user' element={<Protected />} > 
     <Route path='home' element= {<Home />} /> </Route>
     </Routes>
    {/* <Routes> <Route path='/registerdata' element={<Protected Component ={RegisterData} />} /> </Routes> */}
<Routes>

</Routes>

    </BrowserRouter>
    </div>
  );
}
export default App