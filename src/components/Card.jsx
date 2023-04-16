import React from 'react'

function Card({ product }) {
  return (
    <div className='product_card_container'>
      <div className='product_name_container'>
        <div>
          <p className='product_name'>
            {product.name}
            <span style={{ fontWeight: 400, marginLeft: 30 }}>{`$${product.price}`}</span>
          </p>
        </div>
        <p className='date_style'>{product.inventoryDate}</p>

      </div>
      <p className='product_description'>{product.description}</p>

    </div>
  )
}

export default Card