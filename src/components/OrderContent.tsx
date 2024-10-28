import { type OrderItemType } from '../../types'
import { formatCurrency } from '../helpers'
import { TrashCan, Minus, Plus } from './Icons'

type Props = {
  order: OrderItemType[]
  deleteItem: (id: OrderItemType['id']) => void
  addQuantity: (id: OrderItemType['id']) => void
  subtractQuantity: (id: OrderItemType['id'], quantity: number) => void
}
export function OrderContent({
  order,
  deleteItem,
  addQuantity,
  subtractQuantity
}: Props) {
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
                  onClick={() => subtractQuantity(id, quantity)}
                >
                  <Minus />
                </button>
                <span className="p-2">{quantity}</span>
                <button
                  className="p-2 border rounded-md hover:bg-gray-200"
                  onClick={() => addQuantity(id)}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <button
              className="p-2 border rounded-md hover:bg-red-600"
              onClick={() => deleteItem(id)}
            >
              <TrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
