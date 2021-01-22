class Twitter {
  constructor({listElem}) {
    this.tweets = new Posts()
        this.elements = {
          listElem : document.querySelector(param.listElem)
      }
    };

  renderPosts() {}
  showUserPost() {}
  showLikesPosts() {}
  showAllPost() {}
  openModal() {}
}

class Posts {
  constructor({posts = []} = {}) {
    this.posts = posts;
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
    this.id = param.id ? param.id :  this.generateID()
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

  generateID() {
    return (new Date )
  }
}


new Twitter({
    listElem: '.tweet-list'
})