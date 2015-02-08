Polymer('app-main', {
  mode: 'main',
  todos: [],
  ready: function() {
    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: 'todo',
      selected: false,
      completed: false
    });

    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: 'todo',
      selected: false,
      completed: false
    });

  },
  setMode: function(mode) {
    this.toggleNewTodo(mode === 'main');
    this.mode = mode;
  },
  back: function() {
    if (this.mode === 'action') {
      this.$.todos.deselectAll();
      this.$.todos.mode = 'view';
    }

    this.setMode('main');
  },
  itemChanged: function(e, item) {
    if (item.status === 'selected') {
      if (this.mode !== 'action') {
        this.$.todos.mode = 'action';
        this.setMode('action');
      }
    }
  },
  toggleSearch: function() {
    this.setMode('search');
    setTimeout(function() {
      this.shadowRoot.querySelector('#search-for').focus();
    }.bind(this), 10);
  },
  focusNewTodo: function() {
    this.$['new-todo'].focus();
  },
  addNewTodo: function(e) {
    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: e.detail
    });
  },
  toggleNewTodo: function(show) {
    this.$['new-todo'].style.display = show ? 'block' : 'none';
  }
});
