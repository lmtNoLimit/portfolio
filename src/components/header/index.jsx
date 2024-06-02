import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

export default function Header() {
  return (
    <div className="max-w-7xl m-auto flex justify-between items-center">
      <Logo />
      <Navigation />
    </div>
  )
}