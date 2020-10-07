import React from 'react'
import InfiniteScrollTrigger from 'react-infinite-scroll-trigger'

const App = () => {
  const [data, setData] = React.useState([])

  const loadMore = () => {
    // mimic an async operation...
    return new Promise((resolve) => {
      setTimeout(() => {
        // now we've loaded more data, append it to the end of the 'data' array...
        setData((prevState) => {
          const newData = [
            ...prevState,
            `Element_${prevState.length + 1}`,
            `Element_${prevState.length + 2}`,
            `Element_${prevState.length + 3}`
          ]
          resolve(newData.length <= 14) // keep loading data until we exceed 14 records
          return newData
        })
        resolve()
      }, 1500)
    })
  }

  return (
    <React.Fragment>
      <h1>Records loaded = {data.length}</h1>
      <div style={{ border: '1px solid red', height: '500px', overflow: 'auto' }}>
        {data.map((d) => (
          <div key={d} style={{ border: '1px solid blue', height: '50px' }}>
            {d}
          </div>
        ))}
        <InfiniteScrollTrigger
          loadMore={loadMore}
          style={{ height: '100px', marginTop: '-100px', background: 'rgba(0,255,0,0.2)' }}
        />
      </div>
    </React.Fragment>
  )
}

export default App
