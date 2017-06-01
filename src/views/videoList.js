var VideoListView = Backbone.View.extend({

  initialize: function() {
    //console.log('this inside VideoListView: ', this);
    // this.collection.on('sync', function() {
    //   this.render();
    // }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // console.log('collection', this.collection);
    // for (var i = 0; i < this.collection.length; i++) {
    //   var videoEntry = new VideoListEntryView({model: this.collection[i]});
    //   videoEntry.render();
      // console.log('videoentry',videoEntry);
    //}

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
