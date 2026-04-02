Place your homepage cinematic videos here with these exact names:
- home-1.mp4
- home-2.mp4
- home-3.mp4

Optional later:
- home-1.webm
- home-2.webm
- home-3.webm

The site currently supports MP4-only or WebM+MP4.
Format order is controlled with NEXT_PUBLIC_HOME_VIDEO_FORMATS.
Recommended current setting for your existing files:
NEXT_PUBLIC_HOME_VIDEO_FORMATS=mp4

When you later add WebM files, switch to:
NEXT_PUBLIC_HOME_VIDEO_FORMATS=webm,mp4

If both fail, it shows the panel poster image automatically.

Optional CDN support:
Set NEXT_PUBLIC_MEDIA_CDN_BASE to switch video delivery from local files to CDN
without changing homepage code.

Example:
NEXT_PUBLIC_MEDIA_CDN_BASE=https://cdn.yourdomain.com

Optional fallback telemetry:
Set NEXT_PUBLIC_ENABLE_VIDEO_FALLBACK_TELEMETRY=true (default) to emit a
lightweight Meta Pixel event when a video fails and a panel switches to
poster-only mode.

With this setting enabled, the homepage requests:
- https://cdn.yourdomain.com/videos/home-1.webm
- https://cdn.yourdomain.com/videos/home-1.mp4
- https://cdn.yourdomain.com/videos/home-2.webm
- https://cdn.yourdomain.com/videos/home-2.mp4
- https://cdn.yourdomain.com/videos/home-3.webm
- https://cdn.yourdomain.com/videos/home-3.mp4

Recommended export settings for fast loading:
- Codec: H.264 (High Profile)
- Resolution: 1920x1080 (or 1600x900 for lighter payload)
- Bitrate target: 4 to 8 Mbps (VBR)
- Audio: remove audio track (videos are muted on site)
- Keyframe interval: 1 second

WebM recommendation:
- Codec: VP9
- Target bitrate: ~60% to 75% of MP4 bitrate

CDN configuration checklist:
- Serve files with correct content types:
	video/mp4 for .mp4
	video/webm for .webm
- Enable long cache headers for immutable files:
	Cache-Control: public, max-age=31536000, immutable
- Enable byte-range requests for smooth seeking:
	Accept-Ranges: bytes
- Keep URLs versioned when replacing files to avoid stale caches

Tip:
Keep each shot around 7 to 10 seconds for best scroll timing with the current setup.
