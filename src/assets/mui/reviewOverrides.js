export default theme => ({
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#333 !important',
        fontSize: 18,
        transform: 'translate(0, 1.5px) scale(0.75) !important',
        transformOrigin: 'top left !important',
      },
      error: {
        color: 'red !important',
      },
    },
    MuiInput: {
      root: {
        padding: 0,
        'label + &': {
          marginTop: `${theme.spacing.unit * 3}px !important`,
        },
        'label + & ::-webkit-input-placeholder': {
          opacity: '0.5 !important',
        },
      },
      input: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #e1dbd0',
        fontSize: 16,
        padding: '10px 12px !important',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderColor: '#baaa92',
          outline: 0,
        },
        '&:hover &:before': {
          borderBottom: 'none !important',
        },
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
        },
      },
      error: {
        '& input': {
          border: '1px solid red',
          '&:focus': {
            borderColor: 'red',
          },
        },
      },
      underline: {
        '&:before': {
          borderBottom: 'none !important',
        },
        '&:after': {
          borderBottom: 'none',
        },
      },
    },
    MuiGrid: {
      item: {
        padding: '8px 0',
      },
    },
  },
});
