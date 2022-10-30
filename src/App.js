import './App.css';
import ProfileForm from './ProfileForm';
import AppBase from './AppBase';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#D32F2F',
      },
      secondary: {
        main: '#A5A5A5',
      }
    },
    typography: {
      subtitle1: {
        color: '#A5A5A5'
      },
      caption: {
        color:  '#A5A5A5'
      }
    }
  });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBase>
            <ProfileForm />
          </AppBase>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
