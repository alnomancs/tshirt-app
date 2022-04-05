import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './Components/Grandpa/Grandpa';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>


      </Routes>

    </div>
  );
}

export default App;
