import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuth} from '../../../context/AuthContext';
import type {SidebarProps} from './sidebar';

export function useSidebarLogic({isOpen, closeSidebar, ignoreRef}: SidebarProps) {
	const {logout} = useAuth();
	const sidebarRef = useRef<HTMLDivElement | null>(null);
	const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

	const handleLogout = (e: React.MouseEvent) => {
		e.preventDefault();
		setShowLogoutConfirm(true);
	};

	const confirmLogout = () => {
		setShowLogoutConfirm(false);
		logout();
	};

	const cancelLogout = () => {
		setShowLogoutConfirm(false);
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
		showLogoutConfirm,
		handleLogout,
		confirmLogout,
		cancelLogout,
	};
}
