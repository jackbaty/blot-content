{{{appJS}}}

// This script is embedded in the footer of every page

{{{appJS}}}

// This script is embedded in the footer of every page

(function() {
  var url = 'https://webmention.io/api/mentions';
  var $postFooter = $('hr.full');

  if ($postFooter.length !== 1) {
    return;
  }
  
  var request = $.ajax(url, {
    data: {target: 'https://www.baty.blog' + location.pathname}
  });
  
  var getAuthor = function(data) {
    if (!data.author || !data.author.url) {
      return '';
    }
    var published_date = new Date(data.published);
    var author = '<div class="comment-author vcard"><img class="avatar photo u-photo" src="' + data.author.photo + '" alt="' + data.author.name + '">';
    author += '<cite class="fn"><a class="url" rel="external nofollow" href="' + data.author.url + '">' + data.author.name + '</a></cite>';
    author += '<div class="comment-meta commentmetadata"><a href="' + data.url + '"><time pubdate datetime="' + data.published + '">' + published_date + '</time></a></div>';
    
    return author;
  };
  
  request.then(function(json) {
    var links = (json.links  || []);
    
    if (typeof [].map === 'function') {
      links = links.map(function(link) {
        link.date = +new Date(link.verified_date);
      
        return link;
      })
      .sort(function(a, b) {
        return a.date > b.date ? 1 : -1;
      });
    }
    
    var replies = [];
    var mentions = [];
    
    if (!links.length) {
      return;
    }
    
    $.each(links, function(i, link) {
      var data = link.data;
      var mention = '';
      
      
      if (link.activity.type === 'reply') {
        mention += '<li class="comment u-comment h-cite">';
        mention += getAuthor(data);
        mention += '<div class="comment-content">' + data.content + '</div>';
        mention += '</li>';
        
        replies.push(mention);
      } else {
        mention = '<li class="h-cite">';
        mention += link.activity.sentence_html;
        mention += '</li>';
        mentions.push(mention);
      }
      
    });
    
    $postFooter.after('<h2>Webmentions</h2><ol class="mentions-list">' + mentions.join('') + '</ol>');
    $postFooter.after('<h2>Comments</h2><ol class="commentlist">' + replies.join('') + '</ol>');
  });
  
  request.catch(function(jqXHR, status) {
    console.log(jqXHR);
    console.log(status);
  });
})();
