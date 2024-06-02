import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, hideItemInCart, placeOrder }) {
    const handleOrder = () => {
        placeOrder();
        alert('Ваш заказ был успешно оформлен!');
    };

    const totalAmount = cartItems.reduce((total, item) => item.hidden ? total : total + item.price, 0).toFixed(2);

    return (
        <div className="cart-container">
            <h2>Корзина</h2>
            {cartItems.every(item => item.hidden) ? (
                <p>У вас нет выбранного товара</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            !item.hidden && (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                    <button
                                        className="remove-button"
                                        onClick={() => hideItemInCart(index)}
                                    >
                                        Удалить
                                    </button>
                                </li>
                            )
                        ))}
                    </ul>
                    <p className="cart-total">
                        Total: ${totalAmount}
                    </p>
                    <button className="order-button" onClick={handleOrder}>
                        Купить
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartPage;
