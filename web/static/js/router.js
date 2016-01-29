import Backbone from "backbone"

const Router = Backbone.Router.extend({
  routes: {
    'batches': 'batches',
    'batches/:batchID': 'showBatch'
  },

  batches () {
    console.log('on batches index page')
  },

  showBatch (batchID) {
    console.log('on batch show page')
  }
})

export default Router
