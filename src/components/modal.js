import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'


const Modal = () => {
    const dispatch = useDispatch();


  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items?</h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn'
                 onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeModal())
                    }}>Confirm</button>
                <button type='button' className='btn clear-btn'
                 onClick={() => {dispatch(closeModal())}}>Clear</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal