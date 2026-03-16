/**************************************************************************************/
// Functions for AppStudio Common controls
// (c) 2026 NSB Corporation. All rights reserved.

var NSB = NSB || {}; // setup the NSB namespace, if needed

NSB.Grid = function (id, rows, cols, rowHeights, colWidths, titles, alignments, style, cellstyle, klass) {
    var  arrHeights, arrWidths, arrTitles, arrAlignments, r, s, c, td;
    if (rows == 0) return "<div id='" + id +"'></div>\n";

    if (style!=='') style = " style='" + style + "'";
    s = "<div id='" + id + "_scroller' class='" + klass + "'" + style + ">\n";
    s += "<table id='" + id + "' class='NSB_Grid' data-nsb-type='grid' cellspacing=0 cellpadding=0 border=1 " + style + ">\n";
    arrHeights = rowHeights.split(",");
    arrWidths = colWidths.split(",");
    arrTitles = titles.split(",");
    arrAlignments = alignments.split(",");
    for (r = 0; r < rows; r++) {
        s += "  <tr";
        s += ">\n";
        for (c = 0; c < cols; c++) {
            if (r === 0 && titles !== "") td = "th";
            else td = "td";
            s += "    <" + td + " id=" + id + "_" + r + "_" + c;
            if (r < arrHeights.length && arrHeights[r] !== "") s += " height=" + arrHeights[r];
            if (c < arrWidths.length && arrWidths[c] !== "") s += " width=" + arrWidths[c];
            if (c < arrAlignments.length && arrAlignments[c] !== "") s += " align=" + arrAlignments[c];
            if (cellstyle !== "") s += " style='" + cellstyle + "'";
            s += ">";
            if (r === 0 && c < arrTitles.length && arrTitles[c] !== "") s += arrTitles[c];
            else s += "&nbsp;";
            s += "</" + td + ">\n";
        }
        s += "  </tr>\n";
    }
    s += "</table>\n</div>\n";
    // console.log(s);
    return s;
};

