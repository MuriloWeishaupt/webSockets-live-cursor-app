// hooks/usePerfectCursor

import { PerfectCursor } from "perfect-cursors"
import React from "react"

export function usePerfectCursor(cb, point) {
  const [pc] = React.useState(() => new PerfectCursor(cb))

  React.useLayoutEffect(() => {
    if (point) pc.addPoint(point)
    return () => pc.dispose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc])

  const onPointChange = React.useCallback(
    (point) => pc.addPoint(point),
    [pc]
  )

  return onPointChange
}