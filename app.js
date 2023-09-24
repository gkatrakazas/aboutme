var CVView = Backbone.View.extend({
    template: _.template(`
        <div class="bg-cover bg-center h-screen w-full flex items-center justify-center" style="background-image: url('assets/images/Emerald.png');">
            <div class="bg-white p-6 rounded shadow-md w-3/4">
                <header class="border-b-2 border-gray-200 mb-4 p-2">
                    <h1 class="text-3xl">Header Section</h1>
                </header>
                <div class="flex">
                    <aside class="bg-customBlack text-white w-1/4 p-4">
                        <h2 class="text-xl mb-2">Sidebar</h2>
                        <ul>
                            <li class="mb-1">Item 1</li>
                            <li class="mb-1">Item 2</li>
                            <li class="mb-1">Item 3</li>
                        </ul>
                    </aside>
                    <main class="w-3/4 p-4">
                        <h2 class="text-2xl mb-4">Greg</h2>
                        <p class="mb-4"><strong>Role:</strong> Software Developer</p>
                        <h3 class="text-xl mb-4">Skills</h3>
                        <ul>
                            <li class="mb-2">JavaScript</li>
                            <li class="mb-2">Python</li>
                            <li class="mb-2">Backbone.js</li>
                        </ul>
                    </main>
                </div>
                <footer class="border-t-2 border-gray-200 mt-4 p-2">
                    <p>Footer Section</p>
                </footer>
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
