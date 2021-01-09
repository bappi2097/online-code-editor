document.addEventListener("DOMContentLoaded",showHTML);
document.querySelector('textarea').addEventListener("input",showHTML);
document.querySelector('button').addEventListener("click",showHTML);

function showHTML(){
    var iframe = document.querySelector('iframe'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    iframedoc.body.innerHTML = document.querySelector('textarea').value;
}