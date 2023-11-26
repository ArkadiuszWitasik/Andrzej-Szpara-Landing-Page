export interface InstagramPhoto {
	id: string;
	caption: string;
	media_type: string;
	media_url: string;
	thumbnail_url: string;
	permalink: string;
	timestamp: string;
}

export interface InstagramData {
	data: InstagramPhoto[];
}
