import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { resolver, theme } from '../../theme';
import '@mantine/core/styles.css';
import './globals.css';

const poppins = Poppins({ weight: ['300', '400', '500'], style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Andrzej Szpara | Trener Personalny',
	description: 'Dieta, treningi i konsultacje online. Profesjonalny trener z zamiłowania.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pl'>
			<head>
				<ColorSchemeScript />
				<link rel='shortcut icon' href='/favicon.svg' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
			</head>
			<body className={poppins.className}>
				<MantineProvider theme={{ ...theme }} cssVariablesResolver={resolver}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
