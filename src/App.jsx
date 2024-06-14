import { useState } from 'react'
// import reactLogo fromreact.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [imageIndex, setDiceOne] = useState(0)
  let [imageIndexDice2, setDiceTwo] = useState(0)
  let imageArray = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];
  console.log(imageArray[imageIndex])
  let whoWon = imageIndex > imageIndexDice2 ? 'Player 1 Wins' : imageIndex < imageIndexDice2 ? 'Player 2 Wins' : 'Tie'


  function changeImage() {
    // console.log(Math.floor((Math.random() * 10)%6))
    setDiceOne(Math.floor((Math.random() * 10)%6))
    setDiceTwo(Math.floor((Math.random() * 10)%6))

    
  }


  return (
    <>
      <div className='w-[50%] h-[50%] bg-black  mt[10%] p-4 text-red-500'>
        <h1 className='text-[40px] font-black '>{whoWon}</h1>
        <div className=' flex flex-row justify-between' >
     
          <div className="w-[50%] ">
          <h1 className='text-[30px] font-bold'>Player 1</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[imageIndex]} />
          </div>
          <div className=" w-[50%]">
            <h1 className='text-[30px] font-bold'>Player 2</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[imageIndexDice2]} />       </div>

        </div>
        <button className='w-[20%] h-[20%] bg-red-500 p-5 mt-[8%] font-bold text-black' onClick={changeImage}>Play</button>
      </div>
    </>
  )
}

export default App
