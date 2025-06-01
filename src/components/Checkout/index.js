import Popup from 'reactjs-popup'

import {Component} from 'react'

import './index.css'

const paymentMethodsList = [
  {
    paymentMethodId: 0,
    paymentName: 'Card',
  },
  {
    paymentMethodId: 1,
    paymentName: 'Net Banking',
  },
  {
    paymentMethodId: 2,
    paymentName: 'UPI',
  },
  {
    paymentMethodId: 3,
    paymentName: 'Wallet',
  },
  {
    paymentMethodId: 4,
    paymentName: 'Cash on Delivery',
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
      <>
        {isOrderPlaced ? (
          <h1>Order Successful</h1>
        ) : (
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button">
                Checkout
              </button>
            }
          >
            {close => (
              <>
                <ul className="payments-container">
                  {paymentMethodsList.map(eachPaymentMethod => (
                    <li key={eachPaymentMethod.id}>
                      <input
                        type="radio"
                        id={eachPaymentMethod.paymentName}
                        name="payment"
                      />
                      <label htmlFor={eachPaymentMethod.paymentName}>
                        {eachPaymentMethod.paymentName}
                      </label>
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => close()}>
                  close
                </button>
                <button type="button" onClick={this.onClickingConfirmBtn}>
                  Confirm
                </button>
              </>
            )}
          </Popup>
        )}
      </>
    )
  }
}

export default Checkout
