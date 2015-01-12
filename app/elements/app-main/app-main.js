Polymer('app-main', {
  cards: [],
  showNewNameCardInput: function() {
    this.cards.unshift({
      avatar: 'images/avatar-128.png',
      username: 'name',
      text: 'text1'
    });

    console.log('added', this.cards);
  },
  ready: function() {
  }
});
