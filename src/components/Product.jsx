import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../redux/slices/CartSlice'

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }


  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
      
      <div>
        <p className='text-grey-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
      </div>

      <div>
        <p className='w-40 text-grey-300 font-normal text-[10px] text-left'>{post.description.split(" ").splice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full' alt='post-Pic'/>
      </div>

      <div className='flex items-center justify-between w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price} </p>
        </div>

          { 
            cart.some((p) => p.id === post.id) ? 
            (
            <button className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={removeFromCart}>
              Remove Item
            </button>
            ) : 
            (
            <button className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={addToCart}>
              Add to cart
            </button>
            )
          }
      </div>

    </div>
  )
}

export default Product