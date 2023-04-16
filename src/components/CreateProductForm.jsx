import React from 'react'

function CreateProductForm({
    name, description, price, setProductName, seProductPrice, seProductDescription
}) {
    return (
        <div className='form_container'>
            <div className='input_field_container'>
                <input
                    type='text'
                    placeholder='Product name'
                    value={name}
                    onChange={e => setProductName(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Price'
                    name={price}
                    onChange={e => seProductPrice(e.target.value)}
                />
            </div>
            <textarea
                type='text'
                placeholder='Description'
                rows={5}
                value={description}
                onChange={e => seProductDescription(e.target.value)}
            />
        </div>
    )
}

export default CreateProductForm