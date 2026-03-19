# GitHub Copilot Instructions for NSB/AppStudio

## Project Overview

NSB/AppStudio is a cross-platform desktop IDE application for building mobile and web applications using BASIC and JavaScript.

## Technology Stack

- **Primary Language**: JavaScript
- **Secondary Language**: NSB/AppStudio BASIC
- **GUI Framework**: NSB/AppStudio, as documented in https://github.com/nsbasic/documentation. It does not use WinForms.

## Development Environment Setup

1. Follow the setup instructions in the ReadMe: /README.md

## Code Style and Quality

### JavaScript
- **Linter**: ESLint with Airbnb base config
- **Formatter**: Prettier
- Tools: JSHint, JSMin, javascript-obfuscator

## Project Structure

### Important Directories
- `forms/` - Contains Form Files
- `forms/Elements` - Contains Element Files for each form
- `cache/` - temporary files
- `properties/` - template files used when building the app 
- `certificates/` - Contains signing keys for VoltBuilder

## Important Conventions

### Code Organization
- The project type is NSB/AppStudio, also called AppStudio for short.
- See Creating NSB/AppStudio Projects

## Deployment Targets

The IDE supports deploying to:
- Local folder
- Desktop server (local development)
- FTP/SFTP servers
- VoltBuilder (mobile app packaging)
- Electron (desktop apps)
  
## Security Considerations

- Never commit secrets or credentials
- Serial numbers and license keys are sensitive
- SFTP credentials stored in user preferences, not code

## References

- Setup Guide: /README.md
- README: `README.markdown` in root directory
- NSB/AppStudio Project File Format: [./docs/Project_File_Format.mediawiki](./docs/Project_File_Format.mediawiki)

---

## Creating NSB/AppStudio Projects

This section contains everything needed to generate a new AppStudio project without accessing the repository.

### Directory Structure

Every AppStudio project is a **directory** whose name ends with `.appstudio`:

```
MySample.appstudio/
├── .gitignore                        ← Always include; excludes .DS_Store and /cache
├── MySample.project                  ← Main project file (JSON)
├── forms/
│   └── Form1/
│       ├── Form1.json                ← Form definition (JSON)
│       ├── Form1.js                  ← JavaScript event handlers (omit for BASIC)
│       ├── Form1.bas                 ← BASIC event handlers (omit for JavaScript)
│       └── Elements/
│           ├── Button1.json          ← One JSON file per control
│           └── ...
└── properties/
    └── manifest.json                 ← PWA manifest template
```

### `.gitignore`

```
.DS_Store
/cache
```

### `MySample.project` — Project File

The project file is JSON with `"!type": "Project"`. Use **version 8** (current format).

Key rules:
- `version` must be `8`
- `language_version` must be `8`
- `libraries` should include `["BASIC"]` even for JavaScript projects
- The `children` array contains **one inline Page object** (not a file reference)
- The Page's `children` array lists External references to each form JSON file
- Leave `filename`, `cached_js`, `cached_js_script_hash` as empty strings or `null`
- Leave all deployment fields (`deploy_server`, `deploy_path`, etc.) as empty strings / `false`

**Minimal JavaScript project file:**

