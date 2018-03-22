
Ext.define('GETA18.view.Admin',{
    extend: 'Ext.Container',

    requires: [
        'GETA18.view.AdminController',
        'GETA18.view.AdminModel'
    ],

    controller: 'admin',
    viewModel: {
        type: 'admin'
    },

    items : [{
      xtype : 'titlebar',
      title : 'Admin'
    },
    {
      xtype : 'container',
      layout : {
        type : 'hbox'
      },
      items : [{
        xtype : 'leftSetting',
        itemId : 'leftSetting',
        cls : 'setting',
        flex : 1
      },{
        xtype : 'rightSetting',
        itemId : 'rightSetting',
        cls : 'setting',
        flex : 1
      }]
    },
    {
      xtype : 'button',
      text : 'Launch App',
      cls : 'launch-button',
      docked : 'bottom',
      listeners : {
        tap : 'launchMainApp'
      }
    }]
});
