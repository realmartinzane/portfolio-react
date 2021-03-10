import { createUseStyles } from 'react-jss'
import {
  CUBIC_BEZIER_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TEXT,
  COLOR_WHITE,
  LAYER_BURGER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  LAYER_NAVIGATION,
  FONT_PRIMARY,
  COLOR_PRIMARY_DARKER,
} from '../../constants'

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    height: '60px',
    backgroundColor: COLOR_SECONDARY,
  },

  brand: {
    width: '100px',
    height: '60px',
  },

  burger: ({ isOpen, isHovering }) => ({
    position: 'relative',
    zIndex: LAYER_BURGER,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    width: '40px',
    height: '34px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: `transform 300ms ${CUBIC_BEZIER_PRIMARY}`,
    transform: isOpen && isHovering ? 'scale(1.4)' : isOpen && 'scale(1.2)',
  }),

  burgerBar: ({ position, isHovering, isOpen }) => {
    const base = {
      width: '40px',
      height: '2px',
      backgroundColor: isOpen ? COLOR_WHITE : COLOR_TEXT,
      transition: `transform 300ms ${CUBIC_BEZIER_PRIMARY},
                   opacity 150ms ease-in,
                   background-color 300ms ease-out`,
    }

    const bars = [
      {
        ...base,
        transformOrigin: '0% 50%',
        transform: isOpen
          ? 'translateY(-3px) rotate(45deg) '
          : isHovering && 'translateY(-3px)',
      },
      {
        ...base,
        opacity: isOpen && '0',
        transform: isOpen && 'translateX(-24px)',
      },
      {
        ...base,
        transformOrigin: '0% 50%',
        transform: isOpen
          ? 'translateY(3px) rotate(-45deg)'
          : isHovering && 'translateY(3px)',
      },
    ]

    return bars[position]
  },

  navigation: ({ isOpen }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: LAYER_NAVIGATION,
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: COLOR_PRIMARY,
    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 300ms ease-out',
    padding: '0 16px',
  }),

  navigationLinksContainer: ({ isOpen }) => ({
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    opacity: isOpen ? '1' : '0',
    transition: 'opacity 150ms ease',
  }),

  navigationLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    witdh: '100%',
    height: '94px',
    backgroundColor: COLOR_PRIMARY_DARK,
    color: COLOR_WHITE,
    fontFamily: FONT_PRIMARY,
    fontSize: '34px',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },

  span: {
    position: 'relative',
    zIndex: '2',
  },

  hover: ({ isHovering }) => ({
    position: 'absolute',
    zIndex: '1',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: COLOR_PRIMARY_DARKER,
    transform: isHovering ? 'scale(1, 1)' : 'scale(0, 1)',
    transition: `transform 300ms ${
      isHovering ? CUBIC_BEZIER_PRIMARY : 'ease-out'
    }`,
  }),
})
