function Main() {
  txtVideoID.text=YouTube1.settings.videoID;
}

btnRefresh.onclick = function() {
  YouTube1.settings.videoID = txtVideoID.text;
  YouTube1.settings.width = Form1.Width-20;
  YouTube1.refresh();
};
