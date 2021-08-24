<template>
    <div>
        <div v-if="modalStatus === 'topUp'">
            <TopUp @modal='closeModal' />
        </div>
        <div v-if="modalStatus === 'withdraw'">
            <Withdraw @modal='closeModal' />
        </div>
        <div v-if="modalStatus === 'changeMoney'">
            <ChangeMoney @modal='closeModal' />
        </div>
        <div v-if="modalStatus === 'returnBalance'">
            <ReturnBalance @modal='closeModal'/>
        </div>
        <div v-if="modalStatus === 'more'">
            <More @modal='closeModal'/>
        </div>
    </div>
</template>

<script>
import TopUp from './topUp'
import Withdraw from './withdraw'
import ChangeMoney from './changeMoney'
import ReturnBalance from './returnBalance'
import More from './more'

export default {
    name: 'menuModal',
    components: { ChangeMoney, Withdraw, TopUp, ReturnBalance, More },
    props: ['modalStatus'],
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
        }
    }
}
</script>

<style scoped>

</style>
