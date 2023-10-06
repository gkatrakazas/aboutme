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
                <nav class="top-menu flex flex-row w-3/4 justify-center my-5 bg-menu bg-opacity-50 rounded-md p-2">
                <ul class="flex space-x-4 justify-center items-center"> <!-- Add 'items-center' class -->
                <li class="flex flex-col items-center">
                            <a href="#" class="flex flex-col items-center justify-center text-white px-3 py-1 text-sm rounded-md" data-tab="home">
                                <div class="flex items-center justify-center">
                                    <!-- Dot indicator initially hidden -->
                                    <div class="h-2 w-2 bg-active rounded-full hidden dot-indicator"></div>
                                    <div class="flex flex-col items-center">
                                        <img src="assets/images/home.png" size alt="Home" class="w-8">
                                        <span>Home</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="flex flex-col items-center">
                        <a href="#" class="flex flex-col items-center justify-center text-white px-3 py-1 text-sm rounded-md" data-tab="cv">
                        <div class="flex items-center justify-center">
                            <!-- Dot indicator initially hidden -->
                            <div class="h-2 w-2 bg-active rounded-full hidden dot-indicator"></div>
                            <div class="flex flex-col items-center">
                                <img src="assets/images/cv.png" size alt="CV" class="w-8">
                                <span>CV</span>
                            </div>
                        </div>
                    </a>
                        </li>
                        <li class="flex flex-col items-center">
                        <a href="#" class="flex flex-col pointer-events-none cursor-not-allowed items-center justify-center text-white px-3 py-1 text-sm rounded-md" data-tab="contact">
                        <div class="flex items-center justify-center">
                            <!-- Dot indicator initially hidden -->
                            <div class="h-2 w-2 bg-active rounded-full hidden dot-indicator"></div>
                            <div class="flex flex-col items-center">
                                <img src="assets/images/posts.png" size alt="Posts" class="w-8">
                                <span>Posts</span>
                            </div>
                        </div>
                    </a>
                        </li>
                        <li class="flex flex-col items-center">
                            <div class="border-l border-white h-10"></div> <!-- Vertical line divider with white border -->
                        </li>
                        <li class="flex flex-col items-center">
                        <a href="https://github.com/gkatrakazas" target="_blank" class="text-white">
                            <i class="fa fa-github fa-2x"></i> <!-- GitHub icon -->
                        </a>
                        </li>
                        <li class="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/gkatrakazas/" target="_blank" class="text-white">
                        <i class="fa fa-linkedin fa-2x"></i> <!-- GitHub icon -->
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

// Inside the render function
render: function () {
    this.$el.html(this.template());

    // Render your other content
    this.$('#cvContainer').html(this.CV.render().el);
    this.$('#homeContainer').html(this.Home.render().el);

    // Initially hide the "CV" section
    this.CV.$el.hide();

    // Set the default tab as active by adding the 'bg-menu bg-opacity-75' class
    var defaultTab = this.$('[data-tab="home"]');
    defaultTab.addClass('bg-menu bg-opacity-75');

    // Delay showing the dot for the default tab using a setTimeout
    var self = this;
    setTimeout(function () {
        self.showDot('home');
    }, 0);

    return this;
},



        events: {
            'click [data-tab]': 'handleTabClick'
        },
        // Handle tab click events
        handleTabClick: function (e) {
            e.preventDefault();
            var tabName = $(e.currentTarget).data('tab');
                // Remove the bg- classes from all tabs
            $('[data-tab]').removeClass('bg-menu bg-opacity-75');

            // Add the bg-your-color class to the clicked tab
            $(e.currentTarget).addClass('bg-menu bg-opacity-75');
            this.showTab(tabName);
            this.showDot(tabName); // Show the dot for the clicked tab

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
        },
        // Function to show the dot for the selected tab
        showDot: function (tabName) {
            // Hide all dots initially
            $('[data-tab] .dot-indicator').addClass('hidden');
        
            // Show the dot for the selected tab by removing the 'hidden' class
            $('[data-tab="' + tabName + '"] .dot-indicator').removeClass('hidden');
        }
    });

    // Create a new instance of the CVView and render it to the #app element.
    var cvView = new CVView();
    $('#app').html(cvView.render().el);
});
