# Tofu Gacha Garden

This is a digital Valentine's gift to combine learning with love, because how else would we humans have time for both?! 🥹😂

https://calvwng.github.io/tofu-gacha-garden/

# Visual Process

See https://github.com/calvwng/tofu-gacha-garden/wiki/Verbose-Written-Log for more written details.

## Started in Gemini > Canvas

- Built most of the prototype with Gemini 3 Pro as a Canvas artifact
- Couldn't seem to handle rendering my chat-uploaded images to on page
- Gemini favored creation of SVG visuals instead
- Gemini also froze up and crashed every now and then...
- Gemini's revision history is navigated through a back/forward arrow; wish this was more flexible like Claude's

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/b55d657d-777d-4ded-8ef9-f92a8dad3783" />

## Migrated to Claude > Artifact (basic web chat; not Code nor Cowork)

- Claude with Sonnet 4.5 Extended was just as good at coding, but seemed to not handle SVG creation as well
- Claude kept claiming that it would be able to render my [chat-/project-]uploaded images on the page, but the image upload kept failing with a reported "network error" despite all other network activity working fine. It also claimed it could use an image I uploaded to the Project the chat was in, but it seemed that was also a false hallucination.
- Claude's revision history is navigated through a dropdown; good flexibility

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/b453812a-4128-4bef-8848-ab4ab8e4f9a7" />

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/1631541b-5d9c-4d85-a226-03da244f7414" />


## Migrated to GitHub > Codespace

- Eventually I resorted to GitHub Codespaces because it was closest to normal development environments (VS Code on the web) so I knew I would've been able to upload and use image assets within a project
- GitHub Copilot with free tier models (like up to GPT-4.1) wasn't great compared to Gemini and Claude models, but luckily I was mostly done with core functionality by this point and was focusing on integrating my custom images
- I confirmed that I could easily upload and use custom image assets in the Codespace, and then wrote a small script to serve the web app on a dev server within the Codespace to make sure I could visually test changes
- Then I moved on to generate the cartoon variations of Tofu the dog

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/bb40f424-1e01-456c-b6c2-11c8f490f657" />

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/7552aaba-5126-4d36-a846-1429f24e8469" />

<img alt="image" src="https://github.com/user-attachments/assets/34206e5a-3229-482c-adb0-b245d3e648a2" />

## Used Gemini Nano Banana to create character variations

<img width="818" height="1367" alt="image" src="https://github.com/user-attachments/assets/9a73c3e7-6622-44ed-9f98-7b1454484aac" />

<img width="792" height="1328" alt="image" src="https://github.com/user-attachments/assets/1d5533da-8be9-4a4a-ba3f-f2f712a5140d" />

<img width="741" height="1092" alt="image" src="https://github.com/user-attachments/assets/5ef82732-665c-4649-8301-32813faa6437" />

## Used Adobe Express integration within Google Gemini to crop and download character variations from the grids Gemini kept wanting to generate

- The Adobe Express integration chiclet doesn't always show (I'm not sure why; maybe there's a partial rollout), but here's more or less what the process looked like (captured the UX from another time I was able to see and use it):

<img width="596" height="497" alt="Screenshot 2026-02-13 183759" src="https://github.com/user-attachments/assets/5d056add-cf47-4c22-95ba-ab001c6d983c" />

<img width="1172" height="974" alt="Screenshot 2026-02-13 183842" src="https://github.com/user-attachments/assets/e2c339f8-b375-45a0-8071-40a0c0349dbe" />

# After uploading and hooking up the custom images, I set up the GH Page hosting and was done!

<img width="949" height="1101" alt="image" src="https://github.com/user-attachments/assets/7151f2c5-96fe-4b0d-97e6-e05676683795" />

<img width="951" height="1099" alt="image" src="https://github.com/user-attachments/assets/e73e72ce-4d46-4658-9e1e-2d2e32dc02a7" />

<img width="825" height="1024" alt="image" src="https://github.com/user-attachments/assets/a0011c99-cc11-4899-8c4b-b973c4460907" />

