import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'
import previewImg from '../../assets/previewImg.png'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image src={previewImg} alt="" height={400} quality={100} priority />
      </Preview>
    </Container>
  )
}
