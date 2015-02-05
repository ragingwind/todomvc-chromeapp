Polymer('app-main', {
  cards: [],
  ready: function() {
  },
  toggleInputForm: function() {
    this.$.input.toggle();
  },
  toggleSearchView: function() {
    this.$.search.toggle();
  }
});
