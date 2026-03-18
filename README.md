# documentation
Contains publicly facing documentation for NSB/AppStudio. For use by LLMs and as a reference.

Throughout this repo, `AppStudio` refers to `NSB/AppStudio`.

The files are a copy of the samples, toolbox and wiki directories in the actual AppStudio development repository.

## Contents ##

### samples ###
Samples are organized into two folders: BASIC and JavaScript

The BASIC samples use NSB/AppStudio BASIC as documented in the wiki. It is based on Microsoft Visual BASIC/VBScript, with extensions for mobile devices.

The BASIC sample use vanilla JavaScript.

There is also a file called `samples.json` which contains a summary of all the samples.

### toolbox ###
The folder contains json definition files. The properties in an AppStudio Project are turned into project .json files formatted by these definition files. 

Documentation on the AppStudio Project File format is [here](./wiki/AppStudio_Project_File_Format.html).

- The json files in the toolbox directory define the properties of each control and properties file.
- NSB/AppStudio uses these fields to populate the property grids in the NSB/AppStudio development environment.
- It uses the `_htmltemplate` property to write the html for the control to the generated `index.html` file.
- It uses the `_jstemplate` property to write the JavaScript for the control to the generated `index.html` file.
- It uses the `_csstemplate` property to write the CSS for the control to the generated `index.html` file.
- The `_base` property is a list of other toolbox files containing properties which are automatically included in the current file.
- Documentation on these json files is in [ToolBox Files](./wiki/ToolBox_Files.html).


### wiki ###
This folder is an HTML copy of the official [AppStudio Wiki](https://wiki.appstudio.dev/AppStudio_Documentation). 
