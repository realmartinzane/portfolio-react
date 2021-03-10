import { createUseStyles } from 'react-jss'
import { COLOR_SECONDARY } from '../../constants'

export const useStyles = createUseStyles({
  mainLayout: {
    backgroundColor: COLOR_SECONDARY,
  },

  mainLayoutContent: {
    padding: '0 16px',
  },
})
