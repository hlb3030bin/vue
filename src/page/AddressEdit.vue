<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :address-info="ddressInfo"
      :address-text="addressText"
      :show-postal="showPostal"
      :show-set-default="showSetDefault"
      :show-search-result="showSearchResult"
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>


<script>
  import {Toast, Dialog} from 'vant'
  import {createNamespacedHelpers} from 'vuex'

  const {mapActions, mapState} = createNamespacedHelpers('address')

  let addressText = '收货'
  let showPostal = true
  let showSetDefault = false
  let showSearchResult = true

  export default {
    data() {
      return {
        areaList: {},
        ddressInfo: {},
        searchResult: [],
        addressText,
        showPostal,
        showSetDefault,
        showSearchResult
      }
    },
    mounted: function () {
      let tickctid = this.$route.query.ticket
      this.getaddressinit().then(res => {
        this.areaList = res
      })
      this.initticket(tickctid)
      this.getticketaddress(tickctid).then(res => {
        this.ddressInfo = res
      })
    },
    methods: {
      ...mapActions([
        'checkticket',
        'upticket',
        'initticket',
        'getaddressinit',
        'getticketaddress'
      ]),
      ...mapState({id: state => state.ticketno}),
      onSave(address) {
        this.checkticket(this.id()).then(res => {
          if (res.code === '1') {
            this.upticket(address)
          } else {
            Dialog.alert({message: res.message}, () => {
            })
          }
        })
      },
      onDelete() {
        Toast('delete')
      }
    }
  }
</script>

<style scoped>

</style>
