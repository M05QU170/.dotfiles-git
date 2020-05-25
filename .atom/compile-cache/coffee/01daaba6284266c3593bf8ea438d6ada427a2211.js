(function() {
  describe("Nord Atom UI theme", function() {
    beforeEach(function() {
      return waitsForPromise(function() {
        return atom.packages.activatePackage('nord-atom-ui');
      });
    });
    return it("allows to use darker colors for focused forms to be set via theme settings", function() {
      expect(document.documentElement.getAttribute('theme-nord-atom-ui-form-focus-effect')).toBe(null);
      atom.config.set('nord-atom-ui.darkerFormFocusEffect', true);
      return expect(document.documentElement.getAttribute('theme-nord-atom-ui-form-focus-effect')).toBe('nosnowlight');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdG9tYXMvLmF0b20vcGFja2FnZXMvbm9yZC1hdG9tLXVpL3NwZWMvZGFya2VyLWZvcm0tZm9jdXNpbmctZWZmZWN0LXNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQUEsUUFBQSxDQUFTLG9CQUFULEVBQStCLFNBQUE7SUFDN0IsVUFBQSxDQUFXLFNBQUE7YUFDVCxlQUFBLENBQWdCLFNBQUE7ZUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWQsQ0FBOEIsY0FBOUI7TUFEYyxDQUFoQjtJQURTLENBQVg7V0FJQSxFQUFBLENBQUcsNEVBQUgsRUFBaUYsU0FBQTtNQUMvRSxNQUFBLENBQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUF6QixDQUFzQyxzQ0FBdEMsQ0FBUCxDQUFxRixDQUFDLElBQXRGLENBQTJGLElBQTNGO01BRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLG9DQUFoQixFQUFzRCxJQUF0RDthQUNBLE1BQUEsQ0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQXpCLENBQXNDLHNDQUF0QyxDQUFQLENBQXFGLENBQUMsSUFBdEYsQ0FBMkYsYUFBM0Y7SUFKK0UsQ0FBakY7RUFMNkIsQ0FBL0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiMgQ29weXJpZ2h0IChDKSAyMDE2LXByZXNlbnQgQXJjdGljIEljZSBTdHVkaW8gPGRldmVsb3BtZW50QGFyY3RpY2ljZXN0dWRpby5jb20+XG4jIENvcHlyaWdodCAoQykgMjAxNi1wcmVzZW50IFN2ZW4gR3JlYiA8ZGV2ZWxvcG1lbnRAc3ZlbmdyZWIuZGU+XG5cbiMgUHJvamVjdDogICAgTm9yZCBBdG9tIFVJXG4jIFJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcmN0aWNpY2VzdHVkaW8vbm9yZC1hdG9tLXVpXG4jIExpY2Vuc2U6ICAgIE1JVFxuXG5kZXNjcmliZSBcIk5vcmQgQXRvbSBVSSB0aGVtZVwiLCAtPlxuICBiZWZvcmVFYWNoIC0+XG4gICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICBhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnbm9yZC1hdG9tLXVpJylcblxuICBpdCBcImFsbG93cyB0byB1c2UgZGFya2VyIGNvbG9ycyBmb3IgZm9jdXNlZCBmb3JtcyB0byBiZSBzZXQgdmlhIHRoZW1lIHNldHRpbmdzXCIsIC0+XG4gICAgZXhwZWN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS1mb3JtLWZvY3VzLWVmZmVjdCcpKS50b0JlIG51bGxcblxuICAgIGF0b20uY29uZmlnLnNldCgnbm9yZC1hdG9tLXVpLmRhcmtlckZvcm1Gb2N1c0VmZmVjdCcsIHRydWUpXG4gICAgZXhwZWN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lLW5vcmQtYXRvbS11aS1mb3JtLWZvY3VzLWVmZmVjdCcpKS50b0JlICdub3Nub3dsaWdodCdcbiJdfQ==
