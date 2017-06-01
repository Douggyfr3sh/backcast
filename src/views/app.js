var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.player = new VideoPlayerView();
    this.videoList = new VideoListView();
    // this.videoListView = new VideoListView({collection: window.exampleVideoData});
    // this.videoListView.render();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.player.render();
    this.videoList.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
