import React from 'react';

function MainContainer({ children }: { children: React.ReactNode }) {
	// return <div className="p-4 pt-20 sm:ml-0 md:ml-0 lg:ml-64">{children}</div>;
	return <div className="h-full bg-gray-50 p-4 pt-20 relative overflow-y md:ml-0 lg:ml-64">{children}</div>;
}

export default MainContainer;
