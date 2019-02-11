AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
      to: {default: '2.5 2.5 2.5'}
    },

    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.setAttribute('scale', data.to)
        this.setAttribute('color', 'green');
      });
      this.el.addEventListener('mouseleave', function() {
        this.setAttribute('scale', '2 2 2');
        this.setAttribute('color', 'red');
      });
    }
  });