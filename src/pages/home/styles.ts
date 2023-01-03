import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1200px) / 2)',
  height: '100vh',
})
export const Hero = styled('div', {
  maxWidth: 500,
  padding: '0 $10',

  [`${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },
  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})
export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
