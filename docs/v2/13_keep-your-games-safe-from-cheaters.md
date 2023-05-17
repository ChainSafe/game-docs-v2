---
slug: /current/keep-your-games-safe-from-cheaters
sidebar_position: 13
sidebar_label: Keeping Your Games Safe From Cheaters
---


# Keeping Your Games Safe From Cheaters

### In-game Private Key Management

It's worth noting that gamers with specialized tooling have near absolute control over any games running inside a browser. This means game developers hard coding admin private keys into the game binary, in order to embed signing logic in-game, *risks losing both project and user funds*.

Here is a video from [ChainSafe Solutions](https://solutions.chainsafe.io) explaining how simple it is to hack a WebAssembly (wasm) game with a tool called Cetus, effectively demonstrating why private keys should never be embedded within the game logic, no matter how attractive it might seem for player UX:

<iframe width="800" height="450" src="https://www.youtube.com/embed/iMx-JfFz3ck" title="Hacking WebAssembly (Wasm) games w/ Cetus, &amp; why private keys must never go into a game binary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Here is another tutorial showcasing how easy it is for hackers to use specialized tooling to hack in-game memory:

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/jfhzY7WnwbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*The bottom line is for anything that’s running inside a user’s browser or local machine, an adversarial attacker might find ways to hack signing logic embedded within the game and convince it to sign any transaction they like*.

### Do Not Abuse Specialized Tooling For Malicious Purposes

The point of showcasing these examples is for the ChainSafe Gaming community to *PROTECT YOUR GAME* first and foremost. If you would like to stop in-game values from being changed by specialized tooling, you can either validate them contract-side, server-side, or use an anti-cheat engine with obfuscation to stop hackers and protect sensitive values.

Please note that these videos have been included for informative/educational purposes. If ChainSafe Gaming catches members of our community using these tools in a malicious way, you will be banned from all services with ChainSafe Gaming. 
