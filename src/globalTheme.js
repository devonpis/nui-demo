import merge from 'lodash/merge';

const myTheme = {
    palette: {
        
    }
}

const globalTheme = (theme, customTheme) => merge(merge(theme, myTheme), customTheme)
  
  
export default globalTheme;