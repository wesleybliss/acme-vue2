<script>

export default {
    computed: {
        msg () {
            return this.$t('messages.hello', { name: this.name })
        },
        name () {
            const name = this.$route.params.name
            return name.charAt(0).toUpperCase() + name.slice(1)
        }
    }
}

</script>

<template lang="pug">

.hello
    h1 {{ msg }}
    p: router-link(to="/") {{ $t('buttons.home') }}

</template>
