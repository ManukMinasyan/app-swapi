<template>
    <div class="flex content-center justify-center flex-wrap text-white h-screen bg-gray-800">
        <div class="intro">
                <h1 class="text-xl">People</h1>
                <table class="table-auto bg-white text-black">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Height</th>
                        <th class="px-4 py-2">Gender</th>
                        <th class="px-4 py-2">Created</th>
                        <th class="px-4 py-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="person in peopleList">
                        <td class="border px-4 py-2">{{ person.name }}</td>
                        <td class="border px-4 py-2">{{ person.height }}</td>
                        <td class="border px-4 py-2">{{ person.gender }}</td>
                        <td class="border px-4 py-2">{{ person.created }}</td>
                        <td class="border px-4 py-2">
                            <router-link :to="{name: 'PeopleShow', params: {id: getIdByUrl(person.url)}}" class="button">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Show
                                </button>
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import {usePeople} from "../compositions/people";

    export default defineComponent({
        name: "People",
        setup() {
            const {getPeople, peopleList, getIdByUrl} = usePeople();

            getPeople()

            return {
                peopleList,
                getIdByUrl
            }
        }
    })
</script>

<style scoped>

</style>