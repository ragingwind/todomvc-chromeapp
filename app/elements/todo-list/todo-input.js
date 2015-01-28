Polymer('todo-input', {
  publish: {
    active: {
      value: false,
      reflect: true
    }
  },
  ready: function() {
  },
  toggle: function() {
    this.active = !this.active;
    if (this.active) {
      this.$.note.focus();
    }
  },
  blur: function(e) {
    if (!e.relatedTarget ||
      (e.relatedTarget !== this.$.title &&
        e.relatedTarget !== this.$.note &&
        e.relatedTarget !== this.$.write)) {
      this.active = false;
    }
  }
});
