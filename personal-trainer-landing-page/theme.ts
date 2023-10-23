'use client';

import { createTheme, CSSVariablesResolver } from '@mantine/core';

export const theme = createTheme({
	defaultRadius: 'xs',
	fontFamily: 'Poppins, sans-serif',
});

export const resolver: CSSVariablesResolver = theme => ({
	variables: {
		'--font-color': '#E4E4E4',
		'--bg-color': '#000000',
		'--primary-color': '#F5FB51',
	},
	light: {},
	dark: {},
});
