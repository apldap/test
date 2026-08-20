// ==========================================================================
// 1. ДАННЫЕ (АКТУАЛЬНЫЕ ИВЕНТЫ ДЛЯ МОЛОДЕЖИ БИШКЕКА)
// Здесь ты можешь легко добавлять, удалять или менять мероприятия.
// ==========================================================================
const eventsData = [
    { 
        id: 1, 
        title: "Эко-субботник в Карагачевой роще", 
        category: "eco", 
        categoryName: "Экология", 
        date: "15 Августа, 2026", 
        desc: "Масштабная уборка территории при поддержке волонтерских эко-инициатив. Убираем мусор, сортируем пластик, проводим эко-квиз с призами. Инвентарь выдаем на месте!" 
    },
    { 
        id: 2, 
        title: "Мастер-класс: Ораторское искусство и уверенность", 
        category: "webinars", 
        categoryName: "Вебинары & Тренинги", 
        date: "18 Августа, 2026", 
        desc: "Совместно с платформой SHARING is caring: учимся побеждать страх сцены, структурировать аргументы и отвечать на каверзные вопросы оппонентов." 
    },
    { 
        id: 3, 
        title: "Инфосессия: Международное волонтерство и гранты", 
        category: "volunteering", 
        categoryName: "Волонтерство", 
        date: "22 Августа, 2026", 
        desc: "Разбираем программы Европейского корпуса солидарности (ESC), стипендии и поездки по обмену. Как найти проект и подать заявку без опыта." 
    }
];

