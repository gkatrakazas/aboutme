var Main = Backbone.View.extend({
    // Define the template for the Main view
    template: _.template(`
    <div class="flex justify-between mb-4">
    <div class="flex flex-col">
        <h2 class="text-2xl mb-2"><%= name %></h2>
        <p class="mb-2 text-xl"><%= jobTitle %></p>
        <p class="text-sm"><%= about %></p>
    </div>
</div>
<section class="">
<h2 class="text-2xl mb-4">EDUCATION</h2>
<% _.each(education, function(edu) { %>
    <article class="mb-2 flex">
        <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;"><%= edu.period %></p>
        <div>
            <p> <strong> <%= edu.degree %>, </strong> <%= edu.university %></p>
            <% if (edu.specialization) { %>
                <p class="text-sm">Specialization: <%= edu.specialization %></p>
            <% } %>
        </div>
    </article>
<% }); %>
</section>
<section class="pt-4">
<h2 class="text-2xl mb-4">PROFESSIONAL EXPERIENCE</h2>
<% _.each(professional, function(prof) { %>
    <article class="mb-4">
        <header class="mb-1">
            <p><strong><%= prof.title %>,</strong> <%= prof.company %> (<%= prof.period %>)</p>
        </header>
        <% if (prof.description) { %>
            <ul class="list-disc pl-5">
                <% _.each(prof.description, function(desc) { %>
                    <li class="mb-1 text-sm"><%= desc %></li>
                <% }); %>
            </ul>
        <% } %>
    </article>
<% }); %>
</section>

<section class="pt-4">
<h2 class="text-2xl mb-4">SELECTED UNIVERSITY PROJECTS</h2>
<% _.each(university, function(uni) { %>
    <article class="mb-4">
        <header class="mb-1">
            <p><strong><%= uni.title %></strong> (<%= uni.technology %>)</p>
        </header>
        <p class="mb-1 text-sm"><%= uni.description %></p>
    </article>
<% }); %>
</section>

<section class="pt-4">
<h2 class="text-2xl mb-4">PERSONAL PROJECTS</h2>
<% _.each(personal, function(per) { %>
    <article class="mb-4">
        <header class="mb-1">
            <p><strong><%= per.title %></strong> (<%= per.technology %>)</p>
        </header>
        <p class="mb-1 text-sm"><%= per.description %></p>
        <% if(per.link) { %>
            <a href="<%= per.link %>" target="_blank" class="text-sm"><i class="fa fa-link"></i> <%= per.link %></a>
        <% } %>
    </article>
<% }); %>
</section>

<section class="mt-4">
<h2 class="text-2xl mb-4">VOLUNTEERING</h2>
<% _.each(volunteering, function(volunteer) { %>
    <article class="mb-4">
        <div class="flex">
            <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;"><%= volunteer.period %></p>
            <div>
                <p class="mb-1"><strong><%= volunteer.organization %></strong>, <%= volunteer.role %></p>
                <p class="text-sm"><%= volunteer.description %></p>
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
