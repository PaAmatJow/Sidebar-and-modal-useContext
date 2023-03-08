import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from './assets/logo.svg';
import { links, social } from './data';
import { useGlobalContext } from './contex';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
	return (
		<aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
			<div className='sidebar-header'>
				<img src={logo} alt='coding addict' className='logo' />
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-icons'>
				{social.map((socialIcon) => {
					const { id, url, icon } = socialIcon;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
