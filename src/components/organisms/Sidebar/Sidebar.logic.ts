import {useCallback, useEffect, useRef} from 'react';
import {useAuth} from '../../../context/AuthContext';
import {useSearchParams} from 'react-router-dom';
import type {SidebarProps} from './Sidebar';

export function useSidebarLogic({isOpen, closeSidebar, ignoreRef}: SidebarProps) {
	const {logout} = useAuth();
	const sidebarRef = useRef<HTMLDivElement | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();

	// Trigger global logout modal
	const handleLogout = (e: React.MouseEvent) => {
		e.preventDefault();
		const updated = new URLSearchParams(searchParams);
		updated.set('modal', 'confirmLogout');
		setSearchParams(updated);
	};

	// Final logout action, to be called by ConfirmDialog in ModalContentRouter
	const confirmLogout = () => {
		logout();
	};

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			const target = event.target as Node;
			const clickedOutsideSidebar = sidebarRef.current && !sidebarRef.current.contains(target);
			const clickedOutsideIgnored = ignoreRef?.current && !ignoreRef.current.contains(target);

			if (window.innerWidth <= 970 && clickedOutsideSidebar && (!ignoreRef?.current || clickedOutsideIgnored)) {
				closeSidebar();
			}
		},
		[closeSidebar, ignoreRef]
	);

	useEffect(() => {
		if (!isOpen) return;
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	return {
		sidebarRef,
		handleLogout,
		confirmLogout,
	};
}
