import {Route, Routes } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {ProductList , ProductForm} from "./components";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/create-product" element={<ProductForm/>}/>
          <Route path="/edit-product/:id" element={<ProductForm/>}/> 
        </Routes>
      </div>
    </div>
  )
}
