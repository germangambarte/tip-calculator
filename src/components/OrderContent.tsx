import { type OrderItemType } from '../../types'
import { formatCurrency } from '../helpers'

type Props = {
  order: OrderItemType[]
  deleteItem: (id: OrderItemType['id']) => void
}
export function OrderContent({ order, deleteItem }: Props) {
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
                {name} - {formatCurrency(price)}
              </p>
              <p className="font-black">
                Cantidad: {quantity} - {formatCurrency(price * quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => deleteItem(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
