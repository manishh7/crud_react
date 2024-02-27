import React, { useEffect, useState } from 'react'
import { ProductItem } from './ProductItem'
import { getListOfProducts } from '../services/localStorage';


export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getListOfProducts());
    })
    return (
        <div>
            <h1 className='my-5 text-center'>Manage Product</h1>

            {
                products.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(product =>
                                    <ProductItem
                                        product={product}
                                        key={product.id}
                                        setProducts={setProducts}
                                    />
                                )}

                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className='text-center'>No Products</h3>
                )
            }

        </div>
    )
}
