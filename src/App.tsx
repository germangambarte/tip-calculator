import { menuItems } from '../data/db'
import { MenuItem } from './components/MenuItem'
import { OrderContent } from './components/OrderContent'
import { OrderTotals } from './components/OrderTotals'
import { TipPercentage } from './components/TipPercentage'
import { useOrder } from './hooks/useOrder'
function App() {
  const {
    order,
    tip,
    changeTip,
    addItem,
    deleteItem,
    resetOrder,
    addQuantity,
    subtractQuantity
  } = useOrder()
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
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>
        <section className="border p-5 rounded-lg">
          <h2 className="text-4xl font-bold">Consumo</h2>
          <OrderContent
            order={order}
            deleteItem={deleteItem}
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
          />
          {order.length === 0 ? (
            <p className="text-center">No ha consumido ningún item del menú</p>
          ) : (
            <>
              <TipPercentage changeTip={changeTip} tip={tip} />
              <OrderTotals order={order} tip={tip} resetOrder={resetOrder} />
            </>
          )}
        </section>
      </main>
    </>
  )
}

export default App
