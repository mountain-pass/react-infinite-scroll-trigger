import React from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const DEFAULT_LOADING = () => <i>Loading...</i>
const DEFAULT_NOMOREDATA = () => <i>No more data.</i>

/**
 * A visibility based trigger for loading more data.
 *
 * @param {function} props.loadMore An async function whose Promise resolves to a truthy value. `true` indicates there's more data to load, while `false` indicates no more data to load.
 * @param {function} props.renderLoading The component to display, when loading data.
 * @param {function} props.renderNoMoreData The component to display, when there is no more data to load.
 * @param {object} props.inViewConfig Configuration for the 'react-intersection-observer'.
 * @param {number} props.reloadDelayMs How long to wait to allow React to re-render components (which affects visibility), before re-checking whether to load more data.
 */
const InfiniteScrollTrigger = ({
  loadMore,
  renderLoading: RenderLoading = DEFAULT_LOADING,
  renderNoMoreData: RenderNoMoreData = DEFAULT_NOMOREDATA,
  inViewConfig = {},
  reloadDelayMs = 100,
  ...props
}) => {
  // watch for when the div becomes visible.
  const [ref, inView] = useInView(inViewConfig)

  // used to determine whether to load more data.
  const isVisibleRef = React.useRef(false)
  const hasMoreRef = React.useRef(true)
  const isLoadingRef = React.useRef(false)

  // used for updating the rendered content.
  const [noMoreData, setNoMoreData] = React.useState(false)

  // continuously loads data, while all conditions are met.
  const loadMoreRef = React.useRef(async () => {
    if (isVisibleRef.current && hasMoreRef.current && !isLoadingRef.current) {
      console.debug('InfiniteScrollTrigger - loading...')
      isLoadingRef.current = true
      try {
        hasMoreRef.current = await loadMore()
      } catch (err) {
        console.error(`InfiniteScrollTrigger caught error - ${err.message}`)
        hasMoreRef.current = false
      }
      if (!hasMoreRef.current) setNoMoreData(true)
      isLoadingRef.current = false
      // give results a chance to render, then check is we still need to load more data...
      delayPromise(reloadDelayMs).then(loadMoreRef.current)
    } else {
      console.debug('InfiniteScrollTrigger - no more loading.', {
        isVisibleRef: isVisibleRef.current,
        hasMoreRef: hasMoreRef.current,
        isLoadingRef: isLoadingRef.current
      })
    }
  })

  // watch the 'inView' var, store changes and trigger loadMoreRef if necessary.
  React.useEffect(() => {
    isVisibleRef.current = inView
    if (inView) loadMoreRef.current()
  }, [inView])

  return (
    <React.Fragment>
      {/* TLDR; when this component is visible, trigger `loadMore`. */}
      <div ref={ref} {...props} />

      {/* show loading ? */}
      {RenderLoading && !noMoreData && <RenderLoading />}

      {/* show 'no more data' ? */}
      {RenderNoMoreData && noMoreData && <RenderNoMoreData />}
    </React.Fragment>
  )
}

InfiniteScrollTrigger.propTypes = {
  /** An async function whose Promise resolves to a truthy value. `true` indicates there's more data to load, while `false` indicates no more data to load. */
  loadMore: PropTypes.func.isRequired,
  /** The component to display, when loading data. */
  renderLoading: PropTypes.func,
  /** The component to display, when there is no more data to load. */
  renderNoMoreData: PropTypes.func,
  /** Configuration for the 'react-intersection-observer'. */
  inViewConfig: PropTypes.object,
  /** How long to wait to allow React to re-render components (which affects visibility), before re-checking whether to load more data. */
  reloadDelayMs: PropTypes.number
}

export default InfiniteScrollTrigger
