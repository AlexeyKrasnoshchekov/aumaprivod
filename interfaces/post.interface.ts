export interface Posts {
    posts: Post[]
}

export interface Post {
    title: string,
    titleShort?: string,
    content: string,
    date: string,
    images: Array<string>,
    imageSlider: string,
    dateString: string,
    id: number
}