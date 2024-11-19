import { Dispatch, useCallback, useMemo } from 'react'
import { type OrderItemType } from '../../types'
import { formatCurrency } from '../helpers'
import { OrderActionType } from '../reducers/orderReducer'

type Props = {
  order: OrderItemType[]
  tip: number
  dispatch: Dispatch<OrderActionType>
}
export function OrderTotals({ order, tip, dispatch }: Props) {
  const subtotal = useCallback(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  )
  const tipAmount = useMemo(() => subtotal() * tip, [tip, order])
  const total = useMemo(() => subtotal() + tipAmount, [tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl">Totales y propina:</h2>
        <p>
          Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotal())}</span>
        </p>
        <p>
          Propina:{' '}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{' '}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full py-3 uppercase bg-black text-white rounded-md font-bold mt-10 disabled:opacity-20"
        disabled={total === 0}
        onClick={() => dispatch({ type: 'RESET_ORDER' })}
      >
        Reset Order
      </button>
    </>
  )
}
