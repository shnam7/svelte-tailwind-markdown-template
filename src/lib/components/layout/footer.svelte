<script>
    import classNames from 'classnames';
    export let defaultClass = 'flex-none h-12 text-center';
</script>

<footer id="footer" class={classNames(defaultClass, $$props.class)}>
    <slot>Footer Area</slot>
</footer>
