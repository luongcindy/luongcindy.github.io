const htmlintro = document.querySelector(".welcomemsg")

function textTypingEffect(element, text, i = 0) {
    // '#' character indicates rest of string should be on new line
    if (text[i] == '#') {
        element.innerHTML += '<br>';
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
    setTimeout(() => textTypingEffect(element, text, i + 1), 60);
}

textTypingEffect(htmlintro, intro.join('\n' + '#'))

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }