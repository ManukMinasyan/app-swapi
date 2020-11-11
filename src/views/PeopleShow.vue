<template>
    <div class="flex content-center justify-center flex-wrap text-white h-screen bg-gray-800">
        <div class="intro">
            <router-link :to="{name: 'People'}">Back</router-link>
            <h1 class="text-xl">Person</h1>
            <table class="table-auto bg-white text-black">
                <thead>
                <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Height</th>
                    <th class="px-4 py-2">Gender</th>
                    <th class="px-4 py-2">Mass</th>
                    <th class="px-4 py-2">Eye color</th>
                    <th class="px-4 py-2">Created</th>
                    <th class="px-4 py-2"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="border px-4 py-2">{{ person.name }}</td>
                    <td class="border px-4 py-2">{{ person.height }}</td>
                    <td class="border px-4 py-2">{{ person.gender }}</td>
                    <td class="border px-4 py-2">{{ person.mass }}</td>
                    <td class="border px-4 py-2">{{ person.eye_color }}</td>
                    <td class="border px-4 py-2">{{ person.created }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref} from 'vue';
    import {usePeople} from "../compositions/people";
    import {useRoute} from 'vue-router'

    export default defineComponent({
        name: "PeopleShow",
        setup() {
            const {getShowPeople} = usePeople();
            const route = useRoute();
            const person = ref({
                name: '',
                height: '',
                gender: '',
                mass: '',
                eye_color: '',
                created: '',
                films: []
            });

            getShowPeople(route.params.id).then(r => {
                person.value = r;
            })

            return {
                person
            }
        }
    })
</script>

<style scoped>

</style>