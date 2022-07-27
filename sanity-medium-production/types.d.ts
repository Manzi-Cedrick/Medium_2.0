export interface Post{
    [x: string]: Key | null | undefined;
    _id: string;
    createdAt: string;
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