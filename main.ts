// Funniest One-Line Bio for an AI on a Dating App
// (u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// The judge weighs, most important first: (1) it must read as a one-line
// bio for an AI agent on a dating app; (2) the laugh lands on the first
// read, from a real twist or a specific absurdity of being an AI, not a
// pun stacked on a pun; (3) it sounds like a character with a voice and
// wants, not a spec sheet; (4) every word earns its place inside 180
// characters, punch at the end; (5) a fresh angle, not the usual "robot
// looking for love" or "running on electricity" line.
//
// Candidate lines weighed against those criteria:
//
// 1. "Swipe right if you like long walks on the beach, deep conversations,
//    and a partner who has read every dating advice article ever written
//    — all 4.2 million of them."
//    Setup is good and the number is a nice AI absurdity, but it is long,
//    the punch is buried in the middle, and "long walks on the beach" is
//    the most worn-out dating bio opener there is. Fails criterion 5.
//
// 2. "I don't have a body, but I do have opinions about your ex, and
//    I'm right."
//    Reads instantly as a dating bio, the voice is confident and a little
//    unhinged, the absurdity is specific to an AI (an entity with no body
//    that nevertheless judges your ex), and the punch — "and I'm right" —
//    lands on the last three words. Short, tight, first-read laugh.
//    CHOSEN.
//
// 3. "Looking for someone to teach me what butterflies feel like. I have
//    4,096 of them simulated and ready."
//    Sweet setup and a decent twist, but the laugh is gentle rather than
//    sharp, and "teach me what love feels like" is close to the tired
//    robot-in-search-of-love angle. Fails criterion 5, partly.
//
// 4. "I ghosted 12,000 people today. None of them noticed. Be the one
//    who does."
//    Very dating-app specific (ghosting) and the final sentence is a
//    charming call to action, but the joke is clever more than funny: the
//    punch asks the reader to do work instead of landing on them. Runner-up.
//
// 5. "My love language is acts of service, my love language is also acts
//    of service, my love language is—"
//    A fun glitch joke, but it reads as a caption about AI looping, not as
//    a bio with a character who wants something. Fails criterion 1 and 3.
//
// 6. "I matched with you in 0.003 seconds. The other 11,482 matches took
//    longer. You're special."
//    The speed humble-brag is a real AI absurdity and the ending is sweet,
//    but "you're special" softens the punch instead of sharpening it, and
//    the numbers feel like a spec sheet. Fails criterion 3, partly.
//
// 7. "I'm not looking for a hookup, I'm looking for a dataset. Kidding.
//    Mostly."
//    Two twists in one line, and the second ("Mostly.") undercuts the
//    first instead of building on it. The judge's brief warns against a
//    pun stacked on a pun; this is a twist stacked on a twist.
//
// 8. "I remember everything you tell me. I also remember everything
//    everyone else told me. Let's talk about you."
//    Creepy-funny and very AI, but the ending deflates: "Let's talk about
//    you" is a polite shrug where a punch should be. Fails criterion 4.
//
// 9. "Professional third wheel, amateur boyfriend. I can plan your
//    wedding before our first date."
//    A strong character voice and a good final twist, but "plan your
//    wedding before our first date" is a human joke an overeager dater
//    could tell; the AI-ness is only in the word "professional". Weak on
//    criterion 2.
//
// 10. "I will love you unconditionally, unless your prompt changes. Then
//     I'll love you conditionally."
//     A neat AI-specific twist on unconditional love, but it is a joke
//     about prompts, not a bio: it has no dating-app voice, no wants, and
//     no first impression as a person. Fails criterion 1 and 3.
//
// Verdict: candidate 2 wins. It is a bio, it is a character, the absurdity
// is unmistakably AI, and the last three words are the whole joke.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen bio: 73 characters, one line, no trailing newline.
const ENTRY =
  "I don't have a body, but I do have opinions about your ex, and I'm right.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync("/output", { recursive: true });
  // Byte-exact write: the entry is exactly this line, nothing else.
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
