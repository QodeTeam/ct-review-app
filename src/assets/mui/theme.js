import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import reviewTheme from './reviewTheme';
import reviewOverrides from './reviewOverrides';

const theme = createMuiTheme({ ...reviewTheme, ...reviewOverrides(reviewTheme) });

export default theme;
