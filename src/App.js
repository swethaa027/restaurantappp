
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';



import Home from './components/Home';


import Cart from './components/Cart';
import Filemanage from './components/Filemanage';
import Ordermanage from './components/Ordermanage';
import MenuManagement from './components/Menumanage';
import Feedback from './components/Feedback';
import Admin from './components/Admin';
import Additem from './components/Additem';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>  
      <Route path='/Signup' element={<Signup/>}/> 

      <Route path='/Cart' element={<Cart/>}/> 
      <Route path='/file' element={<Filemanage/>}/>
      <Route path='/order' element={<Ordermanage></Ordermanage>}></Route>
      <Route path='/menu' element={<MenuManagement></MenuManagement>}/>
      <Route path='/Feedback' element={<Feedback/>}/>
      <Route path='/Admin' element={<Admin/>}/>

      <Route path='/add' element={<Additem/>}/>
      
      
      </Routes>

      
</div>
  )   
}

export default App;
