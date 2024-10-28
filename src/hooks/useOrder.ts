import { useState } from 'react'
import { type MenuItemType, type OrderItemType } from '../../types'

export function useOrder() {
  const [order, setOrder] = useState<OrderItemType[]>([])
  const [tip, setTip] = useState(0.1)

  function addItem(item: MenuItemType) {
    const itemExist = order.find(({ id }) => id === item.id)
    if (itemExist) {
      addQuantity(item.id)
    } else {
      setOrder([...order, { ...item, quantity: 1 }])
    }
  }

  function subtractQuantity(id: OrderItemType['id'], quantity: number) {
    if (quantity === 1) {
      deleteItem(id)
      return
    }
    setOrder(
      order.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      )
    )
  }

  function addQuantity(id: OrderItemType['id']) {
    setOrder(
      order.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
    )
  }

  function deleteItem(id: OrderItemType['id']) {
    setOrder(order.filter((item) => item.id !== id))
  }

  function changeTip(percentage: number) {
    setTip(percentage)
  }

  function resetOrder() {
    setOrder([])
    setTip(0.1)
  }

  return {
    order,
    tip,
    changeTip,
    addItem,
    deleteItem,
    resetOrder,
    addQuantity,
    subtractQuantity
  }
}
