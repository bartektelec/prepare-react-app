import * as React from 'react';
import styles from './header.module.scss';

const arr = [1, 2, 3, 34, 5];
const name = 'bartek';
const Header: React.FC = () => (
	<header className={styles.wrapper} role='main'>
		{arr.map(el => (
			<li>
				{el}
				{name}
			</li>
		))}
	</header>
);

export default Header;
