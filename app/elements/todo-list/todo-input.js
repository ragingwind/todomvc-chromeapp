Polymer('todo-input', {
  add: function() {
    this.async(function() {
      this.fire('new-todo', this.todo);
      this.$['new-todo'].blur();
    });
  },
  focus: function() {
    this.$['new-todo'].removeAttribute('disabled', null);
    setTimeout(function() {
      this.$['new-todo'].focus();
    }.bind(this), 10);
  },
  blur: function() {
    this.$['new-todo'].setAttribute('disabled', null);
    this.todo = '';
  }
});
