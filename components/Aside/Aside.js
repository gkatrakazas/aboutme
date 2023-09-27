var Aside = Backbone.View.extend({
    template: _.template(`
    <div class="flex items-center justify-center mb-4">
    <img src="assets/images/personal.png" alt="Your Image" class="w-40 h-40 border-gray-400 border rounded-full"/>
</div>

<section class="mb-4">
    <h2 class="text-xl mb-2">PROGRAMMING SKILLS</h2> 
    <div class="mb-4">
        <h3 class="text-lg mb-1">Experienced:</h3>
        <p class="pl-5">Python, Flask, Django, HTML, CSS, React, JavaScript, C, C++, Unix/Linux OS, Git, TailwindCSS</p>
    </div>

    <div class="mb-4">
        <h3 class="text-lg mb-1">Familiar:</h3>
        <p class="pl-5">JAVA, PHP, Nodejs, Express, Mongo DB, PostgreSQL, Docker</p>
    </div>
</section>
<section class="mb-4">
    <h2 class="text-xl mb-2">LANGUAGES</h2>

    <div class="mb-2">
        <p><strong>Greek:</strong></p>
        <div class="bg-gray-300 h-4 rounded-full">
            <div class="bg-green-500 h-full rounded-full" style="width:100%;"></div>
        </div>
        <p class="text-sm text-gray-500">Native</p>
    </div>

    <div class="mb-2">
        <p><strong>English:</strong></p>
        <div class="bg-gray-300 h-4 rounded-full">
            <div class="bg-green-500 h-full rounded-full" style="width:80%;"></div> <!-- Adjust width to represent proficiency -->
        </div>
        <p class="text-sm text-gray-500">Fluent</p>
    </div>
</section>

<section class="mb-4">
    <h2 class="text-xl mb-2">INTERESTS</h2>
    <p class="mb-1">Degree in Byzantine church music</p>
    <p class="mb-1">Professional painting & sketching</p>
</section>
<section class="mb-4">
    <h2 class="text-xl mb-2">OTHER SKILLS</h2>
    <ul>
        <li>Teamwork</li>
        <li>Hard-working</li>
        <li>Continuous learning</li>
        <li>Critical Thinking</li>
        <li>Creativity</li>
        <li>Communication</li>
    </ul>
</section>    `),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});
