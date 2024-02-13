/*runs each time a new character is entered*/
$('#searchp').keyup(function() {
    /*takes inpt from input box*/
    var seterm = $('#searchp').val();
    /*scans through each element*/
    for (var i = 0; i < $('.contact').length; i++) {
    /*Makes all elements visible*/
    $('.contact:eq(' + i + ')').css('display', 'inline-block');
    /*If it doesn't match the input it is hidden*/
    if ($('.contact:eq(' + i + ')').text().toLowerCase().indexOf(seterm) < 0) {
    $('.contact:eq(' + i + ')').css('display', 'none');
    } 
    }
    });
    