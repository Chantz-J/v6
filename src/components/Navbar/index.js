import * as React from "react"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Nudge,
  Button,
} from "../ui"
import {
  mobileNavOverlay,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
  headerBorder,
} from "../Navbar/index.css";

import { Cross as Hamburger } from "hamburger-react";


export default function Header({}) {
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header /*className={headerBorder}*/>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            CHANTZ
          </NavLink> 
          <nav>
            <FlexList gap={4}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/article'}>Articles</NavLink>
                <NavLink>
                  <Button variant="primary">Resume</Button>
                </NavLink>
            </FlexList> 
          </nav>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
            </NavLink>
          </span>
          <Flex>
            <Space />
            <Nudge right={3}>
              <Hamburger toggled={isOpen} toggle={setOpen} color={"#fff"}/>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="column">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/article'}>Articles</NavLink>
                <NavLink>
                  <Button variant="primary">Resume</Button>
                </NavLink>
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}