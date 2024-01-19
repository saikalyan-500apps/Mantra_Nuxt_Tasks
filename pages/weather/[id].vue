<template>
    <div>
        <h3>Movie details using route : <span style="color: greenyellow; font-size: 24px;">{{ id }}</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel recusandae, ad facilis porro dolores debitis animi soluta temporibus ratione et veniam blanditiis voluptas cupiditate labore illo, delectus possimus eligendi?</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta ({
    layout:'weather'
})
</script>

<style lang="scss" scoped>

</style>