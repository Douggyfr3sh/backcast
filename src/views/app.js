var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('Hack Reactor');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    //render a new VideoListView
    new VideoListView({collection: this.videos, el: this.$('.list')}).render();


    //render a new VideoPlayerView
    new VideoPlayerView({collection: this.videos, el: this.$('.player')
    }).render();

    //render a new SearchView
    new SearchView ({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;

  },

  // selectFirst: function() {
  //   this.videos.at(0).select();
  // }

  template: templateURL('src/templates/app.html')

});
