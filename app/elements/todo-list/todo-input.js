Polymer('todo-input', {
  active: false,
  add: function() {
    this.async(function() {
      this.fire('new-todo', this.newTodo);
      this.$['new-todo'].blur();
    });
  },
  toggle: function() {
    this.active = !this.active;
    if (this.active) {
      this.$['new-todo'].removeAttribute('disabled', null);
      setTimeout(function() {
        this.$['new-todo'].focus();
      }.bind(this), 10);
    }
  },
  blur: function(e) {
    this.active = false;
    this.$['new-todo'].setAttribute('disabled', null);
    this.$['new-todo'].value = '';
  }
});
