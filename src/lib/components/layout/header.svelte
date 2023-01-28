<script>
    import classNames from 'classnames';
    export let defaultClass = '';
</script>

<header id="footer" class={classNames(defaultClass, $$props.class)}>
    <slot>Header Area</slot>
</header>
