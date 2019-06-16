var objectMerge = require('object-merge');
var postcss     = require('postcss');

module.exports = postcss.plugin('postcss-group', function (options) {

    options = options || {};

    var DEFAULTS = require('group-css-properties');

    var PROPS = objectMerge(DEFAULTS, options);

    return function (css) {

        css.walkRules(function (rule) {
            rule.each(function(decl) {

                var prop = decl.prop;
                var propValue = decl.value.split(' ');

                if (!PROPS.hasOwnProperty(prop)) return;
                if (propValue == 'undefined') return;

                var properties = PROPS[prop];

                properties.forEach(function (property, index) {
                    decl.cloneBefore({
                        prop: properties[index],
                        value: propValue[index]
                    });
                });

                decl.remove();

            });
        });

    };
});
