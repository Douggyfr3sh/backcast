var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //console.log('collection', this.collection);


    //selecting video list from DOM and appending each instance of the collection as a new VideoListEntry
    console.log('video-list selector: ', this.$('.video-list'));
    this.$('.video-list').append(this.collection.map(function(video) { 
      return new VideoListEntryView({ model: video }).render().el; 
    }));
    console.log('after .map ', this.$('.video-list'));


    // for (var i = 0; i < this.collection.length; i++) {
    //   var videoEntry = new VideoListEntryView({model: this.collection[i]});
    //   videoEntry.render();
    //   console.log('videoentry',videoEntry);
    // }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
