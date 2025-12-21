import React , {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
const ProductItem = ({id, image, images, name, price}) => {
    const {currency} = useContext(ShopContext);
    
    // Handle both image and images properties
    const productImage = image || images;
    const imageUrl = Array.isArray(productImage) ? productImage[0] : productImage;
    
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
<div className='overflow-hidden'>
    <img src={imageUrl} alt="" className='hover:scale-110 transition ease-in-out' />
</div>
<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
