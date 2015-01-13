Polymer('name-card-searchbox', {
  active: false,

  toggle: function() {
    this.active = !this.active;
    if (this.active) {
      console.log('active');
    }
  }
});
