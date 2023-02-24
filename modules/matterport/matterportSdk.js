const MATTERPORT_KEY = "<MATTERPORT_DEVELOPER_KEY>";
import { isIphone } from '../superviz/supervizSdk.js';
import { onContentChanged } from '../../index'

export let matterportSdk;

export const changeContent = async (content) => {
    await destroyMatterportIframe();
    buildMatterportIframe(content);
}


async function buildMatterportIframe(content) {
    let showcase = document.createElement('iframe')

    const container = document.getElementById('sectionReady')
    showcase.setAttribute('id', 'showcase')
    showcase.setAttribute('height', '100%')
    showcase.setAttribute('width', '100%')
    showcase.setAttribute('allow', 'xr-spatial-tracking')

    showcase.style.border = 'none';

    container.appendChild(showcase)
    container.style.background = '#000';
    showcase.setAttribute('src', buildUrl(content))
    showcase.addEventListener('load', onShowcaseLoad)
}

function buildUrl (content) {
    const baseUrl = isIphone()
    ? 'https://my.matterport.com/show'
    : `${window.location.origin}/modules/matterport/matterport_bundle/showcase.html`

    const url = new URL(baseUrl)


    url.searchParams.set('applicationKey', MATTERPORT_KEY)
    url.searchParams.set('m', content)
    url.searchParams.set('play', 1)
    url.searchParams.set('brand', 0)
    url.searchParams.set('gt', 0)
    url.searchParams.set('hr', 0)
    url.searchParams.set('mls', 0)
    url.searchParams.set('vr', 0)
    url.searchParams.set('help', 0)
    url.searchParams.set('hl', 2)
    url.searchParams.set('qs', 0)
    url.searchParams.set('log', 0)
    url.searchParams.set('newtags', 1)

    return url.toString()
}

function destroyMatterportIframe() {
    matterportSdk?.disconnect();
    const showcase = document.getElementById('showcase')
    if (!showcase) return

    showcase.removeEventListener('load', onShowcaseLoad)

    return new Promise((resolve) => {
        setTimeout(() => {
        showcase.src = 'about:blank'
        setTimeout(() => {
            showcase.remove(showcase)
            resolve()
        }, 1000)
        }, 1000)
    })
}


async function onShowcaseLoad() {
    const iframe = document.getElementById('showcase');
    const MP_SDK = isIphone() ? window.MP_SDK : iframe.contentWindow.MP_SDK;

    try {
        matterportSdk = await MP_SDK.connect(iframe, MATTERPORT_KEY,'');
        onContentChanged()
    } catch (e) {
        console.error(e);
    }
}
