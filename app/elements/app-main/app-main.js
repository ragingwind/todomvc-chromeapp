Polymer('app-main', {
  todos: [],
  ready: function() {
    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: 'doto'
    });

    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: 'doto'
    });
  },
  toggleInputForm: function() {
    this.$.input.toggle();
  },
  toggleSearchView: function() {
    this.$.search.toggle();
  },
  addNewTodo: function(e) {
    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: e.detail
    });
  }
});
