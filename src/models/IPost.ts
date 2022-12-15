interface IAuthor {
	authorImage: string;
	authorName: string;
}

export interface IPost {
	id: string;
	date: string;
	author: IAuthor;
	image: string;
	categories: string[];
	title: string;
	desc: string;
	countWatch: number;
}
