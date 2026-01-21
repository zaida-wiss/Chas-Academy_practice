import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [discount, setDiscount] = useState(0)

  const clickHandler = () => {
    setCount(count +1)}

 const discountHandler = () => {
        setDiscount(discount+1)}

  return (
    <>
      <button className="countbBtn" onClick={clickHandler}>Klicka här!</button>
      <button className="discountBtn" onClick={discountHandler}>Klicka här!</button>
      <p className="text">Du har klickat {count} gånger och får {count * 10 + discount *25}kr i rabatt</p>
    </>
  )
}
export default App
