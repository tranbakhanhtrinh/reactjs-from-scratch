import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
      <br />
      <strong key={count} className="test">
        {count}
      </strong>
    </div>
  )
}

export default ClickCounter
