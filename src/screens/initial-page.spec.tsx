import { render } from '@testing-library/react'

import { InitialPage } from './initial-page'

describe('Initial Page', () => {
  it('should render the initial page', () => {
    const wrapper = render(<InitialPage />)
    expect(
      wrapper.getByText('Hello Single SPA Boilerplate'),
    ).toBeInTheDocument()
  })
})
