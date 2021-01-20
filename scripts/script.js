

class Posts {
    constructor() {

    }
}


class Post {
    constructor() {
this.userName = param.userName
this.nickname = param.nickname
this.postDate = param.postDate
this.text = param.text
this.img = param.img
this.likes = param.likes
this.liked = false

}

    changeLike() {
this.liked = !this.liked
if ( this.liked) {
    this.likes++
}
    }
}