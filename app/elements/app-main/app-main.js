Polymer('app-main', {
  activeMode: 'main',
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
  changeActiveMode: function(mode) {
    console.log(mode);
    if (this.activeMode !== mode) {
      if (this.activeMode === 'action') {
        this.$.todos.unselectItems();
      }
      this.activeMode = mode;
    }
  },
  itemChanged: function(e, item) {
    if (item.status === 'selected') {
      this.changeActiveMode('action');
    }
  },
  back: function() {
    this.changeActiveMode('main');
  },
  toggleInputForm: function() {
    this.todos.unshift({'a':1});
    this.todos[1].selected = true;
    this.$.input.toggle();
  },
  toggleSearch: function() {
    this.changeActiveMode('search');
  },
  addNewTodo: function(e) {
    this.todos.unshift({
      created: new Date().toUTCString(),
      modified: new Date().toUTCString(),
      todo: e.detail
    });
  }
});
