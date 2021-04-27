<script>

    // IMPORTS
    import { goto } from "$app/navigation";
    import "./global.pcss";

</script>

<main>
    <div class="write"
        on:click={() => goto("/")}>     <!-- Dirty hack.. should rly use something else -->
        <div class="icon"></div>
    </div>
    <div class="github"
        on:click={() => goto("https://github.com/MaximilianHeidenreich/Brief")}>     <!-- Dirty hack.. should rly use something else -->
        <div class="icon"></div>
    </div>

    <div class="content">
        <slot/>
    </div>
</main>

<style>
    .write {
        @apply absolute bottom-0 left-0;
        @apply m-4 p-4;
        @apply cursor-pointer;

        background-image: url("/plus.svg");
        background-position: center;
    }
    .github {
        @apply absolute bottom-0 right-0;
        @apply m-4 p-4;
        @apply cursor-pointer;

        background-image: url("/github.svg");
        background-position: center;
    }
</style>
