<script>

    // IMPORTS
    import { dev } from "$app/env";
    import { onMount } from "svelte";
    import { encodeUnicode } from "../../lib/unicode";
    import { copyTextToClipboard } from "../../lib/clipboard";

    // BINDINGS
    let message = "";
    $: url = createURL(message);

    // UTIL
    let canShare = false;

    // FUNC
    let createURL = (message) => "";        // Empty function to not break SSR

    function share() {
        if (navigator.share) {
            navigator.share({
                title: "A brief message for you!",
                url
            }).then(() => {
                console.log("Share success!");
            })
            .catch((err) => {
                console.error(err);
            });
        } else {
            // fallback
            console.error("No share!");
        }
    }

    // HOOKS
    onMount(() => {

        canShare = navigator.share ? true : false;

        // Override function, because we now are inside the browser!
        createURL = (message) => `${window.location.origin}/${encodeUnicode(message)}`;

    })

</script>

<main>
    {#if dev}
        <div class="absolute bottom-0 p-4">
            <small>{url}</small>
        </div>
    {/if}
    <section>
        <div id="form">
            <input 
                type="text" 
                    maxlength="30" 
                bind:value={message} />
            
            <div class="flex space-x-4">
                {#if canShare}
                    <button on:click|preventDefault={share}>Share</button>
                {/if}
                <button on:click|preventDefault={() => copyTextToClipboard(url)}>Copy Link</button>
            </div>
        </div>
    </section>
</main>

<style>

    #form {
        @apply flex-row space-y-6;

        input {
            font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif;

            @apply w-full;
            @apply border-b border-opacity-100 border-gray-300 bg-transparent;
            @apply focus:border-black;
            @apply focus:outline-none focus:ring-0;
            @apply text-4xl py-1;

            &::placeholder {
                color: #9a9a9a;
            }
        }
        
        button {
            @apply w-full rounded-full shadow-lg;
            @apply font-semibold text-white text-lg p-2;
            @apply active:shadow-none;
            background-color: #542e71;

            &:hover {
                background-color: #462760;
            }
            &:active {
                background-color: #3b1d53;
            }
        }
    }

</style>