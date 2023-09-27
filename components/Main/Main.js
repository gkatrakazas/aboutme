// Main.js

var Main = Backbone.View.extend({
    // Define the template for the Main view
    template: _.template(`
    <div class="flex justify-between">
    <div class="w-2/3"> <!-- Adjusted to 1/2 of the available width -->
        <h2 class="text-2xl mb-4">Grigoris Katrakazas</h2>
        <p class="mb-4">Frontend Developer</p>
        <p class="mb-4">As a 27-year-old Frontend Developer, I have a deep-rooted passion for programming, with a specialized focus on developing web applications.</p>
    </div>
    <div class="flex flex-col items-start space-y-4 w-1/3 ">
        <a href="https://github.com/gregory1996" target="blank_" class="text-sm"><i class="fa fa-github"></i> gregory1996</a>
        <a href="tel:+306980684913" class="text-sm" target="blank_"><i class="fa fa-phone"></i> +30 6980684913</a>
        <a href="mailto:grigoriskatrakazas@gmail.com" target="blank_" class="text-sm"><i class="fa fa-envelope"> grigoriskatrakazas@gmail.com</i></a>
        <a href="https://www.linkedin.com/in/gkatrakazas/" target="blank_" class="text-sm"><i class="fa fa-linkedin"></i> gkatrakazas</a>
    </div>
</div>
<section class="">
<h2 class="text-2xl mb-4">EDUCATION</h2>
<article class="mb-4 flex">
    <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;">2022 - present</p>
    <div>
        <p class="font-bold">Master of Computer Science</p>
        <p class="text-sm">National and Kapodistrian University of Athens</p>
        <p class="text-sm">Specialization: Data and Knowledge Management</p>
    </div>
</article>
<article class="mb-4 flex">
    <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;">2016 - 2022</p>
    <div>
        <p class="font-bold">Bachelor of Informatics and Telecommunications</p>
        <p class="text-sm">National and Kapodistrian University of Athens</p>
        <p class="text-sm">Specialization: Data and Knowledge Management</p>
    </div>
</article>
<article class="flex">
    <p class="mb-1 flex-shrink-0 mr-4 font-bold" style="min-width: 120px;">2014 - 2016</p>
    <div>
        <p class="font-bold">Applied Mathematical and Physical Sciences</p>
        <p class="text-sm">National Technical University of Athens</p>
    </div>
</article>
</section>
<section class="pt-4">
<h2 class="text-2xl mb-4">EXPERIENCE</h2>

<article class="mb-4">
<header class="mb-1 flex">
    <div style="min-width: 120px;"><strong>Work:</strong></div>
    <div>
    <ul style="list-style-type:disc; padding-left:20px;">
        <li>
            <p><strong>Front-end Developer</strong></p>
            <p class="mb-1 text-sm">GUNET |6/23 - present</p>
        </li>
        <li>
            <p class="mb-1"><strong>Full Stack Developer</strong></p>
            <p class="mb-1 text-sm">8BELLS Research LTD |10/21 - 5/23</p>
            <p class="mb-1 text-sm">Development and maintenance of web applications (React, Flask, PostgreSQL) and Implementing machine learning algorithms (Python).
        </li>
    </ul>
</div>

</header>
</article>

<article class="mb-4">
<header class="mb-1 flex">
    <div style="min-width: 120px;"><strong>University:</strong></div>
    <div>
        <p class="mb-1">Vector image representation in lower dimension in space using autocoding neural network. Search and group the images in the new space and compare with an approach C++ / Python</p>
        <p class="mb-1">Artificial Intelligence: Project from Berkeley University (Python)</p>
        <p class="mb-1">Created operational site for Athens TransportationsOASA (Django, SQLite3)</p>
        <p class="mb-1">Simulation of public service building (C++, Java)</p>
    </div>
</header>
</article>

<article class="mb-4">
<header class="mb-1 flex">
    <div style="min-width: 120px;"><strong>Personal:</strong></div>
    <div>
        <p>Developed a Desktop Application for the Greek Army to predict soldiers' duties utilizing (Python, PySimpleGUI, SQLite3)</p>
        <p>Developed a Web Application for Dietitians to efficiently organize and store patient data (Django, SQLite3)</p>
    </div>
</header>
</article>

</section>
<section class="mt-4">
<h2 class="text-2xl mb-4">VOLUNTEERING</h2>
<article class="mb-4">
<div class="flex">
<p class="w-32 mb-1"><strong>2018 - 2020</strong></p>
<div>
<p class="mb-1"><strong>Active member @Thinkbiz</strong></p>
<p class="mb-1">1st Entrepreneurship Organization in Greece based on AUEB.</p>
</div>
</div>
</article>
<article>
<div class="flex">
<p class="w-32 mb-1"><strong>2018 - 2019</strong></p>
<div>
<p class="mb-1"><strong>Member of the Organizational Committee @Codebiz</strong></p>
<p class="mb-1">A new project, in which youth entrepreneurial culture & coding are combined.</p>
</div>
</div>
</article>
</section>
    `),

    render: function() {
        // Render the template
        this.$el.html(this.template());
        return this;
    }
});
