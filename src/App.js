import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [movie, setMovie] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>Your Favorite {movie.length} Movies</h3>
        <List movie={movie} />
        <button onClick={() => setMovie([])}>clear all</button>
      </section>
    </main>
  )
}

export default App