import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { addProduct ,getProductById , editProduct} from '../services/localStorage';


export const ProductForm = () => {
    const navigate = useNavigate();
    const {id} =useParams();
    const [showAlert, setShowAlert] = useState(false);
    const {inputValues, handleInputChange, resetForm , setForm}  = useForm({
        name:'',
        brand:'',
        description:'',
        price:'',

    });

    useEffect(() => {
        if(id){
            const product = getProductById(id);
            resetForm(product);
        }
    },[id]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        id ? editProduct(id, inputValues): addProduct(inputValues);
        setShowAlert(true);
        resetForm();
        setTimeout(()=>{
            setShowAlert(false);
        },2000);
    }
  return (
    <div>
        <div className="d-flex my-5 justify-content-between">
            <button className='btn btn-outline-secondary' onClick={() => navigate("/")}>Back</button>
            <h1>{id ? "Edit" : "Create"} Product</h1>
            <div/>
        </div>

        {/* form */}

        <div className="card border-primary p-5 m-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='form-label mt-2' htmlFor="name">Name</label>
                    <input 
                    name='name'
                    id="name" 
                    type="text" 
                    value={inputValues.name}
                    onChange={handleInputChange}
                    className='form-control' 
                    placeholder='Enter Product Name' />
                </div>

                <div className="form-group">
                    <label className='form-label mt-2' htmlFor="brand">Brand</label>
                    <input 
                    name='brand'
                    type="text" 
                    className='form-control' 
                    value={inputValues.brand}
                    onChange={handleInputChange}
                    //src="img_submit.gif" 
                    //alt="Submit" 
                    id="brand" 
                    placeholder='Enter Email' />
                </div>

                <div className="form-group">
                    <label className='form-label mt-2' htmlFor="description">Description</label>
                    <input 
                    name='description'
                    type="text" 
                    className='form-control' 
                    value={inputValues.description}
                    onChange={handleInputChange}
                    id="description" 
                    placeholder='Enter Product Description' />
                </div>

                <div className="form-group">
                    <label className='form-label mt-2' htmlFor="price">Price</label>
                    <input 
                    name='price'
                    type="number" 
                    className='form-control' 
                    value={inputValues.price}
                    onChange={handleInputChange}
                    id="price" 
                    placeholder='Enter Price' />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type='submit' className='btn btn-outline-primary'>Add Product</button>
                </div>
            </form>
        </div>

        {
            showAlert && (
                <div className='px-5'>
                    <div className="alert alert-success text-white" role='alert'>
                        Well done! added a new product.
                    </div>
                </div>
            )
        }
    </div>
  )
}
