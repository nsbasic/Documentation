function Main() {
    parms = {};
    parms.backdrop = "static";
    parms.keyboard = false;
    parms.show = false;
    $("#Modal1").modal(parms);

    tmp = Modal1_header.innerHTML;
    tmp = tmp.substr(0, tmp.indexOf("</h4>") + 5);
    Modal1_header.innerHTML = tmp;
    Modal1_header.style.justifyContent = "center";
    Modal1_title.style.textAlign = "center";
    Modal1_body.style.alignSelf = "center";
}