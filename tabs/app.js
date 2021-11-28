const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    console.log(e.currentTarget);

    const id= e.target.dataset.id;

    if(id){

        //remove active from all bts and add just to target one
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        //hide all articles
        articles.forEach(function(article){
            //remove all active class
            article.classList.remove('active');

        });

        const selectedArticle = document.getElementById(id);
        selectedArticle.classList.add('active');
    }

});