NSB.Grid_init = function (id) {
    NSB.$(id).scroller = NSB.$(id+'_scroller');
    NSB.$(id).ref = NSB.$(id+'_ref');
    NSB.$(id).getRowCount = function () {
        return NSB.$(id).rows.length;
    };
    NSB.$(id).getColCount = function (cellType) {
        switch (cellType) {
        case "td":
            return NSB.$(id).getElementsByTagName("tr")[0].getElementsByTagName("td").length;
        case "th":
            return NSB.$(id).getElementsByTagName("tr")[0].getElementsByTagName("th").length;
        default:
            var a, b;
            a = NSB.$(id).getElementsByTagName("tr")[0].getElementsByTagName("td").length;
            b = NSB.$(id).getElementsByTagName("tr")[0].getElementsByTagName("th").length;
            if (b === 0) {
                return a;
            } else {
                return b;
            }
        }
    };

    NSB.$(id).setGridWidth = function () {
        // if width of any cell in top row is given as %
        // or as "" (blank) then returns -1 else returns
        // sum of all cell widths
        var i, tmpStr, ttlCellWidth = 0;
        for (i = 0; i < NSB.$(id).getColCount(); i++) {
            tmpStr = NSB.$(id).rows[0].cells[i].width;
            if ((tmpStr.substr(-1) === "%") || (tmpStr === "")) {
                return -1;
            } else {
                ttlCellWidth = ttlCellWidth + parseInt(tmpStr);
            }
        }
        if (ttlCellWidth === -1) {
            NSB.$(id).style.width = "100%";
        } else {
            if (ttlCellWidth > 0) NSB.$(id).style.width = ttlCellWidth + "px";
        }
    };
    NSB.$(id).setGridWidth();

    NSB.$(id).getValue = function (x, y) {
        return NSB.$(id).rows[x].cells[y].innerHTML;
    };
    NSB.$(id).setValue = function (x, y, val) {
        NSB.$(id).rows[x].cells[y].innerHTML = val;
    };
    NSB.$(id).cell = function (x, y) {
        return NSB.$(id).rows[x].cells[y];
    };
    NSB.$(id).addRows = function (no) {
        var newCell, newRow, i = 1,
            ii, cnt, previousRow, tblBodyObj, newRowNo;
        if (no < 0) {
            cnt = 0;
        } else if (no == null || no === "") {
            cnt = 1;
        } else {
            cnt = no;
        }
        tblBodyObj = NSB.$(id).tBodies[0];
        previousRow = tblBodyObj.rows[NSB.$(id).getRowCount() - 1];
        while (i <= cnt) {
            newRow = NSB.$(id).insertRow(tblBodyObj.rows.length);
            newRowNo = tblBodyObj.rows.length - 1;
            for (ii = 0; ii < NSB.$(id).getColCount(); ii++) {
                newCell = newRow.insertCell(-1);
                newCell.id = id + "_" + newRowNo + "_" + ii;
                newCell.height = previousRow.cells[ii].height;
                newCell.width = previousRow.cells[ii].width;
                newCell.innerHTML = "&nbsp";
                newCell.style = NSB.$(id).cellstyle;
                $("#"+newCell.id)[0].setAttribute("style",NSB.$(id).cellstyle);
            }
            i++;
        }
        return cnt;
    };
    NSB.$(id).deleteRows = function (no) {
        var cnt, noRows, i;
        if (no < 0) {
            cnt = 0;
        } else if (no === null || no === "") {
            cnt = 1;
        } else {
            cnt = no;
        }
        noRows = NSB.$(id).getRowCount();
        if (cnt > (noRows - 1)) {
            cnt = (noRows - 1);
        }
        for (i = noRows - 1; i >= noRows - cnt; i--) {
            NSB.$(id).deleteRow(i);
        }
        return cnt;
    };
    NSB.$(id).addCols = function (no) {
        var cnt, i = 1,
            ii, newTH, tblBodyObj, newCell, noCols;
        if (no < 0) {
            cnt = 0;
        } else if (no == null || no === "") {
            cnt = 1;
        } else {
            cnt = no;
        }
        tblBodyObj = NSB.$(id).tBodies[0];
        noCols = NSB.$(id).getColCount("th");
        if (noCols !== 0) {
            while (i <= cnt) {
                newTH = document.createElement("th");
                NSB.$(id).rows[0].appendChild(newTH);
                newTH.id = id + "_" + 0 + "_" + i;
                newTH.innerHTML = "&nbsp";
                newTH.width = "10px";
                newTH.height = NSB.$(id).rows[0].cells[noCols].height;
                for (ii = 1; ii < tblBodyObj.rows.length; ii++) {
                    newCell = tblBodyObj.rows[ii].insertCell(-1);
                    newCell.id = id + "_" + ii + "_" + (noCols + i - 1);
                    newCell.innerHTML = "&nbsp";
                    newCell.width = "10px";
                    newCell.height = NSB.$(id).rows[ii].cells[noCols].height;
                }
                i++;
            }
        } else {
            while (i <= cnt) {
                noCols = NSB.$(id).getColCount("td");
                for (ii = 0; ii < tblBodyObj.rows.length; ii++) {
                    newCell = tblBodyObj.rows[ii].insertCell(-1);
                    newCell.id = id + "_" + ii + "_" + noCols;
                    newCell.innerHTML = "&nbsp";
                    newCell.height = NSB.$(id).rows[ii].cells[noCols].height;
                    $("#"+id)[0].setAttribute("style",NSB.$(id).cellstyle);
                }
                i++;
            }
        }
        NSB.$(id).setGridWidth();
        return cnt;
    };
    NSB.$(id).deleteCols = function (no) {
        var cnt, noCols, i = 1,
            ii, allRows;
        if (no < 0) {
            cnt = 0;
        } else if (no === null || no === "") {
            cnt = 1;
        } else {
            cnt = no;
        }
        noCols = NSB.$(id).getColCount();
        if (cnt > (noCols - 1)) {
            cnt = (noCols - 1);
        }
        while (i <= cnt) {
            allRows = NSB.$(id).rows;
            for (ii = 0; ii < allRows.length; ii++) {
                if (allRows[ii].cells.length > 1) {
                    allRows[ii].deleteCell(-1);
                }
            }
            i++;
        }
        NSB.$(id).setGridWidth();
        return cnt;
    };
    NSB.$(id).init = function (rows, cols) {
        var newCell, newRow, i, ii, tblBodyObj, rowCount, s;
        rowCount = NSB.$(id).getRowCount();
        for (i = 0; i < rowCount; i++) {
            NSB.$(id).deleteRow(0);
        }
		
        tblBodyObj = NSB.$(id).tBodies[0];
        for (i = 0; i <= rows; i++) {
        	if (i == 0) {
            	newRow = NSB.$(id).createTHead();
            	s = ""
            	for (ii = 0; ii < cols; ii++) {
            		s += "<th id='Grid1_0_" + ii + "'>&nbsp;</th>\n";
            		}
            	newRow.innerHTML = s;            	
            } else {
            	newRow = NSB.$(id).insertRow(-1);
				for (ii = 0; ii < cols; ii++) {
					newCell = newRow.insertCell(-1);
					newCell.id = id + "_" + i + "_" + ii;
					newCell.innerHTML = "&nbsp";
					newCell.style = NSB.$(id).cellstyle;
					$("#"+newCell.id)[0].setAttribute("style",NSB.$(id).cellstyle);
				}
			}
        }
	};
    NSB.$(id).setColumnWidth = function (col, wdth) {
        var noCols, i;
        noCols = NSB.$(id).getColCount();
        if (col < 0 || col > (noCols - 1)) {
            return -1;
        }
        for (i = 0; i < NSB.$(id).getRowCount(); i++) {
            NSB.$(id).rows[i].cells[col].width = wdth;
        }
        NSB.$(id).setGridWidth();
        return col;
    };
    NSB.$(id).setRowHeight = function (row, ht) {
        noRows = NSB.$(id).getRowCount();
        if (row < 0 || row > (noRows - 1)) {
            return -1;
        }
        var noRows, i;
        if (row > (noRows - 1)) {
            return -1;
        }
        for (i = 0; i < NSB.$(id).getColCount(); i++) {
            NSB.$(id).rows[row].cells[i].style.height = ht;
        }
        return row;
    };
};

