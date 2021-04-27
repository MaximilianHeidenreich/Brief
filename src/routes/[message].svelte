<script context="module">
    export async function load({ page }) {
        return { props: { message: page.params.message, host: page.host, path: page.path }}
    }
</script>
<script>

    // IMPORTS
    import { onMount } from "svelte";
    import { decodeUnicode } from "../../lib/unicode";

    // PROPS
    export let message = "";
    export let host = "";
    export let path = "";

    // UTIL
    let printInterval;

    let text = "";
    let cursorVisible = true;

    // HOOKS
    onMount(() => {

        // PARSE MESSAGE
        try {
            message = decodeUnicode(message);
        }
        catch {
            alert("Invalid message!");
            message = ":/"
        }

        // INTERVALS
        setInterval(() => cursorVisible = !cursorVisible, 1000)
        printInterval = setInterval(() => {

            // Clear interval
            if (text.length === message.length)
                clearInterval(printInterval);

            text = message.substr(0, text.length + 1)

        }, 100)

    })

</script>

<svelte:head>
	<meta property="og:url" content="https://{host}/{path}">
    <meta property="twitter:domain" content="https://{host}">
    <meta property="twitter:url" content="https://{host}/{path}">
</svelte:head>

<section>
    <p>
        {text}
        <span class="cursor" class:visible={cursorVisible}>|</span>
    </p>
</section>

<style>
    p {
        @apply text-center;
    }
    .cursor {
        opacity: 0;

        &.visible {
            opacity: 1;
        }
    }
</style>