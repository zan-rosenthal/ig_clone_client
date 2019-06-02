import { compose } from 'ramda'
import { lifecycle, withStateHandlers } from 'recompose';
import axios from 'axios'

export default compose(
  withStateHandlers(
    { images: [] },
    {
      setImages: () => (images) =>({ images })
    }
  ),
  lifecycle({
    componentDidMount() {
      axios(
        'https://picsum.photos/v2/list?page=1&limit=60'
      ).then(
        json => this.props.setImages(json.data)
      )
    }
  })
)