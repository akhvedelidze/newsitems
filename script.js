console.log('newsItems: ', newsItems);

var i=0;
for (i=0; i<newsItems.length; i++)
{
var author = document.createElement('h6');
author.innerText = newsItems[i].author;
document.body.appendChild(author);

var summary = document.createElement('p');
summary.innerText = newsItems[i].summary;
document.body.appendChild(summary);

var date = document.createElement('h4');
date.innerText = newsItems[i].date;
document.body.appendChild(date);

var image = document.createElement('img');
image.src = newsItems[i].image;
document.body.appendChild(image);


var link = document.createElement('a');
link.href = newsItems[i].link;
link.innerText = newsItems[i].link;
document.body.appendChild(link);


};