import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [imageIndex, setDiceOne] = useState(0)
  let [imageIndexDice2, setDiceTwo] = useState(0)
  let imageArray = ['src/assets/one.png', 'src/assets/two.png', 'src/assets/three.png', 'src/assets/four.png', 'src/assets/five.png', 'src/assets/six.png'];
  console.log(imageArray[imageIndex])
  let whoWIn = imageIndex > imageIndexDice2 ? 'Player 1 Wins' : imageIndex < imageIndexDice2 ? 'Player 2 Wins' : 'Tie'

  function changeImage() {
    setDiceOne(imageIndex = Math.floor(Math.random() * 6))
    setDiceTwo(imageIndexDice2 = Math.floor(Math.random() * 6))
    
  }


  return (
    <>
      <div className='w-[50%] h-[70%] bg-black  mt[10%] p-4  '>
        <h1 className='text-[40px] font-black text-white'>{whoWIn}</h1>
        <div className=' flex flex-row justify-between' >
     
          <div className="w-[50%] ">
          <h1 className='text-[30px] text-white font-bold'>Player 1</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[imageIndex]} />
          </div>
          <div className=" w-[50%]">
            <h1 className='text-[30px] text-white font-bold'>Player 2</h1>
            <img className='w-[100%] h-[100%] transform transition duration-300 hover:rotate-90' src={imageArray[imageIndexDice2]} />       </div>

        </div>
        <button className='w-[20%] h-[20%] bg-slate-50 p-5 mt-[8%] font-bold' onClick={changeImage}>Play</button>
      </div>
    </>
  )
}

export default App
