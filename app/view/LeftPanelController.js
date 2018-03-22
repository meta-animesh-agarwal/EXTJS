Ext.define('GETA18.view.LeftPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leftpanel',
    config : {
      parentViewController : null,
      showProfileImage : null
    },
    routes : {
            'home/employee:id' : 'employee',
    },

    employee : function(id) {
      this.redirectTo('home/employee'+id);
    },
    init : function(){
      var me = this;
      var list = this.getView().down('#contactList')

      isShow = function(){
        return me.getShowProfileImage();
      };

      Ext.Ajax.request({
        url: 'http://172.16.50.111:8080/getAllEmployee' ,
        method: 'GET',

        }).then (function(response, opts) {
          var obj = Ext.decode(response.responseText);
          list.setStore(obj);
        },
        function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
        });
    },

    contactListItemTap : function(list, location, eOpts){
      this.getParentViewController().getMainView().down('#titlebarImage').setSrc(location.record.data.image);
      this.getParentViewController().getRightPanelController().populateView(location.record.data);
      this.redirectTo('home/employee/'+location.record.data.empid);
    },

    registrationForm : function(button, e, eOpts){
      var contactForm = Ext.create('GETA18.view.RegistrationForm' , {
        itemId : 'contactForm',
        height : '80%',
        width : '40%',
        modal : true,
        hideOnMaskTap : true,
        style : 'margin:auto;',
        showAnimation : {
          type : 'fadeIn',
          duration : 300,
          direction : 'left'
        },
        hideAnimation : {
          type : 'fadeOut',
          duration : 300,
          direction : 'right'
        }
      });

      contactForm.showBy(Ext.Viewport, "c-c");
      contactForm.getController().setLeftPanelViewController(this);
    },



});
