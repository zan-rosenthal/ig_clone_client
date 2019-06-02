import { compose } from 'ramda'
import { withProps } from 'recompose'
import { fetchUser } from 'db'

export default compose(
  withProps(({ userId }) => ({ user: fetchUser(userId) }))
)