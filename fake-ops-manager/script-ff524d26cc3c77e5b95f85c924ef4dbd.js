/*
 * jQuery v1.9.1 included
 */

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}

$(document).ready(function() {

  if( document.location.pathname == '/access/unauthenticated') {

    console.log("in login page"); }
   
  $('body').addClass('community-enabled');
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });
  
  //Change search placeholder text
  $("#query").attr('placeholder','Search the Knowledge Base');
  

//Change top level breadcrumb link
  $('.breadcrumbs li:first-child a').attr('href','/');
  
  $('.search').prependTo('.sub-nav');
  
  

  //GSS Post a Question button
  if (window.location.href.indexOf('internal/topics')  > -1) {
    $('.topic-header .topic-meta').html("<a href='/hc/communities/internal/questions/new'><input type='submit' value='Post a Question'></a>");  
  }
  //Other Post a Question buttons
  else {
    $('.topic-header .topic-meta').html("<a href='/hc/communities/public/questions/new'><input type='submit' value='Post a Question'></a>");
  }

  //Breadcrumbs for forums  
  var parentForumLink = $('.question .question-topic-list li').html();
  if (window.location.href.indexOf('questions/2') > -1) {
    $('.community-heading').html("<ol class='breadcrumbs'><li><a href='/hc/communities/public/topics'>&nbsp;Forums&nbsp;</a></li><li>&nbsp;" + parentForumLink + "</li></ol><div id='ticket-link'></div>");
    document.getElementById('ticket-link').innerHTML = "<a href='/hc/communities/public/questions/new'>Post a Question</a>";  
  }
  else if (window.location.href.indexOf('public') > -1) {
    $('.community-heading').html("<ol class='breadcrumbs'><li><a href='/hc/communities/public/topics'>&nbsp;Forums&nbsp;</a></li></ol><div id='ticket-link'></div>");
  }
  else if (window.location.href.indexOf('internal') > -1) {
    $('.community-heading').html("<ol class='breadcrumbs'><li><a href='/hc/communities/internal/topics'>&nbsp;Forums&nbsp;</a></li></ol><div id='ticket-link'></div>");
  }
  else {
    $('.community-heading').html("<div id='ticket-link'></div>");
  }  
  $('.question .question-topic-list li').hide();
  
  if (document.location.href.indexOf('/register') > -1) {
    document.location.href = "http://login.support.pivotal.io/users/sign_up";
  }

  if (document.location.href.indexOf('/login') > -1) {
    document.location.href = "http://login.support.pivotal.io/users/sign_in";
  }


 

$(".section-tree .section .see-all-articles").text(function(index, text) {
    return text.replace("See all ", " (").replace(" articles",")");
});
$('.section-tree .section h3 a').each(function() {
    $(this).after($(this).parent().parent().find('.see-all-articles'));
});

if (document.location.pathname == '/hc/admin/communities/public/topics/200053178-Pivotal-GemFire-XD-Forum')
{
  document.location.pathname = "/hc/communities/public/topics/200053178-Pivotal-GemFire-XD-SQLFire-Forum";
}

});