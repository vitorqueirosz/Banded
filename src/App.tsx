import { AppRoutes } from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastProvider } from 'contexts';
import { SettingsProvider } from 'contexts/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SettingsProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </SettingsProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default App;
