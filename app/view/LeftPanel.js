
Ext.define('GETA18.view.LeftPanel',{
    extend: 'Ext.panel.Panel',
    xtype : 'leftPanel',
    requires: [
        'GETA18.view.LeftPanelController',
        'GETA18.view.LeftPanelModel'
    ],
    pulgins : 'responsive',

    controller: 'leftpanel',
    viewModel: {
        type: 'leftpanel'
    },

    layout : {
      type : 'vbox'
    },
    items : [{
              xtype: 'searchfield',
              itemId : 'searchField',
              placeholder: 'Search',
              cls : 'searchField'
    },{
      xtype : 'list',
      height : '100%',
      itemId : 'contactList',
      cls : 'contact-list',
      listeners : {
        childtap : 'contactListItemTap'
      },

      // store : Ext.create('Ext.data.Store',{
      //   storeId : 'userStore',
      //   autoLoad : true,
      //   proxy : {
      //     type : 'ajax',
      //     url : 'app/Json/user.json',
      //     reader : {
      //       type : 'json',
      //       rootProperty : 'data'
      //     }
      //   },
      // }),
      itemTpl : new Ext.XTemplate(
        '<div style="display:flex;">',
          '<div>',
            '<tpl if="isShow()">',
              '<img src="{image}" style = "border-radius : 50%; width : 35px;">',
            '<tpl else>',
              '<img src="https://goo.gl/2Ct8aB" style = "border-radius : 50%; width : 35px;">',
            '</tpl>',
          '</div>',
          '<div style="padding : 0 10px;flex:1">',
              '<div style="font-size : 14px ">',
                '{name}',
              '</div>',
              '<div style="font-size : 12px ; color : #a1a1a1">',
                '{designation}',
              '</div>',
          '</div>',
        '<div>'
      )
    },{
      xtype : 'button',
      iconCls : 'md-icon-add',
      ui : 'round',
      floating : true,
      height : 50,
      width : 50,
      cls : 'add-button',
      tooltip : {
        html : 'Add Contact'
      },
      listeners : {
        tap : 'registrationForm'
      }
    }]
});
