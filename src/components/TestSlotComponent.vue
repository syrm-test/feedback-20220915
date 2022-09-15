<script lang="tsx">
import { defineComponent, shallowRef } from '@vue/runtime-core'

/**
 * TestSlotComponent
 * @author 琉璃
 * @date 2022-09-15 17:44:42
 **/
export default defineComponent({

    render() {
        const AllSlot = shallowRef(Object.keys(this.$slots).length > 0 ? this.$slots : <span>11</span>)

        const All = Object.keys(this.$slots)
            .map(slotName => {
                const SlotEl = this.$slots[slotName]
                return (
                    <div>
                        <h1>{ slotName }</h1>
                        {/* @ts-ignore */}
                        <SlotEl/>
                    </div>
                )
            })

        return (
            <div class="test-component">
                <h1>TestSlotComponent</h1>

                <h2>这里都是 slot 👇</h2>
                <div class="slot-container">
                    { All }
                </div>
            </div>
        )
    },

})
</script>

<style lang="sass" scoped>
.test-component
    min-width: 1000px
    max-width: 60vw

    .slot-container
        box-shadow: 0 0 15px rgba(1, 1, 1, .2)
        padding: 20px

</style>
