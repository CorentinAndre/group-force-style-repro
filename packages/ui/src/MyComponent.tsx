import { YStack, createStyledContext, styled } from 'tamagui'

export const MyComponent = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',
  group: true,
  hoverStyle: {
    backgroundColor: 'blue',
  },
})
