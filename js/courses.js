    document.getElementById('register_course_button').addEventListener('click', function () {
        alert("You are now registered for this course!");
    });

    document.getElementById('show_review_button').addEventListener('click', function () {
        let all_reviews = document.getElementById('all_reviews_box');
        if (all_reviews.style.display == 'block') {
            all_reviews.style.display = 'none';
        } else {
            all_reviews.style.display = 'block';
        }
    });
