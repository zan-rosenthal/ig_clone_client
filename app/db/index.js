import fixtures from './fixtures'
import { compose, find, prop, whereEq } from 'ramda'

const log = n => args => {
  console.log(n, args)
  return args
}

export const fetchUser = (id) => compose(
  find(whereEq({ id })),
  prop('users')
)(fixtures)