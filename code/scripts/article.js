var articles = [];

function Article (obj) {
  this.place = obj.place;
  this.guideUrl = obj.guideUrl;
  this.body = obj.body;
}

// Define a method on the Article prototype
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('h2').text(this.place);
  $newArticle.find('address a').attr('href', this.guideUrl);
  $newArticle.find('.content').html(this.body);

  $newArticle.removeClass('template');
  return $newArticle;
};

ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
