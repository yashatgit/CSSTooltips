require('./../less/app.less');
require('./../less/tooltip.less');

var D = document,
    externals = require('./external'),
    no_ui_slider = externals.no_ui_slider,

//JSON configuration
    config = require('./config'),

    loadSytleSheet = function (styleContent, id) {
        var jStyles, style, rules;

        jStyles = $("#" + (id || "tooltipDynamicStyles"));

        style = D.createElement("style");
        style.id = id || "tooltipDynamicStyles";
        style.type = "text/css";
        style.media = "all";
        if (style.styleSheet) {
            style.styleSheet.cssText = styleContent;
        } else {
            rules = D.createTextNode(styleContent);
            style.appendChild(rules);
        }

        jStyles[0] && jStyles.remove();
        D.getElementsByTagName("head")[0].appendChild(style);
    },

    loadTooltipTemplate = function (templateId) {
        var that = this,
            loadedConfig = config.tooltipTemplates[templateId];

        if (_.isEmpty(loadedConfig)) {
            loadedConfig = window.tooltipTemplates.default;
        }

        that.jTooltipWidth.noUiSlider.set(loadedConfig.w);
        that.jTooltipHeight.noUiSlider.set(loadedConfig.h);
        that.jBorderRadius.noUiSlider.set(loadedConfig.br);
        that.jPointerWidth.noUiSlider.set(loadedConfig.p);
        that.jFntSize.noUiSlider.set(loadedConfig.fntS);

        //jFont.val(config.fnt);

        that.jBgColor.colorpicker('setValue', loadedConfig.bg);
        that.jTxtColor.colorpicker('setValue', loadedConfig.tx);

        updateStyleSheet();
    },

    updateStyleSheet = _.debounce(function () {
        var that = this,
            styleSheet = window.JST["tooltipCSSTemplate.html"]({
                tooltipHeight: that.jTooltipHeight.noUiSlider.get(),
                tooltipWidth: that.jTooltipWidth.noUiSlider.get(),
                tooltipFontSize: that.jFntSize.noUiSlider.get(),
                pointerWidth: that.jPointerWidth.noUiSlider.get(),
                tooltipBorderRadius: that.jBorderRadius.noUiSlider.get(),
                tooltipTextColor: that.jTxtColor.data('colorpicker').color.toHex(),
                tooltipBgColor: that.jBgColor.data('colorpicker').color.toHex(),
                fontFamily: that.jFont.val(),
                tooltipClass: '.tt-demo'
            });

        loadSytleSheet(styleSheet);
        that.jCssBody.html(styleSheet);
        //jHtmlBody.html($.trim('"' + $('.gen-parent').html()) + '"');
    }, 10),

    initEvents = function () {

        //Overridden by materialize. Show explicitly
        $('.col-pic-input').on('click', function () {
            $(this.closest('.input-field')).colorpicker('show');
        });

        //position select
        $('.gen-layout').on('change', function (e) {
            $('.tt-demo').removeClass('tt-demo--t tt-demo--b tt-demo--l tt-demo--r').addClass(('tt-demo--') + $(e.target).val());
        });

        $('.update').on('change', function (e) {
            updateStyleSheet();
        });
    },

    initSliders = function () {
        var jSlider, configuration;

        $('.gen-content-slider').each(function (i, el) {
            jSlider = $(el);
            configuration = config.default_sliders[jSlider.attr('data-config')] || {};

            no_ui_slider
                .create(el, {
                    start: configuration.default,
                    connect: 'lower',
                    step: 1,
                    range: {
                        'min': configuration.min || 0,
                        'max': configuration.max || 100
                    },
                    pips: {
                        mode: 'positions',
                        values: [0, 50, 100],
                        density: 10
                    }
                });

            el.noUiSlider.on('update', function () {
                updateStyleSheet()
            });
        });
    },

    initColorPickers = function () {
        var primaryColors = {
                'primary': '#337ab7',
                'success': '#5cb85c',
                'info': '#5bc0de',
                'warning': '#f0ad4e',
                'danger': '#d9534f'
            },
            onPickerColorChange = function (event) {
                $(event.currentTarget).find('.material-icons').css('color', event.color.toHex());
                updateStyleSheet();
            };

        $('.bg-col').colorpicker({
            colorSelectors: $.extend({}, {
                'default': '#3d464d'
            }, primaryColors),
            color: '#3d464d'
        })
            .on('changeColor.colorpicker', onPickerColorChange);

        $('.fn-col').colorpicker({
            colorSelectors: $.extend({}, {
                'default': '#ffffff'
            }, primaryColors),
            color: '#ffffff'
        })
            .on('changeColor.colorpicker', onPickerColorChange);
    },

    addHtmlTemplates = function () {
        var jDomFrag = $(''),
            styles = config.example_styles,
            appTemplates = externals.templates;


        $('.page-header').html(appTemplates.navbar);
        $('.page-about').html(appTemplates.about);
        $('.page-demo').html(appTemplates.demo);
        $('.page-usage').html(appTemplates.usage);
        $('.page-diy').html(appTemplates.diy);
        $('.page-footer').html(appTemplates.footer);

        _.forEach(styles, function (style) {
            jDomFrag = jDomFrag.add('<tr><td>' + style.type + '</td>' +
                '<td><pre><code class="language-markup">&lt;span class="tt' + style.klass + '"&gt;&lt;/span&gt;</code></pre></td>' +
                '<td><u><span class="tt' + style.klass + '" data-title="' + style.text + '">' + (style.txtHelp || 'Hover over me') + '</span></u></td></tr>');
        });

        $('.tooltip-samples').html(jDomFrag);

        initVars();
    },

    initVars = function () {
        var that = this;

        that.jTooltipWidth = $('.gen-tt-width')[0];
        that.jTooltipHeight = $('.gen-tt-height')[0];
        that.jBorderRadius = $('.gen-tt-bradius')[0];
        that.jPointerWidth = $('.gen-tt-pointersize')[0];
        that.jFntSize = $('.gen-tt-fontsize')[0];

        that.jBgColor = $('.gen-color--bg');
        that.jTxtColor = $('.gen-color--font');

        that.jFont = $('.gen-font');

        that.jCssBody = $('.css-body');
    },

    init = function () {

        addHtmlTemplates();

        $('select').material_select();
        $('.scrollspy').scrollSpy();
        $('.collapsible').collapsible();

        initSliders();
        initColorPickers();
        initEvents();

        ////loadTooltipTemplate();

        updateStyleSheet();
    };

init();