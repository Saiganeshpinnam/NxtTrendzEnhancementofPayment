import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartTotal = cartList
        .map(eachCartItem => eachCartItem.price * eachCartItem.quantity)
        .reduce((sum, itemTotal) => sum + itemTotal, 0)
      return (
        <>
          <h1 className="order-total-heading">
            Order Total:
            <span className="cart-amount-value"> Rs {cartTotal}/-</span>
          </h1>
          <p className="cart-items-count">{cartList.length} Items in cart</p>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
