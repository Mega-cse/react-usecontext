import React, { useContext } from 'react';
import { myContext } from '../../App';

const Cart = () => {
    const [cartItems, setCartItems] = useContext(myContext);

    // Function to update quantity and recalculate total price
    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    // Function to remove item from cart
    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    // Calculate total price and total quantity
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * (item.quantity || 1);
    }, 0);

    const totalQuantity = cartItems.reduce((total, item) => {
        return total + (item.quantity || 1);
    }, 0);

    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <div className="card mb-3" style={{ Width: "100%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.image} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: 'auto', maxHeight: '150px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}rs</p>
                                    <label htmlFor={`dropdown-${index}`}>Quantity</label>
                                    <select
                                        id={`dropdown-${index}`}
                                        value={item.quantity || 1}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                     >
                                        {[1, 2, 3, 4, 5].map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <p>Total Quantity: {totalQuantity}</p>
                                    <p>Total Price:{totalPrice}rs</p>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
