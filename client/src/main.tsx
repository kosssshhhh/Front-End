// import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from '@/App';
import '@/index.css';
import queryClient from '@/api/queryClient/queryClient';
import { BrowserRouter } from 'react-router-dom';

// console.log(import.meta.env.DEV);

// async function enableMocking() {
// 	if (!import.meta.env.DEV) return;

// 	const { worker } = await import('@/mocks/browser');
// 	console.log('Enabling mocking');
// 	return worker.start();
// }

// enableMocking().then(() => {
ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
);
// });
