import { Dispatch } from 'react'
import { type MenuItemType } from '../../types'
import { formatCurrency } from '../helpers'
import { OrderActionType } from '../reducers/orderReducer'

type Props = {
  item: MenuItemType
  dispatch: Dispatch<OrderActionType>
}
export function MenuItem({ item, dispatch }: Props) {
  const { name, price } = item
  return (
    <div className="w-full h-fit p-3 flex justify-between items-center rounded-lg">
      <p>
        {name} - {formatCurrency(price)}
      </p>
      <button
        className="bg-black text-white px-3 py-2 rounded-md font-bold text-sm hover:bg-gray-800"
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: { item } })}
      >
        Agregar
      </button>
    </div>
  )
}
