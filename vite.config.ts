import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable_icon.png'],
	manifest: {
		name: 'Hittau flow timer',
		short_name: 'Flow',
		description: 'Flow (pomodoro) timer for productive work',
		icons: [
			{
				src: '/icon-72x72.png',
				sizes: '72x72',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-128x128.png',
				sizes: '128x128',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-144x144.png',
				sizes: '144x144',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-152x152.png',
				sizes: '152x152',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-384x384.png',
				sizes: '384x384',
				type: 'image/png',
				purpose: 'maskable any',
			},
			{
				src: '/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable any',
			},
		],
		theme_color: '#171717',
		display: 'standalone',
		scope: '/',
		start_url: '/',
	},
}

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react(), VitePWA(manifestForPlugin)],
	server: {
		port: 3000,
	},
	build: {
		outDir: 'build',
		manifest: true,
	},
})