```json
{
  "!type": "Project",
  "cached_js": "",
  "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e",
  "children": [
    {
      "!type": "Page",
      "BabelConfig": null,
      "BabelOnDeploy": "",
      "BootstrapTheme": "bootstrap",
      "ChromeSplash": "true",
      "EULA": null,
      "FastClick": "true",
      "PWA_Manifest": null,
      "androidAlias": "key0",
      "androidAliasPassword": "mypassword",
      "androidKeystore": "certificates/android.p12",
      "androidKeystorePassword": "mypassword",
      "androidPackageType": "apk",
      "appPublisher": "",
      "background": "",
      "backgroundimage": "",
      "browserwarnmsg": "Please use Google Chrome, Apple Safari or another supported browser.",
      "cached_js": null,
      "cached_js_script_hash": null,
      "children": [
        {
          "!type": "External",
          "file": ["forms", "Form1", "Form1.json"]
        }
      ],
      "chromeDescription": "",
      "chromeDisplay": "standalone",
      "chromeOrientation": "any",
      "chromeThemeColor": "black",
      "configxml": null,
      "contentSecurityPolicy": "",
      "copyright": "copyright 2025 ABC Company",
      "dashboardAccess": false,
      "defaultformsize": "320x460",
      "description": "One-line description of what this sample does.",
      "disablePWA": "",
      "electronDevTools": "true",
      "electronIcon": "",
      "electronMain": null,
      "electronPackage": null,
      "enableAppScroll": "false",
      "enableBrowserArrows": "false",
      "enableNiceLinks": "false",
      "eslintRules": null,
      "exeicon": "",
      "exetitle": "",
      "expanded_pmp": null,
      "extraheaders": null,
      "firstform": "Form1",
      "fontFamily": "system",
      "googlePlayKey": "certificates/google.json",
      "googlePlayTrack": "production",
      "height": "",
      "homescreenTitle": "",
      "icon": "nsb/images/192.png",
      "iconAndroid": "nsb/images/192.png",
      "id": "MySample",
      "iosDevP12": "certificates/ios_development.p12",
      "iosDevP12Password": "mypassword",
      "iosDevelopment": "certificates/development.mobileprovision",
      "iosDistP12": "certificates/ios_distribution.p12",
      "iosDistP12Password": "mypassword",
      "iosDistribution": "certificates/distribution.mobileprovision",
      "iosPackageType": "app-store",
      "itunesAccount": "",
      "itunesAppPassword": "",
      "jqWidgetsLicence": "",
      "language": "JavaScript",
      "manifest": null,
      "manifestFile": "appcache",
      "manifestName": "OfflineApp",
      "newVersionWarning": "false",
      "obfuscation": "",
      "obfuscatorSettings": "{\n\"compact\": true,\n\"controlFlowFlattening\": false,\n\"controlFlowFlatteningThreshold\": 0.75,\n\"debugProtection\": false,\n\"debugProtectionInterval\": false,\n\"disableConsoleOutput\": false,\n\"reservedNames\": [],\n\"rotateStringArray\": true,\n\"seed\": 0,\n\"selfDefending\": false,\n\"sourceMap\": false,\n\"sourceMapBaseUrl\": \"\",\n\"sourceMapFileName\": \"\",\n\"sourceMapMode\": \"separate\",\n\"stringArray\": true,\n\"stringArrayEncoding\": false,\n\"stringArrayThreshold\": 0.8,\n\"unicodeEscapeSequence\": true\n}",
      "ondeviceorientation": "",
      "onorientationchange": "",
      "onresize": "",
      "onvisibilitychange": "",
      "pathTo_bootstrap": "",
      "pathTo_jqWidgets": "https://jqwidgets.com/public/jqwidgets/",
      "phoneGapBuildCounter": "0",
      "phoneGapBuildID": "",
      "phoneGapDebugger": false,
      "phoneGapIcon": "",
      "phoneGapLanguages": "en",
      "phoneGapSplash": "",
      "phoneGapStatusBarColor": "#000000",
      "phoneGapStatusBarOverlay": "false",
      "phoneGapStatusBarStyle": "lightcontent",
      "phoneGapVersion": "",
      "rtl": "",
      "script": null,
      "splashscreen": "",
      "statusbar": "black-translucent",
      "stopOnError": true,
      "style": "",
      "styleheaders": null,
      "theme": "a",
      "title": "MySample",
      "useStrict": "",
      "version": "1.0.0",
      "viewportFit": "cover",
      "voltAppId": "",
      "voltDomain": "",
      "width": "",
      "windowStyle": ""
    }
  ],
  "deploy_global": true,
  "deploy_key": "",
  "deploy_local": false,
  "deploy_localPath": "",
  "deploy_password": "",
  "deploy_path": "",
  "deploy_port": "21",
  "deploy_protocol": "ftp",
  "deploy_server": "",
  "deploy_user": false,
  "deploy_userName": "",
  "expanded_pmp": null,
  "filename": "",
  "id": "MySample",
  "language_version": 8,
  "libraries": [
    "BASIC"
  ],
  "phonegap_auth_token": "",
  "phonegap_email": "",
  "phonegap_password": "",
  "script": "",
  "version": 8
}
```

