{{{appJS}}}

var dates = document.querySelectorAll(‘.light.margin.left’);
var lastDateInnerHTML;
dates.forEach(function(date){
    if (date.innerHTML === lastDateInnerHTML) date.style.display = ‘none’;
    lastDateInnerHTML = date.innerHTML;
});

var post_url = window.location.href;

$(document).ready(function(){	
	$("ul#mentions-list").empty();
  $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
    target: post_url
  }, function(data){
  
