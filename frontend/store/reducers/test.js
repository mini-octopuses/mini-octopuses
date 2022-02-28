export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const DeleteProduct = id => {
    return {
        type: DELETE_PRODUCT,
        storeId: id
    }
}

export const AddProduct = nameProduct => {
    return {
        type: ADD_PRODUCT,
        name: nameProduct
    }
}