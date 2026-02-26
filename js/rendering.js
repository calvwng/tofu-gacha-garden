import { gachaData } from './gacha-data.js';

function getTofuImage(day) {
            // Reverted to Image for full detail (SVG was missing colors)
            // Added rounded-full and overflow-hidden to clip corners into an oval/circle
            // UPDATED FALLBACK: Lifted ears on the Maltese SVG
            const malteseFallback = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3C!-- Fluffy Base --%3E%3Cpath d=%27M20 50 Q10 30 30 20 Q50 10 70 20 Q90 30 80 50 Q90 70 70 85 Q50 90 30 85 Q10 70 20 50%27 fill=%27white%27 stroke=%27%23e5e7eb%27 stroke-width=%272%27/%3E%3C!-- Ears (Lifted) --%3E%3Cpath d=%27M25 25 Q10 45 15 65%27 fill=%27white%27 stroke=%27%23e5e7eb%27 stroke-width=%272%27/%3E%3Cpath d=%27M75 25 Q90 45 85 65%27 fill=%27white%27 stroke=%27%23e5e7eb%27 stroke-width=%272%27/%3E%3C!-- Face Overlay --%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2728%27 fill=%27white%27/%3E%3C!-- Eyes --%3E%3Ccircle cx=%2738%27 cy=%2748%27 r=%274.5%27 fill=%27%23111827%27/%3E%3Ccircle cx=%2739.5%27 cy=%2746.5%27 r=%271.5%27 fill=%27white%27 opacity=%270.9%27/%3E%3Ccircle cx=%2762%27 cy=%2748%27 r=%274.5%27 fill=%27%23111827%27/%3E%3Ccircle cx=%2763.5%27 cy=%2746.5%27 r=%271.5%27 fill=%27white%27 opacity=%270.9%27/%3E%3C!-- Nose --%3E%3Cellipse cx=%2750%27 cy=%2756%27 rx=%275%27 ry=%273.5%27 fill=%27%23111827%27/%3E%3C!-- Mouth --%3E%3Cpath d=%27M46 63 Q50 66 54 63%27 fill=%27none%27 stroke=%27%23111827%27 stroke-width=%271.5%27 stroke-linecap=%27round%27/%3E%3C!-- Blush --%3E%3Ccircle cx=%2732%27 cy=%2758%27 r=%274%27 fill=%27%23fbcfe8%27 opacity=%270.5%27/%3E%3Ccircle cx=%2768%27 cy=%2758%27 r=%274%27 fill=%27%23fbcfe8%27 opacity=%270.5%27/%3E%3C/svg%3E";

            return `
            <!-- Day 1 image: put the capsule PNG into assets/tofu-capsule.png next to this HTML file -->
            <div class="w-full h-full relative flex items-center justify-center">
                <div class="w-full h-full relative transition-transform hover:scale-105 rounded-full overflow-hidden shadow-lg border-4 border-pink-200 bg-white">
                    <img src="assets/tofu-capsule.png"
                         onerror="this.onerror=null; this.src='${malteseFallback}'"
                         alt="Tofu capsule"
                         class="w-full h-full object-cover"
                         style="object-position: 50% -12%; transform: scale(1.1);">
                </div>
                <div class="absolute bottom-2 right-2 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow-sm z-10">
                    <span class="text-pink-600 font-bold font-Fredoka text-lg">${day}</span>
                </div>
            </div>`;
        }

        function getSunflowerSVG(day) {
            return `
            <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-md">
                <defs>
                    <radialGradient id="centerGrad${day}" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#78350F" />
                        <stop offset="100%" stop-color="#451a03" />
                    </radialGradient>
                </defs>
                <g fill="#FFD700" stroke="#F59E0B" stroke-width="0.5">
                    ${[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg, i) => 
                        `<ellipse cx="50" cy="50" rx="${i % 2 === 0 ? 7.5 : 6}" ry="${i % 2 === 0 ? 48 : 42}" transform="rotate(${deg} 50 50)" />`
                    ).join('')}
                </g>
                <circle cx="50" cy="50" r="28" fill="url(#centerGrad${day})" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#451a03" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
                <text x="50" y="60" font-family="Fredoka, sans-serif" font-size="28" text-anchor="middle" fill="white" font-weight="bold" class="flower-num">${day}</text>
            </svg>`;
        }

        function getPeonySVG(day) {
            const createPetalRing = (count, radius, width, height, color, rotationOffset = 0) => {
                let paths = '';
                for(let i=0; i<count; i++) {
                    const deg = (360 / count) * i + rotationOffset;
                    paths += `<path d="M50 50 Q${50-width} ${50-radius} 50 ${50-(radius+5)} Q${50+width} ${50-radius} 50 50" 
                             fill="${color}" stroke="rgba(0,0,0,0.1)" stroke-width="0.5"
                             transform="rotate(${deg} 50 50)" />`;
                }
                return paths;
            };

            return `
            <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-md">
                <g transform="translate(50 50) scale(1.1)">
                    <g fill="#166534" stroke="#052e16" stroke-width="0.5">
                        <path d="M0 0 Q-20 20 -35 15 Q-45 5 -25 -15 Z" />
                        <path d="M0 0 Q20 20 35 15 Q45 5 25 -15 Z" />
                        <path d="M0 0 Q-10 30 0 45 Q10 30 0 0 Z" />
                    </g>
                </g>
                ${createPetalRing(7, 42, 25, 45, '#BE185D')}
                ${createPetalRing(7, 38, 22, 40, '#DB2777', 25)}
                ${createPetalRing(6, 30, 18, 30, '#E11D48', 10)}
                ${createPetalRing(6, 22, 15, 20, '#F472B6', 40)}
                ${createPetalRing(5, 14, 10, 15, '#FBCFE8', 0)}
                <g fill="#FCD34D">
                    <circle cx="48" cy="48" r="2" />
                    <circle cx="52" cy="52" r="2" />
                    <circle cx="52" cy="48" r="2" />
                    <circle cx="48" cy="52" r="2" />
                    <circle cx="50" cy="50" r="2.5" />
                </g>
                <text x="50" y="58" font-family="Fredoka, sans-serif" font-size="22" text-anchor="middle" fill="white" font-weight="bold" class="flower-num" style="text-shadow: 0px 1px 3px rgba(0,0,0,0.6);">${day}</text>
            </svg>`;
        }

        function getGardeniaSVG(day) {
            return `
            <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-md">
                <g>
                    <path d="M50 50 Q20 20 10 50 Q20 80 50 50" fill="#064E3B" />
                    <path d="M25 35 Q18 50 25 65" fill="none" stroke="#22C55E" stroke-width="2" opacity="0.4" />
                    <path d="M50 50 Q80 20 90 50 Q80 80 50 50" fill="#064E3B" />
                    <path d="M75 35 Q82 50 75 65" fill="none" stroke="#22C55E" stroke-width="2" opacity="0.4" />
                    <path d="M50 50 Q25 25 25 10 Q60 25 50 50" fill="#065F46" />
                    <path d="M50 50 Q75 25 75 10 Q40 25 50 50" fill="#065F46" />
                    <path d="M50 50 Q50 90 50 95" stroke="#064E3B" stroke-width="3" />
                </g>
                <g stroke="#E5E7EB" stroke-width="1">
                    <path d="M50 50 Q30 20 50 5 Q70 20 50 50" fill="#FFFFFF" />
                    <path d="M50 50 Q80 30 95 50 Q80 70 50 50" fill="#FFFFFF" />
                    <path d="M50 50 Q70 80 50 95 Q30 80 50 50" fill="#FFFFFF" />
                    <path d="M50 50 Q20 70 5 50 Q20 30 50 50" fill="#FFFFFF" />
                    <g transform="rotate(45 50 50)">
                        <path d="M50 50 Q30 25 50 10 Q70 25 50 50" fill="#F9FAFB" />
                        <path d="M50 50 Q80 30 90 50 Q80 70 50 50" fill="#F9FAFB" />
                        <path d="M50 50 Q70 75 50 90 Q30 75 50 50" fill="#F9FAFB" />
                        <path d="M50 50 Q20 70 10 50 Q20 30 50 50" fill="#F9FAFB" />
                    </g>
                </g>
                <g>
                    <circle cx="50" cy="50" r="14" fill="#FEFCE8" stroke="#FEF08A" stroke-width="1"/>
                    <path d="M50 50 Q40 40 50 38 Q60 40 50 50" fill="#FEF3C7" />
                    <path d="M50 50 Q40 60 38 50 Q40 40 50 50" fill="#FEF3C7" />
                    <path d="M50 50 Q60 60 50 62 Q40 60 50 50" fill="#FEF3C7" />
                    <path d="M50 50 Q60 40 62 50 Q60 60 50 50" fill="#FEF3C7" />
                </g>
                <text x="50" y="62" font-family="Fredoka, sans-serif" font-size="22" text-anchor="middle" fill="#78350F" font-weight="bold" class="flower-num" style="text-shadow: 0px 1px 2px rgba(255,255,255,0.8);">${day}</text>
            </svg>`;
        }

        // --- INITIALIZATION ---
        function renderCalendar(state, dom, openCapsule) {
    const { openedDays, flowerAssignments } = state;
    const { grid } = dom;
            grid.innerHTML = '';
            
            gachaData.forEach((item, index) => {
                const isOpened = openedDays.includes(item.day);
                const assignedFlower = flowerAssignments[item.day] || item.flower;
                const container = document.createElement('div');
                container.className = `flower-btn w-full pt-[100%] relative ${isOpened ? 'opened' : ''}`;
                container.onclick = () => openCapsule(index, container);

                const inner = document.createElement('div');
                inner.className = 'absolute inset-0 flex items-center justify-center p-2';
                
                let content = '';
                if (item.day === 1 || assignedFlower === 'tofu') {
                    content = getTofuImage(item.day);
                } else if (assignedFlower === 'sunflower') {
                    content = getSunflowerSVG(item.day);
                } else if (assignedFlower === 'peony') {
                    content = getPeonySVG(item.day);
                } else {
                    content = getGardeniaSVG(item.day);
                }

                inner.innerHTML = content;
                container.appendChild(inner);
                // If this day is locked, show a small badge on the tile so users know it won't be shuffled
                if (item.locked) {
                    const lockBadge = document.createElement('div');
                    lockBadge.className = 'absolute top-2 right-2 bg-white/90 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm border border-pink-200 pointer-events-none';
                    lockBadge.title = 'Locked — excluded from Shuffle';
                    lockBadge.innerText = '📌';
                    container.appendChild(lockBadge);
                }
                grid.appendChild(container);
            });
        }

export { renderCalendar };
