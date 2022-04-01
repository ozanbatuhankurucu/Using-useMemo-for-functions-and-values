import React from 'react'

function expensivePhoneFunc(product) {
  console.log('expensivePhoneFunc')
  return product[0]
}

function App() {
  let products = React.useMemo(
    () => [
      {
        name: 'Phone XL',
        price: 100
      },
      {
        name: 'Phone Mini',
        price: 80
      },
      {
        name: 'Phone Standard',
        price: 60
      }
    ],
    []
  )

  const [count, setCount] = React.useState(0)

  // If we don't use useMemo here, the expensivePhoneFunc will be called after every render.
  const expensivePhone = expensivePhoneFunc(products)

  // If we use useMemo here, expensivePhoneFunc will be called only once
  // if the products change, expensivePhoneFunc will be called again
  const expensivePhone1 = React.useMemo(() => {
    return expensivePhoneFunc(products)
  }, [products])

  return (
    <div>
      <h3>Product : {expensivePhone1.name}</h3>
      <h4>Price : {expensivePhone1.price}</h4>
      <br />
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
