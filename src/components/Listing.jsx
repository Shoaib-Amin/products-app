import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import getCurrentDate from '../helper/getCurrentDate'
import { addProduct, clickedOff, clickedOn } from '../redux/actions'
import CreateProductForm from './CreateProductForm';

function Listing() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const isClicked = useSelector(state => state.isClicked)
    const [productName, setProductName] = useState('')
    const [productPrice, seProductPrice] = useState('')
    const [productDescription, seProductDescription] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        setFilteredProducts(products)
    }, [JSON.stringify(products), products])
    

    const resetToInitialState = () => {
        setProductName('')
        seProductPrice('')
        seProductDescription('')
    }

    const clickHandler = () => {
        if (isClicked) {
            if (!productName || !productPrice || !productDescription) return alert('All fields required')
            let newProduct = {
                name: productName,
                price: productPrice,
                description: productDescription,
                inventoryDate: getCurrentDate()
            }
            dispatch(addProduct(newProduct))
            dispatch(clickedOff())
            resetToInitialState()
            return
        }

        dispatch(clickedOn())
    }

    const onSearchHandler = e => {
        let inputString = e.target.value.toLowerCase()
        if (!inputString) {
            setFilteredProducts(products)
            return
        }
        let filteredData = products.filter(item => item.name.toLowerCase() === inputString || item.name.toLowerCase().includes(inputString))
        setFilteredProducts(filteredData)
    }

    return (
        <>
            <div className='add_btn_container'>
                <div className='search_field_container'>
                    {!isClicked && <input
                        type='search'
                        results={5}
                        placeholder='Search...'
                        onChange={onSearchHandler} />}
                </div>
                <div className='buttons_container'>
                    <button className='button add_button' onClick={clickHandler}>{isClicked ? 'Create' : 'Add New'}</button>
                    {isClicked && <button className='button cancel_button' onClick={() => dispatch(clickedOff())}>Cancel</button>}
                </div>
            </div>
            {
                isClicked && <CreateProductForm
                    name={productName}
                    price={productPrice}
                    description={productDescription}
                    setProductName={setProductName}
                    seProductPrice={seProductPrice}
                    seProductDescription={seProductDescription}
                />
            }
            {
                !isClicked && filteredProducts.map((product, i) => (
                    <Card key={`${product.name}${i}`} product={product} />
                ))
            }
        </>
    )
}

export default Listing