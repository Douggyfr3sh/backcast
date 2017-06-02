var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
    this.model = this.collection.at(0);
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.listenTo(this.collection, 'sync', this.selectFirst);
  },

  selectFirst: function() {
    this.model = this.collection.at(0);
    this.render();
  },

  selectVideo: function (selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div>Please wait, loading...</div>');
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
