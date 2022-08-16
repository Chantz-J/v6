import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const cardBox = style({
    paddingTop: '15px',
    paddingBottom: '15px',
    // justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '15px',
    // borderLeft: `13px solid ${theme.colors.secondary}`,
    borderRadius: '3px',
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
        background: theme.colors.tertiary,
        color: theme.colors.background,
        boxShadow: `0 10px 30px -15px ${theme.colors.secondary}`,
        transform: 'translateY(-7px)',
        transition: 'all 0.25s ease-in-out',
        
      },
});

export const bigCardBox = style({
  paddingTop: '15px',
    paddingBottom: '15px',
    // justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '15px',
    // borderLeft: `13px solid ${theme.colors.secondary}`,
    borderRadius: '3px',
    textDecoration: 'none',
    display: 'flex',
    // flexDirection: 'column',
    // marginBottom: '10px',
    alignItems: 'center',
    justifyContent: "space-between",
    fontSize: '13px',
    minHeight: '715px',
    // maxWidth: '230px',

    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.25s ease-in-out',
    color: theme.colors.muted,
    // background: theme.colors.tertiary,
    border: `1px solid ${theme.colors.secondary}`,

    ":hover": {
        background: theme.colors.tertiary,
        color: theme.colors.background,
        boxShadow: `0 10px 30px -15px ${theme.colors.secondary}`,
        transform: 'translateY(-7px)',
        transition: 'all 0.25s ease-in-out',
        
      },
})

export const makeContainerGrid = style({
  width: '100%',
  display: 'grid',
  alignItems: 'flex-start',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  whiteSpace: 'normal',
  gap: '15px',
  position: 'relative',
  scrollSnapType: 'none',
});

export const makeContainerBigGrid = style({
  width: "100%",
  display: 'grid',
  alignItems: 'flex-start',
  gridTemplateColumns: 'repeat(auto-fill, max(700px, 1fr))',
  whiteSpace: 'normal',
  gap: '15px',
  position: 'relative',
  scrollSnapType: 'none',
});


export const forceNoTextDecoration = style({
  textDecoration: "none",
  color: theme.colors.background,
})


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
    backgroundColor: theme.colors.muted,
  },
  ":focus" : {
    backgroundColor: theme.colors.muted,
  }
});
