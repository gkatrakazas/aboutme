var Home = Backbone.View.extend({
    initialize: function () {
        this.Header = new Header();
    },
    template: _.template(`
        <header id="headerContainer" class="border-b-2 bg-header-white text-center p-2">
        </header>
        <div class="flex">
        <aside id="asideContainer" class="bg-customBlack text-white w-1/3 p-4">
        <div class="flex items-center justify-center mb-4">
        <img src="assets/images/personal.png" alt="Your Image" class="w-40 h-40 border-gray-400 border rounded-full"/>
    </div>
    <h1 class="justify-center flex text-2xl">Grigoris katrakazas</h1>
    <hr class="my-2 border-t border-gray-300">

    <h1 class="justify-center flex text-xl">Frontend developer</h1>


        </aside>

            <div class="w-2/3 p-4">
                <!-- Resume on the right -->
                <p>Welcome to my page! I'm Grigoris Katrakazas, a 27-year-old Frontend Developer passionate about creating web applications. I hold a Bachelor's degree in Informatics and Telecommunications and am currently pursuing a Master's in Computer Science, specializing in Data and Knowledge Management.
                <br></br>
                With expertise in JavaScript and Python, I excel in web development using technologies like React, Flask, and PostgreSQL. I'm dedicated to continuous learning and bring creativity and attention to detail to every project.
                <br></br>
                Beyond coding, I'm connected to Byzantine church music and enjoy professional painting and sketching. Explore my portfolio to see my work, and let's embark on this digital journey together.</p>
                <!-- Add your resume content here -->
            </div>
        </div>
    `),
    render: function() {
        this.$el.html(this.template());
        this.$('#headerContainer').html(this.Header.render().el); // Render Header and append it to its placeholder
        return this;
    }
});
