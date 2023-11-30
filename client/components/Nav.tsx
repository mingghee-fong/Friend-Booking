import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect()
    console.log('sign in')
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Nav
