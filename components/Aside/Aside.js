var Aside = Backbone.View.extend({
    template: _.template(`
        <div class="flex items-center justify-center mb-4">
            <img src="assets/images/personal.png" alt="Your Image" class="w-40 h-40 border-gray-400 border rounded-full"/>
        </div>

        <section class="mb-4">
            <h2 class="text-xl mb-2">PROGRAMMING SKILLS</h2> 
            <div class="mb-4">
                <h3 class="text-lg mb-1">Experienced:</h3>
                <p><%= programmingSkills.experienced %></p>
            </div>

            <div class="mb-4">
                <h3 class="text-lg mb-1">Familiar:</h3>
                <p><%= programmingSkills.familiar %></p>
            </div>
        </section>
        
        <section class="mb-4">
            <h2 class="text-xl mb-2">LANGUAGES</h2>
            <div class="mb-2 ">
                <p ><strong>Greek:</strong></p>
                <div class="bg-gray-300 h-4 rounded-full w-3/4">
                    <div class="bg-green-500 h-full rounded-full" style="width:100%;"></div>
                </div>
                <p class="text-sm text-gray-500">Native</p>
            </div>

            <div class="mb-2 ">
                <p><strong>English:</strong></p>
                <div class="bg-gray-300 h-4 rounded-full w-3/4">
                    <div class="bg-green-500 h-full rounded-full" style="width:80%;"></div>
                </div>
                <p class="text-sm text-gray-500">Fluent</p>
            </div>
        </section>
        
        <section class="mb-4">
            <h2 class="text-xl mb-2">INTERESTS</h2>
            <% _.each(interests, function(interest) { %>
                <p class="mb-1"><%= interest %></p>
            <% }); %>
        </section>
        
        <section class="mb-4">
            <h2 class="text-xl mb-2">OTHER SKILLS</h2>
            <ul>
                <% _.each(otherSkills, function(skill) { %>
                    <li><%= skill %></li>
                <% }); %>
            </ul>
        </section>
    `),
    render: function() {
        // Render the template with data from config.js
        this.$el.html(this.template(configData.aside));
        return this;
    }
});
