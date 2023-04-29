<ul class="timeline">
    {% for experience in site.data.experiences  %} 
        <li>
            <div class="timeline-content">
                <h2>{{ experience.job_title }}</h2>
                <h3>{{ experience.employer_name }}. ({{ experience.start_date }} - {{ experience.end_date }})</h3> <p class="date"></p>
                <p>{{ experience.job_description }}</p>
            </div>
        </li>
    {% endfor %}
</ul>