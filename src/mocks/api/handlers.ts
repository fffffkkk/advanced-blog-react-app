import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:3000/posts', (req, res, ctx) => {
		// successful response
		return res(
			ctx.status(200),
			ctx.json([
				{
					"countWatch": 5,
					"id": "1",
					"date": "15.12.2022",
					"author": {
						"authorName": "ggwger@greg.com"
					},
					"image": "",
					"categories": [
						"ANIMAL"
					],
					"title": "",
					"desc": ""
				},
				{
					"countWatch": 5,
					"id": "2",
					"date": "15.12.2022",
					"author": {
						"authorName": "ggwger@greg.com"
					},
					"image": "blob:http://localhost:4000/ad8bee09-f938-4815-a65b-70d0d9611245",
					"categories": [
						"IT"
					],
					"title": "TITLE",
					"desc": ""
				}
			]),
			ctx.delay(30)
		);
	}),
];
