import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from '@/App';
import './index.css';
import queryClient from '@/api/queryClient/queryClient';

// TODO: React Query Devtools 오류 해결

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
		{/* <ReactQueryDevtools initialIsOpen={false} /> */}
	</QueryClientProvider>,
);
