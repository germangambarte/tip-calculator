import { type MenuItemType } from '../../types'
import { formatCurrency } from '../helpers'

type Props = {
  item: MenuItemType
  addItem: (item: MenuItemType) => void
}
export function MenuItem({ item, addItem }: Props) {
  const { name, price } = item
  return (
    <button
      onClick={() => addItem(item)}
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-lg"
    >
      <p>{name}</p>
      <p className="font-black">{formatCurrency(price)}</p>
    </button>
  )
}
