<template>
    <div class="flex content-center justify-center flex-wrap h-screen bg-gray-800">
        <div class="intro">
            <div class="mb-4">
                <input v-model="pin" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="PIN Code">
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, watchEffect} from 'vue';
    export default defineComponent({
        name: "Home",
        setup() {
            const pin = ref(null);
            const securePin = '253510';

            watchEffect(() => {
                if(pin.value === securePin) {
                    localStorage.setItem('pin', securePin)
                    window.location.reload()
                }
            })

            return {
                pin
            }
        }
    })
</script>

<style scoped>

</style>