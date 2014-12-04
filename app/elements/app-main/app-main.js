Polymer('app-main', {
  posts: [],
  ready: function() {
    for (i = 0; i <= 8; ++i) {
      this.posts.unshift({
        avatar: 'images/avatar-128.png',
        username: 'name-' + i,
        text: 'text-' + i
      });
    }
  }
});
