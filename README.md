# react-infinite-scroll-trigger

> A visibility based trigger for loading more data.

[![GitHub license](https://img.shields.io/github/license/mountain-pass/addressr)](https://github.com/mountain-pass/addressr/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/@mountainpass/react-infinite-scroll-trigger.svg)](https://www.npmjs.com/package/@mountainpass/react-infinite-scroll-trigger)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-infinite-scroll-trigger
```

## Example

Please check the [Homepage](https://mountain-pass.github.io/react-infinite-scroll-trigger/).

## Usage

```jsx
import React from 'react'
import InfiniteScrollTrigger from 'react-infinite-scroll-trigger'

const App = () => {
  const [data, setData] = React.useState([])

  const loadMoreAsync = () =>
    apiAsyncLoadData((data = [], hasMore = true) => {
      setData((ps) => [...ps, ...data])
      return hasMore
    })

  return (
    <div>
      {data.map((d) => (
        <div key={d}>{d}</div>
      ))}
      <InfiniteScrollTrigger loadMore={loadMoreAsync} />
    </div>
  )
}
```

## License

Apache 2.0 © [nickgrealy](https://github.com/nickgrealy)
