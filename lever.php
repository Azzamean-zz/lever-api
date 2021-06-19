<?php

function lever_shortcode() {

    wp_enqueue_style('lever-css', get_stylesheet_directory_uri().'/lever-api/lever.css');
    wp_enqueue_script('lever-js', get_stylesheet_directory_uri().'/lever-api/lever.js');
 
    return '
    <section>
    <div class="jobs-container" id="jobs-container">
        <div class="jobs-list" id="jobs-list"></div>
    </div>
    </section>
            ';   

}

add_shortcode('lever', 'lever_shortcode');