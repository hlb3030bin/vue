import {INIT_TICKET} from '../mutation_types'
import * as service from '../../services/address'

export default {
  namespaced: true,
  state: {
    ticketno: ''
  },
  mutations: {
    [INIT_TICKET](state, info) {
      state.ticketno = info
    }
  },
  actions: {
    initticket({commit}, info) {
      commit(INIT_TICKET, info)
    },
    upticket(address) {
      console.log(address)
    },
    checkticket(id) {
      return service.checkTicket(id)
    },
    getaddressinit() {
      return service.getAddressInit()
    },
    getticketaddress(tickctid) {
      return service.getTicketAddress(tickctid)
    }

  }
}
