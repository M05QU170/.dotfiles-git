'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var SnippetParser = (function () {
  function SnippetParser() {
    _classCallCheck(this, SnippetParser);
  }

  _createClass(SnippetParser, [{
    key: 'reset',
    value: function reset() {
      this.inSnippet = false;
      this.inSnippetBody = false;
      this.snippetStart = -1;
      this.snippetEnd = -1;
      this.bodyStart = -1;
      this.bodyEnd = -1;
      this.escapedBraceIndices = null;
    }
  }, {
    key: 'findSnippets',
    value: function findSnippets(text) {
      if (text.length <= 0 || text.indexOf('$') === -1) {
        return;
      } // No snippets
      this.reset();
      var snippets = [];

      // We're not using a regex because escaped right braces cannot be tracked without lookbehind,
      // which doesn't exist yet for javascript; consequently we need to iterate through each character.
      // This might feel ugly, but it's necessary.
      for (var index = 0; index < text.length; index++) {
        if (this.inSnippet && this.snippetEnd === index) {
          var body = text.slice(this.bodyStart, this.bodyEnd + 1);
          body = this.removeBraceEscaping(body, this.bodyStart, this.escapedBraceIndices);
          snippets.push({ snippetStart: this.snippetStart, snippetEnd: this.snippetEnd, bodyStart: this.bodyStart, bodyEnd: this.bodyEnd, body: body });
          this.reset();
          continue;
        }

        if (this.inSnippet && index >= this.bodyStart && index <= this.bodyEnd) {
          this.inBody = true;
        }
        if (this.inSnippet && (index > this.bodyEnd || index < this.bodyStart)) {
          this.inBody = false;
        }
        if (this.bodyStart === -1 || this.bodyEnd === -1) {
          this.inBody = false;
        }
        if (this.inSnippet && !this.inBody) {
          continue;
        }
        if (this.inSnippet && this.inBody) {
          continue;
        }

        // Determine if we've found a new snippet
        if (!this.inSnippet && text.indexOf('${', index) === index) {
          // Find index of colon
          var colonIndex = text.indexOf(':', index + 3);
          if (colonIndex !== -1) {
            // Disqualify snippet unless the text between '${' and ':' are digits
            var groupStart = index + 2;
            var groupEnd = colonIndex - 1;
            if (groupEnd >= groupStart) {
              for (var i = groupStart; i < groupEnd; i++) {
                if (isNaN(parseInt(text.charAt(i)))) {
                  colonIndex = -1;
                }
              }
            } else {
              colonIndex = -1;
            }
          }

          // Find index of '}'
          var rightBraceIndex = -1;
          if (colonIndex !== -1) {
            var i = index + 4;
            while (true) {
              rightBraceIndex = text.indexOf('}', i);
              if (rightBraceIndex === -1) {
                break;
              }
              if (text.charAt(rightBraceIndex - 1) === '\\') {
                if (this.escapedBraceIndices == null) {
                  this.escapedBraceIndices = [];
                }
                this.escapedBraceIndices.push(rightBraceIndex - 1);
              } else {
                break;
              }
              i = rightBraceIndex + 1;
            }
          }

          if (colonIndex !== -1 && rightBraceIndex !== -1 && colonIndex < rightBraceIndex) {
            this.inSnippet = true;
            this.inBody = false;
            this.snippetStart = index;
            this.snippetEnd = rightBraceIndex;
            this.bodyStart = colonIndex + 1;
            this.bodyEnd = rightBraceIndex - 1;
            continue;
          } else {
            this.reset();
          }
        }
      }

      return snippets;
    }
  }, {
    key: 'removeBraceEscaping',
    value: function removeBraceEscaping(body, bodyStart, escapedBraceIndices) {
      if (escapedBraceIndices != null) {
        for (var i = 0; i < escapedBraceIndices.length; i++) {
          var bodyIndex = escapedBraceIndices[i];
          body = removeCharFromString(body, bodyIndex - bodyStart - i);
        }
      }
      return body;
    }
  }]);

  return SnippetParser;
})();

exports['default'] = SnippetParser;
;

