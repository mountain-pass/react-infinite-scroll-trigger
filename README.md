# react-infinite-scroll-trigger

> A visibility based trigger for loading more data.

[![NPM](https://img.shields.io/npm/v/react-infinite-scroll-trigger.svg)](https://www.npmjs.com/package/react-infinite-scroll-trigger) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-infinite-scroll-trigger
```

## Usage

```jsx
import React from 'react'
import InfiniteScrollTrigger from 'react-infinite-scroll-trigger'

const App = () => {
  const [data, setData] = React.useState([])

  const loadMore = () =>
    apiAsyncLoadData((data, hasMore) => {
      setData((ps) => [...ps, ...data])
      return hasMore
    })

  return (
    <>
      {data.map((d) => (
        <div key={d}>{d}</div>
      ))}
      <InfiniteScrollTrigger loadMore={loadMoreAsync} />
    </>
  )
}
```

## License

MIT © [nickgrealy](https://github.com/nickgrealy)
