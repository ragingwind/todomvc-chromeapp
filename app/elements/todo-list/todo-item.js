Polymer('todo-item', {
  todo: {
  },
  // observe: {
  //   'todo.selected': 'select'
  // },
  complete: function(e) {
    this.completed = !this.completed;
    this.todo.completed = this.completed;
    this.async(function() {
      this.fire('item-status-changed', {item: this, status: 'completed'});
    });
    return e.stopPropagation();
  },
  unselect: function() {
    this.removeAttribute('selected');
    this.todo.selected = false;
  },
  select: function() {
    // this[!this.selected ? 'setAttribute' : 'removeAttribute']('selected', null);
    // this.selected = !this.selected;
    // this.todo.selected = true;
    // this.async(function() {
    //   this.fire('item-status-changed', {item: this, status: 'selected'});
    // });
    this.setAttribute('selected', null);
    this.todo.selected = true;
    this.async(function() {
      this.fire('item-status-changed', {item: this, status: 'selected'});
    });
  }
});
