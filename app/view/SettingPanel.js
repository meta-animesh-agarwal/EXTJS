
Ext.define('GETA18.view.SettingPanel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.SettingPanelController',
        'GETA18.view.SettingPanelModel'
    ],

    controller: 'settingpanel',
    viewModel: {
        type: 'settingpanel'
    },

    html: 'Hello, World!!'
});
