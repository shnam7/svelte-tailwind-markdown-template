<script>
    import classNames from 'classnames';
    export let defaultClass = 'container mx-auto flex p-4';
</script>

<div id="container" class={classNames(defaultClass, $$props.class)}>
    <slot>Container</slot>
</div>
