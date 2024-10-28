import { type MenuItemType } from '../../types'
import { formatCurrency } from '../helpers'

type Props = {
  item: MenuItemType
  addItem: (item: MenuItemType) => void
}
export function MenuItem({ item, addItem }: Props) {
  const { name, price } = item
  return (
    <div
      className="w-full h-fit p-3 flex justify-between items-center rounded-lg"
    >
      <p>{name} - {formatCurrency(price)}</p>
      <button className='bg-black text-white px-3 py-2 rounded-md font-bold text-sm hover:bg-gray-800'
      onClick={() => addItem(item)}
      >Agregar</button>
    </div>
  )
}
