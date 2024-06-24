import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col items-center">
				<svg
					className="w-16 h-16 text-gray-500 mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 9v2m0 4h.01m6.938 4H5.062A1.062 1.062 0 014 18.938V5.062A1.062 1.062 0 015.062 4h13.876A1.062 1.062 0 0120 5.062v13.876A1.062 1.062 0 0118.938 20z"
					/>
				</svg>
				<h1 className="text-2xl font-bold text-gray-700 mb-2">페이지를 찾을 수 없습니다</h1>
				<p className="text-gray-500 mb-4">죄송합니다, 요청하신 페이지를 찾을 수 없습니다.</p>
				<button
					onClick={() => navigate('/')}
					className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
					홈으로 돌아가기
				</button>
			</div>
		</div>
	);
}
