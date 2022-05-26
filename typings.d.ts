export interface Post {
    _id:string
    _publishedAt:string
    title:string
    description: string
    mainImage: {
        asset: {
            url: string
        };
    };
    slug: {
        current: string
    };
    body: [object];
}