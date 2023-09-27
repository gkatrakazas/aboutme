var Main = Backbone.View.extend({
    // Define the template for the Main view
    template: _.template(`
    <div class="flex justify-between">
    <div class="w-2/3">
        <h2 class="text-2xl mb-4"><%= name %></h2>
        <p class="mb-4"><%= jobTitle %></p>
        <p class="mb-4"><%= about %></p>
    </div>
    <div class="flex flex-col items-start space-y-4 w-1/3">
        <a href="<%= githubUrl %>" target="blank_" class="text-sm"><i class="fa fa-github"></i> <%= githubText %></a>
        <a href="tel:<%= phone %>" class="text-sm" target="blank_"><i class="fa fa-phone"></i> <%= phoneText %></a>
        <a href="mailto:<%= email %>" target="blank_" class="text-sm"><i class="fa fa-envelope"></i> <%= emailText %></a>
        <a href="<%= linkedinUrl %>" target="blank_" class="text-sm"><i class="fa fa-linkedin"></i> <%= linkedinText %></a>
    </div>
</div>
<section class="">
<h2 class="text-2xl mb-4">EDUCATION</h2>
<% _.each(education, function(edu) { %>
    <article class="mb-4 flex">
        <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;"><%= edu.period %></p>
        <div>
            <p class="font-bold"><%= edu.degree %></p>
            <p class="text-sm"><%= edu.university %></p>
            <p class="text-sm"><%= edu.specialization %></p>
        </div>
    </article>
<% }); %>
</section>
<section class="pt-4">
<h2 class="text-2xl mb-4">EXPERIENCE</h2>
<% _.each(experience, function(exp) { %>
    <article class="mb-4">
        <header class="mb-1 flex">
            <div style="min-width: 120px;"><strong><%= exp.category %>:</strong></div>
            <div>
                <ul style="list-style-type: disc; padding-left: 20px;">
                    <% _.each(exp.items, function(item) { %>
                        <li>
                            <p><strong><%= item.title %></strong></p>
                            <p class="mb-1 text-sm"><%= item.period %></p>
                            <% if (item.description) { %>
                                <p class="mb-1 text-sm"><%= item.description %></p>
                            <% } %>
                        </li>
                    <% }); %>
                </ul>
            </div>
        </header>
    </article>
<% }); %>
</section>

<section class="mt-4">
<h2 class="text-2xl mb-4">VOLUNTEERING</h2>
<% _.each(volunteering, function(volunteer) { %>
    <article class="mb-4">
        <div class="flex">
            <p class="w-32 mb-1"><strong><%= volunteer.period %></strong></p>
            <div>
                <p class="mb-1"><strong><%= volunteer.organization %></strong></p>
                <p class="mb-1"><%= volunteer.role %></p>
                <p><%= volunteer.description %></p>
            </div>
        </div>
    </article>
<% }); %>
</section>
    `),

    render: function() {
        // Render the template with data from config.js
        this.$el.html(this.template(configData.main));
        return this;
    }
});
