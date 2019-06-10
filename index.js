var objectMerge = require('object-merge');
var postcss     = require('postcss');

module.exports = postcss.plugin('postcss-group', function (options) {

    options = options || {};

    var DEFAULTS = require("group-css-properties");

    var PROPS = objectMerge(DEFAULTS, options);

    return function (css) {

        css.walkRules(function (rule) {
            console.log(rule)
            console.log('------');
            rule.each(function(decl) {

                var prop = decl.prop;
                var propValue = decl.value.split(" ");

                if (!PROPS.hasOwnProperty(prop)) return;

                var properties = PROPS[prop];

                var propertiesLenght = properties.lenght;
                var propValueLenght = propValue.lenght;
                if (properties.lenght > propValueLenght) {

                }
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
