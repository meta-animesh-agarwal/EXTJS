
Ext.define('GETA18.view.RegistrationForm',{
    extend: 'Ext.form.Panel',
    xtype : 'registrationForm',
    style : 'background : white;',
    requires: [
        'GETA18.view.RegistrationFormController',
        'GETA18.view.RegistrationFormModel'
    ],

    controller: 'registrationform',
    viewModel: {
        type: 'registrationform'
    },
    title: 'Add Contact',

     items: [{
         xtype: 'fieldset',
         title: 'Contact Information',
         defaultType: 'textfield',
         margin: '20 0 0',
         items: [{
             label: 'Full Name',
             allowBlank: false,
             required: true,
             itemId : 'fullName',
             name: 'name'
         },{
             label: 'Designation',
             allowBlank: false,
             required: true,
             itemId : 'designation',
             name: 'designation'
         },{
             label: 'Employee ID',
             allowBlank: false,
             required: true,
             itemId : 'empid',
             name: 'Employee ID'
         },{
             label: 'Address',
             allowBlank: false,
             required: true,
             itemId : 'address',
             name: 'address'
         },{
             xtype: 'emailfield',
             label: 'Email',
             name: 'email',
             allowBlank: false,
             required: true,
             itemId : 'email',
             validators: 'email'
         }, {
             label: 'Interest',
             allowBlank: false,
             required: true,
             itemId : 'interest',
             name: 'interest'
         },{
             label: 'Remarks',
             allowBlank: false,
             required: true,
             itemId : 'remarks',
             name: 'remarks'
         },{
             label: 'Profile Pic URL',
             itemId : 'profilePic',
             name: 'pic'
         }]
     }],
     buttons: [{
         text: 'Add',
         listeners : {
           tap : 'onRegister'
         }
     },
     {
       text: 'Cancel',
       listeners : {
         tap : 'onCancel'
       }
     }]
});
