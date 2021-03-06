'use babel';

var selfName = 'nord-atom-ui-vertical-tabs';

setDirection = function (isLeft) {
  var panes = document.querySelectorAll('atom-pane');
  panes.forEach(function (pane) {
    pane.style.flexDirection = isLeft ? 'row' : 'row-reverse';
  });
};

atom.config.onDidChange(selfName + '.isLeftTab', function (isLeft) {
  setDirection(isLeft['newValue']);
});

module.exports = NordAtomUiVerticalTabs = {
  config: {
    isLeftTab: {
      title: 'Left tabs',
      description: 'Show tabs in "left side" of editor',
      type: 'boolean',
      'default': true
    }
  },

  activate: function activate(state) {
    var isLeft = atom.config.get(selfName + '.isLeftTab');
    setDirection(isLeft);
  },

  deactivate: function deactivate() {
    var panes = document.querySelectorAll('atom-pane');
    panes.forEach(function (pane) {
      pane.style.flexDirection = 'column';
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbWFzLy5hdG9tL3BhY2thZ2VzL25vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzL2xpYi9ub3JkLWF0b20tdWktdmVydGljYWwtdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUM7O0FBRVosSUFBTSxRQUFRLEdBQUcsNEJBQTRCLENBQUM7O0FBRTlDLFlBQVksR0FBRyxVQUFDLE1BQU0sRUFBSztBQUN6QixNQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkQsT0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUN0QixRQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLGFBQWEsQ0FBQztHQUMzRCxDQUFDLENBQUM7Q0FDSixDQUFDOztBQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxZQUFZLEVBQUUsVUFBQyxNQUFNLEVBQUs7QUFDM0QsY0FBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQ2xDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLHNCQUFzQixHQUFHO0FBQ3hDLFFBQU0sRUFBRTtBQUNOLGFBQVMsRUFBRTtBQUNULFdBQUssRUFBRSxXQUFXO0FBQ2xCLGlCQUFXLEVBQUUsb0NBQW9DO0FBQ2pELFVBQUksRUFBRSxTQUFTO0FBQ2YsaUJBQVMsSUFBSTtLQUNkO0dBQ0Y7O0FBRUQsVUFBUSxFQUFFLGtCQUFDLEtBQUssRUFBSztBQUNuQixRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdEQsZ0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUN0Qjs7QUFFRCxZQUFVLEVBQUUsc0JBQU07QUFDaEIsUUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELFNBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDdEIsVUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO0tBQ3JDLENBQUMsQ0FBQztHQUNKO0NBQ0YsQ0FBQyIsImZpbGUiOiIvaG9tZS90b21hcy8uYXRvbS9wYWNrYWdlcy9ub3JkLWF0b20tdWktdmVydGljYWwtdGFicy9saWIvbm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuY29uc3Qgc2VsZk5hbWUgPSAnbm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMnO1xuXG5zZXREaXJlY3Rpb24gPSAoaXNMZWZ0KSA9PiB7XG4gIGxldCBwYW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2F0b20tcGFuZScpO1xuICBwYW5lcy5mb3JFYWNoKChwYW5lKSA9PiB7XG4gICAgcGFuZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gaXNMZWZ0ID8gJ3JvdycgOiAncm93LXJldmVyc2UnO1xuICB9KTtcbn07XG5cbmF0b20uY29uZmlnLm9uRGlkQ2hhbmdlKHNlbGZOYW1lICsgJy5pc0xlZnRUYWInLCAoaXNMZWZ0KSA9PiB7XG4gIHNldERpcmVjdGlvbihpc0xlZnRbJ25ld1ZhbHVlJ10pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm9yZEF0b21VaVZlcnRpY2FsVGFicyA9IHtcbiAgY29uZmlnOiB7XG4gICAgaXNMZWZ0VGFiOiB7XG4gICAgICB0aXRsZTogJ0xlZnQgdGFicycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nob3cgdGFicyBpbiBcImxlZnQgc2lkZVwiIG9mIGVkaXRvcicsXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGFjdGl2YXRlOiAoc3RhdGUpID0+IHtcbiAgICBsZXQgaXNMZWZ0ID0gYXRvbS5jb25maWcuZ2V0KHNlbGZOYW1lICsgJy5pc0xlZnRUYWInKTtcbiAgICBzZXREaXJlY3Rpb24oaXNMZWZ0KTtcbiAgfSxcblxuICBkZWFjdGl2YXRlOiAoKSA9PiB7XG4gICAgbGV0IHBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYXRvbS1wYW5lJyk7XG4gICAgcGFuZXMuZm9yRWFjaCgocGFuZSkgPT4ge1xuICAgICAgcGFuZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=