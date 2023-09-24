var CVView = Backbone.View.extend({
    template: _.template(`
        <div class="bg-cover bg-center h-screen w-full flex items-center justify-center" style="background-image: url('assets/images/Emerald.png');">
            <div class="w-3/4 overflow-hidden rounded-md">
                <div class="bg-body-white border border-gray-400">
                    <header class="border-b-2 bg-header-white text-center p-2">
                        <p class="text-md">Grigoris Katrakazas CV</p>
                    </header>
                    <div class="flex">
                        <aside class="bg-customBlack text-white w-1/4 p-4">
                            <div class="flex items-center justify-center mb-4">
                                <img src="assets/images/personal.png" alt="Your Image" class="w-40 h-40 border-gray-400 border rounded-full"/>
                            </div>
                            <h2 class="text-xl mb-2">Sidebar</h2>
                            <ul>
                                <li class="mb-1">Item 1</li>
                                <li class="mb-1">Item 2</li>
                                <li class="mb-1">Item 3</li>
                            </ul>
                        </aside>
                        <main class="w-3/4 p-4">
                            <h2 class="text-2xl mb-2">Grigoris katrakazas</h2>
                            <p class="text-xl mb-4">Frontend Developer</p>
                            <h3 class="text-xl mb-4">Skills</h3>
                            <ul>
                                <li class="mb-2">JavaScript</li>
                                <li class="mb-2">Python</li>
                                <li class="mb-2">Backbone.js</li>
                            </ul>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    `),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

var cvView = new CVView();
$('#app').html(cvView.render().el);
