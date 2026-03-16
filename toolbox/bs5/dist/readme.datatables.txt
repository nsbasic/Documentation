The css and js folders have files for datatables in them. Since there are a number of files, they are kept in subfolders called dt, one in css and the other in js.

They are kept in separate files, rather than concatenated, so app sizes do not get out of hand. Optional features of DataTables can add 2.5 megs to the size.

These files are generated here:
https://datatables.net/download/

Options selected should be:

Bootstrap 5
DataTables
Buttons (include all suboptions, except column visibility)
Fixed Header
Responsive
Scroller

At the bottom, use the CDN tab and select minify (not concatenate). You then need to open each link in turn, then copy and paste the code which displays into the appropriate file in the project. 

Look out for new or deleted modules.