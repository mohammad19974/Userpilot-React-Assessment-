import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
    <ThemeProvider theme={theme}>
        <Suspense fallback={<>Loading</>}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
