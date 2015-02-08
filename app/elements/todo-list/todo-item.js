Polymer('todo-item', {
  complete: function(e) {
    this.todo.completed = !this.todo.completed;
    this.async(function() {
      this.fire('item-changed', {
        item: this,
        status: 'completed'
      });
    });
    return e.stopPropagation();
  },
  deselect: function() {
    this.removeAttribute('selected');
    this.todo.selected = false;
  },
  tap: function() {
    if (this['list-mode'] !== 'action') {
      return;
    }
    this.hold();
  },
  select: function() {
    this.setAttribute('selected', null);
    this.todo.selected = true;
  },
  hold: function() {
    this[this.todo.selected ? 'deselect' : 'select']();
    this.async(function() {
      this.fire('item-changed', {
        item: this,
        status: this.todo.selected ? 'selected' : 'unselected'
      });
    });
  }
});
