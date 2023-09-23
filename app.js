var CVView = Backbone.View.extend({
    template: _.template(`
        <div class="bg-gray-600 p-6 rounded shadow-md">
            <h1 class="text-3xl mb-4">Greg</h1>
            <p class="mb-4"><strong>Role:</strong> Software Developer</p>
            <h2 class="text-2xl mb-4">Skills</h2>
            <ul>
                <li class="mb-2">JavaScript</li>
                <li class="mb-2">Python</li>
                <li class="mb-2">Backbone.js</li>
            </ul>
        </div>
    `),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

var cvView = new CVView();
$('#app').html(cvView.render().el);
