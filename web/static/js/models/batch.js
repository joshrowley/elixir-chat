import socket from '../socket'
import Backbone from 'backbone'

const Batch = Backbone.Model.extend({
  initialize () {
    socket
      .channel('batches:' + this.id, {})
      .join()
      .receive('error', () => console.log('Connection error'))
  }
})

export default Batch
