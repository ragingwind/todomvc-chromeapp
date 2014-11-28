Polymer('basic-cards', {
  cards: [],
  ready: function() {
    for (i = 0; i <= 8; ++i) {
      this.cards.unshift({
        avatar: 'images/avatar-128.png',
        username: 'name-' + i,
        text: 'text-' + i
      });
    }
  }
});
