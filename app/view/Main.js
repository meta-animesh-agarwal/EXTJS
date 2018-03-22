
Ext.define('GETA18.view.Main',{
    extend: 'Ext.Container',
    xtype : 'mainView',
    requires: [
        'GETA18.view.MainController',
        'GETA18.view.MainModel'
    ],

    // plugins : 'responsive',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout : {
      type : 'vbox'
    },
    items : [{
        xtype : 'toolbar',
        title : 'GET ADVANCE 2018',
        itemId : 'header',
        layout :{
          type : 'fit'
        },
        cls : 'header',
        items : [{
          xtype : 'button',
          iconCls : 'md-icon-menu',
          cls : 'titlebarIcon',
          listeners : {
            tap : 'collapseMenu'
          },
          docked : 'left'
        },{
          xtype : 'container',
          docked : 'right',
          layout : {
            type : 'hbox',
            align : 'middle'
          },
          items : [{
            xtype : 'button',
            iconCls : 'md-icon-notifications',
            cls : 'titlebarIcon'
          },{
            xtype : 'button',
            iconCls : 'md-icon-settings',
            cls : 'titlebarIcon'
          },{
            xtype : 'image',
            cls : 'titlebar-image',
            itemId : 'titlebarImage',
            src : 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
            width : 35,
            height : 35
          }]

        }]
      },{
        xtype : 'container',
        itemId : 'mainBody',
        cls : 'main-body',
        flex : 1,
        layout : {
          type : 'hbox'
        },
        items : [{

            xtype : 'leftPanel',
            docked : 'left',
            plugins : 'responsive',
            responsiveConfig: {
               'width < 800': {
                   hidden: true,
                   modal: true,
                   hideOnMaskTap: true,
                   scrollable: true
               },

               'width >= 800': {
                   hidden: false,
                   modal : false
               },
           },
            width : 280,
            itemId : 'leftPanel',
            cls : 'left-panel',
            showAnimation : {
              type : 'slide',
              duration : 100,
              direction : 'right'
            },
            hideAnimation : {
              type : 'slideOut',
              duration : 100,
              direction : 'left'
            }
          },{
            xtype : 'rightPanel',
            flex : 1,
            itemId : 'rightPanel',
            cls : 'right-panel'

        }]
      },{
        xtype : 'toolbar',
        itemId : 'footer',
        cls : 'footer',
        docked : 'bottom'
    }]
});
