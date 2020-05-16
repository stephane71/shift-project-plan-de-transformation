const styles = theme => ({
  customMd: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    "& table": {
      // Trade display table for scroll overflow
      display: "block",
      wordBreak: "normal",
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch", // iOS momentum scrolling.
      borderCollapse: "collapse",
      marginBottom: "16px",
      borderSpacing: 0,
      overflow: "hidden",
      "& .prop-name": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
      },
      "& .required": {
        color: theme.palette.type === "light" ? "#006500" : "#a5ffa5"
      },
      "& .prop-type": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === "light" ? "#932981" : "#ffb6ec"
      },
      "& .prop-default": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.divider}`
      }
    },
    "& td": {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
      color: theme.palette.text.primary
    },
    "& td code": {
      fontSize: 13,
      lineHeight: 1.6
    },
    "& th": {
      fontSize: 14,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      whiteSpace: "pre",
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16
    }
  }
});

export default styles;
