(function() {
  var root, setFormFocusEffect, setTabSizing, unsetFormFocusEffect, unsetTabSizing;

  root = document.documentElement;

  module.exports = {
    activate: function(state) {
      atom.config.observe('nord-atom-ui.tabSizing', function(noFullWidth) {
        return setTabSizing(noFullWidth);
      });
      return atom.config.observe('nord-atom-ui.darkerFormFocusEffect', function(noSnowLight) {
        return setFormFocusEffect(noSnowLight);
      });
    },
    deactivate: function() {
      unsetTabSizing();
      return unsetFormFocusEffect();
    }
  };

  setFormFocusEffect = function(noSnowLight) {
    if (noSnowLight) {
      return root.setAttribute('theme-nord-atom-ui-form-focus-effect', "nosnowlight");
    } else {
      return unsetFormFocusEffect();
    }
  };

  setTabSizing = function(noFullWidth) {
    if (noFullWidth) {
      return unsetTabSizing();
    } else {
      return root.setAttribute('theme-nord-atom-ui-tabsizing', "nofullwidth");
    }
  };

  unsetFormFocusEffect = function() {
    return root.removeAttribute('theme-nord-atom-ui-form-focus-effect');
  };

  unsetTabSizing = function() {
    return root.removeAttribute('theme-nord-atom-ui-tabsizing');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdG9tYXMvLmF0b20vcGFja2FnZXMvbm9yZC1hdG9tLXVpL2xpYi9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQzs7RUFFaEIsTUFBTSxDQUFDLE9BQVAsR0FDRTtJQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7TUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBb0Isd0JBQXBCLEVBQThDLFNBQUMsV0FBRDtlQUM1QyxZQUFBLENBQWEsV0FBYjtNQUQ0QyxDQUE5QzthQUVBLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQixvQ0FBcEIsRUFBMEQsU0FBQyxXQUFEO2VBQ3hELGtCQUFBLENBQW1CLFdBQW5CO01BRHdELENBQTFEO0lBSFEsQ0FBVjtJQU1BLFVBQUEsRUFBWSxTQUFBO01BQ1YsY0FBQSxDQUFBO2FBQ0Esb0JBQUEsQ0FBQTtJQUZVLENBTlo7OztFQVVGLGtCQUFBLEdBQXFCLFNBQUMsV0FBRDtJQUNuQixJQUFJLFdBQUo7YUFDRSxJQUFJLENBQUMsWUFBTCxDQUFrQixzQ0FBbEIsRUFBMEQsYUFBMUQsRUFERjtLQUFBLE1BQUE7YUFHRSxvQkFBQSxDQUFBLEVBSEY7O0VBRG1COztFQU1yQixZQUFBLEdBQWUsU0FBQyxXQUFEO0lBQ2IsSUFBSSxXQUFKO2FBQ0UsY0FBQSxDQUFBLEVBREY7S0FBQSxNQUFBO2FBR0UsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsOEJBQWxCLEVBQWtELGFBQWxELEVBSEY7O0VBRGE7O0VBTWYsb0JBQUEsR0FBdUIsU0FBQTtXQUNyQixJQUFJLENBQUMsZUFBTCxDQUFxQixzQ0FBckI7RUFEcUI7O0VBR3ZCLGNBQUEsR0FBaUIsU0FBQTtXQUNmLElBQUksQ0FBQyxlQUFMLENBQXFCLDhCQUFyQjtFQURlO0FBNUJqQiIsInNvdXJjZXNDb250ZW50IjpbIiMgQ29weXJpZ2h0IChDKSAyMDE2LXByZXNlbnQgQXJjdGljIEljZSBTdHVkaW8gPGRldmVsb3BtZW50QGFyY3RpY2ljZXN0dWRpby5jb20+XG4jIENvcHlyaWdodCAoQykgMjAxNi1wcmVzZW50IFN2ZW4gR3JlYiA8ZGV2ZWxvcG1lbnRAc3ZlbmdyZWIuZGU+XG5cbiMgUHJvamVjdDogICAgTm9yZCBBdG9tIFVJXG4jIFJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcmN0aWNpY2VzdHVkaW8vbm9yZC1hdG9tLXVpXG4jIExpY2Vuc2U6ICAgIE1JVFxuXG5yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgYXRvbS5jb25maWcub2JzZXJ2ZSAnbm9yZC1hdG9tLXVpLnRhYlNpemluZycsIChub0Z1bGxXaWR0aCkgLT5cbiAgICAgIHNldFRhYlNpemluZyhub0Z1bGxXaWR0aClcbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlICdub3JkLWF0b20tdWkuZGFya2VyRm9ybUZvY3VzRWZmZWN0JywgKG5vU25vd0xpZ2h0KSAtPlxuICAgICAgc2V0Rm9ybUZvY3VzRWZmZWN0KG5vU25vd0xpZ2h0KVxuXG4gIGRlYWN0aXZhdGU6IC0+XG4gICAgdW5zZXRUYWJTaXppbmcoKVxuICAgIHVuc2V0Rm9ybUZvY3VzRWZmZWN0KClcblxuc2V0Rm9ybUZvY3VzRWZmZWN0ID0gKG5vU25vd0xpZ2h0KSAtPlxuICBpZiAobm9Tbm93TGlnaHQpXG4gICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS1mb3JtLWZvY3VzLWVmZmVjdCcsIFwibm9zbm93bGlnaHRcIilcbiAgZWxzZVxuICAgIHVuc2V0Rm9ybUZvY3VzRWZmZWN0KClcblxuc2V0VGFiU2l6aW5nID0gKG5vRnVsbFdpZHRoKSAtPlxuICBpZiAobm9GdWxsV2lkdGgpXG4gICAgdW5zZXRUYWJTaXppbmcoKVxuICBlbHNlXG4gICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS10YWJzaXppbmcnLCBcIm5vZnVsbHdpZHRoXCIpXG5cbnVuc2V0Rm9ybUZvY3VzRWZmZWN0ID0gLT5cbiAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS1mb3JtLWZvY3VzLWVmZmVjdCcpXG5cbnVuc2V0VGFiU2l6aW5nID0gLT5cbiAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS10YWJzaXppbmcnKVxuIl19
