// @flow
import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { handleCheck, pureComponent } from 'utils'

type Props = {
  isTutorial: boolean,
  input: Function,
}

const PostFormIsTutorial = ({ isTutorial, input }: Props) => (
  <Checkbox
    id='PostFormIsTutorial'
    label='Tutorial'
    checked={isTutorial}
    onCheck={handleCheck('isTutorial', input)}
  />
)

// PostFormIsTutorial.propTypes = {
//   isTutorial: PropTypes.bool,
//   input: PropTypes.func,
// }

export default pureComponent(PostFormIsTutorial)
