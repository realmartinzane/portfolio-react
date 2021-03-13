import { createUseStyles } from 'react-jss'
import {
  COLOR_SECONDARY,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_WHITE,
  FONT_PRIMARY,
} from '../../constants'

export const useStyles = createUseStyles({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_SECONDARY,
    padding: '100px 16px 0',
    minHeight: 'calc(100vh - 173px)',
    userSelect: 'none',
  },

  heroContent: {
    width: '860px',
    marginTop: '-86px',
  },

  title: {
    fontFamily: FONT_PRIMARY,
    fontSize: '105px',
    letterSpacing: '4px',
    color: COLOR_WHITE,
    textAlign: 'center',
  },

  paragraph: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: FONT_PRIMARY,
    fontSize: '30px',
    lineHeight: '1',
    marginBottom: '8px',
  },

  wordContainer: {
    margin: '0 5px',
    height: '30px',
    overflowY: 'hidden',
  },

  word: ({ isActive }) => ({
    color: COLOR_TEXT,
    transform: isActive && 'translateY(-30px)',
    transition: 'transform 250ms',
  }),

  wordHovered: ({ isActive }) => ({
    color: COLOR_TEXT_DARK,
    transform: isActive && 'translateY(-30px)',
    transition: 'transform 250ms',
  }),

  buttonContainer: {
    width: '164px',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '80px auto 0',
    fontFamily: FONT_PRIMARY,
    fontSize: '20px',
    textDecoration: 'none',
    overflowY: 'hidden',
  },

  button: ({ isHovering }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
    color: COLOR_WHITE,
    border: `2px solid ${COLOR_WHITE}`,
    width: 'calc(100% - 4px)',
    flex: '0 0 42px',
    transform: isHovering && 'translateY(-54px)',
    transition: 'transform 150ms',
  }),

  buttonHovered: ({ isHovering }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLOR_SECONDARY,
    border: `2px solid ${COLOR_WHITE}`,
    backgroundColor: COLOR_WHITE,
    width: '160px',
    flex: '0 0 42px',
    transform: isHovering && 'translateY(-54px)',
    transition: 'transform 150ms',
  }),
})
