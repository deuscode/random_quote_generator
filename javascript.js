$(document).ready(function () {
    // global variable for the quote
    var myquote; 
    // global variable for the author
    var myauthor; 

    // function to call API in JSONP format
    function getNewQuote() {
        // ajax request
        $.ajax({ 
            url: 'http://api.forismatic.com/api/1.0/',
            dataType: 'jsonp',
            jsonp: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (data) {
                myquote = data.quoteText;
                myauthor = data.quoteAuthor;
                $('#quote').text(myquote);
                if (myauthor) {
                    $('#author').text(myauthor);
                } else {
                    $('#author').text('Unknown');
                }
            }
        });
    }
    // Initial function call
    getNewQuote()

    // Get new quote + animation events for quote button
    $('.get-quote').on('click', function (event) {
        $('#quotebutton').addClass('animated flash');
        $('#quotebutton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#quotebutton').removeClass('animated flash');
        });
        $('#quote').addClass('animated flipInX');
        $('#quote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#quote').removeClass('animated flipInX');
        });
        $('#author').addClass('animated flipInX');
        $('#author').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#author').removeClass('animated flipInX');
        });
        event.preventDefault();
        getNewQuote();
    });

    // Share quote + animation event for twitter button
    $('.share-quote').on('click', function (event) {
        $('#sharebutton').addClass('animated flash');
        $('#sharebutton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#sharebutton').removeClass('animated flash');
        });
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(myquote + ' - ' + myauthor), "MsgWindow", "width=500, height=500");
    });

});