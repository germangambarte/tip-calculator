import { MenuItemType, OrderItemType } from '../../types'

export type OrderActionType =
  | { type: 'ADD_ITEM'; payload: { item: MenuItemType } }
  | { type: 'SUBTRACT_QUANTITY'; payload: { id: OrderItemType['id'] } }
  | { type: 'ADD_QUANTITY'; payload: { id: OrderItemType['id'] } }
  | { type: 'DELETE_ITEM'; payload: { id: OrderItemType['id'] } }
  | { type: 'CHANGE_TIP'; payload: { percentage: number } }
  | { type: 'RESET_ORDER'; payload?: undefined }

type OrderStateType = {
  order: OrderItemType[]
  tip: 0.1 | 0.2 | 0.5
}

export const initialState: OrderStateType = {
  order: [],
  tip: 0.1
}

export function orderReducer(
  state: OrderStateType = initialState,
  action: OrderActionType
) {
  const { type, payload } = action

  if (type === 'ADD_ITEM') {
    const itemExist = state.order.find((item) => item.id === payload.item.id)
    let updatedOrder = []
    if (itemExist) {
      updatedOrder = state.order.map((item) =>
        item.id === payload.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      updatedOrder = [...state.order, { ...payload.item, quantity: 1 }]
    }
    return {
      ...state,
      order: updatedOrder
    }
  }
  if (type === 'SUBTRACT_QUANTITY') {
    const updatedOrder = state.order.map((item) =>
      item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
    )
    return {
      ...state,
      order: updatedOrder
    }
  }
  if (type === 'ADD_QUANTITY') {
    const updatedOrder = state.order.map((item) =>
      item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
    )
    return {
      ...state,
      order: updatedOrder
    }
  }
  if (type === 'DELETE_ITEM') {
    const updatedOrder = state.order.filter((item) => item.id !== payload.id)
    return {
      ...state,
      order: updatedOrder
    }
  }
  if (type === 'CHANGE_TIP') {
    return {
      ...state,
      tip: payload.percentage
    }
  }
  if (type === 'RESET_ORDER') {
    return {
      ...state,
      order: [],
      tip: 0.1
    }
  }
  return state
}
