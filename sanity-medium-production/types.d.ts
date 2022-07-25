export interface Post{
    _id: string;
    createdAt: Date;
    title: string;
    author: {
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset : {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    body: [object];
}