// ==========================================================================
// 2. БАЗА ЗНАНИЙ (ПОЛНОТЕКСТОВЫЕ СТАТЬИ И ГАЙДЫ)
// ==========================================================================
const hubData = {
    mun: [
        {
            title: "Что такое Модель ООН и как она устроена?",
            desc: "Введение в симуляцию органов ООН, роли делегатов, комиссии и цели проведения конференций.",
            content: `
                <h2>СТАТЬЯ 1. ПУТЕВОДИТЕЛЬ ПО МОДЕЛИ ООН (MUN)</h2>
                <h3>1.1. Что такое Модель ООН?</h3>
                <p>Модель Организации Объединённых Наций (Model UN / MUN) — это ролевая игра и научно-практическая конференция, в ходе которой учащиеся симулируют работу реальных органов ООН (Генеральной Ассамблеи, Совета Безопасности, ЭКОСОС и др.).</p>
                <p>Участники выступают в роли делегатов, представляющих официальную позицию выбранных стран, и решают актуальные международные проблемы.</p>
                
                <h3>Как устроена Модель ООН:</h3>
                <ul>
                    <li><strong>Каждый участник — дипломат:</strong> Вы получаете страну и отстаиваете не собственное мнение, а официальный курс правительства этого государства.</li>
                    <li><strong>Есть тема заседания:</strong> Комитет обсуждает конкретную проблему (например, «Регулирование искусственного интеллекта» или «Проблема доступа к питьевой воде»).</li>
                    <li><strong>Главная цель — Резолюция:</strong> В процессе дебатов и переговоров делегаты объединяются в блоки, чтобы составить и принять итоговый документ с решением проблемы.</li>
                </ul>

                <h3>1.5. Источники информации для подготовки к Модели ООН</h3>
                <ul>
                    <li><strong>Официальный сайт ООН:</strong> <a href="https://www.un.org/ru" target="_blank">www.un.org/ru</a> — тексты Устава ООН, международные договоры.</li>
                    <li><strong>Цифровая библиотека ООН:</strong> <a href="https://digitallibrary.un.org" target="_blank">digitallibrary.un.org</a> — база данных принятых резолюций.</li>
                </ul>
            `
        },
        {
            title: "Позиционное письмо (Position Paper)",
            desc: "Как грамотно составить позицию страны: структура, правила дипломатического стиля и примеры.",
            content: `
                <h3>1.2. Раздел 1: Позиционное письмо (Position Paper)</h3>
                <p>Позиционное письмо — это официальный документ объёмом 1–2 страницы, где делегат излагает позицию своей страны по повестке дня до начала конференции.</p>
                
                <h3>Структура позиционного письма</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Раздел</th>
                            <th>Содержание</th>
                            <th>Практические советы</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Введение</strong></td>
                            <td>Описание проблемы с точки зрения вашей страны.</td>
                            <td>Покажите актуальность темы для вашего региона, используйте статистику.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Прошлый опыт</strong></td>
                            <td>Подписанные конвенции, договоры и реальные шаги страны.</td>
                            <td>Ссылайтесь на реальные соглашения (Парижское соглашение, Повестка 2030).</td>
                        </tr>
                        <tr>
                            <td><strong>3. Предложения</strong></td>
                            <td>Конкретные шаги для итоговой резолюции.</td>
                            <td>Предлагайте механизмы: создание рабочих групп, финансирование, обмен технологиями.</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Правило дипломатического стиля:</strong> Запрещено использовать местоимения «я» и «мое мнение». Используйте формулировки: <em>«Делегация Республики Корея считает...»</em>, <em>«Правительство Бразилии убеждено...»</em>.</p>
            `
        },
        {
            title: "Проект Резолюции (Draft Resolution)",
            desc: "Главный документ конференции: преамбула, оперативные клаузы, коалиции и правила оформления.",
            content: `
                <h3>1.3. Раздел 2: Проект Резолюции (Draft Resolution)</h3>
                <p>Резолюция — главный итоговый документ конференции. Он составляется в кулуарах группой стран (коалицией) и выносится на общее голосование.</p>

                <h3>Структура резолюции</h3>
                <ol>
                    <li><strong>Преамбула (Preamble):</strong> Описывает контекст проблемы, ссылки на Устав ООН и прошлые решения. Каждая статья начинается с деепричастия или причастия, выделенного курсивом (<em>Принимая во внимание...</em>, <em>Подчеркивая...</em>, <em>Озабоченно отмечая...</em>).</li>
                    <li><strong>Постановляющая часть (Operative Clauses):</strong> Содержит конкретные решения, призывы и механизмы. Пункты нумеруются, а глаголы выделяются жирным шрифтом:
                        <ul>
                            <li><strong>1. Призывает</strong> все государства-члены активизировать обмен информацией...</li>
                            <li><strong>2. Рекомендует</strong> Генеральному секретарю учредить экспертную комиссию...</li>
                            <li><strong>3. Предлагает</strong> создать международный фонд поддержки...</li>
                        </ul>
                    </li>
                </ol>
            `
        },
        {
            title: "Дебаты и правила процедуры в Модели ООН",
            desc: "Форматы выступлений, Points & Motions, формула «Крючок — Суть — Призыв» и работа в кулуарах.",
            content: `
                <h3>1.4. Раздел 3: Дебаты и правила процедуры в Модели ООН</h3>
                <p>Обсуждение строго регламентируется Президиумом и делится на 3 формата:</p>
                <ul>
                    <li><strong>Формальные дебаты (Speakers' List):</strong> Выступления строго по очереди из Списка ораторов. Время ограничено (1–2 минуты).</li>
                    <li><strong>Умеренные неформальные дебаты (Moderated Caucus):</strong> Обсуждение подвопроса. Делегаты поднимают таблички с названием страны, Председатель дает слово на 30–60 секунд.</li>
                    <li><strong>Неформальные дебаты (Unmoderated Caucus):</strong> Свободное перемещение по аудитории для создания коалиций и написания резолюции.</li>
                </ul>

                <h3>Формула выступления «Крючок — Суть — Призыв»</h3>
                <ul>
                    <li><strong>1. КРЮЧОК (5–10 сек):</strong> Привлечение внимания (<em>«Пока мы спорим, 10 млн человек...»</em>).</li>
                    <li><strong>2. СУТЬ (30–40 сек):</strong> Аргументы и статистика (<em>«Наша программа снизила заболеваемость...»</em>).</li>
                    <li><strong>3. ПРИЗЫВ (10 сек):</strong> Действие (<em>«Призываем вступить в наш блок...»</em>).</li>
                </ul>
            `
        }
    ],
    debates: [
        {
            title: "Введение в дебаты и ключевые форматы",
            desc: "Что такое академические дебаты, разбор Британского парламентского формата (БПФ), WSDC и Карла Поппера.",
            content: `
                <h2>СТАТЬЯ 2. ПУТЕВОДИТЕЛЬ ПО КЛАССИЧЕСКИМ ДЕБАТАМ</h2>
                <h3>2.1. Что такое классические дебаты?</h3>
                <p>Классические академические дебаты — это формализованный командный спор, в ходе которого две или более команды отстаивают противоположные точки зрения на заранее заданную тему.</p>

                <h3>Ключевые принципы:</h3>
                <ul>
                    <li><strong>Четкое разделение сторон:</strong> Участники делятся на сторону Утверждения (Правительство) и сторону Отрицания (Оппозиция).</li>
                    <li><strong>Судейская оценка:</strong> Победителя определяет судья на основе логики, полноты доказательств и качества опровержений.</li>
                </ul>

                <h3>2.2. Основные форматы дебатов</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Формат</th>
                            <th>Состав команд</th>
                            <th>Особенности подготовки</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Британский парламентский формат (БПФ)</strong></td>
                            <td>4 команды по 2 человека (2 Правительства, 2 Оппозиции).</td>
                            <td>Тема объявляется за 15 минут до начала раунда. Позиция определяется жребием.</td>
                        </tr>
                        <tr>
                            <td><strong>Формат Карла Поппера</strong></td>
                            <td>2 команды по 3 человека (Утверждение и Отрицание).</td>
                            <td>Темы известны заранее, что позволяет готовить глубокую аналитику и статистику.</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            title: "Модель аргументации по формуле СЭП (ARE)",
            desc: "Как строить неотбиваемые аргументы: Утверждение, Объяснение и Доказательство на реальных примерах.",
            content: `
                <h3>2.3. Раздел 2: Модель аргументации (Формула СЭП)</h3>
                <p>Убедительный аргумент в дебатах строится по жесткой трехзвенной структуре: <strong>Утверждение — Объяснение — Доказательство</strong> (Statement — Explanation — Proof / ARE).</p>
                
                <ol>
                    <li><strong>1. УТВЕРЖДЕНИЕ (Statement):</strong> Короткий тезис аргумента.</li>
                    <li><strong>2. ОБЪЯСНЕНИЕ (Explanation):</strong> Логическая цепочка «Почему?».</li>
                    <li><strong>3. ДОКАЗАТЕЛЬСТВО (Proof):</strong> Пример, факты, статистика.</li>
                </ol>
            `
        },
        {
            title: "Техники опровержения и роли спикеров",
            desc: "3 метода отбивки аргументов оппонентов (Разрыв логики, Опровержение фактов, Взвешивание) и роли в раунде.",
            content: `
                <h3>2.4. Раздел 3: Техники опровержения и роли спикеров</h3>
                <p><strong>Опровержение (Refutation)</strong> — это анализ речи оппонентов с целью найти логические ошибки и разрушить их аргументацию.</p>
                
                <h3>3 главных метода отбивки:</h3>
                <ul>
                    <li><strong>Разрыв логической цепочки:</strong> Показать, что из причины А не обязательно следует результат Б.</li>
                    <li><strong>Метод взвешивания (Weighing):</strong> Согласиться с фактом оппонентов, но доказать, что последствия вашего аргумента значительно важнее для общества.</li>
                </ul>
            `
        }
    ],
    courses: [
        {
            title: "Тайм-менеджмент — Полное руководство",
            desc: "Полный гайд по управлению временем: Матрица Эйзенхауэра, метод ABCDE, Помодоро и Time Blocking.",
            content: `
                <h2>ЭНЦИКЛОПЕДИЯ САМОРАЗВИТИЯ И ЛИЧНОЙ ЭФФЕКТИВНОСТИ</h2>
                <h3>СТАТЬЯ 1: Тайм-менеджмент — Полное руководство</h3>
                <p>Тайм-менеджмент — это навык осознанного распределения ресурсов (времени, внимания и энергии) для достижения ключевых результатов без выгорания.</p>
                
                <h4>Матрица Эйзенхауэра</h4>
                <p>Все задачи делятся на Важные/Срочные. Главный фокус нужно держать на «Важно, но не срочно» (стратегия, развитие, обучение).</p>
            `
        },
        {
            title: "Анатомия прокрастинации",
            desc: "Почему мы откладываем дела: психологические причины, правило 5 минут и метод «Eating the Frog».",
            content: `
                <h3>СТАТЬЯ 2: Анатомия прокрастинации</h3>
                <p>Прокрастинация — это проблема регуляции эмоций, а не лени. Когда мозг боится сложной задачи или неопределенности, он включает защиту через избегание.</p>
                <ul>
                    <li><strong>Правило 5 минут:</strong> Договоритесь с собой делать задачу всего 5 минут. Преодолеть старт — самое сложное.</li>
                </ul>
            `
        },
        {
            title: "Искусство формирования привычек",
            desc: "Анатомия привычки, неврологическая петля и 4 закона изменения поведения Джеймса Клира.",
            content: `
                <h3>СТАТЬЯ 3: Искусство формирования привычек</h3>
                <p>Построение системы ежедневных ритуалов по книге «Atomic Habits» Джеймса Клира через 4 закона: сделай триггер очевидным, желание — привлекательным, действие — простым, а награду — приятной.</p>
            `
        },
        {
            title: "Стратегическое целеполагание",
            desc: "От мечты к понятной системе: методология SMART и обратное планирование (Backward Planning).",
            content: `
                <h3>СТАТЬЯ 4: Стратегическое целеполагание</h3>
                <p>Используйте критерии SMART (Конкретная, Измеримая, Достижимая, Значимая, Ограниченная по времени) и обратное планирование от финиша к сегодняшнему дню.</p>
            `
        }
    ]
};

// Глобальная функция открытия всплывающего окна статьи
window.openArticle = function(tabName, articleIndex) {
    const articleModal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    
    if (articleModal && modalBody && hubData[tabName] && hubData[tabName][articleIndex]) {
        const article = hubData[tabName][articleIndex];
        modalBody.innerHTML = article.content;
        articleModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
};

// ==========================================================================
// 3. ИНИЦИАЛИЗАЦИЯ И ИНТЕРФЕЙС
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Переключение тем (день/ночь)
    const themeToggleBtn = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            let newTheme = theme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggleBtn) {
            themeToggleBtn.querySelector("i").className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
    }

    // Мобильное меню
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.querySelector("i").className = navMenu.classList.contains("open") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        });
    }

    // ==========================================================================
    // 4. ИВЕНТЫ (ПОИСК И ФИЛЬТР)
    // ==========================================================================
    const eventsGrid = document.getElementById("eventsGrid");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");
    let currentFilter = "all", searchQuery = "";

    function renderEvents() {
        if (!eventsGrid) return;
        eventsGrid.innerHTML = "";
        const filteredEvents = eventsData.filter(event => {
            return (currentFilter === "all" || event.category === currentFilter) && 
                   (event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.desc.toLowerCase().includes(searchQuery.toLowerCase()));
        });

        if (filteredEvents.length === 0) {
            eventsGrid.innerHTML = `<div class="glass-card" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">Ничего не найдено 🚀</div>`;
            return;
        }

        filteredEvents.forEach(event => {
            eventsGrid.innerHTML += `
                <div class="glass-card event-card">
                    <div class="event-badge-row">
                        <span class="cat-tag cat-${event.category}">${event.categoryName}</span>
                        <span class="event-date"><i class="fa-regular fa-calendar"></i> ${event.date}</span>
                    </div>
                    <div class="event-body">
                        <h3>${event.title}</h3>
                        <p>${event.desc}</p>
                    </div>
                    <div class="event-footer">
                        <button class="btn btn-secondary btn-block" onclick="alert('Переход на страницу регистрации ивента!')">Подробнее</button>
                    </div>
                </div>
            `;
        });
    }

    if (searchInput) searchInput.addEventListener("input", (e) => { searchQuery = e.target.value; renderEvents(); });
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderEvents();
        });
    });
    renderEvents();

    // ==========================================================================
    // 5. РЕНДЕР БАЗЫ ЗНАНИЙ (ХАБА)
    // ==========================================================================
    const hubContent = document.getElementById("hubContent");
    const hubTabBtns = document.querySelectorAll(".hub-tab-btn");

    function renderHub(tabName) {
        if (!hubContent) return;
        hubContent.innerHTML = "";
        hubData[tabName].forEach((article, index) => {
            let iconClass = tabName === "mun" ? "fa-solid fa-globe" : tabName === "debates" ? "fa-solid fa-comments" : "fa-solid fa-brain";
            
            hubContent.innerHTML += `
                <div class="glass-card article-card">
                    <div class="article-icon"><i class="${iconClass}"></i></div>
                    <h3>${article.title}</h3>
                    <p>${article.desc}</p>
                    <button class="read-link" onclick="openArticle('${tabName}', ${index})">
                        Читать гайд <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            `;
        });
    }

    hubTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            hubTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderHub(btn.getAttribute("data-tab"));
        });
    });

    renderHub("mun");

    // ==========================================================================
    // 6. ОБРАБОТКА ФОРМЫ ОРГАНИЗАТОРА (ИСПРАВЛЕНО)
    // ==========================================================================
    const suggestForm = document.getElementById("suggestForm");
    const formSuccess = document.getElementById("formSuccess");

    if (suggestForm) {
        suggestForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Предотвращаем перезагрузку страницы
            
            // Скрываем форму и выводим сообщение об успешной отправке
            suggestForm.style.display = "none";
            if (formSuccess) {
                formSuccess.classList.remove("hidden");
            }
        });
    }

    // ==========================================================================
    // 7. ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА СТАТЕЙ
    // ==========================================================================
    const articleModal = document.getElementById("articleModal");
    const modalClose = document.getElementById("modalClose");

    if (modalClose && articleModal) {
        modalClose.addEventListener("click", () => {
            articleModal.classList.add("hidden");
            document.body.style.overflow = "";
        });

        articleModal.addEventListener("click", (e) => {
            if (e.target === articleModal) {
                articleModal.classList.add("hidden");
                document.body.style.overflow = "";
            }
        });
    }

    // ==========================================================================
    // 8. FAQ АККОРДЕОН
    // ==========================================================================
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("open")) {
                answer.style.maxHeight = null; 
                item.classList.remove("open");
            } else {
                document.querySelectorAll(".faq-item").forEach(i => { 
                    i.classList.remove("open"); 
                    i.querySelector(".faq-answer").style.maxHeight = null; 
                });
                item.classList.add("open"); 
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});