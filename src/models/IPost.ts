interface IAuthor {
	"authorImage": string,
	"authorName": string
}

export interface IPost {
	"date": string,
	"author": IAuthor,
	"image": string,
	"categories": string[],
	"title": string,
	"desc": string
}
