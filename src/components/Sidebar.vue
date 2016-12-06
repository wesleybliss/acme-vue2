<script>

export default {}

</script>

<template lang="pug">
    
    nav#sidebar
        ul#branding
            li: router-link(to="/home", active-class="__null__")
                img(src="../assets/logo.png", width="100")
        ul
            li
                router-link(to="/hello/from%20ACME") {{ $t('buttons.hello') }}
                router-link(to="login") Login
    
</template>
