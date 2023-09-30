$(document).ready(function () {
    // Define the CVView
    var CVView = Backbone.View.extend({
        // Initialize the view and create a new instance of the Aside view.
        initialize: function () {
            this.Header = new Header();
            this.Aside = new Aside();
            this.Main = new Main();
        },

        // Template for the view.
        template: _.template(`
        <div class="bg-cover bg-center h-full w-full flex items-center justify-center" style="background-image: url('assets/images/Emerald.png');">
        <div class="w-3/4 overflow-hidden my-10 rounded-md">
            <div class="bg-body-white border border-gray-400 ">
                <header id="headerContainer" class="border-b-2 bg-header-white text-center p-2">
                </header>
                <div class="flex">
                    <aside id="asideContainer" class="bg-customBlack text-white w-1/3 p-4">
                    </aside>
                    <main id="mainContainer" class="w-2/3 p-4">
                    </main>
                </div>
            </div>
        </div>
    </div>
    `),

        // Render the view and append the Aside view to its container.
        render: function () {
            this.$el.html(this.template());
            this.$('#headerContainer').html(this.Header.render().el); // Render Main and append it to its placeholder
            this.$('#asideContainer').html(this.Aside.render().el);
            this.$('#mainContainer').html(this.Main.render().el); // Render Main and append it to its placeholder
            return this;
        }
    });

    // Create a new instance of the CVView and render it to the #app element.
    var cvView = new CVView();
    $('#app').html(cvView.render().el);
});
