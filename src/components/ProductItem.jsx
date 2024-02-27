import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getListOfProducts } from '../services/localStorage';

export const ProductItem = ({product , setProducts}) => {
    const {id,name,brand,description,price}=product;
    const navigate = useNavigate();
    const removeProduct = () =>{
        deleteProduct(id);
        setProducts(getListOfProducts);
    }
  return (
    <tr>
        {/* <th>Product Name</th>
        <th>Product Brand </th>
        <th>Product Category</th>
        <th>Product Price</th> */}
        <th>{name}</th>
        <th>{brand}</th>
        <th>{description}</th>
        <th>{price}</th>
        <th>
            <div className='d-flex gap-3'>
                <span role='button' className='badge bg-success' 
                onClick={() => navigate(`/edit-product/${id}`)}
                >
                    Edit</span>
                <span role='button' className='badge bg-danger' 
                onClick={removeProduct()}>Delete</span>
            </div>
        </th>
    </tr>
  )
}