var removeCharFromString = function removeCharFromString(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZC9hdG9tL3NyYy9hdG9tL291dC9hcHAvbm9kZV9tb2R1bGVzL2F1dG9jb21wbGV0ZS1wbHVzL2xpYi9zbmlwcGV0LXBhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUE7O0FBRVgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksWUFBWSxHQUFHLENBQUMsWUFBWTtBQUFFLFdBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFFLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsVUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxBQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEFBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEFBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSxRQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRXRqQixTQUFTLGVBQWUsQ0FBQyxR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LEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNuRCxjQUFNLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN4QyxjQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDN0Q7T0FDRjtBQUNELGFBQU8sSUFBSSxDQUFBO0tBQ1o7R0FtQ0EsQ0FBQyxDQUFDLENBQUM7O0FBRUosU0FsSW1CLGFBQWEsQ0FBQTtDQW1JakMsQ0FBQSxFQUFHLENBQUM7O0FBRUwsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQXJJRyxhQUFhLENBQUE7QUE4RmpDLENBQUM7O0FBRUYsSUFBTSxvQkFBb0IsR0FBRyxTQUF2QixvQkFBb0IsQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFBO0FBeUN0QyxTQXpDMkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7Q0FBQSxDQUFBO0FBMkN2RixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiIvYnVpbGQvYXRvbS9zcmMvYXRvbS9vdXQvYXBwL25vZGVfbW9kdWxlcy9hdXRvY29tcGxldGUtcGx1cy9saWIvc25pcHBldC1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmlwcGV0UGFyc2VyIHtcbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuaW5TbmlwcGV0ID0gZmFsc2VcbiAgICB0aGlzLmluU25pcHBldEJvZHkgPSBmYWxzZVxuICAgIHRoaXMuc25pcHBldFN0YXJ0ID0gLTFcbiAgICB0aGlzLnNuaXBwZXRFbmQgPSAtMVxuICAgIHRoaXMuYm9keVN0YXJ0ID0gLTFcbiAgICB0aGlzLmJvZHlFbmQgPSAtMVxuICAgIHRoaXMuZXNjYXBlZEJyYWNlSW5kaWNlcyA9IG51bGxcbiAgfVxuXG4gIGZpbmRTbmlwcGV0cyAodGV4dCkge1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSAwIHx8IHRleHQuaW5kZXhPZignJCcpID09PSAtMSkgeyByZXR1cm4gfSAvLyBObyBzbmlwcGV0c1xuICAgIHRoaXMucmVzZXQoKVxuICAgIGNvbnN0IHNuaXBwZXRzID0gW11cblxuICAgIC8vIFdlJ3JlIG5vdCB1c2luZyBhIHJlZ2V4IGJlY2F1c2UgZXNjYXBlZCByaWdodCBicmFjZXMgY2Fubm90IGJlIHRyYWNrZWQgd2l0aG91dCBsb29rYmVoaW5kLFxuICAgIC8vIHdoaWNoIGRvZXNuJ3QgZXhpc3QgeWV0IGZvciBqYXZhc2NyaXB0OyBjb25zZXF1ZW50bHkgd2UgbmVlZCB0byBpdGVyYXRlIHRocm91Z2ggZWFjaCBjaGFyYWN0ZXIuXG4gICAgLy8gVGhpcyBtaWdodCBmZWVsIHVnbHksIGJ1dCBpdCdzIG5lY2Vzc2FyeS5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGV4dC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmluU25pcHBldCAmJiB0aGlzLnNuaXBwZXRFbmQgPT09IGluZGV4KSB7XG4gICAgICAgIGxldCBib2R5ID0gdGV4dC5zbGljZSh0aGlzLmJvZHlTdGFydCwgdGhpcy5ib2R5RW5kICsgMSlcbiAgICAgICAgYm9keSA9IHRoaXMucmVtb3ZlQnJhY2VFc2NhcGluZyhib2R5LCB0aGlzLmJvZHlTdGFydCwgdGhpcy5lc2NhcGVkQnJhY2VJbmRpY2VzKVxuICAgICAgICBzbmlwcGV0cy5wdXNoKHtzbmlwcGV0U3RhcnQ6IHRoaXMuc25pcHBldFN0YXJ0LCBzbmlwcGV0RW5kOiB0aGlzLnNuaXBwZXRFbmQsIGJvZHlTdGFydDogdGhpcy5ib2R5U3RhcnQsIGJvZHlFbmQ6IHRoaXMuYm9keUVuZCwgYm9keX0pXG4gICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pblNuaXBwZXQgJiYgaW5kZXggPj0gdGhpcy5ib2R5U3RhcnQgJiYgaW5kZXggPD0gdGhpcy5ib2R5RW5kKSB7IHRoaXMuaW5Cb2R5ID0gdHJ1ZSB9XG4gICAgICBpZiAodGhpcy5pblNuaXBwZXQgJiYgKGluZGV4ID4gdGhpcy5ib2R5RW5kIHx8IGluZGV4IDwgdGhpcy5ib2R5U3RhcnQpKSB7IHRoaXMuaW5Cb2R5ID0gZmFsc2UgfVxuICAgICAgaWYgKHRoaXMuYm9keVN0YXJ0ID09PSAtMSB8fCB0aGlzLmJvZHlFbmQgPT09IC0xKSB7IHRoaXMuaW5Cb2R5ID0gZmFsc2UgfVxuICAgICAgaWYgKHRoaXMuaW5TbmlwcGV0ICYmICF0aGlzLmluQm9keSkgeyBjb250aW51ZSB9XG4gICAgICBpZiAodGhpcy5pblNuaXBwZXQgJiYgdGhpcy5pbkJvZHkpIHsgY29udGludWUgfVxuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgd2UndmUgZm91bmQgYSBuZXcgc25pcHBldFxuICAgICAgaWYgKCF0aGlzLmluU25pcHBldCAmJiB0ZXh0LmluZGV4T2YoJyR7JywgaW5kZXgpID09PSBpbmRleCkge1xuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGNvbG9uXG4gICAgICAgIGxldCBjb2xvbkluZGV4ID0gdGV4dC5pbmRleE9mKCc6JywgaW5kZXggKyAzKVxuICAgICAgICBpZiAoY29sb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBEaXNxdWFsaWZ5IHNuaXBwZXQgdW5sZXNzIHRoZSB0ZXh0IGJldHdlZW4gJyR7JyBhbmQgJzonIGFyZSBkaWdpdHNcbiAgICAgICAgICBjb25zdCBncm91cFN0YXJ0ID0gaW5kZXggKyAyXG4gICAgICAgICAgY29uc3QgZ3JvdXBFbmQgPSBjb2xvbkluZGV4IC0gMVxuICAgICAgICAgIGlmIChncm91cEVuZCA+PSBncm91cFN0YXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZ3JvdXBTdGFydDsgaSA8IGdyb3VwRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlSW50KHRleHQuY2hhckF0KGkpKSkpIHsgY29sb25JbmRleCA9IC0xIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb25JbmRleCA9IC0xXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpbmRleCBvZiAnfSdcbiAgICAgICAgbGV0IHJpZ2h0QnJhY2VJbmRleCA9IC0xXG4gICAgICAgIGlmIChjb2xvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGxldCBpID0gaW5kZXggKyA0XG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHJpZ2h0QnJhY2VJbmRleCA9IHRleHQuaW5kZXhPZignfScsIGkpXG4gICAgICAgICAgICBpZiAocmlnaHRCcmFjZUluZGV4ID09PSAtMSkgeyBicmVhayB9XG4gICAgICAgICAgICBpZiAodGV4dC5jaGFyQXQocmlnaHRCcmFjZUluZGV4IC0gMSkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5lc2NhcGVkQnJhY2VJbmRpY2VzID09IG51bGwpIHsgdGhpcy5lc2NhcGVkQnJhY2VJbmRpY2VzID0gW10gfVxuICAgICAgICAgICAgICB0aGlzLmVzY2FwZWRCcmFjZUluZGljZXMucHVzaChyaWdodEJyYWNlSW5kZXggLSAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSByaWdodEJyYWNlSW5kZXggKyAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbG9uSW5kZXggIT09IC0xICYmIHJpZ2h0QnJhY2VJbmRleCAhPT0gLTEgJiYgY29sb25JbmRleCA8IHJpZ2h0QnJhY2VJbmRleCkge1xuICAgICAgICAgIHRoaXMuaW5TbmlwcGV0ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuaW5Cb2R5ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNuaXBwZXRTdGFydCA9IGluZGV4XG4gICAgICAgICAgdGhpcy5zbmlwcGV0RW5kID0gcmlnaHRCcmFjZUluZGV4XG4gICAgICAgICAgdGhpcy5ib2R5U3RhcnQgPSBjb2xvbkluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuYm9keUVuZCA9IHJpZ2h0QnJhY2VJbmRleCAtIDFcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNuaXBwZXRzXG4gIH1cblxuICByZW1vdmVCcmFjZUVzY2FwaW5nIChib2R5LCBib2R5U3RhcnQsIGVzY2FwZWRCcmFjZUluZGljZXMpIHtcbiAgICBpZiAoZXNjYXBlZEJyYWNlSW5kaWNlcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVzY2FwZWRCcmFjZUluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYm9keUluZGV4ID0gZXNjYXBlZEJyYWNlSW5kaWNlc1tpXVxuICAgICAgICBib2R5ID0gcmVtb3ZlQ2hhckZyb21TdHJpbmcoYm9keSwgYm9keUluZGV4IC0gYm9keVN0YXJ0IC0gaSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvZHlcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlQ2hhckZyb21TdHJpbmcgPSAoc3RyLCBpbmRleCkgPT4gc3RyLnNsaWNlKDAsIGluZGV4KSArIHN0ci5zbGljZShpbmRleCArIDEpXG4iXX0=