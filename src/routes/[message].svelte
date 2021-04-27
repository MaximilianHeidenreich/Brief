<script context="module">
    export async function load({ page }) {
        return { props: { message: page.params.message }}
    }
</script>
<script>

    // IMPORTS
    import { onMount } from "svelte";
    import { decodeUnicode } from "../../lib/unicode";

    // PROPS
    export let message = "";

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