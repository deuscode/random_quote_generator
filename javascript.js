$(document).ready(function() {

    var quote;
    var author;

    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text(author);
                } else {
                    $('#author').text('Unknown');
                }
            }
        });
    }
    getNewQuote();
    $('.get-quote').on('click', function(event) {
        $('#quotebutton').addClass('animated flash');
            $('#quotebutton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('#quotebutton').removeClass('animated flash');
            });
        $('#quote').addClass('animated flipInX');
            $('#quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('#quote').removeClass('animated flipInX');
            });
        $('#author').addClass('animated flipInX');
            $('#author').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('#author').removeClass('animated flipInX');
            });
        event.preventDefault();
        getNewQuote();
    });

    $('.share-quote').on('click', function(event) {
        $('#sharebutton').addClass('animated flash');
            $('#sharebutton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('#sharebutton').removeClass('animated flash');
            });
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' + author), "MsgWindow", "width=500, height=500");
    });

    
});