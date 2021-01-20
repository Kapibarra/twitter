class Twitter {
  constructor(param) {
    this.tweets = new Posts({
        posts: [] 
    });
    this.elements = {
        listElem : document.querySelector(param.listElem)
    }
  }
  renderPosts() {}
  showUserPost() {}
  showLikesPosts() {}
  showAllPost() {}
  openModal() {}
}

class Posts {
  constructor(param) {
    this.posts = param.posts;
  }
  addPost(tweet) {
    const post = new Post(tweet);
    this.posts.push(post);
  }
  deletePost(id) {}

  likePost(id) {}
}

class Post {
  constructor() {
    this.id = param.id;
    this.userName = param.userName;
    this.nickname = param.nickname;
    this.postDate = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }

  changeLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}


new Twitter({
    listElem: '.tweet-list'
})