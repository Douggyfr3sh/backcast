var SearchView = Backbone.View.extend({

  events: {
    'click button': 'performSearch',
    'keyup input': 'handleKeyUp'
  },

  performSearch: function(shouldNotEmpty) {
    this.collection.search(this.$('input').val().trim());
    if (!shouldNotEmpty) {
      this.$('input').val('');
    }
  },

  handleKeyUp: function (e) {
    if (e.keyCode === 13) {
      this.performSearch(false);
    } else {
      this.performSearch(true);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
