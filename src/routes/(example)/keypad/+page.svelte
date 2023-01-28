<script lang="ts">
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let val: number = 0;

    function handleButtonPress(num: number) {
        console.log(num);
        val = val * 10 + num;
    }

    function handleClear() {
        val = 0;
    }
</script>

<div class="grid grid-cols-3 max-w-[15rem] mx-auto gap-1">
    {#each nums as num}
        <button class="border-2 px-4 py-4 hover:bg-teal-800" on:click={() => handleButtonPress(num)}
            >{num}</button
        >
    {/each}
    <button class="border px-4 py-4 hover:bg-emerald-600" on:click={handleClear}>clear</button>
    <button class="border px-4 py-4 hover:bg-teal-800" on:click={() => handleButtonPress(0)}
        >0</button
    >
    <button class="border px-4 py-4 hover:bg-emerald-600">submit</button>
</div>

<p class="text-center">Value={val}</p>
