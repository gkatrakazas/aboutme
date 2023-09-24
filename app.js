var CVView = Backbone.View.extend({
    template: _.template(`
        <div class="bg-cover bg-center h-full w-full flex items-center justify-center" style="background-image: url('assets/images/Emerald.png');">
            <div class="w-3/4 overflow-hidden rounded-md">
                <div class="bg-body-white border border-gray-400">
                    <header class="border-b-2 bg-header-white text-center p-2">
                        <p class="text-md">Grigoris Katrakazas CV</p>
                    </header>
                    <div class="flex">
                        <aside class="bg-customBlack text-white w-1/3 p-4">
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
                        <main class="w-2/3 p-4">
                        <div class="flex justify-between">
                            <div class="w-2/3"> <!-- Adjusted to 1/2 of the available width -->
                                <h2 class="text-2xl mb-4">Grigoris Katrakazas</h2>
                                <p class="mb-4">Frontend Developer</p>
                                <p class="mb-4">As a 27-year-old Frontend Developer, I have a deep-rooted passion for programming, with a specialized focus on developing web applications.</p>
                            </div>
                            <div class="flex flex-col items-start space-y-4 w-1/3 ">
                                <a href="https://github.com/gregory1996" class="text-sm"><i class="fa fa-github"></i> gregory1996</a>
                                <a href="tel:+306980684913" class="text-sm"><i class="fa fa-phone"></i> +30 6980684913</a>
                                <a href="mailto:grigoriskatrakazas@gmail.com" class="text-sm"><i class="fa fa-envelope"> grigoriskatrakazas@gmail.com</i></a>
                                <a href="https://www.linkedin.com/in/gkatrakazas/" class="text-sm"><i class="fa fa-linkedin"></i> gkatrakazas</a>
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
                                <p>National Technical University of Athens</p>
                            </div>
                        </article>
                    </section>
                    <section class="p-4">
                    <h2 class="text-2xl mb-4">EXPERIENCE</h2>
                    
                    <article class="mb-4">
                        <header class="mb-1 flex">
                            <div style="min-width: 120px;"><strong>Work:</strong></div>
                            <div>
                                <p><strong>Front-end Developer</strong></p>
                                <p class="mb-1">GUNET |6/23 - present</p>
                                <p class="mb-1">Software Engineer</p>
                                <p class="mb-1">8BELLS Research LTD |10/21 - 5/23</p>
                                <p class="mb-1">Full Stack Developer (React, Flask, Django)</p>
                                <p>Machine learning (Production forecasting algorithm)</p>
                            </div>
                        </header>
                    </article>
        
                    <article class="mb-4">
                        <header class="mb-1 flex">
                            <div style="min-width: 120px;"><strong>University:</strong></div>
                            <div>
                                <p class="mb-1">Vector image representation in lower dimension in space using autocoding neural network. Search and group the images in the new space and compare with an approach C++ / Python</p>
                                <p class="mb-1">Artificial Intelligence: Project from Berkeley University</p>
                                <p class="mb-1">Created operational site for Athens Transportations (OASA) using Django framework</p>
                                <p class="mb-1">Simulation of public service building using C++ & Java</p>
                                <p>Created a Web Application for Dietitians to efficiently organize and store patient data</p>
                            </div>
                        </header>
                    </article>
        
                    <article class="mb-4">
                        <header class="mb-1 flex">
                            <div style="min-width: 120px;"><strong>Personal:</strong></div>
                            <div>
                                <p class="mb-1">Database structure for mobile app (@SoccerHub)</p>
                            </div>
                        </header>
                    </article>
                    
                    <article class="mb-4">
                        <header class="mb-1 flex">
                            <div style="min-width: 120px;"><strong>Intern:</strong></div>
                            <div>
                                <p class="mb-1">IT Intern</p>
                                <p>Developed a Desktop Application for the Greek Army to predict soldiers' duties utilizing Python and SQLite3.</p>
                            </div>
                        </header>
                    </article>
                </section>
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
