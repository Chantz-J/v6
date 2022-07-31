import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const cardBox = style({
    paddingTop: '15px',
    paddingBottom: '15px',
    // justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '15px',
    // borderLeft: `13px solid ${theme.colors.secondary}`,
    borderRadius: '7px',
    textDecoration: 'none',
    display: 'flex',
    // flexDirection: 'column',
    // marginBottom: '10px',
    alignItems: 'center',
    justifyContent: "space-between",
    fontSize: '13px',
    minHeight: '350px',
    // maxWidth: '230px',
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.25s ease-in-out',
    color: theme.colors.muted,
    // background: theme.colors.tertiary,
    border: `1px solid ${theme.colors.tertiary}`,

    ":hover": {
        background: theme.colors.secondary,
        color: theme.colors.background,
        boxShadow: `0 10px 30px -15px ${theme.colors.secondary}`,
        transform: 'translateY(-7px)',
        transition: 'all 0.25s ease-in-out',
        
      },
});

export const makeContainerGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  whiteSpace: 'normal',
  gap: '15px',
  position: 'relative',
  scrollSnapType: 'none',
});

export const forceNoTextDecoration = style({
  textDecoration: "none",
  color: theme.colors.background,
})

export const gradientCover = style({
  width: "100%",
  minHeight: "200px",
  backgroundColor: "hsla(0,100%,50%,1)",
  backgroundImage: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
});

export const widthOneHundredPercent = style({
  width: "100%",
});

export const circleButton = style({
  margin: "0 0.7rem",
  height: "12px",
  width: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: theme.colors.tertiary,
  border: "none",
  cursor: "pointer",
  ":hover" : {
    backgroundImage: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
  },
  ":focus" : {
    backgroundColor: "hsla(0,100%,50%,1)",
    backgroundImage: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
  }
});