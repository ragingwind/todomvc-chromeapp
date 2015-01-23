Polymer('name-card-search', {
  publish: {
    narrow: {value: false, reflect: true},
    active: {value: false, reflect: true}
  },

  toggle: function() {
    this.active = !this.active;
    if (this.active) {
      this.$.searchbox.focus();
    }
  }
});
