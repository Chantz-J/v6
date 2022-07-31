import * as React from "react"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
  Button,
} from "../ui"
import {
  mobileNavOverlay,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "../Navbar/index.css"

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
            <VisuallyHidden>Home</VisuallyHidden>
            {/* <StaticImage 
              src="../../images/icon.png" 
              style={{ 
                maxHeight: "70px",
                maxWidth: "70px",
              }}
            /> */}
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
              {/* <VisuallyHidden>Home</VisuallyHidden> */}
              {/* <BrandLogo /> */}
            </NavLink>
          </span>
          <Flex>
            <Space />
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {/* {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === "Group" ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))} */}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}