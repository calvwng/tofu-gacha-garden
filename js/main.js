import { appState, dom } from './state.js';
import { renderCalendar } from './rendering.js';
import {
    randomizeFlowers,
    openCapsule,
    closeModal,
    resetProgress
} from './interactions.js';

const rerender = () => renderCalendar(appState, dom, handleOpenCapsule);

function handleOpenCapsule(index, element) {
    openCapsule(index, element, appState, rerender, dom);
}

window.randomizeFlowers = () => randomizeFlowers(appState, rerender);
window.resetProgress = () => resetProgress(appState, rerender);
window.closeModal = (event) => closeModal(dom, event);

rerender();
