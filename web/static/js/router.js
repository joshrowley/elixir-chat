import Backbone from 'backbone'
import Batch from './models/batch'

const Router = Backbone.Router.extend({
  routes: {
    'batches': 'batches',
    'batches/:batchID': 'showBatch'
  },

  batches () {
    console.log('on batches index page')
  },

  showBatch (batchID) {
    window.batch = new Batch({id: batchID})
  }
})

export default Router
