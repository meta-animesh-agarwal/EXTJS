
Ext.define('GETA18.view.LeftSetting',{
    extend: 'Ext.Container',
    xtype : 'leftSetting',
    requires: [
        'GETA18.view.LeftSettingController',
        'GETA18.view.LeftSettingModel'
    ],
    controller: 'leftsetting',
    viewModel: {
        type: 'leftsetting'
    },
    layout : {
      type : 'vbox'
    },
    
    items : [{
      xtype : 'toolbar',
      margin : '10 0',
      title : 'Functional Settings'
    },{
      xtype : 'container',
      cls : 'settings',
      layout : {
        type : 'hbox'
      },
      items : [{
        xtype : 'label',
        html : 'SEARCHING',
        docked : 'left'
      },{
        xtype : 'togglefield',
        itemId : 'searchToggleButton',
        value : 1,
        docked : 'right'
      }]
    },{
      xtype : 'container',
      cls : 'settings',
      layout : {
        type : 'hbox'
      },
      items : [{
        xtype : 'label',
        html : 'CONTACT IMAGES',
        docked : 'left'
      },{
        xtype : 'togglefield',
        itemId : 'contactImagesButton',
        value : 1,
        docked : 'right'
      }]
    },
    {
      xtype : 'container',
      cls : 'settings',
      layout : {
        type : 'hbox'
      },
      items : [{
        xtype : 'label',
        html : 'SOCIAL ICONS',
        docked : 'left'
      },{
        xtype : 'togglefield',
        itemId : 'socialIconButton',
        value : 1,
        docked : 'right'
      }]
    }]
});
