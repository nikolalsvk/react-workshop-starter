class Post {
    constructor(id, title, body) {
        this.id = id
        this.title = title
        this.body = body
    }

    // this.shortTitle
    get shortTitle() {
        return this.title.slice(0, 20) + '...'
    }

    get shortBody() {
        return this.body.slice(0, 50) + '...'
    }
}

export default Post
