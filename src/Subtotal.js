import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
        rendetText={(value)=>(
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{`$0`}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/>This order contains gifts
            </small>
            </>
        )}
            decimalScale={2}
            value={2}
            displayType={"text"}
            thousandSeparator={true}
            prefic={"$"}
        />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
