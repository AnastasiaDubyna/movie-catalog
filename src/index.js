import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { store } from './redux/store/store';
import App from './App';
import './index.css';

// Как правильно структурировать это? 
// И кажется я не могу вызывать хук здесь. help

const requestErrorHandler = async () => {
    const navigate = useNavigate();
    navigate("/error");
}

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: requestErrorHandler
    }),
    mutationCache: new MutationCache({
        onError: requestErrorHandler
    })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
