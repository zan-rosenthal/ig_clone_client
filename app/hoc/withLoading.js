import { branch, renderComponent, setDisplayName } from 'recompose'
import { compose, curryN, path } from 'ramda'
import { Spinner } from 'native-base'
import { lightGray } from 'constants/colors'
import React from 'react'

const LoadingSpinner = () => <Spinner color={lightGray} />

const branch2 = curryN(2, branch)

export default compose(
    setDisplayName('withLoading'),
    branch2(path(['data', 'loading'])),
    renderComponent
  )(LoadingSpinner)
