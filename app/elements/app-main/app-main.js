Polymer('app-main', {
  todos: [],
  ready: function() {
  },
  toggleInputForm: function() {
    this.$.input.toggle();
  },
  toggleSearchView: function() {
    this.$.search.toggle();
  },
  addNewTodo: function(e) {
    this.todos.push({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: e.detail
    });
    console.log(this.todos);
  }
});
