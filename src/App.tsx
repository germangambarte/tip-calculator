import { useReducer } from 'react'
import { menuItems } from '../data/db'
import { MenuItem } from './components/MenuItem'
import { OrderContent } from './components/OrderContent'
import { OrderTotals } from './components/OrderTotals'
import { TipPercentage } from './components/TipPercentage'
import { initialState, orderReducer } from './reducers/orderReducer'
function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="py-16">
        <h1 className="text-center text-4xl font-bold">
          Calculadora de Propinas y Consumos
        </h1>
      </header>
      <main className="max-w-7xl mx-auto px-2 grid gap-10 md:grid-cols-2 xl:px-0">
        <section className="border p-5 rounded-lg">
          <h2 className="text-4xl font-bold">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </section>
        <section className="border p-5 rounded-lg">
          <h2 className="text-4xl font-bold">Consumo</h2>
          <OrderContent order={state.order} dispatch={dispatch} />
          {state.order.length === 0 ? (
            <p className="text-center">No ha consumido ningún item del menú</p>
          ) : (
            <>
              <TipPercentage dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}
        </section>
      </main>
    </>
  )
}

export default App