Replace `MySample` with the actual project name and update `description` and `title` accordingly. For a BASIC project set `"language": "BASIC"` in the Page object.

### `forms/Form1/Form1.json` — Form Definition

```json
{
  "!type": "Form",
  "HTML": null,
  "attributes": "",
  "background": "",
  "backgroundimage": "",
  "borderColor": "",
  "borderStyle": "",
  "borderWidth": "",
  "cached_js": null,
  "cached_js_script_hash": null,
  "children": [
    {
      "!type": "External",
      "file": ["forms", "Form1", "Elements", "Button1.json"]
    }
  ],
  "class": "",
  "designHeight": 667,
  "designWidth": 375,
  "expanded_pmp": null,
  "fullScreen": "true",
  "height": 667,
  "id": "Form1",
  "language": "JavaScript",
  "left": 0,
  "locked": false,
  "modal": "false",
  "onhide": "",
  "onkeypress": "",
  "onresize": "",
  "onshow": "",
  "openMode": "none",
  "parentForm": "",
  "position": "absolute",
  "script": null,
  "setFocusID": "",
  "style": "",
  "theme": "",
  "top": 0,
  "width": 375
}
```

Add one `"!type": "External"` entry in `children` for **each** control on the form.

### `forms/Form1/Elements/` — Control Files

#### Bootstrap 5 Button (`Button_bs5`)

Use `"!type": "Button_bs5"` for BS5 buttons. The `onclick` value must be `"Button1.onclick()"` (dot notation, **not** `Button1_onclick()`).

```json
{
  "!type": "Button_bs5",
  "ChangeForm": "",
  "appearance": " btn-primary",
  "backgroundColor": "",
  "badge": "",
  "badgeAppearance": " bg-info",
  "blockLevel": "",
  "borderColor": "",
  "borderStyle": "",
  "borderWidth": "",
  "bottom": "auto",
  "cached_js": "",
  "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e",
  "children": [],
  "class": "",
  "color": "",
  "disabled": "",
  "display": "",
  "expanded_pmp": null,
  "fontFamily": "",
  "fontSize": "",
  "fontStyle": "",
  "fontWeight": "",
  "groupStyle": "",
  "grouping": "",
  "height": "auto",
  "hidden": "",
  "icon": "",
  "iconTitle": "",
  "id": "Button1",
  "left": 98,
  "mAll": "",
  "mBottom": "",
  "mLeft": "",
  "mRight": "",
  "mTop": "",
  "onclick": "Button1.onclick()",
  "onmousedown": "",
  "onmousemove": "",
  "onmouseout": "",
  "onmouseup": "",
  "onresize": "",
  "ontouchend": "",
  "ontouchmove": "",
  "ontouchstart": "",
  "outline": "",
  "pAll": "",
  "pBottom": "",
  "pLeft": "",
  "pRight": "",
  "pTop": "",
  "popBody": "Body",
  "popClose": "hover",
  "popPosition": "",
  "popStyle": "popover",
  "popTitle": "Title",
  "right": "auto",
  "script": "",
  "size": " btn-md",
  "style": "",
  "toggleControl": "",
  "top": 194,
  "value": "Click me!",
  "width": "auto"
}
```

**`appearance` values:** ` btn-primary`, ` btn-secondary`, ` btn-success`, ` btn-info`, ` btn-warning`, ` btn-danger`, ` btn-light`, ` btn-dark`, ` btn-link`  
**`size` values:** ` btn-lg`, ` btn-md`, ` btn-sm`

#### Bootstrap 4 Button (`Button_bs4`)

Use `"!type": "Button_bs4"` for BS4 buttons. The `onclick` value uses underscore notation: `"Button1_onclick()"`.

