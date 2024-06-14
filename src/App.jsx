import { useState } from 'react'

import './App.css'

let imageArray = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];

function App() {
  let [dices, setDiceOne] = useState({ dices1: 0, dices2: 0 })

  let whoWon = dices.dices1 > dices.dices2 ? 'Player 1 Wins' : dices.dices1 < dices.dices2 ? 'Player 2 Wins' : 'Tie'

  function changeImage() {
    let dices1 = Math.floor((Math.random() * 10) % 6)
    let dices2 = Math.floor((Math.random() * 10) % 6)
    setDiceOne({ dices1, dices2 })
  }


  return (
    <>
      <div className='w-[50%] h-[50%] bg-black  mt[10%] p-4 text-red-500'>
        <h1 className='text-[40px] font-black '>{whoWon}</h1>
        <div className=' flex flex-row justify-between' >
          <div className="w-[50%] ">
            <h1 className='text-[30px] font-bold'>Player 1</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[dices.dices1]} />
          </div>
          <div className=" w-[50%]">
            <h1 className='text-[30px] font-bold'>Player 2</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[dices.dices2]} />
          </div>
        </div>
        <button className='w-[20%] h-[20%] bg-red-500 p-5 mt-[8%] font-bold text-black' onClick={changeImage}>Play</button>
      </div>
    </>
  )
}

export default App
