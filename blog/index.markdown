---
layout: default
title: Blog
permalink: /blog/ 
---
<h1>Latest Posts</h1>

<ul class = "blog-content">
  {% for post in site.posts %}
  <a href="{{ post.url }}">
    <li>
        <div class="blog-card">
            <h2 class = "blog-title">{{ post.title }}</h2>
            <p class = "blog-exerpts">
              {{ post.excerpt }}
            </p>
        </div>
    </li>
</a>
  {% endfor %}
</ul>