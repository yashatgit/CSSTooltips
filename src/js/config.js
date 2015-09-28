/**
 * Created by Yash on 25/09/15.
 */

'use strict';
module.exports = {

    default_sliders: {
        "height": {
            min: 31,
            max: 100,
            default: 31
        },

        "width": {
            min: 75,
            max: 350,
            default: 85
        },

        "font-size": {
            min: 10,
            max: 100,
            default: 12
        },

        "border-radius": {
            min: 0,
            max: 100,
            default: 0
        },

        "pointer-size": {
            min: 5,
            max: 100,
            default: 5
        },

        "pn-height": {
            min: 5,
            max: 50,
            default: 5
        }
    },

    tooltipTemplates: {
        default: {
            h: '31',
            w: '85',
            br: '5',
            fntS: '12',
            p: '5',
            bg: '#3d464d',
            tx: '#FFFFFF',
            fnt: 'Georgia'
        },
        1: {
            h: '95',
            w: '125',
            br: '45',
            p: '10',
            bg: '#1CAFEC',
            tx: '#FFFFFF',
            fntS: '16',
            fnt: 'Comic Sans MS'
        }
    },

    example_styles: [
        {
            type: 'Default (bottom)',
            klass: '',
            text: 'bottom'
        },
        {
            type: 'Top',
            klass: ' tt--t',
            text: 'top'
        },
        {
            type: 'Left',
            klass: ' tt--l',
            text: 'left'
        },
        {
            type: 'Right',
            klass: ' tt--r',
            text: 'right'
        },
        {
            type: 'Success',
            klass: ' tt--success',
            text: 'success'
        },
        {
            type: 'Error',
            klass: ' tt--error tt--t',
            text: 'error'
        },
        {
            type: 'Warning',
            klass: ' tt--warn tt--t',
            text: 'warning'
        },
        {
            type: 'Sticky',
            klass: ' tt--sticky tt--t',
            text: 'sticky',
            txtHelp: 'No Need'
        }
    ]
};