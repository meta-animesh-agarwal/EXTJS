
Ext.define('GETA18.view.RightPanel',{
    extend: 'Ext.Container',
    xtype : 'rightPanel',
    requires: [
        'GETA18.view.RightPanelController',
        'GETA18.view.RightPanelModel'
    ],

    controller: 'rightpanel',
    viewModel: {
        type: 'rightpanel'
    },

    style : 'background-color:#fafafa;',


    layout : {
      type : 'vbox'
    },

    items : [

      {
          xtype : 'container',
          cls : 'right-panel-upper',
          margin : '10 20',
          height : 150,
          layout : {
            type : 'hbox',
            align : 'middle'
          },
          items : [{
            xtype: 'image',
            plugins : 'responsive',
            cls : 'profile-image',
            itemId : 'profileImage',
            docked : 'left',
            responsiveConfig : {
              'width < 400': {
                hidden : true
              },
              'width >= 400' : {
                hidden : false
              }

            },
          },{
          xtype : 'container',
          flex : 1,
          margin : '0 20',
          layout : {
            type : 'vbox',
          },
          items : [{
              xtype : 'label',
              cls : 'nameStyle',
              itemId : 'profileName',
              html : 'Anshul Agarwal'
            },{
              xtype : 'label',
              cls : 'designationStyle',
              itemId : 'profileDesignation',
              html : 'Software Trainee'
            }]
            },
          {
            xtype : 'container',
            docked : 'right',
            plugins : 'responsive',
            flex : 1,
            responsiveConfig : {
              'width < 855 && width >= 800': {
                layout : {
                  type : 'vbox',
                  pack : 'center'
                }
              },
              'width >= 855': {
                layout : {
                  type : 'hbox',
                  align : 'middle',
                  pack : 'center'
                },
              },
              'width < 800': {
                layout : {
                  type : 'hbox',
                  align : 'middle',
                  pack : 'center'
                },
              },
              'width < 570 ': {
                layout : {
                  type : 'vbox',
                  pack : 'center'
                }
              }
            },

            items : [
              {
              xtype : 'button',
              itemId : 'facebookButton',
              tooltip : {
                html : 'facebook'
              },
              iconCls : 'x-fa fa-facebook-square',
              cls : 'socialIcon'
            },{
              xtype : 'button',
              itemId : 'twitterButton',
              tooltip : {
                html : 'Twitter handle'
              },
              iconCls : 'x-fa fa-twitter',
              cls : 'socialIcon'
            },{
              xtype : 'button',
              itemId : 'linkedinButton',
              tooltip : {
                html : 'Linkedin profile'
              },
              iconCls : 'x-fa fa-linkedin',
              cls : 'socialIcon'
          }]
        }]
      }
    ,{
      xtype : 'container',
        style : 'background-color:#fff;',
      cls : 'right-panel-down',
      margin : '10 20',
      flex : 1,
      layout : {
        type : 'vbox',
      },
      items : [{
        xtype : 'container',
        cls : 'border',
        flex : 1,
        layout : {
          type : 'hbox',
          align : 'middle'
        },
        items :  [
          {
            xtype : 'button',
            iconCls : 'md-icon-email',
            tooltip : {
              html : 'Email'
            },
            cls : 'icons'
          },

          {
            xtype : 'fieldset',
            itemId : 'emailId',
            cls : 'email-id size'
        }]
      },
      {
        xtype : 'container',
        cls : 'border',
        flex : 1,
        layout : {
          type : 'hbox',
          align : 'middle'
        },
        items :  [{
            xtype : 'button',
            iconCls : 'x-fa fa-address-book',
            tooltip : {
              html : 'Address'
            },
            cls : 'icons'
          },
          {
            xtype : 'fieldset',
            itemId : 'address',
            cls : 'address size'
        }]
      },
      {
        xtype : 'container',
        cls : 'border',
        flex : 1,
        layout : {
          type : 'hbox',
          align : 'middle'
        },
        items :  [{
            xtype : 'button',
            iconCls : 'md-icon-perm-identity',
            tooltip : {
              html : 'Employee ID'
            },
            cls : 'icons'
          },
          {
            xtype : 'fieldset',
            itemId : 'empId',
            cls : 'employee-id size'
        }]
      },
      {
        xtype : 'container',
        cls : 'border',
        flex : 1,
        layout : {
          type : 'hbox',
          align : 'middle'
        },
        items :  [{
            xtype : 'button',
            iconCls : 'x-fa fa-info',
            tooltip : {
              html : 'Interest'
            },
            cls : 'icons'
          },
          {
            xtype : 'fieldset',
            itemId : 'interest',
            cls : 'interest size'
        }]
      },
      {
        xtype : 'container',
        cls : 'border',
        flex : 1,
        layout : {
          type : 'hbox',
          align : 'middle'
        },
        items :  [{
            xtype : 'button',
            iconCls : 'x-fa fa-edit',
            enableToggle : false,
            tooltip : {
              html : 'Remarks'
            },
            cls : 'icons'
          },
          {
            xtype : 'fieldset',
            itemId : 'remarks',
            cls : 'remarks size'
        }]
      }
    ]
    }]
});
