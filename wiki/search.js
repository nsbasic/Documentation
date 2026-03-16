$(function() {
    $('#searchform').submit(function(event) {
	$('#searchInput').blur();

	var $shade = $('<div id="shade" style="width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgba(32, 32, 32, 0.4); z-index:100;"></div>');
	var $popup = $('<div style="border: 1px solid black; margin: 4em auto; width: 600px; background-color: white; padding: 2em; position: relative;"></div>');
	var $list = $('<ul class="mw-search-results"></ul>');

	var results = offlineIndex.search($('#searchInput').val());
	for (var i = 0; i < results.length; i++) {
	    $list.append('<li><div class="mw-search-result-heading"><a href="' + results[i].ref + '">' + offlineTitles[results[i].ref] + '</a></div></li>');
	}

	$popup.append('<a href="#" id="popup-close" style="position: absolute; top: 10px; right: 10px;">[X]</a>');
	$popup.append('<h2><span class="mw-headline">Search Results</span></h2>');
	$popup.append($list);
	$shade.append($popup);
	$('body').append($shade);
	$('#shade').height($(document).height());

	$('#popup-close').click(function() {
	    $('#shade').remove();
	});

	event.preventDefault();
    });
});
