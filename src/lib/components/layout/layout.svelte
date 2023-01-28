<script>
    import classNames from 'classnames';
    export let defaultClass = 'mx-auto flex flex-col h-screen';
</script>

<div id="layout" class={classNames(defaultClass, $$props.class)}>
    <slot />
</div>
