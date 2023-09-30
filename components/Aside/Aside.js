var Aside = Backbone.View.extend({
    template: _.template(`
        <div class="flex items-center justify-center mb-4">
            <img src="assets/images/personal.png" alt="Your Image" class="w-40 h-40 border-gray-400 border rounded-full"/>
        </div>
        <div class="flex flex-col items-start space-y-2 mb-4">
        <a href="<%= githubUrl %>" target="blank_" ><i class="fa fa-github"></i> <%= githubText %></a>
        <a href="tel:<%= phone %>"  target="blank_"><i class="fa fa-phone"></i> <%= phoneText %></a>
        <a href="mailto:<%= email %>" target="blank_" ><i class="fa fa-envelope"></i> <%= emailText %></a>
        <a href="<%= linkedinUrl %>" target="blank_" ><i class="fa fa-linkedin"></i> <%= linkedinText %></a>
    </div>
    <!-- Programming Skills Section -->
    <section class="mb-4">
    <h2 class="text-xl mb-2">PROGRAMMING SKILLS</h2> 
    
    <div class="mb-4">
        <h3 class="text-lg mb-1">Core Languages:</h3>
        <p><strong>Experienced:</strong> <%= programmingSkills.coreLanguages.experienced %></p>
        <p><strong>Familiar:</strong> <%= programmingSkills.coreLanguages.familiar %></p>
    </div>
    
    <div class="mb-4">
        <h3 class="text-lg mb-1">Web Development:</h3>
        <p><strong>Front End:</strong> <%= programmingSkills.webDevelopment.frontEnd %></p>
        <p><strong>Back End:</strong> <%= programmingSkills.webDevelopment.backEnd %></p>
        <p><strong>Database:</strong> <%= programmingSkills.webDevelopment.database %></p>
    </div>
    
    <div class="mb-4">
        <h3 class="text-lg mb-1">Data Formats:</h3>
        <p><strong>Experienced:</strong> <%= programmingSkills.dataFormats.experienced %></p>
    </div>
    
    <div class="mb-4">
        <h3 class="text-lg mb-1">Tools & Tech:</h3>
        <p><strong>Experienced:</strong> <%= programmingSkills.toolsAndTech.experienced %></p>
        <p><strong>Familiar:</strong> <%= programmingSkills.toolsAndTech.familiar %></p>
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
