<script>
    import classNames from 'classnames';
    export let defaultClass = 'max-w-none prose dark:prose-invert flex-1 p-4 overflow-hidden';
</script>

<div id="content" class={classNames(defaultClass, $$props.class)}>
    <slot>Content Area</slot>
</div>
