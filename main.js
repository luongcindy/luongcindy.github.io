const htmlbanner = document.querySelector(".banner");
const htmlhistory = document.querySelector(".history");
const htmlintro = document.querySelector(".welcomemsg")

function textTypingEffect(element, text, i = 0) {
    // '#' character indicates rest of string should be on new line
    if (text[i] == '#') {
        element.innerHTML += '<br>';
    } 
    // '+' indicates subsequent int sequence is the number of spaces to add
    else if (text[i] == '+') {        
        let space = parseInt(text.substring(i + 1, i + 3));
        element.innerHTML += '&nbsp;'.repeat(space);
        i = i + 2;
    } 
    // '<' indicates start of adding HTML formatting instruction
    else if (text[i] == '<') {
        let link = '';
        let index = i;
        let count = 0;
        while (count < 2) {
            if (text[index] == '>') {
                count ++;
            }
            link += text[index];
            index ++;
        }
        element.innerHTML += link;
        i = index;
    }
    // add normal character
    else {
        element.innerHTML += text[i];
    }

    // recursive base case. fin
    if (i == text.length -1) {
        element.innerHTML += '<br>';
        return;
    }
    // recursion
    setTimeout(() => textTypingEffect(element, text, i + 1), 13);
}

function initialSetup(){
    // types out banner
    textTypingEffect(htmlbanner, banner.join('\n' + '#')); 
    // first user path string appears after delay
    setTimeout(function(){
        $('.line').css("display", "table")
    }, 4000);
}

initialSetup()

$(function() {
    $('.terminal').on('click', function() {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {
        if (e.keyCode == 13) {
            // append your output to the history,
            $('#history').append("<user style='color:#22D3F9'>visitor@luongcindy.github.io:~$</user>"
               + " " + $(this).val() + '<br/>');

            // passes input (command) into handler
            userCommandHandler($(this).val())

            // clears input field
            $('#input').val('');
        }
    });
});

function userCommandHandler(cmd) {
    switch (cmd.toLowerCase()) {
        case "projects":
            textTypingEffect(htmlhistory , projects.join('\n' + '#'));
            break; 
            case "voicecar":
                textTypingEffect(htmlhistory , voicecar.join('\n' + '#'));
                break;
            case "personalweb":
                textTypingEffect(htmlhistory , personalweb.join('\n' + '#'));
                break;
            case "chesster":
                textTypingEffect(htmlhistory , chesster.join('\n' + '#'));
                break;
            case "chessterweb":
                textTypingEffect(htmlhistory , chessterweb.join('\n' + '#'));
                break;
            case "randomrealm":
                textTypingEffect(htmlhistory , randomrealm.join('\n' + '#'));
                break;
            case "ats":
                textTypingEffect(htmlhistory , ats.join('\n' + '#'));
                break;
            case "ngordnet":
                textTypingEffect(htmlhistory , ngordnet.join('\n' + '#'));
                break;
            case "antsvsbees":
                textTypingEffect(htmlhistory , antsvsbees.join('\n' + '#'));
                break;
            default:
                textTypingEffect(htmlhistory, err.join('\n' + '#'));
                break;
    }
}