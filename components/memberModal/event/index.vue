<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[35rem] overflow md:w-[30rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-6'>
                        <div class='text-2xl flex items-center'>
                            <span class='text-white'>
                                กิจกรรม
                            </span>
                        </div>
                        <div @click='closeModal' class='cursor-pointer'>
                            <svg-icon
                                name='carbon_close-filled'
                                width='25'
                                height='25'
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src='~/assets/image/event-modal.png' alt=''>
                        </div>
                        <div class='mt-3 text-white'>
                            กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)
                        </div>
                        <div class='text-sm text-[#FFCF5A] border-b border-white py-2'>
                            ไม่จำกัด รับแล้ว 48 ท่าน
                        </div>
                        <div class='text-xs text-white font-light leading-normal mt-2'>
                            <div>เงื่อนไข</div>
                            <div>- แจกเครดิตฟรี 300 บาท</div>
                            <div>- ไม่ทำเทิร์น</div>
                            <div>- ถอนขั้นต่ำ 300 บาท</div>
                            <div>* ต้องทำตามเงื่อนไขด้านล่างให้ครบ</div>
                            <div>กติกา</div>
                            <div>1. อัดคลิปรีวิวเว็บไซต์ ALLBETPUSSY888ลงในช่องยูทูปของตนเองที่มียอดผู้ติดตาม5,000คนหรือมากกว่า</div>
                            <div>2. ติดแฮชแท็ก #ALLBETPUSSY888 #แจกเครดิตฟรี #slot #เกมสล็อต #สล็อตออนไลน์ #pussy888</div>
                            <div>3. ชื่อคลิปของท่านต้องมีคำว่า "ALLBETPUSSY888" อยู่ภายในชื่อคลิป</div>
                            <div>4. รับเงินไปเลยฟรีๆ 300 บาท</div>
                            <div>5. ใส่ลิ้งค์เว็บลงในแคปชั่น https://bit.ly/2RLDLT7</div>
                            <div>6. เขียนรีวิวเว็บลงในแคปชั่น เช่น ALLBETPUSSY888ถอนได้จริง, ALLBETPUSSY888เกมออนไลน์ได้เงินจริง</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'event_modal',
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

<style lang='scss' scoped>
.overflow {
    overflow: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #1D2936;
        border-radius: 20px;
    }
}
</style>
