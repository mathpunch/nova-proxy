/*global UVServiceWorker,__uv$config*/
/*
 * Ultraviolet service worker for Nova Proxy.
 * This file wraps the Ultraviolet service worker with our configuration.
 */
importScripts('/uv/uv.bundle.js');
importScripts('/uv.config.js');
importScripts('/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
