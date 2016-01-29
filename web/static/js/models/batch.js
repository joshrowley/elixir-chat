import socket from '../socket'
import Backbone from 'backbone'

const Batch = Backbone.Model.extend({
  initialize () {
    socket
      .channel('batches:lobby', {})
      .join()
      .receive('error', () => console.log('Connection error'))
      .receive('ok', () => console.log('Connected'))
  }
})

export default Batch
