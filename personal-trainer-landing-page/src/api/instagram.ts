import { InstagramData } from '@/types/ResponseTypes';
import axios from 'axios';
import { NextApiResponse } from 'next';

export default async function handler(res: NextApiResponse) {
	try {
		const response = await axios.get<InstagramData>(
			`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=YOUR_ACCESS_TOKEN`
		);

		const data = response.data.data;

		res.status(200).json({ data });
	} catch (error) {
		console.error('Error fetching Instagram data:', error);
		res.status(500).json({ error: 'Error fetching Instagram data' });
	}
}
