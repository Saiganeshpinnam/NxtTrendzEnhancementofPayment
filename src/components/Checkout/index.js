import Popup from 'reactjs-popup'

import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const paymentMethodsList = [
  {
    paymentMethodId: 0,
    paymentName: 'Card',
    paymentImage:
      'https://res.cloudinary.com/dccbkv07a/image/upload/v1748773815/images_shtkah.jpg',
  },
  {
    paymentMethodId: 1,
    paymentName: 'Net Banking',
    paymentImage:
      'https://res.cloudinary.com/dccbkv07a/image/upload/v1748773745/images_hdpodc.png',
  },
  {
    paymentMethodId: 2,
    paymentName: 'UPI',
    paymentImage:
      'https://res.cloudinary.com/dccbkv07a/image/upload/v1748772711/upi-twitter_touuwb.webp',
  },
  {
    paymentMethodId: 3,
    paymentName: 'Wallet',
    paymentImage:
      'https://res.cloudinary.com/dccbkv07a/image/upload/v1748773640/Digital-Wallets-Why-Every-Merchant-Needs-Them_PayU-header-494x434-1-494x434_1_oiznkp.png',
  },
  {
    paymentMethodId: 4,
    paymentName: 'Cash on Delivery',
    paymentImage:
      'https://res.cloudinary.com/dccbkv07a/image/upload/v1748773880/cash-delivery-concept-vector-illustration_620585-2106_rwvxuo.avif',
  },
]

class Checkout extends Component {
  state = {
    isOrderPlaced: false,
  }

  onClickingConfirmBtn = () => {
    this.setState({
      isOrderPlaced: true,
    })
  }

  render() {
    const {isOrderPlaced} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const cartTotal = cartList
            .map(eachCartItem => eachCartItem.price * eachCartItem.quantity)
            .reduce((sum, itemTotal) => sum + itemTotal, 0)
          return (
            <>
              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <div className="checkout-container">
                    {isOrderPlaced ? (
                      <div className="order-Successful-container">
                        <h1>Your order has been placed successfully</h1>
                        <button
                          type="button"
                          onClick={() => close()}
                          className="opt-out-btn"
                        >
                          close
                        </button>
                      </div>
                    ) : (
                      <>
                        <h1 className="order-summary-heading">
                          Order Summary:
                        </h1>
                        <div className="order-summary-container">
                          <div className="each-summary-price-container summary-item-text">
                            <p>Items Price </p>
                            <p> ₹{cartTotal}.00</p>
                          </div>
                          <div className="each-summary-price-container summary-item-text">
                            <p>Number of Items: </p>
                            <p> {cartList.length} Item(s)</p>
                          </div>
                          <div className="each-summary-price-container summary-item-text">
                            <p>Delivery:</p>
                            <p> ₹50.00</p>
                          </div>
                          <div className="each-summary-price-container summary-item-text">
                            <p>Total Price:</p>
                            <p>₹{cartTotal + 50}.00</p>
                          </div>
                          <div className="each-summary-price-container summary-item-text">
                            <p>Promotion Applied:</p>
                            <p> ₹30.00</p>
                          </div>
                          <div className="each-summary-price-container">
                            <h1 className="total-order-price">Order Total:</h1>
                            <h1 className="total-order-price">
                              ₹{cartTotal + 20}.00
                            </h1>
                          </div>
                        </div>
                        <h1 className="payment-method-heading">
                          PAYMENT METHOD:
                        </h1>
                        <ul className="payments-container">
                          {paymentMethodsList.map(eachPaymentMethod => (
                            <li
                              key={eachPaymentMethod.id}
                              className="payment-type"
                            >
                              <div className="input-container">
                                <input
                                  type="radio"
                                  id={eachPaymentMethod.paymentName}
                                  name="payment"
                                />
                                <label htmlFor={eachPaymentMethod.paymentName}>
                                  {eachPaymentMethod.paymentName}
                                </label>
                              </div>
                              <img
                                src={eachPaymentMethod.paymentImage}
                                alt={eachPaymentMethod.paymentName}
                                className="payment-image"
                              />
                            </li>
                          ))}
                        </ul>
                        <div className="confirm-cancel-btns-container">
                          <button
                            type="button"
                            onClick={this.onClickingConfirmBtn}
                            className="opt-in-btn"
                          >
                            Confirm
                          </button>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="opt-out-btn"
                          >
                            close
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </Popup>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Checkout
