function Main() {
  if(typeof(localStorage.locale) == "undefined") {
    rbLanguage.value = 1;
 } else {
    rbLanguage.value = ["de" , "en"].indexOf(localStorage.locale);
  }
}

rbLanguage.onchange = function() {
  NSB.initLanguage( ["de" , "en"][rbLanguage.value] ).then(cleanup);
};

function cleanup() {
  Input1.placeholder = $.i18n("Enter text here");
}
