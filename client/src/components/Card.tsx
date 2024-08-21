import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export default function Card({ children, className }: CardProps) {
	return <div className={`bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ${className}`}>{children}</div>;
}
