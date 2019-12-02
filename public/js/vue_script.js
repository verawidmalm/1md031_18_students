var socket = io();

var vm = new Vue({
  el: '#myID',
 data: {
    burgers: food,
    orderList:"",
    fullName:"",
    email:"",
    selectedpayment:"",
    chosenburger:[],
    personalInformation:{},
    gender:"",
    orders: {},
    details:{},
},


  methods:{

    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    displayOrder: function(event){
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

            this.details= { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y };


    },

    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: this.details,
                                orderItems: [
                                  this.chosenburger
                                ],
                                personalInformation: [
                                  this.fullName,
                                  this.email,
                                  this.selectedpayment,
                                  this.gender,
                                  ],

                              });
            this.orderList=" Order confirmation :"+ "Your order: " +this.chosenburger + "  Your name: " + this.fullName +", Gender: " +this.picked + "Your email: " + this.email + " Payment method: "+ this.selectedpayment

                            },

    }

});
