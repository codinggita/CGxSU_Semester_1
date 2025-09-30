# Using Audio and Video Media in HTML

This guide explains how to embed and manage audio and video elements in HTML. Each section includes a definition, a list of all standard attributes, unique examples demonstrating each attribute's use, and practical scenarios with corresponding HTML examples.

## Audio
### Definition
The `<audio>` tag embeds sound content, such as music, podcasts, or sound effects, in formats like MP3, WAV, or OGG. It can contain multiple `<source>` elements to provide fallback formats for browser compatibility.

### Attributes
- **src**: Specifies the path or URL to the audio file (used when no `<source>` elements are provided).
- **controls**: Displays browser-native audio controls, such as play, pause, and volume sliders.
- **autoplay**: Automatically starts playing the audio when the page loads (use cautiously, often requires `muted`).
- **loop**: Repeats the audio indefinitely.
- **muted**: Mutes the audio by default.
- **preload**: Suggests how the browser should load the audio (`none`, `metadata`, `auto`).
- **crossorigin**: Specifies CORS settings for fetching the audio (`anonymous`, `use-credentials`).
- **mediagroup**: Groups media elements for synchronized playback (non-standard, rarely used).

### Examples
#### src
Specifies the audio file to play.
```html
<audio src="podcast-episode.mp3">
  Your browser does not support the audio element.
</audio>
```

#### controls
Adds playback controls for user interaction.
```html
<audio controls>
  <source src="background-score.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### autoplay
Plays the audio automatically on page load (requires `muted` in most browsers).
```html
<audio autoplay muted>
  <source src="welcome-sound.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

#### loop
Loops the audio continuously.
```html
<audio controls loop>
  <source src="ambient-loop.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>
```

#### muted
Mutes the audio by default, useful for autoplay scenarios.
```html
<audio controls muted>
  <source src="intro-music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### preload
Controls how the audio is loaded (`metadata` loads only metadata).
```html
<audio controls preload="metadata">
  <source src="lecture-recording.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### crossorigin
Enables CORS for fetching audio from another domain.
```html
<audio controls crossorigin="anonymous">
  <source src="https://example.com/streamed-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### mediagroup
Synchronizes playback with other media elements (non-standard, limited support).
```html
<audio controls mediagroup="sync-audio">
  <source src="narration.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

## Video
### Definition
The `<video>` tag embeds video content in formats like MP4, WebM, or OGG. It supports multiple `<source>` elements for fallback formats and `<track>` elements for subtitles or captions.

### Attributes
- **src**: Specifies the path or URL to the video file (used when no `<source>` elements are provided).
- **controls**: Displays browser-native video controls (play, pause, volume, etc.).
- **autoplay**: Plays the video automatically on page load (often requires `muted`).
- **loop**: Repeats the video indefinitely.
- **muted**: Mutes the video by default.
- **poster**: Specifies an image to display before playback starts.
- **width**: Sets the video width in pixels or percentage.
- **height**: Sets the video height in pixels or percentage.
- **preload**: Suggests how the browser should load the video (`none`, `metadata`, `auto`).
- **crossorigin**: Specifies CORS settings for fetching the video (`anonymous`, `use-credentials`).
- **playsinline**: Allows the video to play inline on mobile devices (avoids fullscreen).
- **disablePictureInPicture**: Disables the picture-in-picture option in browsers.
- **mediagroup**: Groups media elements for synchronized playback (non-standard, rarely used).

### Examples
#### src
Specifies the video file to play.
```html
<video src="intro-video.mp4">
  Your browser does not support the video tag.
</video>
```

#### controls
Adds playback controls for user interaction.
```html
<video controls>
  <source src="tutorial-video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### autoplay
Plays the video automatically on page load (requires `muted` in most browsers).
```html
<video autoplay muted>
  <source src="splash-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### loop
Loops the video continuously.
```html
<video controls loop>
  <source src="background-video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### muted
Mutes the video by default.
```html
<video controls muted>
  <source src="silent-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### poster
Displays a custom image before video playback.
```html
<video controls poster="video-preview.jpg">
  <source src="product-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### width
Sets the video width.
```html
<video controls width="800">
  <source src="conference-talk.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### height
Sets the video height.
```html
<video controls height="450">
  <source src="animation-clip.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### preload
Controls how the video is loaded (`none` prevents preloading).
```html
<video controls preload="none">
  <source src="long-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### crossorigin
