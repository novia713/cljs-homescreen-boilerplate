goog.provide("module$bower_components$firefoxos_mozapps$dist$build_standard");
var module$bower_components$firefoxos_mozapps$dist$build_standard = {};
(function(exports) {
  var HIDDEN_ROLES = ["system", "input", "homescreen", "theme"];
  var DEFAULT_ICON_SIZE = Math.floor(window.innerWidth / 4);
  var icons = [];
  var iconsMap = {};
  function makeIcons(app) {
    if (HIDDEN_ROLES.indexOf(app.manifest.role) !== -1) {
      return;
    }
    var newIcon;
    if (app.manifest.entry_points) {
      for (var i in app.manifest.entry_points) {
        newIcon = new Icon(app, i);
        icons.push(newIcon);
        iconsMap[newIcon.identifier] = newIcon;
      }
    } else {
      newIcon = new Icon(app);
      icons.push(newIcon);
      iconsMap[newIcon.identifier] = newIcon;
    }
  }
  function hasScheme(input) {
    var rscheme = /^(?:[a-z\u00a1-\uffff0-9-+]+)(?::|:\/\/)/i;
    return !!(rscheme.exec(input) || [])[0];
  }
  function Icon(app, entryPoint) {
    this.app = app;
    this.entryPoint = entryPoint;
    this.identifier = [app.manifestURL, entryPoint].join("-");
  }
  Icon.prototype = function(_ref) {
    Object.defineProperties(_ref, {name:{get:function() {
      var userLang = document.documentElement.lang;
      var locales = this.descriptor.locales;
      var localized = locales && locales[userLang] && locales[userLang].name;
      return localized || this.descriptor.name;
    }}, icon:{get:function() {
      return this.getIcon(DEFAULT_ICON_SIZE);
    }}, descriptor:{get:function() {
      if (this.entryPoint) {
        return this.app.manifest.entry_points[this.entryPoint];
      }
      return this.app.manifest;
    }}});
    return _ref;
  }({defaultIcon:"/bower_components/firefoxos-mozapps/default_icon.png", getIcon:function(size) {
    var choices = this.descriptor.icons;
    if (!choices) {
      return this.defaultIcon;
    }
    var list = Object.keys(choices).map(function(size) {
      return size;
    }).sort(function(a, b) {
      return b - a;
    });
    var accurateSize = list[0];
    for (var i = 0;i < list.length;i++) {
      var iconSize = list[i];
      if (iconSize < size) {
        break;
      }
      accurateSize = iconSize;
    }
    var icon = choices[accurateSize];
    if (!hasScheme(icon)) {
      var a = document.createElement("a");
      a.href = this.app.origin;
      icon = a.protocol + "//" + a.host + icon;
    }
    return icon;
  }, launch:function() {
    if (this.entryPoint) {
      this.app.launch(this.entryPoint);
    } else {
      this.app.launch();
    }
  }});
  function all() {
    return new Promise(function(resolve, reject) {
      navigator.mozApps.mgmt.getAll().onsuccess = function(event) {
        event.target.result.forEach(makeIcons);
        resolve(icons);
      };
    });
  }
  function get(identifier) {
    return iconsMap[identifier];
  }
  exports.FxosApps = {Icon:Icon, all:all, get:get};
})(window);
