<script lang="ts">
    import classNames from 'classnames';
    export let position: 'left' | 'right' = 'left';
    export let defaultClass = 'hidden md:block basis-96 flex-none p-4 overflow-auto';
</script>

<sidebar
    id="sidebar"
    class={classNames(defaultClass, $$props.class, position == 'right' ? 'order-last' : '')}
>
    <slot>Sidebar Area</slot>
</sidebar>
