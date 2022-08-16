import { theme } from "../../theme.css"
import { style } from "@vanilla-extract/css"

export const footerBorder = style({
  borderTop: `1px solid ${theme.colors.tertiary}`,
})

export const footerLinkSpacing = style({
    marginTop: '3rem',
    marginBottom: '3rem',
    justifyContent: 'space-between',
})

export const copyRightSpacing = style({
    marginBottom: '3rem',
})

export const footerOutro = style({
    marginTop: '3rem',
    marginBottom: '3rem',
})