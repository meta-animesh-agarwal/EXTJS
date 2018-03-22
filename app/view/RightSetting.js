
Ext.define('GETA18.view.RightSetting',{
    extend: 'Ext.Container',
    xtype : 'rightSetting',
    requires: [
        'GETA18.view.RightSettingController',
        'GETA18.view.RightSettingModel'
    ],
    controller: 'rightsetting',
    viewModel: {
        type: 'rightsetting'
    },
    layout : {
      type : 'vbox'
    },
    items : [{
      xtype : 'toolbar',
      margin : '10 0',
      title : 'Label Settings'
    },{
      xtype : 'container',
      cls : 'settings',
      layout : {
        type : 'hbox'
      },
      items : [{
        xtype : 'label',
        html : 'APPLICATION NAME',
        docked : 'left'
      },{
        xtype : 'textfield',
        itemId : 'applicationName',
        placeholder : 'Application Name',
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
        html : 'FILTER FIELD NAME',
        docked : 'left'
      },{
        xtype : 'textfield',
        itemId : 'fieldTypeName',
        placeholder : 'Field Name',
        docked : 'right'
      }]
    }
    ]
});
