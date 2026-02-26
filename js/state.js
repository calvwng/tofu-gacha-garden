import { gachaData } from './gacha-data.js';

export const progressKey = 'tofu_gacha_progress_v2';
export const flowerKey = 'tofu_gacha_flowers_v3';

export const appState = {
    openedDays: JSON.parse(localStorage.getItem(progressKey)) || [],
    flowerAssignments: JSON.parse(localStorage.getItem(flowerKey))
};

if (!appState.flowerAssignments) {
    appState.flowerAssignments = {};
    gachaData.forEach((item) => {
        appState.flowerAssignments[item.day] = item.flower;
    });
    localStorage.setItem(flowerKey, JSON.stringify(appState.flowerAssignments));
}

export const dom = {
    grid: document.getElementById('gacha-grid'),
    modal: document.getElementById('modal'),
    body: document.body
};
