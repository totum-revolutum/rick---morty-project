import { Logo } from "./Logo/Logo"
import { NavMenu } from "./NavMenu/NavMenu"

export const Header = () => {
  return(
    <header className="flex items-center justify-between">
      <Logo />
      <NavMenu />
    </header>
  )
}