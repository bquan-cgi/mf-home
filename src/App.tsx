import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto px-4'>

      <h1 className='bg-blue-300'>Here ist the header from hmore-remote</h1>
      <div className="bg-amber-300">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </div>



    </>
  )
}

export default App
