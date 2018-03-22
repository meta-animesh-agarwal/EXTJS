Ext.define('GETA18.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    config : {
      rightPanelController : null ,
      leftPanelController : null,
      mainView : null
    },
    routes : {
            'home' : 'onHome',
    },

    onHome : function() {
      this.redirectTo('home');
    },
    init : function(){
      this.setMainView(this.getView());
      mainView = this.getView();
      var leftPanel = mainView.down("#leftPanel");
      this.setLeftPanelController(leftPanel.getController());
      leftPanel.getController().setParentViewController(this);
      var rightPanel = mainView.down("#rightPanel");
      this.setRightPanelController(rightPanel.getController());
      rightPanel.getController().setParentViewController(this);

      var settings = JSON.parse(localStorage.getItem('settings'));
      if(!settings.configure.searchToggleData){
        leftPanel.down('#searchField').hide();
      }
      if(!settings.configure.socialIconData){
        rightPanel.down('#facebookButton').hide();
        rightPanel.down('#twitterButton').hide();
        rightPanel.down('#linkedinButton').hide();
      }

      if(settings.labels.applicationName != null){
        mainView.down("#header").setTitle(settings.labels.applicationName);
        console.log(settings.labels.applicationName);
      }

      if(settings.labels.fieldTypeName != null){
        leftPanel.down('#searchField').setPlaceholder(settings.labels.fieldTypeName);
      }

    leftPanel.getController().setShowProfileImage(settings.configure.contactImageData);
    rightPanel.getController().setShowProfileImage(settings.configure.contactImageData);
    this.redirectTo('home');

    },

    collapseMenu : function(button , e , eOpts){

      var leftPanel = mainView.down("#leftPanel");
      var view = leftPanel.getLayout();
      if(leftPanel.getHidden()){
        leftPanel.showBy();
      }
      else{
        leftPanel.hide();
      }
    }
});
