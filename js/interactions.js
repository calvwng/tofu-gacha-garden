import { gachaData } from './gacha-data.js';
import { flowerKey, progressKey } from './state.js';

function randomizeFlowers(state, renderCalendar) {
    // This shuffle moves whole "cards" (flower, theme, icon, image, title, message)
    // between unlocked days while preserving each item's `day` and `locked` state.
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const unlockedIndices = [];
    gachaData.forEach((item, idx) => {
        if (!item.locked) unlockedIndices.push(idx);
    });

    const pool = unlockedIndices.map((i) => {
        const it = gachaData[i];
        return {
            flower: it.flower,
            theme: it.theme,
            icon: it.icon,
            image: it.image,
            title: it.title,
            message: it.message
        };
    });

    shuffleArray(pool);
    unlockedIndices.forEach((idx, k) => {
        const src = pool[k];
        gachaData[idx].flower = src.flower;
        gachaData[idx].theme = src.theme;
        gachaData[idx].icon = src.icon;
        gachaData[idx].image = src.image;
        gachaData[idx].title = src.title;
        gachaData[idx].message = src.message;
    });

    state.flowerAssignments = {};
    gachaData.forEach((item) => {
        state.flowerAssignments[item.day] = item.flower;
    });

    localStorage.setItem(flowerKey, JSON.stringify(state.flowerAssignments));
    renderCalendar();

    const btn = document.querySelector('button[onclick="randomizeFlowers()"]');
    const originalText = btn.innerText;
    btn.innerText = 'Shuffled! ✨';
    setTimeout(() => {
        btn.innerText = originalText;
    }, 1000);
}

function openCapsule(index, element, state, renderCalendar, dom) {
    const dayData = gachaData[index];
    if (state.openedDays.includes(dayData.day)) {
        showModal(dayData, dom);
        return;
    }

    element.classList.add('shaking');
    setTimeout(() => {
        element.classList.remove('shaking');
        state.openedDays.push(dayData.day);
        localStorage.setItem(progressKey, JSON.stringify(state.openedDays));
        renderCalendar();
        fireConfetti();
        showModal(dayData, dom);
    }, 500);
}

function showModal(data, dom) {
    const { modal, body } = dom;
    document.getElementById('modal-day').innerText = `DAY ${data.day}`;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-message').innerText = data.message;

    const modalIconEl = document.getElementById('modal-icon');
    modalIconEl.innerHTML = '';

    if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.title || '';
        img.className = 'mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain';
        img.onerror = () => {
            modalIconEl.innerHTML = '';
            const span = document.createElement('div');
            span.className = 'mx-auto text-3xl sm:text-4xl md:text-6xl';
            span.innerText = data.icon || '';
            modalIconEl.appendChild(span);
        };
        modalIconEl.appendChild(img);
    } else {
        const span = document.createElement('div');
        span.className = 'mx-auto text-3xl sm:text-4xl md:text-6xl';
        span.innerText = data.icon || '';
        modalIconEl.appendChild(span);
    }

    modal.classList.remove('hidden');
    body.classList.add('no-scroll');
}

function closeModal(dom) {
    const { modal, body } = dom;
    modal.classList.add('hidden');
    body.classList.remove('no-scroll');
}

let resetTimeout;
function resetProgress(state, renderCalendar) {
    const btn = document.getElementById('reset-btn');
    if (btn.innerText === 'Confirm Reset?') {
        localStorage.removeItem(progressKey);
        state.openedDays = [];
        renderCalendar();
        btn.innerText = 'Done!';
        btn.classList.remove('text-red-500', 'font-bold');
        setTimeout(() => {
            btn.innerText = 'Reset Progress ↻';
        }, 1000);
        clearTimeout(resetTimeout);
    } else {
        btn.innerText = 'Confirm Reset?';
        btn.classList.add('text-red-500', 'font-bold');
        resetTimeout = setTimeout(() => {
            btn.innerText = 'Reset Progress ↻';
            btn.classList.remove('text-red-500', 'font-bold');
        }, 3000);
    }
}

function fireConfetti() {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };
    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            })
        );
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#F472B6', '#FBCFE8'] });
    fire(0.2, { spread: 60, colors: ['#60A5FA', '#93C5FD'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#FACC15'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

export { randomizeFlowers, openCapsule, showModal, closeModal, resetProgress, fireConfetti };
