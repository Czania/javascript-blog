'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked');
    console.log(event);

/* remove class 'active' from all article links */
const activeLinks = document.querySelectorAll('.titles a.active')
for (let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

/* add class 'active' to the clicked link */
console.log('clickedElement:', clickedElement);
clickedElement.classList.add('active');

/* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post')
for (let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}

/* get 'href' attribute from the clicked link */
const activeHref = clickedElement.getAttribute('href');
console.log(activeHref);

/* find the correct article using the selector (value of 'href' attribute) */
const correctArticle = document.querySelector(activeHref);
console.log(correctArticle);

/* add class 'active' to the correct article */
correctArticle.classList.add('active');
};

/*second part of the Kodilla monule*/
const optTitleListSelector = '.titles',
optArticleSelector = '.post',
optTitleSelector = '.post-title';

function generateTitleLinks(){

const titleList = document.querySelector(optTitleListSelector).innerHTML = '';/*.titles*/
console.log(titleList, 'is removed')/* remove contents of titleList */

const articles = document.querySelectorAll(optArticleSelector);/*.post*/

for (let article of articles){/* for each article */
    
const articleId = article.getAttribute('id'); 
console.log('got the id ', articleId);/* get the article id */

const articleTitle = article.querySelector(optTitleSelector).innerHTML; /* get the title from the title element */

const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkHTML);/* create HTML of the link */

const titleList=document.querySelector(optTitleListSelector);/*.titles*/
titleList.insertAdjacentHTML('beforeend', linkHTML)/* */

/* insert link into titleList */
console.log(titleList)
};
};
generateTitleLinks();
const links = document.querySelectorAll('.titles a');
 console.log(links);
for (let link of links){
    console.log(link);
    link.addEventListener('click', titleClickHandler);
};