NSB.GridRefreshWidth = function (id) {
    try {
        id.Width = "" + id.offsetWidth + "px";
    } catch (err) {
        console.log("Error: " + err.message);
        debugger;
    }
};

NSB.GoogleMapRefresh = function () {
    if (navigator.onLine == false) return;
    if (NSB.GoogleMapsLoading) return;
    if (NSB.initGoogleMap(this, this.id + ".refresh")) return;
    this.mapOptions.center = new google.maps.LatLng(this.mapOptions.latitude, this.mapOptions.longitude);
    return this.map = new google.maps.Map(this, this.mapOptions);
};

NSB.GoogleMapSetMarker = function (options) {
    if (navigator.onLine == false) return;
    if (NSB.initGoogleMap(this, this.id + ".setMarker")) return; 
    if (!options) options = {};
    options.map = this.map;
    if (!options.position) options.position = this.mapOptions.center;
    return new google.maps.Marker(options);
};

NSB.GoogleMapSetInfoWindow = function (infolabel, marker) {
    if (navigator.onLine == false) return;
    if (NSB.initGoogleMap(this, this.id + ".setInfoWindow")) return; 
    var infoWindowOptions = {};
    if (!marker || !infolabel) { return;}
    var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
    InfoWindowOptions = {
        content: infolabel,
        disableAutoPan: true,
        position: latlng
    }
    var infowindow = new google.maps.InfoWindow(InfoWindowOptions);
    infowindow.open(this.map, marker);
    return infowindow;
};

NSB.initGoogleMap = function(id, callback) {
    if (typeof(google) === 'undefined' || typeof(google.maps) === 'undefined') {
        if (NSB.GoogleMapsLoading) return;
        if (navigator.onLine != false) {
            NSB.GoogleMapsLoading = id;
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=NSB.initGoogleMapCB';
            if (id.mapOptions.apiKey !== '') script.src += "&key=" + id.mapOptions.apiKey;
            document.head.appendChild(script, script.src);
            return true
        }
        return false
    }
    return false
};

NSB.initGoogleMapCB = function() {
  var id = NSB.GoogleMapsLoading;
  NSB.GoogleMapsLoading = false;
  id.refresh();
}

NSB.YouTubeRefresh = function () {
    var yt = this.settings;
    var s = "<iframe id='" + this.id + "_player' ";
    s += "width=" + yt.width + " height=" + yt.width * yt.ratio;
    s += " src='https://www.youtube.com/embed";
    if (yt.videoID) s += '/' + yt.videoID + "?";
    if (yt.playlist) s += '?listtype=playlist&list={playlist}&';
    if (yt.autoplay) s += '&autoplay=' + yt.autoplay;
    if (yt.autohide) s += '&autohide=' + yt.autohide;
    if (yt.controls) s += '&controls=' + yt.controls;
    if (yt.modestbranding) s += '&modestbranding=' + yt.modestbranding;
    s += yt.playsinline;
    if (yt.rel) s += '&rel=' + yt.rel;
    if (yt.showinfo) s += '&showinfo=' + yt.showinfo;
    if (yt.start > 0) s += '&start=' + yt.start;
    if (yt.theme) s += '&theme=' + yt.theme;
    s += ' allow="autoplay; encrypted-media"';
    s += "' frameborder=0 allowfullscreen></iframe>";
    this.innerHTML = s;
    // console.log(s);
};
