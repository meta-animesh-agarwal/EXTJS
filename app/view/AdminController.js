Ext.define('GETA18.view.AdminController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin',
    config : {
      adminView : null,
      rightSettingController : null,
      leftSettingController : null
    },
    routes : {
            'admin' : 'onAdmin'
    },

    onAdmin : function() {
      this.redirectTo('admin');
    },

    init : function(){
      adminView = this.getView();
      var leftSetting = adminView.down("#leftSetting");
      this.setLeftSettingController(leftSetting.getController());
      leftSetting.getController().setParentViewController(this);

      var rightSetting = adminView.down("#rightSetting");
      this.setRightSettingController(rightSetting.getController());
      rightSetting.getController().setParentViewController(this);
      this.redirectTo('admin');

    },

    launchMainApp : function(button , e , eOpts){
      Ext.Msg.confirm('Confirmation', 'Are you sure you want to launch app?', function(e){
        if(e == 'yes') {
            var leftSetting = adminView.down("#leftSetting");
            var rightSetting = adminView.down("#rightSetting");

            var searchToggleData = leftSetting.down('#searchToggleButton').getValue();
            var contactImageData = leftSetting.down('#contactImagesButton').getValue();
            var socialIconData = leftSetting.down('#socialIconButton').getValue();
            var applicationName = rightSetting.down('#applicationName').getValue();
            var fieldTypeName = rightSetting.down('#fieldTypeName').getValue();

            var obj = {
              'configure' : {
                          'searchToggleData' : searchToggleData,
                          'contactImageData' : contactImageData,
                          'socialIconData' : socialIconData
                        },
              'labels' : {
                          'applicationName' : applicationName,
                          'fieldTypeName' : fieldTypeName
                        }
            };
            localStorage.setItem('settings' , JSON.stringify(obj));

            var mainApp = Ext.create('GETA18.view.Main' , {
              cls : 'MainApp',
              margin : 0,
              width : '100%',
              height : '100%',
              showAnimation : {
                type : 'fade',
                duration : 300
              },
              hideAnimation : {
                type : 'fadeOut',
                duration : 300
              }
            });
            adminView.hide();
            mainApp.showBy();
      }
  })
}
}
)
