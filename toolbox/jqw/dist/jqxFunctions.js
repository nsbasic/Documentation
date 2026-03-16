//Copyright (c) 2026 NSB Corporation. All rights reserved.
//Helper functions

var NSB = NSB || {}; // setup the NSB namespace, if needed

NSB.PhotoGallery_jqx = function(id, fotos, photoclassname, photostyle, style, klass) {
    var i, s, arrItems;
    arrItems = fotos.split(",");
    if (fotos === '') {
        arrItems = [];
    }
    //Man kann vieleicht eingene Class definieren, sonst default Class ".phone" benutzen....
    if (photoclassname === '') {
        photoclassname = '.photo';
    }
    s = '<style type="text/css">\n';
    s += '.' + id + '_photostyle{ ' + photostyle + '}</style>\n';
    s += '<div id="' + id + '" style="' + style + '" class="' + klass + '">\n';
    if (photoclassname === '') {
        for (i = 0; i < arrItems.length; i++) {
            s += '<div><div class="phone" style="background-image: url(' + arrItems[i] + ');"></div></div>\n';
        }
    } else {
        for (i = 0; i < arrItems.length; i++) {
            s += '<div><div class="' + id + '_photostyle" style="background-image: url(' + arrItems[i] + ');"></div></div>\n';
        }
    }
    s += '</div>\n';
    //console.log(s);
    return s;
};

NSB.jqxValidatorAddRules = function(id, messages, actions, rules) {
    var arrMessages = messages.split("\n");
    var arrRules = rules.split("\n");
    if (arrMessages.length == arrRules.length && arrRules !== "") {
        NSB.jqxValidatorRules = NSB.jqxValidatorRules || [];
        for (var i = 0; i < arrMessages.length; i++) {
            NSB.jqxValidatorRules.push({
                input: '#' + id.id,
                message: arrMessages[i],
                action: actions,
                rule: arrRules[i]
            });
        }
    }
};

NSB.Window_jqx = function(id) {
    NSB.$(id).show = function(content) {
        var win = $('#' + this.id);
        if (!content) content = this.text;

        // Get rid of old one, if any
        if (typeof this.oldContext === 'object') {
            win.jqxWindow('content').style.display = 'none';
            this.oldContext.appendChild(win.jqxWindow('content'));
            delete this.oldContext;
        }
        win.jqxWindow('destroy');

        if (typeof(content) == 'string') {
            NSB.jqxSettings[this.id].content = content;
            win.jqxWindow(NSB.jqxSettings[this.id]);
        } else {
            NSB.jqxSettings[this.id].width = parseFloat(content.style.width) + 12;
            NSB.jqxSettings[this.id].height = parseFloat(content.style.height) + 40;
            win.jqxWindow(NSB.jqxSettings[this.id]);
            this.oldContext = content.parentNode;
            win.jqxWindow('content', content);
            win.jqxWindow('content').style.position = 'relative';
            win.jqxWindow('content').style.top = '0px';
            win.jqxWindow('content').style.left = '0px';
            win.jqxWindow('content').style.display = 'block';
        }
        this.style.display = "block";
    };
    NSB.$(id).hide = function() {
        $("#"+id).jqxWindow("close");
        }
};

NSB.NavigationBar_jqx = function(id) {
    NSB.$(id).addItem = function(form, title) {
        $("#"+id).jqxNavigationBar("add",title,"");
        this.children[this.children.length-1].appendChild(form);
        form.show();
    }
};