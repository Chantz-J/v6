import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const tagBox = style({
    paddingTop: '15px',
    paddingBottom: '15px',
    justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '15px',
    border: `1px solid ${theme.colors.muted}`,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    alignItems: 'flex-start',
    fontSize: '13px',
    minHeight: '300px',
    cursor: 'pointer',
    transition: 'all 0.25s ease-in-out',
    color: theme.colors.black,

    ":hover": {
        background: theme.colors.secondary,
        color: theme.colors.background,
        boxShadow: `0 10px 30px -15px ${theme.colors.secondary}`,
        transform: 'translateY(-7px)',
        transition: 'all 0.25s ease-in-out',
        
      },
      ":first-child": {
        background: theme.colors.secondary,
        color: theme.colors.background,
        boxShadow: `0 10px 30px -15px ${theme.colors.secondary}`,
        transform: 'translateY(-7px)',
    }
});

export const makeContainerGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  whiteSpace: 'normal',
  gap: '15px',
  position: 'relative',
  scrollSnapType: 'none',
});
