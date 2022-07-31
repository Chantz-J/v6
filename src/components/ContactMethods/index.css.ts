import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const contactMethodStyle = style({
    textDecoration: "none",
    color: theme.colors.background,
    background: theme.colors.secondary,
    padding: "64px 0"
});

export const containerBorder = style({
    border: `1px solid ${theme.colors.muted}`,
    borderRadius: '7px',
})

export const contactBox = style({
    border: `1px solid ${theme.colors.muted}`,
});