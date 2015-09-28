/**
 * Created by Yash on 25/09/15.
 */

//cssTemplate
require('./templates');

//Materialize
require('./libs/materialize');
require('./../css/materialize.css');

//UI slider
var no_ui_slider = require('./libs/nouislider');
require('./../css/nouislider.css');
require('./../css/nouislider.pips.css');

//Color picker
require('./libs/bootstrap-colorpicker');
require('./../css/bootstrap-colorpicker.min.css');

//For code styling
require('./libs/prism');
require('./../css/prism.css');

module.exports = {
    no_ui_slider: no_ui_slider,

    templates: {
        navbar: require('./../html/navbar.html'),
        about: require('./../html/about.html'),
        demo: require('./../html/demo.html'),
        usage: require('./../html/usage.html'),
        diy: require('./../html/diy.html'),
        footer: require('./../html/footer.html')
    }
};
