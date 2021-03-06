(function() {
  var NordAtomUiVerticalTabs;

  NordAtomUiVerticalTabs = require('../lib/nord-atom-ui-vertical-tabs');

  describe("NordAtomUiVerticalTabs", function() {
    var activationPromise, ref, workspaceElement;
    ref = [], workspaceElement = ref[0], activationPromise = ref[1];
    beforeEach(function() {
      workspaceElement = atom.views.getView(atom.workspace);
      return activationPromise = atom.packages.activatePackage('nord-atom-ui-vertical-tabs');
    });
    return describe("when the nord-atom-ui-vertical-tabs:toggle event is triggered", function() {
      it("hides and shows the modal panel", function() {
        expect(workspaceElement.querySelector('.nord-atom-ui-vertical-tabs')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'nord-atom-ui-vertical-tabs:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var nordAtomUiVerticalTabsElement, nordAtomUiVerticalTabsPanel;
          expect(workspaceElement.querySelector('.nord-atom-ui-vertical-tabs')).toExist();
          nordAtomUiVerticalTabsElement = workspaceElement.querySelector('.nord-atom-ui-vertical-tabs');
          expect(nordAtomUiVerticalTabsElement).toExist();
          nordAtomUiVerticalTabsPanel = atom.workspace.panelForItem(nordAtomUiVerticalTabsElement);
          expect(nordAtomUiVerticalTabsPanel.isVisible()).toBe(true);
          atom.commands.dispatch(workspaceElement, 'nord-atom-ui-vertical-tabs:toggle');
          return expect(nordAtomUiVerticalTabsPanel.isVisible()).toBe(false);
        });
      });
      return it("hides and shows the view", function() {
        jasmine.attachToDOM(workspaceElement);
        expect(workspaceElement.querySelector('.nord-atom-ui-vertical-tabs')).not.toExist();
        atom.commands.dispatch(workspaceElement, 'nord-atom-ui-vertical-tabs:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          var nordAtomUiVerticalTabsElement;
          nordAtomUiVerticalTabsElement = workspaceElement.querySelector('.nord-atom-ui-vertical-tabs');
          expect(nordAtomUiVerticalTabsElement).toBeVisible();
          atom.commands.dispatch(workspaceElement, 'nord-atom-ui-vertical-tabs:toggle');
          return expect(nordAtomUiVerticalTabsElement).not.toBeVisible();
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdG9tYXMvLmF0b20vcGFja2FnZXMvbm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMvc3BlYy9ub3JkLWF0b20tdWktdmVydGljYWwtdGFicy1zcGVjLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsc0JBQUEsR0FBeUIsT0FBQSxDQUFRLG1DQUFSOztFQU96QixRQUFBLENBQVMsd0JBQVQsRUFBbUMsU0FBQTtBQUNqQyxRQUFBO0lBQUEsTUFBd0MsRUFBeEMsRUFBQyx5QkFBRCxFQUFtQjtJQUVuQixVQUFBLENBQVcsU0FBQTtNQUNULGdCQUFBLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFtQixJQUFJLENBQUMsU0FBeEI7YUFDbkIsaUJBQUEsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLDRCQUE5QjtJQUZYLENBQVg7V0FJQSxRQUFBLENBQVMsK0RBQVQsRUFBMEUsU0FBQTtNQUN4RSxFQUFBLENBQUcsaUNBQUgsRUFBc0MsU0FBQTtRQUdwQyxNQUFBLENBQU8sZ0JBQWdCLENBQUMsYUFBakIsQ0FBK0IsNkJBQS9CLENBQVAsQ0FBcUUsQ0FBQyxHQUFHLENBQUMsT0FBMUUsQ0FBQTtRQUlBLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBZCxDQUF1QixnQkFBdkIsRUFBeUMsbUNBQXpDO1FBRUEsZUFBQSxDQUFnQixTQUFBO2lCQUNkO1FBRGMsQ0FBaEI7ZUFHQSxJQUFBLENBQUssU0FBQTtBQUNILGNBQUE7VUFBQSxNQUFBLENBQU8sZ0JBQWdCLENBQUMsYUFBakIsQ0FBK0IsNkJBQS9CLENBQVAsQ0FBcUUsQ0FBQyxPQUF0RSxDQUFBO1VBRUEsNkJBQUEsR0FBZ0MsZ0JBQWdCLENBQUMsYUFBakIsQ0FBK0IsNkJBQS9CO1VBQ2hDLE1BQUEsQ0FBTyw2QkFBUCxDQUFxQyxDQUFDLE9BQXRDLENBQUE7VUFFQSwyQkFBQSxHQUE4QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQWYsQ0FBNEIsNkJBQTVCO1VBQzlCLE1BQUEsQ0FBTywyQkFBMkIsQ0FBQyxTQUE1QixDQUFBLENBQVAsQ0FBK0MsQ0FBQyxJQUFoRCxDQUFxRCxJQUFyRDtVQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBZCxDQUF1QixnQkFBdkIsRUFBeUMsbUNBQXpDO2lCQUNBLE1BQUEsQ0FBTywyQkFBMkIsQ0FBQyxTQUE1QixDQUFBLENBQVAsQ0FBK0MsQ0FBQyxJQUFoRCxDQUFxRCxLQUFyRDtRQVRHLENBQUw7TUFab0MsQ0FBdEM7YUF1QkEsRUFBQSxDQUFHLDBCQUFILEVBQStCLFNBQUE7UUFPN0IsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsZ0JBQXBCO1FBRUEsTUFBQSxDQUFPLGdCQUFnQixDQUFDLGFBQWpCLENBQStCLDZCQUEvQixDQUFQLENBQXFFLENBQUMsR0FBRyxDQUFDLE9BQTFFLENBQUE7UUFJQSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLG1DQUF6QztRQUVBLGVBQUEsQ0FBZ0IsU0FBQTtpQkFDZDtRQURjLENBQWhCO2VBR0EsSUFBQSxDQUFLLFNBQUE7QUFFSCxjQUFBO1VBQUEsNkJBQUEsR0FBZ0MsZ0JBQWdCLENBQUMsYUFBakIsQ0FBK0IsNkJBQS9CO1VBQ2hDLE1BQUEsQ0FBTyw2QkFBUCxDQUFxQyxDQUFDLFdBQXRDLENBQUE7VUFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLG1DQUF6QztpQkFDQSxNQUFBLENBQU8sNkJBQVAsQ0FBcUMsQ0FBQyxHQUFHLENBQUMsV0FBMUMsQ0FBQTtRQUxHLENBQUw7TUFsQjZCLENBQS9CO0lBeEJ3RSxDQUExRTtFQVBpQyxDQUFuQztBQVBBIiwic291cmNlc0NvbnRlbnQiOlsiTm9yZEF0b21VaVZlcnRpY2FsVGFicyA9IHJlcXVpcmUgJy4uL2xpYi9ub3JkLWF0b20tdWktdmVydGljYWwtdGFicydcblxuIyBVc2UgdGhlIGNvbW1hbmQgYHdpbmRvdzpydW4tcGFja2FnZS1zcGVjc2AgKGNtZC1hbHQtY3RybC1wKSB0byBydW4gc3BlY3MuXG4jXG4jIFRvIHJ1biBhIHNwZWNpZmljIGBpdGAgb3IgYGRlc2NyaWJlYCBibG9jayBhZGQgYW4gYGZgIHRvIHRoZSBmcm9udCAoZS5nLiBgZml0YFxuIyBvciBgZmRlc2NyaWJlYCkuIFJlbW92ZSB0aGUgYGZgIHRvIHVuZm9jdXMgdGhlIGJsb2NrLlxuXG5kZXNjcmliZSBcIk5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNcIiwgLT5cbiAgW3dvcmtzcGFjZUVsZW1lbnQsIGFjdGl2YXRpb25Qcm9taXNlXSA9IFtdXG5cbiAgYmVmb3JlRWFjaCAtPlxuICAgIHdvcmtzcGFjZUVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpXG4gICAgYWN0aXZhdGlvblByb21pc2UgPSBhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnbm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMnKVxuXG4gIGRlc2NyaWJlIFwid2hlbiB0aGUgbm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnM6dG9nZ2xlIGV2ZW50IGlzIHRyaWdnZXJlZFwiLCAtPlxuICAgIGl0IFwiaGlkZXMgYW5kIHNob3dzIHRoZSBtb2RhbCBwYW5lbFwiLCAtPlxuICAgICAgIyBCZWZvcmUgdGhlIGFjdGl2YXRpb24gZXZlbnQgdGhlIHZpZXcgaXMgbm90IG9uIHRoZSBET00sIGFuZCBubyBwYW5lbFxuICAgICAgIyBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBleHBlY3Qod29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMnKSkubm90LnRvRXhpc3QoKVxuXG4gICAgICAjIFRoaXMgaXMgYW4gYWN0aXZhdGlvbiBldmVudCwgdHJpZ2dlcmluZyBpdCB3aWxsIGNhdXNlIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAjIGFjdGl2YXRlZC5cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ25vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzOnRvZ2dsZSdcblxuICAgICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlXG5cbiAgICAgIHJ1bnMgLT5cbiAgICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzJykpLnRvRXhpc3QoKVxuXG4gICAgICAgIG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNFbGVtZW50ID0gd29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubm9yZC1hdG9tLXVpLXZlcnRpY2FsLXRhYnMnKVxuICAgICAgICBleHBlY3Qobm9yZEF0b21VaVZlcnRpY2FsVGFic0VsZW1lbnQpLnRvRXhpc3QoKVxuXG4gICAgICAgIG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNQYW5lbCA9IGF0b20ud29ya3NwYWNlLnBhbmVsRm9ySXRlbShub3JkQXRvbVVpVmVydGljYWxUYWJzRWxlbWVudClcbiAgICAgICAgZXhwZWN0KG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNQYW5lbC5pc1Zpc2libGUoKSkudG9CZSB0cnVlXG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ25vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzOnRvZ2dsZSdcbiAgICAgICAgZXhwZWN0KG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNQYW5lbC5pc1Zpc2libGUoKSkudG9CZSBmYWxzZVxuXG4gICAgaXQgXCJoaWRlcyBhbmQgc2hvd3MgdGhlIHZpZXdcIiwgLT5cbiAgICAgICMgVGhpcyB0ZXN0IHNob3dzIHlvdSBhbiBpbnRlZ3JhdGlvbiB0ZXN0IHRlc3RpbmcgYXQgdGhlIHZpZXcgbGV2ZWwuXG5cbiAgICAgICMgQXR0YWNoaW5nIHRoZSB3b3Jrc3BhY2VFbGVtZW50IHRvIHRoZSBET00gaXMgcmVxdWlyZWQgdG8gYWxsb3cgdGhlXG4gICAgICAjIGB0b0JlVmlzaWJsZSgpYCBtYXRjaGVycyB0byB3b3JrLiBBbnl0aGluZyB0ZXN0aW5nIHZpc2liaWxpdHkgb3IgZm9jdXNcbiAgICAgICMgcmVxdWlyZXMgdGhhdCB0aGUgd29ya3NwYWNlRWxlbWVudCBpcyBvbiB0aGUgRE9NLiBUZXN0cyB0aGF0IGF0dGFjaCB0aGVcbiAgICAgICMgd29ya3NwYWNlRWxlbWVudCB0byB0aGUgRE9NIGFyZSBnZW5lcmFsbHkgc2xvd2VyIHRoYW4gdGhvc2Ugb2ZmIERPTS5cbiAgICAgIGphc21pbmUuYXR0YWNoVG9ET00od29ya3NwYWNlRWxlbWVudClcblxuICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzJykpLm5vdC50b0V4aXN0KClcblxuICAgICAgIyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgY2F1c2VzIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAjIGFjdGl2YXRlZC5cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ25vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzOnRvZ2dsZSdcblxuICAgICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlXG5cbiAgICAgIHJ1bnMgLT5cbiAgICAgICAgIyBOb3cgd2UgY2FuIHRlc3QgZm9yIHZpZXcgdmlzaWJpbGl0eVxuICAgICAgICBub3JkQXRvbVVpVmVydGljYWxUYWJzRWxlbWVudCA9IHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzJylcbiAgICAgICAgZXhwZWN0KG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNFbGVtZW50KS50b0JlVmlzaWJsZSgpXG4gICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggd29ya3NwYWNlRWxlbWVudCwgJ25vcmQtYXRvbS11aS12ZXJ0aWNhbC10YWJzOnRvZ2dsZSdcbiAgICAgICAgZXhwZWN0KG5vcmRBdG9tVWlWZXJ0aWNhbFRhYnNFbGVtZW50KS5ub3QudG9CZVZpc2libGUoKVxuIl19
