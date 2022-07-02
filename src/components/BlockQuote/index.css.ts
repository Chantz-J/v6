import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const blockQuoteStyles = style({
    borderLeftWidth: `1px`,
    borderColor: `${theme.colors.black}`,
    color: `${theme.colors.black}`,
    fontStyle: 'italic',
    paddingLeft: `${theme.space[1]}`,
    quotes: `"“" "”" "‘" "’"`,

    ':before':{
        content: 'open-quote',
    },

    ':after':{
        content: 'close-quote',
    }
});

export const maxWidthForContaniner = style({
    maxWidth: '870px',
    // maxHeight: '500px',
    // alignSelf: 'center,'
});