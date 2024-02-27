import uuid from "react-uuid";
export const getListOfProducts = () =>{ 
    if(!localStorage["@products"]){
        localStorage["@products"]= JSON.stringify([]);
    }

    let products = JSON.parse(localStorage["@products"]);
    return products;
};

export const getProductById = (id) =>{
    const products = getListOfProducts();
    const product = products.find(product.id === id);
    return product; 
};

export const addProduct = (product) =>{
    const products = getListOfProducts();
    products.push({id: uuid(),...product});
    localStorage["@products"] = JSON.stringify(products);
};

export const editProduct = (id , newProduct) =>{
 let products = getListOfProducts();
 products = products.filter(product => product.id !== id);
 products.push(newProduct);
 localStorage["@product"] = JSON.stringify(products);
}

export const deleteProduct = (id) =>{
    let products = getListOfProducts();
    products = products.filter(product => product.id !== id);
    localStorage["@product"] = JSON.stringify(products);
   }
