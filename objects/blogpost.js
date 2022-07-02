// Q: Create a blog post object using the obj literal with the following properties

const blog = {
    title: " My Blog",
    body: "My Body",
    author: "My Author",
    views: 4,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true
}

console.log(blog.comments)
// Using constructor function for the same obj
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = []
    this.isLive = false
}

const post = new Post('a', 'b', 'c')
console.log(post)