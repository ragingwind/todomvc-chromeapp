Polymer('todo-list', {
  mode: 'view',
  deselectAll: function() {
    var items = this.shadowRoot.querySelectorAll('todo-item');
    for (var i = 0; i < items.length; ++i){
      items[i].deselect();
    }
  }
});
