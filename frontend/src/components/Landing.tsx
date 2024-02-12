import { useState } from 'react'

const Landing = () => {
  const [name, setName] = useState("")

  return <div >
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <button onSubmit={() => console.log("submit")}>Join</button>
  </div>
}

export default Landing
