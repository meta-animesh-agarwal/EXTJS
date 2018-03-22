Ext.define('GETA18.view.RightPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rightpanel',
    config : {
      parentViewController : null,
      showProfileImage : null
    },

    populateView : function(data){
      this.getView().down("#profileName").setHtml(data.name);
      this.getView().down("#profileDesignation").setHtml(data.designation);
      this.getView().down("#profileImage").setSrc(data.image);
      this.getView().down("#emailId").setHtml(data.email);
      this.getView().down("#address").setHtml(data.address);
      this.getView().down("#empId").setHtml(data.employeeID);
      this.getView().down("#interest").setHtml(data.interest);
      this.getView().down("#remarks").setHtml(data.remarks);
    }
});
