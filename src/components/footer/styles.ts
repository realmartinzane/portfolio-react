import { createUseStyles } from 'react-jss'
import {
  COLOR_FOOTER,
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_WHITE,
  FONT_SECONDARY,
} from '../../constants'

export const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72px',
    backgroundColor: COLOR_FOOTER,
    borderTop: `1px solid ${COLOR_PRIMARY}`,
  },

  inner: {
    width: '768px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: FONT_SECONDARY,
    fontSize: '16px',
    color: COLOR_TEXT,
  },

  link: {
    fontFamily: FONT_SECONDARY,
    fontSize: '16px',
    color: COLOR_WHITE,
    textDecoration: 'none',
  },
})
