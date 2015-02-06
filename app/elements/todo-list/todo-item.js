Polymer('todo-item', {
  completed: false,
  selected: false,
  compete: function(e) {
    this.completed = !this.completed;
    return e.stopPropagation();
  },
  select: function() {
    this[!this.selected ? 'setAttribute' : 'removeAttribute']('selected', null);
    this.selected = !this.selected;
  }
});
