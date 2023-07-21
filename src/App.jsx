import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CharactersProvider from './context/CharactersContext';
import ComicDetailProvider from './context/ComicDetailContext';
import ComicsProvider from './context/ComicsContext';
import FavoritesProvider from './context/FavoritesContext';
import useTheme from './hooks/useTheme';
import Header from './layout/Header/Header';
import Router from './routes';
import { lightTheme } from './themes/index';

const App = () => {
  const { currentTheme } = useTheme(lightTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <FavoritesProvider>
        <CharactersProvider>
          <ComicsProvider>
            <ComicDetailProvider>
              <BrowserRouter>
                <Header theme={currentTheme} />
                <Router />
              </BrowserRouter>
            </ComicDetailProvider>
          </ComicsProvider>
        </CharactersProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
