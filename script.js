// Упрощенный скрипт для сайта "Звездные Гости"
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница полностью загружена');
    
    // 1. УПРАВЛЕНИЕ СЕКЦИЕЙ ПРОГРАММ
    // Изначально показываем секцию программ, но все контейнеры скрыты
    const programsSection = document.getElementById('programs');
    
    // Функция показа программ для выбранного персонажа
    function showProgramsForCharacter(characterId) {
        console.log('Показываем программы для персонажа:', characterId);
    
        // Убеждаемся что секция программ видима
        if (programsSection) {
            programsSection.style.display = 'block';
            programsSection.style.visibility = 'visible';
            programsSection.style.opacity = '1';
        }
        
        // Скрываем все контейнеры программ сначала
        const allPrograms = document.querySelectorAll('.programs-container');
        allPrograms.forEach(container => {
            container.style.display = 'none';
            container.style.opacity = '0';
            container.style.visibility = 'hidden';
            container.classList.remove('active');
        });
        
        // Показываем только нужный контейнер в зависимости от выбранного персонажа
        const container = document.getElementById(`${characterId}-programs`);
        if (container) {
            container.style.display = 'block';
            container.style.opacity = '1';
            container.style.visibility = 'visible';
            container.classList.add('active');
            
            // Активируем соответствующую карточку
            document.querySelectorAll('.star-card').forEach(card => {
                card.classList.remove('active');
                if (card.getAttribute('data-star') === characterId) {
                    card.classList.add('active');
                }
            });
        } else {
            console.warn(`Контейнер ${characterId}-programs не найден`);
        }
    }

    // Функция для скролла к форме заказа
    function scrollToOrderForm() {
        const orderSection = document.getElementById('form');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Выделяем форму, чтобы привлечь внимание
            const formContainer = document.querySelector('.form-container');
            if (formContainer) {
                formContainer.classList.add('highlight');
                setTimeout(() => {
                    formContainer.classList.remove('highlight');
                }, 1500);
            }
        } else {
            console.warn('Секция формы заказа не найдена');
        }
    }

    // 2. ОБРАБОТЧИК МОДАЛЬНОГО ОКНА
    const modal = document.getElementById('artistModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 300);
        };
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 300);
        }
    };

    // 3. ДАННЫЕ АРТИСТОВ
    const artistData = {
        allegrova: {
            title: 'Ирина Аллегрова',
            image: 'assets/allegorva.jpg',
            description: 'Легендарная певица Ирина Аллегрова в виде ростовой куклы - идеальное решение для вашего праздника!',
            prices: [
                { name: 'ЗВЁЗДНЫЙ КУРЬЕР', duration: '5 минут', price: '1.800' },
                { name: 'ЭКСПРЕСС-ПОЗДРАВЛЕНИЕ', duration: '5–7 минут', price: '2.500' },
                { name: 'ШОУ-МИНИ', duration: '10 минут', price: '3.500' },
                { name: 'ПРОГРАММА 18+', duration: '12 минут', price: '4.000' },
                { name: 'ШОУ С ОГОНЬКОМ', duration: '15 минут', price: '4.500' }
            ]
        },
        agutin: {
            title: 'Леонид Агутин',
            image: 'assets/agutin.jpg',
            description: 'Ростовая кукла Леонида Агутина - отличный выбор для создания незабываемой атмосферы на вашем мероприятии!',
            prices: [
                { name: 'ЗВЁЗДНЫЙ КУРЬЕР', duration: '5 минут', price: '2.000' },
                { name: 'ЭКСПРЕСС-ПОЗДРАВЛЕНИЕ', duration: '5–7 минут', price: '2.700' },
                { name: 'ШОУ-МИНИ', duration: '10 минут', price: '3.700' },
                { name: 'ПРОГРАММА 18+', duration: '12 минут', price: '4.200' },
                { name: 'ШОУ С ОГОНЬКОМ', duration: '15 минут', price: '4.700' }
            ]
        },
        pirozhkov: {
            title: 'Артур Пирожков',
            image: 'assets/pirozhkov.jpg',
            description: 'Ростовая кукла Артура Пирожкова - гарантия веселья и позитива на вашем празднике!',
            prices: [
                { name: 'ЗВЁЗДНЫЙ КУРЬЕР', duration: '5 минут', price: '1.800' },
                { name: 'ЭКСПРЕСС-ПОЗДРАВЛЕНИЕ', duration: '5–7 минут', price: '2.500' },
                { name: 'ШОУ-МИНИ', duration: '10 минут', price: '3.500' },
                { name: 'ПРОГРАММА 18+', duration: '12 минут', price: '4.000' },
                { name: 'ШОУ С ОГОНЬКОМ', duration: '15 минут', price: '4.500' }
            ]
        },
        bear: {
            title: 'Белый Мишка',
            image: 'assets/bear.jpg',
            description: 'Белый Мишка - любимец детей и взрослых! Идеальный гость для детского праздника или корпоратива.',
            prices: [
                { name: 'ПОЗДРАВЛЕНИЕ', duration: '5 минут', price: '1.500' },
                { name: 'МИНИ-ПРОГРАММА', duration: '10 минут', price: '2.500' },
                { name: 'ПОЛНАЯ ПРОГРАММА', duration: '15 минут', price: '3.500' }
            ]
        },
        cheburashka: {
            title: 'Чебурашка',
            image: 'assets/чебурашка.jpg.jpg',
            description: 'Чебурашка - легендарный герой мультфильма, который подарит вашим детям незабываемые впечатления!',
            prices: [
                { name: 'ПОЗДРАВЛЕНИЕ', duration: '5 минут', price: '1.500' },
                { name: 'МИНИ-ПРОГРАММА', duration: '10 минут', price: '2.500' },
                { name: 'ПОЛНАЯ ПРОГРАММА', duration: '15 минут', price: '3.500' }
            ]
        },
        mihailov: {
            title: 'Стас Михайлов',
            image: 'assets/стас_михайлов.jpg.jpg',
            description: 'Порадуйте своих гостей выступлением "Короля шансона"! Ростовая кукла Стаса Михайлова создаст неповторимую атмосферу на вашем мероприятии.',
            prices: [
                { name: 'ЗВЁЗДНЫЙ КУРЬЕР', duration: '5 минут', price: '2.000' },
                { name: 'ЭКСПРЕСС-ПОЗДРАВЛЕНИЕ', duration: '5–7 минут', price: '2.700' },
                { name: 'ШОУ-МИНИ', duration: '10 минут', price: '3.700' },
                { name: 'ПРОГРАММА 18+', duration: '12 минут', price: '4.200' },
                { name: 'ШОУ С ОГОНЬКОМ', duration: '15 минут', price: '4.700' }
            ]
        },
        zhukov: {
            title: 'Сергей Жуков',
            image: 'assets/сергей_жуков.jpg.jpg',
            description: 'Легенда 90-х на вашем празднике! Ростовая кукла Сергея Жукова подарит незабываемые эмоции и зажигательные хиты.',
            prices: [
                { name: 'ЗВЁЗДНЫЙ КУРЬЕР', duration: '5 минут', price: '2.000' },
                { name: 'ЭКСПРЕСС-ПОЗДРАВЛЕНИЕ', duration: '5–7 минут', price: '2.700' },
                { name: 'ШОУ-МИНИ', duration: '10 минут', price: '3.700' },
                { name: 'ПРОГРАММА 18+', duration: '12 минут', price: '4.200' },
                { name: 'ШОУ С ОГОНЬКОМ', duration: '15 минут', price: '4.700' }
            ]
        },
        labuba: {
            title: 'Лабубу',
            image: 'assets/лабуба.jpg.jpg',
            shortDescription: 'Зажигательный персонаж для вашего праздника! 10-15 минут интерактивного веселья с Лабубу, фото, танцы и подарки.',
            description: 'ПАКЕТ "СТАНДАРТ" — 3.000₽\n💥 10 минут зажигательного веселья\n🕺 Яркий танцевальный выход Лабубу под любимые треки\n📸 Фото с Лабубу на память под весёлую музыку\n🎁 Дополнительно можно заказать:\n➕ +1 обычный гелиевый шар 🎈 — 100₽\n➕ +1 фольгированный шар ⭐ — 250₽\n➕ +1 светящийся шар на палочке — 500₽\n🎶 Лабубу поздоровается, похлопает, пошутит и зарядит настроением!\n\n🎉 👑 ПАКЕТ "ПРЕМИУМ" — 3.500₽\n✨ Для тех, кто хочет настоящую магию праздника!\n💥 15 минут интерактивного веселья с Лабубу\n 🎤 Он будет разговаривать, играть с детьми и устроит танцевальный батл!\n💥 Фото и видео под любимую музыку — запечатлейте яркие моменты 📸🎶\n💥 Подарок – гелиевые шарики 🎈\n Выбор на ваш вкус:\n – 5 обычных гелиевых \n – 1 фольгированный - фигурка\n – 1 фольгированный шар с надписью',
            prices: [
                { name: 'ПАКЕТ "СТАНДАРТ" ', duration: '10 минут', price: '3.000' },
                { name: 'ПАКЕТ "ПРЕМИУМ" ', duration: '15 минут', price: '3.500' }
            ]
        }
    };

    // 4. ОБРАБОТКА НАВИГАЦИИ
    // Обработка клика на элементе навигации "Программы"
    const programsNavLink = document.querySelector('.nav-links a[href="#programs"]');
    if (programsNavLink) {
        programsNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Показываем первого персонажа (можно изменить на любого другого)
            showProgramsForCharacter('allegrova');
            
            // Скролл к секции программ
            if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Обработка клика на элементе навигации "Заказать"
    const orderNavLink = document.querySelector('.nav-links a[href="#form"]');
    if (orderNavLink) {
        orderNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToOrderForm();
        });
    }

    // Обработка клика на кнопке "Заказать выступление" в герое
    const heroOrderButton = document.querySelector('#hero a.btn-primary[href="#form"]');
    if (heroOrderButton) {
        heroOrderButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToOrderForm();
        });
    }

    // 5. КЛИК ПО КАРТОЧКЕ - ОТКРЫВАЕМ МОДАЛЬНОЕ ОКНО
    document.querySelectorAll('.star-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Не открываем модалку при клике на кнопку "Заказать"
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            const starId = this.getAttribute('data-star');
            const artist = artistData[starId];
            
            if (artist && modal) {
                document.getElementById('modalTitle').textContent = artist.title;
                document.getElementById('modalImage').src = artist.image;
                // Use shortDescription for Labuba if available, otherwise use full description
                document.getElementById('modalDescription').textContent = artist.shortDescription || artist.description;
                
                const modalPrices = document.getElementById('modalPrices');
                modalPrices.innerHTML = artist.prices.map(price => `
                    <div class="price-item">
                        <div class="price-info">
                            <strong>${price.name}</strong>
                            <span>(${price.duration})</span>
                        </div>
                        <span class="price-value" data-program-name="${price.name}">${price.price} ₽</span>
                    </div>
                `).join('');
                
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('active');
                    document.body.classList.add('modal-open');
                }, 10);
            }
        });
    });
    
    // 6. КНОПКИ "ЗАКАЗАТЬ" НА КАРТОЧКАХ - СКРОЛЛ К ПРОГРАММАМ
    document.querySelectorAll('.star-card a.btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const starId = this.closest('.star-card').getAttribute('data-star');
            console.log('Нажата кнопка "Заказать" для:', starId);
            
            // Показываем программы выбранного персонажа
            showProgramsForCharacter(starId);
                    
            // Скролл к программам
            if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // 7. КНОПКИ "ЗАКАЗАТЬ" В ПРОГРАММАХ - СКРОЛЛ К ФОРМЕ И АВТОЗАПОЛНЕНИЕ
    document.querySelectorAll('.program-card .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const star = this.getAttribute('data-star');
            const program = this.getAttribute('data-program');
            console.log('Нажата кнопка "Заказать программу" для:', star, program);

            // Find the program name from the artistData using the data-program value
            let programToHighlightName = '';
            const artistPrograms = artistData[star]?.prices;
            if (artistPrograms) {
                // The data-program is in the format 'program_INDEX'
                const programIndex = parseInt(program.replace('program_', ''), 10);
                if (!isNaN(programIndex) && artistPrograms[programIndex]) {
                    programToHighlightName = artistPrograms[programIndex].name;
                }
            }

            // Определяем категорию
            const isFairytale = star === 'bear' || star === 'cheburashka' || star === 'labuba';
            const category = isFairytale ? 'fairytale' : 'stars';
            
            // Скролл к форме заказа
            scrollToOrderForm();
            
            // Устанавливаем значения в форме
            setTimeout(() => {
                // 1. Устанавливаем категорию
                const categorySelect = document.getElementById('category');
                if (categorySelect) {
                    categorySelect.value = category;
                    
                    // Обновляем отображение в кастомном селекте
                    const categoryTrigger = categorySelect.parentNode.querySelector('.custom-select__trigger span');
                    categoryTrigger.textContent = category === 'stars' ? 'Звёзды' : 'Сказка на лапках';
                    
                    // Вызываем событие изменения, чтобы сработали все обработчики
                    categorySelect.dispatchEvent(new Event('change'));
                    
                    // 2. Показываем нужную группу выбора персонажа
                    const starsGroup = document.getElementById('stars-select-group');
                    const fairytaleGroup = document.getElementById('fairytale-select-group');
                    
                    if (category === 'stars') {
                        starsGroup.style.display = 'block';
                        fairytaleGroup.style.display = 'none';
                        
                        // 3. Устанавливаем значение звезды
                        const starSelect = document.getElementById('star');
                        if (starSelect) {
                            starSelect.value = star;
                            
                            // Обновляем отображение в кастомном селекте
                            const starTrigger = starSelect.parentNode.querySelector('.custom-select__trigger span');
                            const starOption = document.querySelector(`.custom-option[data-value="${star}"]`);
                            if (starTrigger && starOption) {
                                starTrigger.textContent = starOption.textContent;
                            }
                            
                            // Вызываем событие изменения, чтобы обновились программы
                            starSelect.dispatchEvent(new Event('change'));
                        }
                    } else {
                        starsGroup.style.display = 'none';
                        fairytaleGroup.style.display = 'block';
                        
                        // 3. Устанавливаем значение персонажа
                        const characterSelect = document.getElementById('character');
                        if (characterSelect) {
                            characterSelect.value = star;
                            
                            // Обновляем отображение в кастомном селекте
                            const characterTrigger = characterSelect.parentNode.querySelector('.custom-select__trigger span');
                            const characterOption = document.querySelector(`#character-options .custom-option[data-value="${star}"]`);
                            if (characterTrigger && characterOption) {
                                characterTrigger.textContent = characterOption.textContent;
                            }
                            
                            // Вызываем событие изменения, чтобы обновились программы
                            characterSelect.dispatchEvent(new Event('change'));
                        }
                    }
                    
                    // 4. Устанавливаем программу после задержки для гарантии загрузки опций программ
                    setTimeout(() => {
                        // Находим подходящую программу в списке опций
                        const programSelect = document.getElementById('program');
                        if (programSelect) {
                            // Выбираем нужный индекс программы на основе атрибута program
                            // или ищем программу по имени
                            const options = programSelect.querySelectorAll('option');
                            let programIndex = 0;
                            
                            options.forEach((option, index) => {
                                // Проверяем соответствие по подстроке в тексте опции
                                const optionText = option.textContent.toLowerCase();
                                
                                if (program === 'kuryer' && optionText.includes('курьер') ||
                                    program === 'express' && optionText.includes('экспресс') ||
                                    program === 'mini' && optionText.includes('мини') ||
                                    program === '18plus' && optionText.includes('18+') ||
                                    program === 'fire' && optionText.includes('огоньком') ||
                                    program === 'greetings' && optionText.includes('поздравление') ||
                                    program === 'full' && optionText.includes('полная') ||
                                    program === 'standart' && optionText.includes('стандарт') ||
                                    program === 'premium' && optionText.includes('премиум')) {
                                    programIndex = index;
                                }
                            });
                            
                            if (options[programIndex]) {
                                programSelect.selectedIndex = programIndex;
                                
                                // Обновляем отображение в кастомном селекте
                                const programTrigger = programSelect.parentNode.querySelector('.custom-select__trigger span');
                                programTrigger.textContent = options[programIndex].textContent;
                            }
                        }
                    }, 300);
                }
            }, 500); // Даем время для скролла к форме
        });
    });
    
    // 8. ПРОСТАЯ ИНИЦИАЛИЗАЦИЯ КАСТОМНЫХ СЕЛЕКТОВ
    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const select = wrapper.querySelector('.custom-select');
        const trigger = select.querySelector('.custom-select__trigger');
        const options = select.querySelectorAll('.custom-option');
        
        // Открытие/закрытие селекта при клике на триггер
        trigger.addEventListener('click', function() {
            // Проверяем, не заблокирован ли селект
            if (select.classList.contains('disabled')) {
                return;
            }
            select.classList.toggle('open');
        });
        
        // Выбор опции
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Устанавливаем текст в триггер
                trigger.querySelector('span').textContent = this.textContent;
                
                // Закрываем селект
                select.classList.remove('open');
                
                // Устанавливаем значение в оригинальный селект
                const origSelect = wrapper.querySelector('select');
                if (origSelect) {
                    origSelect.value = this.getAttribute('data-value');
                    origSelect.dispatchEvent(new Event('change'));
                }
            });
        });
    
        // Закрытие при клике вне селекта
        document.addEventListener('click', function(e) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        });
    });
    
    // Защита поля телефона от удаления +7 и форматирование в маске
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        // Устанавливаем начальное значение
        phoneInput.value = "+7 ";
        
        // Функция для форматирования телефона
        function formatPhoneNumber(value) {
            // Удаляем все нецифровые символы
            const digits = value.replace(/\D/g, '');
            
            // Обеспечиваем, что начинается с 7
            let result = '+7';
            
            // Добавляем скобки, пробелы и дефисы в правильных местах
            if (digits.length > 1) {
                result += ' (';
            }
            
            if (digits.length > 1) {
                result += digits.substring(1, Math.min(4, digits.length));
            }
            
            if (digits.length > 4) {
                result += ') ';
            }
            
            if (digits.length > 4) {
                result += digits.substring(4, Math.min(7, digits.length));
            }
            
            if (digits.length > 7) {
                result += '-';
            }
            
            if (digits.length > 7) {
                result += digits.substring(7, Math.min(9, digits.length));
            }
            
            if (digits.length > 9) {
                result += '-';
            }
            
            if (digits.length > 9) {
                result += digits.substring(9, Math.min(11, digits.length));
            }
            
            return result;
        }
        
        // Отслеживаем изменения поля
        phoneInput.addEventListener('input', function(e) {
            // Запоминаем позицию курсора
            const cursorPosition = this.selectionStart;
            const oldValueLength = this.value.length;
            
            // Форматируем значение
            const formattedValue = formatPhoneNumber(this.value);
            this.value = formattedValue;
            
            // Пытаемся установить курсор в правильную позицию после форматирования
            const newValueLength = this.value.length;
            if (cursorPosition < oldValueLength) {
                const cursorOffset = newValueLength - oldValueLength;
                this.setSelectionRange(cursorPosition + cursorOffset, cursorPosition + cursorOffset);
            }
            
            // Проверяем валидность
            validatePhone();
        });
        
        // Не позволяем удалить +7 даже при backspace или delete
        phoneInput.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' || e.key === 'Delete') {
                // Если курсор в начале или выделение включает символы +7
                if (this.selectionStart <= 3) {
                    // Запрещаем действие по умолчанию
                    e.preventDefault();
                }
            }
        });
    }
    
    // Функция валидации имени
    function validateName() {
        const nameInput = document.getElementById('name-input');
        const nameError = document.getElementById('name-error');
        
        if (nameInput && nameError) {
            if (!nameInput.value.trim()) {
                nameInput.classList.add('error');
                nameError.style.display = 'block';
                return false;
            } else {
                nameInput.classList.remove('error');
                nameError.style.display = 'none';
                return true;
            }
        }
        return true;
    }
    
    // Функция валидации телефона
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        
        if (phoneInput && phoneError) {
            const digits = phoneInput.value.replace(/\D/g, '');
            if (digits.length !== 11 || digits[0] !== '7') {
                phoneInput.classList.add('error');
                phoneError.style.display = 'block';
                return false;
            } else {
                phoneInput.classList.remove('error');
                phoneError.style.display = 'none';
                return true;
            }
        }
        return true;
    }
    
    // Установка обработчиков событий для полей имени и телефона
    const nameInput = document.getElementById('name-input');
    if (nameInput) {
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', function() {
            if (this.value.trim()) {
                nameInput.classList.remove('error');
                document.getElementById('name-error').style.display = 'none';
            }
        });
    }
    
    // Настройка зависимостей в выборе программ
    const categorySelect = document.getElementById('category');
    const starSelect = document.getElementById('star');
    const characterSelect = document.getElementById('character');
    const programSelect = document.getElementById('program');
    
    // Функция для обновления селекта программ
    function updateProgramOptions(characterId) {
        // Сначала очищаем текущие опции
        programSelect.innerHTML = '<option value="" disabled selected>Выберите программу</option>';
        
        // Селект пользовательского интерфейса
        const programCustomSelect = document.querySelector('#program-options');
        programCustomSelect.innerHTML = '';
        
        // Если персонаж выбран, добавляем соответствующие программы
        if (characterId) {
            // Активируем селект программ
            programSelect.disabled = false;
            document.querySelector('#program').parentNode.querySelector('.custom-select').classList.remove('disabled');
            document.querySelector('#program').parentNode.querySelector('.custom-select__trigger').classList.remove('disabled');
            document.querySelector('#program').parentNode.querySelector('.custom-select__trigger span').textContent = 'Выберите программу';
            
            // Добавляем опции в зависимости от выбранного персонажа
            if (artistData[characterId]) {
                const programs = artistData[characterId].prices;
                
                programs.forEach((program, index) => {
                    // Добавляем опцию в оригинальный селект
                    const option = document.createElement('option');
                    option.value = `program_${index}`;
                    option.textContent = `${program.name} (${program.duration}) - ${program.price} ₽`;
                    programSelect.appendChild(option);
                    
                    // Добавляем опцию в кастомный селект
                    const customOption = document.createElement('span');
                    customOption.className = 'custom-option';
                    customOption.setAttribute('data-value', `program_${index}`);
                    customOption.textContent = `${program.name} (${program.duration}) - ${program.price} ₽`;
                    programCustomSelect.appendChild(customOption);
                });
                
                // Инициализируем обработчики для новых опций
                programCustomSelect.querySelectorAll('.custom-option').forEach(option => {
                    option.addEventListener('click', function() {
                        const trigger = this.closest('.custom-select').querySelector('.custom-select__trigger span');
                        trigger.textContent = this.textContent;
                        
                        this.closest('.custom-select').classList.remove('open');
                        
                        // Обновляем значение настоящего селекта
                        const select = this.closest('.custom-select-wrapper').querySelector('select');
                        select.value = this.getAttribute('data-value');
                        select.dispatchEvent(new Event('change'));
                    });
                });
            }
        } else {
            // Если персонаж не выбран, блокируем селект программ
            programSelect.disabled = true;
            document.querySelector('#program').parentNode.querySelector('.custom-select').classList.add('disabled');
            document.querySelector('#program').parentNode.querySelector('.custom-select__trigger').classList.add('disabled');
            document.querySelector('#program').parentNode.querySelector('.custom-select__trigger span').textContent = 'Сначала выберите персонажа';
        }
    }
    
    // Обработчик изменения категории
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const starsGroup = document.getElementById('stars-select-group');
            const fairytaleGroup = document.getElementById('fairytale-select-group');
            
            // Скрываем оба селекта персонажей
            starsGroup.style.display = 'none';
            fairytaleGroup.style.display = 'none';
            
            // Сбрасываем значения селектов персонажей
            if (starSelect) starSelect.value = '';
            if (characterSelect) characterSelect.value = '';
            
            // Сбрасываем кастомные селекты
            document.querySelector('#star').parentNode.querySelector('.custom-select__trigger span').textContent = 'Выберите звезду';
            document.querySelector('#character').parentNode.querySelector('.custom-select__trigger span').textContent = 'Выберите персонажа';
            
            // Блокируем селект программ
            updateProgramOptions(null);
            
            // Показываем соответствующий селект в зависимости от выбранной категории
            if (this.value === 'stars') {
                starsGroup.style.display = 'block';
            } else if (this.value === 'fairytale') {
                fairytaleGroup.style.display = 'block';
            }
        });
    }
    
    // Обработчики выбора персонажа
    if (starSelect) {
        starSelect.addEventListener('change', function() {
            updateProgramOptions(this.value);
        });
    }
    
    if (characterSelect) {
        characterSelect.addEventListener('change', function() {
            updateProgramOptions(this.value);
        });
    }
    
    // 9. ВАЛИДАЦИЯ ФОРМЫ
    const form = document.getElementById('request-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
                
            // Проверка имени
            if (!validateName()) {
                isValid = false;
            }
            
            // Проверка телефона
            if (!validatePhone()) {
                isValid = false;
            }
            
            // Проверка категории и персонажей
            const errorMessage = document.getElementById('form-error');
            
            if (categorySelect && errorMessage) {
                if (!categorySelect.value) {
                    errorMessage.textContent = 'Выберите категорию';
                    errorMessage.style.display = 'block';
                    isValid = false;
                } else if (categorySelect.value === 'stars') {
                    if (!starSelect.value) {
                        errorMessage.textContent = 'Выберите звезду';
                        errorMessage.style.display = 'block';
                        isValid = false;
                    }
                } else if (categorySelect.value === 'fairytale') {
                    if (!characterSelect.value) {
                        errorMessage.textContent = 'Выберите персонажа';
                        errorMessage.style.display = 'block';
                        isValid = false;
                    }
                }
                
                // Проверка программы
                if (isValid && (!programSelect.value || programSelect.selectedIndex === 0)) {
                    errorMessage.textContent = 'Выберите программу';
                    errorMessage.style.display = 'block';
                    isValid = false;
                } else {
                    errorMessage.style.display = 'none';
                }
            }
            
            if (isValid) {
                // --- ОТПРАВКА НА MAKE ---
                const name = document.getElementById('name-input').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const category = document.getElementById('category').value;
                const star = document.getElementById('star').value;
                const character = document.getElementById('character').value;
                const programSelect = document.getElementById('program');
                const program = programSelect.options[programSelect.selectedIndex]?.textContent || '';

                // Словари для отображения
                const categoryMap = {
                  stars: 'Звёзды',
                  fairytale: 'Сказка на лапках'
                };
                const starMap = {
                  allegrova: 'Ирина Аллегрова',
                  pirozhkov: 'Артур Пирожков',
                  agutin: 'Леонид Агутин',
                  mihailov: 'Стас Михайлов',
                  zhukov: 'Сергей Жуков'
                };
                const characterMap = {
                  bear: 'Белый Мишка',
                  cheburashka: 'Чебурашка',
                  labuba: 'Лабубу'
                };

                fetch('https://hook.eu2.make.com/9obgfbxoc764az2c1tmht04wtdy4d6qt', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name,
                    phone,
                    category: categoryMap[category] || category,
                    star: category === 'stars' ? (starMap[star] || star) : '',
                    character: category === 'fairytale' ? (characterMap[character] || character) : '',
                    program
                  })
                })
                .then(res => {
                  if (!res.ok) throw new Error('Ошибка отправки');
                  // Можно добавить свою анимацию/уведомление об успехе
                })
                .catch(() => {
                  alert('Ошибка отправки. Попробуйте ещё раз.');
                });
                // --- КОНЕЦ FETCH ---
                // Анимация отправки формы
                const submitBtn = form.querySelector('.btn-primary');
                const originalText = submitBtn.innerHTML;
                
                // Добавляем анимацию загрузки на кнопку
                submitBtn.classList.add('form-submit-animation');
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
                submitBtn.disabled = true;
                
                // Добавляем эффект волны по всей форме
                const formContainer = document.querySelector('.form-container');
                formContainer.classList.add('highlight');
                
                // Имитация отправки данных на сервер
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
                    submitBtn.style.background = 'linear-gradient(45deg, #e9414c, #d02c39)';
                    formContainer.classList.remove('highlight');
                    formContainer.classList.add('form-success');
                    
                    // Добавляем конфетти-эффект при успешной отправке
                    if (typeof createConfetti === 'function') {
                        createConfetti();
                    }
                    
                    // После успешной отправки
                    setTimeout(() => {
                        // Не создаем дополнительное уведомление, так как оно уже создается в index.html
                        
                        // Возвращаем кнопку в исходное состояние
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        submitBtn.classList.remove('form-submit-animation');
                        formContainer.classList.remove('form-success');
                        
                        // Сбрасываем форму и обновляем селекты
                        form.reset();
                        
                        // Сбрасываем селекты программ и персонажей
                        document.getElementById('stars-select-group').style.display = 'none';
                        document.getElementById('fairytale-select-group').style.display = 'none';
                        
                        // Сбрасываем кастомные селекты
                        document.querySelector('#category').parentNode.querySelector('.custom-select__trigger span').textContent = 'Не выбрано';
                        document.querySelector('#star').parentNode.querySelector('.custom-select__trigger span').textContent = 'Выберите звезду';
                        document.querySelector('#character').parentNode.querySelector('.custom-select__trigger span').textContent = 'Выберите персонажа';
                        
                        // Блокируем селект программ
                        updateProgramOptions(null);
                        
                        // Восстанавливаем значение телефона
                        phoneInput.value = "+7 ";
                    }, 2000);
                }, 1500);
            }
        });
    }
    
    // Инициализируем отображение первого артиста при загрузке страницы, чтобы показать хотя бы одного
    const firstStarId = document.querySelector('.star-card')?.getAttribute('data-star');
    if (firstStarId) {
        showProgramsForCharacter(firstStarId);
    }

    // === БУРГЕР-МЕНЮ ДЛЯ МОБИЛЬНОЙ НАВИГАЦИИ ===
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
        // При клике на ссылку меню — закрываем меню
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }

    // === ПЛАВНЫЙ СКРОЛЛ С УЧЁТОМ ФИКСИРОВАННОГО ХЕДЕРА ===
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 70;
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
                // Закрываем мобильное меню, если оно открыто
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });

    // === КОПИРОВАНИЕ В БУФЕР ОБМЕНА ===
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.dataset.copy || this.textContent || this.value;
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => {
                    btn.classList.add('copied');
                    setTimeout(() => btn.classList.remove('copied'), 1200);
                });
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                try { document.execCommand('copy'); } catch (err) {}
                document.body.removeChild(textarea);
                btn.classList.add('copied');
                setTimeout(() => btn.classList.remove('copied'), 1200);
            }
        });
    });

    // === ФИКС КАСТОМНЫХ СЕЛЕКТОВ: закрытие при любом клике вне ===
    document.addEventListener('click', function(e) {
        document.querySelectorAll('.custom-select.open').forEach(sel => {
            if (!sel.contains(e.target)) sel.classList.remove('open');
        });
    });
}); 
