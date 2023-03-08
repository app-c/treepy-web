import { Button } from '../../../components/Button'
import { useAuth } from '../../../context/authcontext'
import { Container } from './styles'

export function DashBoard() {
  const { logOut } = useAuth()
  return (
    <Container>
      <h1>DashBoard</h1>
      <Button variant="AB" title="logOut" pres={() => logOut()} />
    </Container>
  )
}
