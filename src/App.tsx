import { AppRoutes } from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastProvider } from 'contexts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>

  );
}

export default App;
