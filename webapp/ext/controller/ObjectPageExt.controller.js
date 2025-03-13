sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        sayHello: function(oEvent) {
            console.log(this.getView().getBindingContext());
            console.log(this.getView().getModel());

            const object = this.getView().getBindingContext().getObject();
            console.log(object);

            MessageToast.show("Hello E.ON! Product: " + object.ProductID);
        }
    };
});