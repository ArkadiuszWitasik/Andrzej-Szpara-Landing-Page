import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({ weight: ['400', '500', '700'], style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Andrzej Szpara | Trener Personalny',
	description: 'Dieta, treningi i konsultacje online. Profesjonalny trener z zamiłowania.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pl'>
			<head>
				<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
			</head>
			<body className={poppins.className}>
				<Toaster position='bottom-right' />
				{children}
			</body>
		</html>
	);
}
