/* eslint-disable space-before-function-paren,space-before-blocks,no-trailing-spaces,padded-blocks,no-multiple-empty-lines */
import areaList from '../mock/area.json'

export function getAddressInit() {
  let vl = areaList
  return vl
}

export function getTicketAddress(ticket) {
  return {
    address_detail: '3212321',
    area_code: '150203',
    city: '包头市',
    county: '昆都仑区',
    is_default: false,
    name: 'huangdage',
    postal_code: '322131',
    province: '内蒙古自治区',
    tel: '15268151476'
  }
}

export function upTicketAddress() {
  return {}
}
export function checkTicket() {
  return {code: '0', message: '订单已经发出不能修改！'}
}
