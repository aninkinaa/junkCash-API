const { postPhoto, addingOrder, gettingAllOrders, gettingOrderByEmail, gettingOrderById, canceledStatus, completedStatus, gettingTotalPrice, deleteOrder} = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/orders',
      handler: addingOrder,
    },

    {
      method: 'POST',
      path: '/photos',
      handler: postPhoto,
    },

    {
      method: 'GET',
      path: '/orders',
      handler: gettingAllOrders,
    },

    {
      method: 'GET',
      path: '/orders/email/{email}',
      handler: gettingOrderByEmail,
    },

    {
      method: 'GET',
      path: '/orders/{id}',
      handler: gettingOrderById,
    },

    {
      method: 'GET',
      path: '/orders/{username}/totalprice',
      handler: gettingTotalPrice
    },

    {
      method: 'PUT',
      path: '/orders/{id}/completed',
      handler: completedStatus,
    },

    {
      method: 'PUT',
      path: '/orders/{id}/canceled',
      handler: canceledStatus,
    },
    {
      method: 'DELETE',
      path: '/orders/{id}',
      handler: deleteOrder
    }

]
module.exports = routes;