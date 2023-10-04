var CV = Backbone.View.extend({
    initialize: function () {
        this.Header = new Header();
        this.Aside = new Aside();
        this.Main = new Main();
    },
    template: _.template(`
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
    `),
    render: function() {
        // Render the template with data from config.js
        this.$el.html(this.template());
        this.$('#headerContainer').html(this.Header.render().el); // Render Header and append it to its placeholder
        this.$('#asideContainer').html(this.Aside.render().el); // Render Aside and append it to its placeholder
        this.$('#mainContainer').html(this.Main.render().el); // Render Main and append it to its placeholder
        return this;
    }
});
