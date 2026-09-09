/**
 * Service UI pour la génération automatique des cards d'équipe avec DaisyUI
 */
import dompurify from 'dompurify';
import { teamData } from './teamDataService.js';

/**
 * Génère le HTML d'une card de membre d'équipe
 * @param {Object} member - Données du membre
 * @param {number} index - Index pour l'animation
 * @returns {string} HTML de la card
 */
function createTeamMemberCard(member, index) {
    return dompurify.sanitize(`
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in group"
             style="animation-delay: ${index * 100}ms">
            <!-- Image du membre -->
            <figure class="px-6 pt-6">
                <div class="avatar">
                    <div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:ring-secondary transition-all duration-300">
                        <img src="${member.image}"
                             alt="Photo de ${member.name}"
                             class="rounded-full object-cover"
                             loading="lazy"
                             onerror="this.src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'" />
                    </div>
                </div>
            </figure>

            <!-- Contenu de la card -->
            <div class="card-body items-center text-center px-6 pb-6">
                <!-- Nom et rôle -->
                <h2 class="card-title text-lg font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    ${member.name}
                </h2>

                <!-- Badge du rôle -->
                <div class="badge badge-secondary badge-outline mb-3">
                    ${member.role}
                </div>

                <!-- Bio -->
                <p class="text-sm text-base-content/70 mb-3 line-clamp-2">
                    ${member.bio}
                </p>

                <!-- Compétences (si disponibles) -->
                ${member.skills ? `
                    <div class="flex flex-wrap gap-1 mb-3 justify-center">
                        ${member.skills.slice(0, 3).map(skill => `
                            <span class="badge badge-outline badge-xs">${skill}</span>
                        `).join('')}
                        ${member.skills.length > 3 ? `<span class="badge badge-outline badge-xs">+${member.skills.length - 3}</span>` : ''}
                    </div>
                ` : ''}

                <!-- Expérience et localisation -->
                ${member.experience || member.location ? `
                    <div class="text-xs text-base-content/60 mb-3 space-y-1">
                        ${member.experience ? `<div>📅 ${member.experience} d'expérience</div>` : ''}
                        ${member.location ? `<div>📍 ${member.location}</div>` : ''}
                    </div>
                ` : ''}

                <!-- Actions -->
                <div class="card-actions justify-center w-full">
                    <!-- Bouton email -->
                    <a href="mailto:${member.email}"
                       class="btn btn-primary btn-sm flex-1 max-w-32 group-hover:btn-secondary transition-all duration-300">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Contact
                    </a>

                    <!-- Bouton profil -->
                    <button class="btn btn-outline btn-sm flex-1 max-w-32"
                            onclick="showMemberDetails('${member.name}')">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Profil
                    </button>
                </div>
            </div>
        </div>
    `);
}

/**
 * Génère le HTML pour tous les membres de l'équipe
 * @param {Array} members - Tableau des membres
 * @returns {string} HTML complet
 */
function generateTeamGrid(members) {
    const cardsHTML = members.map((member, index) => createTeamMemberCard(member, index)).join('');

    return dompurify.sanitize(`
        <!-- Grille responsive des membres -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            ${cardsHTML}
        </div>

        <!-- Statistiques de l'équipe -->
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full mb-8">
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <div class="stat-title">Membres de l'équipe</div>
                <div class="stat-value text-primary">${members.length}</div>
                <div class="stat-desc">Professionnels talentueux</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="stat-title">Spécialités</div>
                <div class="stat-value text-secondary">${new Set(members.map(m => m.role.split(' ')[0])).size}</div>
                <div class="stat-desc">Domaines d'expertise</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-accent">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div class="stat-title">Expérience</div>
                <div class="stat-value text-accent">5+</div>
                <div class="stat-desc">Années d'expertise</div>
            </div>
        </div>
    `);
}



/**
 * Rend l'équipe dans le conteneur spécifié
 * @param {string} containerId - ID du conteneur
 * @param {Array} members - Tableau des membres (optionnel, utilise teamData par défaut)
 */
export function renderTeam(containerId = 'team-container', members = teamData) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Conteneur ${containerId} non trouvé`);
        return;
    }

    // Générer et injecter le HTML
    container.innerHTML = generateTeamGrid(members);

    // Ajouter les animations d'entrée
    setTimeout(() => {
        const cards = container.querySelectorAll('.animate-fade-in');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}
// Export des données pour utilisation externe
export { teamData };