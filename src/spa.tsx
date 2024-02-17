import React, { ErrorInfo } from 'react'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'

import { App } from './app'

const lifeCycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorBoundary(err: Error, _info: ErrorInfo, _props: React.Component) {
    return <div>Error: {err.message}</div>
  },
})

export const { bootstrap, mount, unmount } = lifeCycles
