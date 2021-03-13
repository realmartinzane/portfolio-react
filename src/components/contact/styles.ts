import { createUseStyles } from 'react-jss'
import {
  COLOR_WHITE,
  CUBIC_BEZIER_PRIMARY,
  FONT_PRIMARY,
  LAYER_CONTACT,
} from '../../constants'

export const useStyles = createUseStyles({
  container: {
    position: 'fixed',
    zIndex: LAYER_CONTACT,
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
  },

  link: ({ backgroundColor, isHovering }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '12px',
    backgroundColor,
    textDecoration: 'none',
    width: '112px',
    transform: isHovering ? 'translateX(-12px)' : 'translateX(-84px)',
    transition: `transform 450ms ${CUBIC_BEZIER_PRIMARY}`,
  }),

  name: {
    fontFamily: FONT_PRIMARY,
    fontSize: '16px',
    color: COLOR_WHITE,
    letterSpacing: '1px',
    marginRight: '12px',
  },

  logo: {
    color: COLOR_WHITE,
  },
})
