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

const addClickListener = (element) => {
  element.onclick = (event) => {
    event.preventDefault();
    const emailAddress = event.target.href.slice(7).split("?")[0]
    copyTextToClipboard(emailAddress);
  }
}

const removeAllListeners = () =>{
  while(listeners.length > 0){
    let element = listeners.pop();
    element.onclick = () => {false}
  }
}

const listeners = [];

const findAllMailTos = () => {
  elements = document.querySelectorAll("a[href^='mailto']")
  elements.forEach(element => {
    listeners.push(element);
    addClickListener(element);
  })
}

const myMutationObserver = new MutationObserver(mutations => {
  removeAllListeners();
  findAllMailTos();
});

const config = { attributes: true, childList: true, characterData: true };

myMutationObserver.observe(document.body, config);