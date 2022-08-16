import { style } from "@vanilla-extract/css";
// import { theme } from "../../theme.css";


export const gradientCircle = style({
  width: "100%",
  minHeight: "490px",
  backgroundColor: "hsla(0,100%,50%,1)",
  backgroundImage: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
  borderRadius: "50%"
});

export const consumeViewportHeight = style({
  paddingTop: '22%',
});