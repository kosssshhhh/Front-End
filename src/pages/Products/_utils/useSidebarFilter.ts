import { useState } from 'react';

export function useSidebarFilter(): [boolean, () => void, () => void] {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => {
		setIsOpen(false);
	};

	const sidebarToggle = () => {
		setIsOpen(!isOpen);
	};

	return [isOpen, onClose, sidebarToggle];
}
