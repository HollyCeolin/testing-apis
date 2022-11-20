import {useState, useEffect} from 'react'

function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    names()
  }, [])

  const names = async() => {
    const response = await fetch ( 'https://jsonplaceholder.typicode.com/albums/')

    setName(await response.json())
  }
  return (
  <div>
    <h1>test</h1>
    <ol className='list-group list-group-numbered'>

      {name.map((data) => {
        return (
          <li className='list-group-item' key={data.id}>{data.title}</li>
        )
      })}

    </ol>
  </div>
)}

export default App