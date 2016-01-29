import socket from '../socket'
import Backbone from 'backbone'

const Batch = Backbone.Model.extend({
  initialize () {
    this.channel = socket.channel('batches:lobby', {})

    this.channel
      .join()
      .receive('error', () => console.log('Connection error'))
      .receive('ok', () => console.log('Connected'))
  },

  send (message) {
    this.channel.push('new:message', {
      body: message
    })
  }
})

export default Batch
