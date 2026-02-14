# Emily's Tofu Gacha Garden

This is a digital Valentine's gift to combine learning with love, because how else do we have time for both?! 🥹😂

## Process

1. I started in Google Gemini using its Canvas tool. I was determined to vibe-code this to figure out viable workflows to build personal projects more casually without work-provided restrictions and tooling. Then I can start bringing more ideas to life!
1. I got decently far in the Gemini Canvas: I built the responsive layout with gacha capsule placeholders for each day's slot in a few prompt shots.
1. I now had to figure out how to approach some imagery needs:
    1. I wanted to include her favorite flowers: peonies, gardenias, and sunflowers.
		1. Of course I needed to integrate Tofu the lovable dog.
1. Even if I uploaded source images to Gemini, it just wouldn't properly use/load them and kept deciding to give up and include SVG-based placeholders.
1. I started to realize that Gemini was going to favor SVGs as far as I knew, so I at least tried to work with that and after many weird-looking attempts, I finally arrived at some decent looking SVG flowers. I needed to upload reference pictures and guided nudges to get the right look.
1. But then I had to include visuals of Tofu the dog, and building him as a SVG was certainly not working out...
1. I copied the HTML over to Anthropic Claude to build with its Artifact system, but whenever I tried to upload an image it would fail and tell me there was a network connection issue (despite all my other requests working fine, so that message seems innacurate). But supposedly the Artifact could use my uploaded image if the upload succeeded? I still don't know at the moment, but I had to move on and make progress.
1. The clearest path for me at this point was finding and using something in which I could directly manage the project directory including assets. So I poked around on GitHub (thinking I may ultimately end up hosting through GH Pages) and explored the Codespaces concept.
1. Cool, I learned that I could basically build using GitHub Copilot in a cloud-instance of VS Code via Codespaces!
1. The AI coding models available there were smaller guns than I were used to (GPT-5 mini, GPT 4.1, Claude Haiku 4.5, etc.), but I figured it'd be a good opportunity to test if I could make do with them.
    1. Spoiler alert: they were just fine for this simple project. If anything, there may have been some bugs with the GitHub Copilot UX there, with things like `@` mentions not allowing me to reference files that were very clearly there. So quirks like that slowed me down a bit during prompting.
1. I was able to open the Codespace in my actual Desktop VS Code and work from there. Sure enough, I could add my image assets to the repo like any other dev project I'd work on, so development was pretty straightforward at this point.
1. However, generating 1-14 different variations of Tofu the dog based on different themes ended up being a little trickier than I expected.
1. Gemini Nano Banana actually did a great job with character style and consistency when I uploaded a real picture of Tofu the dog and asked for a cute chibi version as a base character. Consistency was great when I asked for generation of the themed variations of Tofu in the same style, too.
1. The tricky part was that I wanted Gemini to generate multiple images for me at once, rather than me having to wait for 14 separate generations. Well, it did 4 at a time, but all as part of one image so I had to split them myself somehow.
1. Luckily, the contextual Adobe Express integration that appears under generated images saved me a bit of effort here. Through that integration modal, I was able to crop and download the 4 images out of the composite image without having to download the composite image and use Windows's image editing tool (which would've been more mouse movement and clicking than preferred). I do wish the Express modal stayed open to let me repeat the crop action without opening and closing the integration, though.
1. After sorting out the image assets, I vibe-coded them in and updated the shuffling logic to allow for more variety/surprise.
1. As I write this, I figure I'll be able to publish my repo from the Codespace to GitHub, where I can host the simple web app via GH Pages.
1. Once it's up there, another thing I may play with is Google Labs's Jules tool. As I currently understand it, it's a cloud agent that can work on my repos (while I sleep) in a more long-running agentic fashion, raising PRs for my review once it feels it's completed its assigned task? Something like that. We'll see!
