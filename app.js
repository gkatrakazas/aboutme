$(document).ready(function () {
    // Define the CVView
    var CVView = Backbone.View.extend({
        // Initialize the view and create a new instance of the Aside view.
        initialize: function () {
            this.CV = new CV();
            this.Home = new Home();
        },

        // Template for the view.
        template: _.template(`
            <div class="bg-cover flex flex-col bg-center min-h-screen h-full w-full flex items-center justify-top" style="background-image: url('assets/images/Emerald.png');">
                <nav class="top-menu flex flex-row justify-center items-center my-5">
                    <ul class="flex space-x-4">
                        <li class="flex flex-col items-center">
                            <a href="#" class="flex flex-col items-center text-white" data-tab="home">
                                <img src="assets/images/home.png" size alt="Home" class="w-8">
                            Home
                            </a>
                        </li>
                        <li class="flex flex-col items-center">
                            <a href="#" class="flex flex-col items-center text-white" data-tab="cv">
                            <img src="assets/images/cv.png" size alt="Cv" class="w-8">
                            CV
                            </a>
                        </li>
                        <li class="flex flex-col items-center">
                            <a href="#" class="flex flex-col items-center text-white" data-tab="contact">
                            <img src="assets/images/contact.png" size alt="Contact" class="w-8">
                            Contact
                            </a>
                        </li>
                    </ul>
                </nav>        
                <div class="w-3/4 overflow-hidden mb-10 rounded-md">
                    <div id="cvContainer" >
                    </div>
                    <div id="homeContainer" class="bg-body-white border border-gray-400 ">
                    </div>
                </div>
            </div>
        `),

        // Render the view and append the Aside view to its container.
        render: function () {
            this.$el.html(this.template());
            this.$('#cvContainer').html(this.CV.render().el); // Render Header and append it to its placeholder
            this.$('#homeContainer').html(this.Home.render().el); // Render Header and append it to its placeholder

            // Initially show the "Home" section
            this.CV.$el.hide();
            this.Home.$el.show();
            return this;
        },
        events: {
            'click [data-tab]': 'handleTabClick'
        },
        // Handle tab click events
        handleTabClick: function (e) {
            e.preventDefault();
            var tabName = $(e.currentTarget).data('tab');
            this.showTab(tabName);
        },
        // Show the selected tab
        showTab: function (tabName) {
            // Hide all sections initially
            this.CV.$el.hide();
            this.Home.$el.hide();

            if (tabName === 'cv') {
                // Show the CV section
                this.CV.$el.show();
            } else if (tabName === 'home') {
                this.Home.$el.show();
            }
        }
    });

    // Create a new instance of the CVView and render it to the #app element.
    var cvView = new CVView();
    $('#app').html(cvView.render().el);
});
