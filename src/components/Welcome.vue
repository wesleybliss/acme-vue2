<template lang="pug">
    div
        p {{ $t('messages.welcome') }}
        p: router-link(to="/hello/from%20ACME") {{ $t('buttons.hello') }}
</template>

<script>
export default {}
</script>
