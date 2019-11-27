import { createMuiTheme } from '@material-ui/core/styles';
import merge from 'lodash/merge';

const myTheme = {
    palette: {
        
    }
}

const globalTheme = (theme, customTheme) =>
    createMuiTheme(
        merge(merge(theme, myTheme), customTheme)
    )
  
  
export default globalTheme;