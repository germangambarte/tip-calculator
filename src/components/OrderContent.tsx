import { Dispatch } from 'react'
import { type OrderItemType } from '../../types'
import { formatCurrency } from '../helpers'
import { OrderActionType } from '../reducers/orderReducer'
import { TrashCan, Minus, Plus } from './Icons'

type Props = {
  order: OrderItemType[]
  dispatch: Dispatch<OrderActionType>
}
export function OrderContent({ order, dispatch }: Props) {
  return (
    <div>
      <ul className=" mt-5">
        {order.map(({ id, name, price, quantity }) => (
          <li
            key={id}
            className="flex justify-between items-center border-t border-gray-200 py-6 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {name} - {formatCurrency(price)} x{quantity}
              </p>
              <div className="flex justify-start items-center">
                <button
                  className="p-2 border rounded-md hover:bg-gray-200"
                  onClick={() =>
                    dispatch({ type: 'SUBTRACT_QUANTITY', payload: { id } })
                  }
                >
                  <Minus />
                </button>
                <span className="p-2">{quantity}</span>
                <button
                  className="p-2 border rounded-md hover:bg-gray-200"
                  onClick={() =>
                    dispatch({
                      type: 'ADD_QUANTITY',
                      payload: { id }
                    })
                  }
                >
                  <Plus />
                </button>
              </div>
            </div>
            <button
              className="p-2 border rounded-md hover:bg-red-600"
              onClick={() => dispatch({ type: 'DELETE_ITEM', payload: { id } })}
            >
              <TrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
