# react-infinite-scroll-trigger

> A visibility based trigger for loading more data.

[![GitHub license](https://img.shields.io/github/license/mountain-pass/addressr)](https://github.com/mountain-pass/addressr/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/@mountainpass/react-infinite-scroll-trigger.svg)](https://www.npmjs.com/package/@mountainpass/react-infinite-scroll-trigger)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Behaviour

This library provides a React component, which synchronously, continuously calls the `loadMore` function, while:

- the component is visible
- the `loadMore` function returns `true`
- the component is not already loading data

The component uses an [IntersectionObserver](https://www.w3.org/TR/intersection-observer/) to respond to visiblity changes.

## Example

Please see the [Homepage](https://mountain-pass.github.io/react-infinite-scroll-trigger/).

## Install

```bash
npm install --save react-infinite-scroll-trigger
```

## Usage

### The bare minimum

```jsx
import InfiniteScrollTrigger from 'react-infinite-scroll-trigger'
...
<InfiniteScrollTrigger loadMore={yourAsyncFunction} />
```

### With some pseudo code

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

### Full example

See the [example code](example/src/App.js).

## Configuration

| Type     | Attribute        | Cardinality | Default                          | Description                                                                                                                                           |
| -------- | ---------------- | ----------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| function | loadMore         | required    | -                                | An async function whose Promise resolves to a truthy value. `true` indicates there's more data to load, while `false` indicates no more data to load. |
| function | renderLoading    | optional    | () => &lt;i>Loading...&lt;/i>    | The component to display, when loading data.                                                                                                          |
| function | renderNoMoreData | optional    | () => &lt;i>No more data.&lt;/i> | The component to display, when there is no more data to load.                                                                                         |
| object   | inViewConfig     | optional    | {}                               | Configuration for the 'react-intersection-observer'.                                                                                                  |
| number   | reloadDelayMs    | optional    | 200                              | How long to wait to allow React to re-render components (which affects visibility), before re-checking whether to load more data.                     |

## Tips

1. You can play with CSS styling to resize and reposition the trigger area.
   - E.g. to start loading data 100px before the end of a list of elements (when vertically scrolling down)
     > `<InfiniteScrollTrigger style={{ height: '100px', marginTop: '-100px' }} ... />`

## License

Apache 2.0 © [nickgrealy](https://github.com/nickgrealy)
