'use client';

import { Button, rem } from '@mantine/core';

function Navbar() {
	return (
		<div>
			<Button fz={rem(16)} component='a' href='#cos'>Głowna</Button>
		</div>
	);
}

export default Navbar;
