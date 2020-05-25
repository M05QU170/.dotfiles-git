"use babel";
"use strict";

/*
 * Copyright (C) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2016-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  handleDeprecatedCustomCommentContrastSetting: function handleDeprecatedCustomCommentContrastSetting(options) {
    var customCommentContrast = atom.config.get("nord-atom-syntax.accessibility.commentContrast");
    if (customCommentContrast != 0) {
      atom.notifications.addWarning("The \"Custom Comment Contrast\" theme setting is deprecated and will be removed in version 1.0.0!", {
        detail: "To adapt to the change reset the setting to the default value by deleting the user-defined value from the text field or setting the value to 0.",
        description: "The comment color brightness has been increased by 10% by default!\n        As of version 0.4.0, the setting has no effect anymore. Please see [arcticicestudio/nord-atom-syntax#60](https://github.com/arcticicestudio/nord-atom-syntax/issues/60) for more details.",
        dismissable: true,
        icon: "megaphone"
      });

      if (!options || !options.noReload) {
        (function () {
          var themePack = atom.packages.getLoadedPackage("nord-atom-syntax");

          if (themePack) {
            setImmediate(function () {
              return themePack.activate();
            });
          }
        })();
      }
      if (options && options.callback && typeof options.callback === "function") {
        options.callback();
      };
    }
  },

  activate: function activate() {
    var _this = this;

    atom.config.onDidChange("nord-atom-syntax.accessibility.commentContrast", function () {
      return _this.handleDeprecatedCustomCommentContrastSetting({ noReload: true });
    });
  }
};
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbWFzLy5hdG9tL3BhY2thZ2VzL25vcmQtYXRvbS1zeW50YXgvbGliL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxDQUFDO0FBQ1osWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztxQkFXRTtBQUNiLDhDQUE0QyxFQUFBLHNEQUFDLE9BQU8sRUFBRTtBQUNwRCxRQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDOUYsUUFBSSxxQkFBcUIsSUFBSSxDQUFDLEVBQUU7QUFDOUIsVUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLHNHQUFvRztBQUMvSCxjQUFNLEVBQUUsaUpBQWlKO0FBQ3pKLG1CQUFXLHlRQUMrSztBQUMxTCxtQkFBVyxFQUFFLElBQUk7QUFDakIsWUFBSSxFQUFFLFdBQVc7T0FDbEIsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFOztBQUNqQyxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRW5FLGNBQUksU0FBUyxFQUFFO0FBQ2Isd0JBQVksQ0FBQztxQkFBTSxTQUFTLENBQUMsUUFBUSxFQUFFO2FBQUEsQ0FBQyxDQUFDO1dBQzFDOztPQUNGO0FBQ0QsVUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO0FBQ3pFLGVBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztPQUNwQixDQUFDO0tBQ0g7R0FDRjs7QUFFRCxVQUFRLEVBQUEsb0JBQUc7OztBQUNULFFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGdEQUFnRCxFQUFFO2FBQU0sTUFBSyw0Q0FBNEMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUFBLENBQUMsQ0FBQztHQUN4SjtDQUNGIiwiZmlsZSI6Ii9ob21lL3RvbWFzLy5hdG9tL3BhY2thZ2VzL25vcmQtYXRvbS1zeW50YXgvbGliL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBiYWJlbFwiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYtcHJlc2VudCBBcmN0aWMgSWNlIFN0dWRpbyA8ZGV2ZWxvcG1lbnRAYXJjdGljaWNlc3R1ZGlvLmNvbT5cbiAqIENvcHlyaWdodCAoQykgMjAxNi1wcmVzZW50IFN2ZW4gR3JlYiA8ZGV2ZWxvcG1lbnRAc3ZlbmdyZWIuZGU+XG4gKlxuICogUHJvamVjdDogICAgTm9yZCBBdG9tIFN5bnRheFxuICogUmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL2FyY3RpY2ljZXN0dWRpby9ub3JkLWF0b20tc3ludGF4XG4gKiBMaWNlbnNlOiAgICBNSVRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhhbmRsZURlcHJlY2F0ZWRDdXN0b21Db21tZW50Q29udHJhc3RTZXR0aW5nKG9wdGlvbnMpIHtcbiAgICBsZXQgY3VzdG9tQ29tbWVudENvbnRyYXN0ID0gYXRvbS5jb25maWcuZ2V0KFwibm9yZC1hdG9tLXN5bnRheC5hY2Nlc3NpYmlsaXR5LmNvbW1lbnRDb250cmFzdFwiKTtcbiAgICBpZiAoY3VzdG9tQ29tbWVudENvbnRyYXN0ICE9IDApIHtcbiAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRXYXJuaW5nKGBUaGUgXCJDdXN0b20gQ29tbWVudCBDb250cmFzdFwiIHRoZW1lIHNldHRpbmcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMS4wLjAhYCwge1xuICAgICAgICBkZXRhaWw6IFwiVG8gYWRhcHQgdG8gdGhlIGNoYW5nZSByZXNldCB0aGUgc2V0dGluZyB0byB0aGUgZGVmYXVsdCB2YWx1ZSBieSBkZWxldGluZyB0aGUgdXNlci1kZWZpbmVkIHZhbHVlIGZyb20gdGhlIHRleHQgZmllbGQgb3Igc2V0dGluZyB0aGUgdmFsdWUgdG8gMC5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IGBUaGUgY29tbWVudCBjb2xvciBicmlnaHRuZXNzIGhhcyBiZWVuIGluY3JlYXNlZCBieSAxMCUgYnkgZGVmYXVsdCFcbiAgICAgICAgQXMgb2YgdmVyc2lvbiAwLjQuMCwgdGhlIHNldHRpbmcgaGFzIG5vIGVmZmVjdCBhbnltb3JlLiBQbGVhc2Ugc2VlIFthcmN0aWNpY2VzdHVkaW8vbm9yZC1hdG9tLXN5bnRheCM2MF0oaHR0cHM6Ly9naXRodWIuY29tL2FyY3RpY2ljZXN0dWRpby9ub3JkLWF0b20tc3ludGF4L2lzc3Vlcy82MCkgZm9yIG1vcmUgZGV0YWlscy5gLFxuICAgICAgICBkaXNtaXNzYWJsZTogdHJ1ZSxcbiAgICAgICAgaWNvbjogXCJtZWdhcGhvbmVcIlxuICAgICAgfSk7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5ub1JlbG9hZCkge1xuICAgICAgICBsZXQgdGhlbWVQYWNrID0gYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlKFwibm9yZC1hdG9tLXN5bnRheFwiKTtcblxuICAgICAgICBpZiAodGhlbWVQYWNrKSB7XG4gICAgICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHRoZW1lUGFjay5hY3RpdmF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jYWxsYmFjayAmJiB0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdGlvbnMuY2FsbGJhY2soKTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIGFjdGl2YXRlKCkge1xuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlKFwibm9yZC1hdG9tLXN5bnRheC5hY2Nlc3NpYmlsaXR5LmNvbW1lbnRDb250cmFzdFwiLCAoKSA9PiB0aGlzLmhhbmRsZURlcHJlY2F0ZWRDdXN0b21Db21tZW50Q29udHJhc3RTZXR0aW5nKHsgbm9SZWxvYWQ6IHRydWUgfSkpO1xuICB9XG59O1xuIl19