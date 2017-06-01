var VideoListEntryView = Backbone.View.extend({


  render: function() {
    console.log('this VideoListEntryView', this);
    this.$el.html(this.template(this.model.attributes));
    //Refactor to dynamically render based on the video object it receives

    return this;
  },

  handleClick: function () {
    this.model.select();
  },

  events: {
    'click .video-list-entry-title' : 'handleClick'
  },

  template: templateURL('src/templates/videoListEntry.html')
// src/data/exampleVideoData.js
});
