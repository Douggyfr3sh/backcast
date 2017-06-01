var VideoListEntryView = Backbone.View.extend({


  render: function() {
    console.log('this VideoListEntryView', this);
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
// src/data/exampleVideoData.js
});
