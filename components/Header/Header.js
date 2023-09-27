var Header = Backbone.View.extend({
    template: _.template(`
        <p class="text-md"><%= title %></p>
    `),
    render: function() {
        // Render the template with data from config.js
        this.$el.html(this.template(configData.header));
        return this;
    }
});
