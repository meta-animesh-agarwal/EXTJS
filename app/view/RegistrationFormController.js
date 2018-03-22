Ext.define('GETA18.view.RegistrationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registrationform',
    requires : [
      'Ext.MessageBox'
    ],
    config : {
      leftPanelViewController : null
    },

    onRegister: function(button, location, eOpts) {
      var form = this.getView();
      view = this;
      if(true){
        var name = form.down('#fullName').getValue();
        var designation = form.down('#designation').getValue();
        var address = form.down('#address').getValue();
        var email = form.down('#email').getValue();
        var interest = form.down('#interest').getValue();
        var remarks = form.down('#remarks').getValue();
        var profilePic = form.down('#profilePic').getValue();
        var employeeId = form.down('#empid').getValue();
        if(profilePic == null){
          profilePic = "https://goo.gl/2Ct8aB";
        }

        var items = {
          'employeeID' : employeeId,
          'name' : name,
          'image' : profilePic,
          'designation' : designation,
          'address' : address,
          'email' : email,
          'interest' : interest,
          'remarks' : remarks
        }
        Ext.Ajax.request({
          url: 'http://172.16.50.111:8080/add' ,
          method: 'POST',
          jsonData: items
        }).then (function(response, opts) {

          },
          function(response, opts) {
            console.log('server-side failure with status code ' + response.status);
          });
        form.hide();
        Ext.Msg.alert('Registered Successfully');
        var leftPanel = view.getLeftPanelViewController();
        list = leftPanel.getView().down('#contactList');
        Ext.Ajax.request({
          url: 'http://172.16.50.111:8080/getAllEmployee' ,
          method: 'GET'
        }).then (function(response, opts) {
          console.log(response);


            var obj = Ext.decode(response.responseText);
            console.log(obj);
            list.setStore(obj);
          },
          function(response, opts) {
            console.log('server-side failure with status code ' + response.status);
          });

        //
        // obj.onsuccess = function(){
        //   list.setStore(obj.result);
        // }
        form.destroy();
        };
      },

    onCancel: function(list, location, eOpts) {
      this.getView().hide();
    },

});