```json
{
  "!type": "Button_bs4",
  "id": "Button1",
  "value": "Click me!",
  "left": 98,
  "top": 194,
  "width": 113,
  "height": "auto",
  "right": "auto",
  "bottom": "auto",
  "appearance": " btn-secondary",
  "size": " btn-sm",
  "outline": "outline-",
  "blockLevel": "",
  "grouping": "",
  "groupStyle": "",
  "badge": "",
  "badgeAppearance": " badge-info",
  "icon": "false",
  "iconTitle": "",
  "ChangeForm": "",
  "toggleControl": "",
  "onclick": "Button1_onclick()",
  "onmousedown": "",
  "onmousemove": "",
  "onmouseout": "",
  "onmouseup": "",
  "onresize": "",
  "ontouchend": "",
  "ontouchmove": "",
  "ontouchstart": "",
  "popStyle": "popover",
  "popTitle": "Title",
  "popBody": "Body",
  "popPosition": "",
  "popClose": "hover",
  "hidden": "",
  "disabled": "",
  "class": "",
  "style": "",
  "backgroundColor": "",
  "color": "",
  "fontFamily": "",
  "fontSize": "",
  "fontStyle": "",
  "fontWeight": "",
  "borderColor": "",
  "borderStyle": "",
  "borderWidth": "",
  "mAll": "",
  "mTop": "",
  "mBottom": "",
  "mLeft": "",
  "mRight": "",
  "pAll": "",
  "pTop": "",
  "pBottom": "",
  "pLeft": "",
  "pRight": "",
  "display": "",
  "cached_js": "",
  "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e",
  "children": [],
  "expanded_pmp": null,
  "script": ""
}
```

### `forms/Form1/Form1.js` — JavaScript Event Handlers

For **Bootstrap 5** controls, use dot-notation assignment:

```javascript
Button1.onclick = function() {
  NSB.MsgBox("Hello World!");
};
```

For **Bootstrap 4** controls, use function declaration:

```javascript
function Button1_onclick() {
  NSB.MsgBox("Hello World!");
}
```

Common NSB runtime functions available in JavaScript:
- `NSB.MsgBox(message)` — shows a modal message box
- `NSB.InputBox(prompt, title, default)` — shows an input dialog
- `NSB.Alert(message)` — shows a browser alert
- `NSB.ShowProgress(message)` / `NSB.HideProgress()` — progress indicator
- `ChangeForm(formId)` — navigates to another form

### `forms/Form1/Form1.bas` — BASIC Event Handlers (BASIC projects only)

```basic
Function Button1_onclick()
  MsgBox "Hello World!"
End Function
```

### `properties/manifest.json` — PWA Manifest

**IMPORTANT:** Use **single curly braces** `{` and `}`. Never use double braces `{{` or `}}`. Use the placeholders `{title}`, `{description}`, and `{icon}` exactly — no other variable names.

```json
{
  "short_name": "{title}",
  "name": "{title}",
  "description": "{description}",
  "display": "standalone",
  "start_url": "index.html",
  "background_color": "black",
  "theme_color": "black",
  "icons": [
    {
      "src": "nsb/images/72.png",
      "sizes": "72x72"
    },
    {
      "src": "{icon}",
      "sizes": "192x192"
    },
    {
      "src": "nsb/images/512.png",
      "sizes": "512x512"
    }
  ]
}
```

### External Reference Format

Whenever a parent JSON file (project or form) refers to a child JSON file, use this exact structure:

```json
{
  "!type": "External",
  "file": ["forms", "Form1", "Form1.json"]
}
```

The `file` array is a path relative to the `.appstudio` root directory — one element per path segment.

### onclick Conventions by Control Generation

| Control type suffix | `onclick` value format | JS handler style |
|---|---|---|
| `_bs5` | `"Button1.onclick()"` | `Button1.onclick = function() { ... };` |
| `_bs4` | `"Button1_onclick()"` | `function Button1_onclick() { ... }` |
| `_jqm` | `"Button1_onclick()"` | `function Button1_onclick() { ... }` |
