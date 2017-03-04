function copyTextToClipboard(text) {
  // shoutout to http://stackoverflow.com/a/30810322 for the copy code below
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  textArea.style.width = '2em';
  textArea.style.height = '2em';

  textArea.style.padding = 0;

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

const findMailto = (element) => {
  if (element.matches("a[href^='mailto']")){
    return element
  }else if (element.nodeName == 'BODY'){
    return false
  }else{
    return findMailto(element.parentElement)
  }
}

const listenForMailtos = () => {
  const bodyElement = document.querySelector('body');
  bodyElement.onclick = (event) => {
    const initialElement = event.target
    const mailtoLink = findMailto(initialElement);
    if (mailtoLink){
      event.preventDefault();
      const emailAddress = mailtoLink.href.slice(7).split("?")[0];
      copyTextToClipboard(emailAddress);
    }
  }
}

listenForMailtos();