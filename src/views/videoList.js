var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //console.log('collection', this.collection);


    //selecting video list from DOM and appending each instance of the collection as a new VideoListEntry
    this.$('.video-list').append(this.collection.map(function(video) { 
      console.log('video inside map ',video);
      return new VideoListEntryView({ model: video }).render().el; 
    }));

    // for (var i = 0; i < this.collection.length; i++) {
    //   var videoEntry = new VideoListEntryView({model: this.collection[i]});
    //   videoEntry.render();
    //   console.log('videoentry',videoEntry);
    // }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