Enables CORS for fetching video from another domain.
```html
<video controls crossorigin="use-credentials">
  <source src="https://example.com/streamed-video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

#### playsinline
Allows inline playback on mobile devices.
```html
<video controls playsinline>
  <source src="mobile-friendly-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### disablePictureInPicture
Disables picture-in-picture mode.
```html
<video controls disablePictureInPicture>
  <source src="locked-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### mediagroup
Synchronizes playback with other media elements (non-standard, limited support).
```html
<video controls mediagroup="sync-video">
  <source src="synced-clip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## Responsive Video
### Definition
Responsive videos adapt to different screen sizes and devices using CSS or percentage-based sizing.

### Example
```html
<video controls width="100%" style="max-width: 900px;">
  <source src="responsive-video.mp4" type="video/mp4">
  <source src="responsive-video.webm" type="video/webm">
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>
```

## Scenarios and Examples

Below are practical scenarios where `<audio>` and `<video>` elements are commonly used, with complete HTML examples demonstrating their application.

### Scenario 1: Background Music for a Website
**Use Case**: A portfolio website uses background music to create an immersive experience, looping continuously and muted by default to comply with browser autoplay policies.

```html
<audio autoplay muted loop>
  <source src="ambient-background.mp3" type="audio/mpeg">
  <source src="ambient-background.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### Scenario 2: Podcast Player
**Use Case**: A blog page embeds a podcast episode with controls for users to play, pause, and adjust volume, using multiple source formats for compatibility.

```html
<audio controls preload="metadata">
  <source src="podcast-episode-101.mp3" type="audio/mpeg">
  <source src="podcast-episode-101.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### Scenario 3: Instructional Video Tutorial
**Use Case**: An e-learning platform includes a video tutorial with subtitles for accessibility and a poster image to show a preview before playback.

```html
<video controls width="640" height="360" poster="tutorial-preview.jpg">
  <source src="coding-tutorial.mp4" type="video/mp4">
  <source src="coding-tutorial.webm" type="video/webm">
  <track src="tutorial-subtitles.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>
```

### Scenario 4: Mobile-Friendly Video Ad
**Use Case**: A marketing website displays a promotional video that plays inline on mobile devices, ensuring it doesn’t force fullscreen mode.

```html
<video controls playsinline width="100%" style="max-width: 800px;">
  <source src="product-ad.mp4" type="video/mp4">
  <source src="product-ad.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

### Scenario 5: Synchronized Audio and Video Narration
**Use Case**: A documentary website synchronizes a video clip with a separate audio narration track using the `mediagroup` attribute (noting limited browser support).

```html
<video controls mediagroup="doc-sync" width="600">
  <source src="documentary-clip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<audio controls mediagroup="doc-sync">
  <source src="narration-track.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Scenario 6: Streaming Media from a CDN
**Use Case**: A news website streams a live event video from a content delivery network (CDN), using CORS to ensure secure access.

```html
<video controls crossorigin="anonymous" preload="metadata" width="800">
  <source src="https://cdn.example.com/live-event.webm" type="video/webm">
  <source src="https://cdn.example.com/live-event.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Scenario 7: Locked Video Player
**Use Case**: An educational platform restricts video playback to a fixed player by disabling picture-in-picture mode, ensuring students watch within the page.

```html
<video controls disablePictureInPicture width="700" height="400">
  <source src="lecture-video.mp4" type="video/mp4">
  <track src="lecture-captions.vtt" kind="captions" srclang="en" label="English">
  Your browser does not support the video tag.
</video>
```

## Best Practices
- **Accessibility**: Include `<track>` elements for subtitles or captions in videos and audio to support users with hearing impairments.
- **Compatibility**: Use multiple `<source>` elements with different formats (e.g., MP4 and WebM for video, MP3 and OGG for audio) to ensure broad browser support.
- **Performance**: Set `preload="metadata"` or `preload="none"` to optimize load times, especially for large files.
- **Compression**: Compress media files to reduce file size while maintaining quality.
- **Responsive Design**: Use CSS or `width="100%"` with `max-width` to ensure videos adapt to different screen sizes.
- **Testing**: Verify media playback across browsers (Chrome, Firefox, Safari) and devices to ensure compatibility.
- **User Experience**: Avoid `autoplay` without `muted` to prevent unexpected audio playback, and use `poster` images to provide a visual preview.
