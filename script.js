// Data default checklist untuk programmer (30+ tugas)
const defaultTasks = [
    // Tugas Pagi (6 tugas)
    {
        id: 1,
        title: "Review email dan notifikasi",
        description: "Cek email, Slack, Teams, dan notifikasi penting lainnya",
        category: "morning",
        priority: "medium",
        completed: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Planning harian",
        description: "Buat rencana kerja untuk hari ini dengan prioritas",
        category: "morning",
        priority: "high",
        completed: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "Stand-up meeting",
        description: "Ikuti daily stand-up dengan tim (jika ada)",
        category: "morning",
        priority: "high",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 4,
        title: "Minum air putih",
        description: "Minum 1-2 gelas air putih setelah bangun tidur",
        category: "morning",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 5,
        title: "Sarapan sehat",
        description: "Sarapan dengan makanan bergizi untuk energi sepanjang hari",
        category: "morning",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 6,
        title: "Stretching ringan",
        description: "Lakukan peregangan selama 5 menit sebelum mulai kerja",
        category: "morning",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },

    // Tugas Kerja (8 tugas)
    {
        id: 7,
        title: "Implementasi fitur/task utama",
        description: "Kerjakan task dengan prioritas tertinggi hari ini",
        category: "work",
        priority: "high",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 8,
        title: "Debugging & fixing bugs",
        description: "Perbaiki bug yang ada di backlog",
        category: "work",
        priority: "high",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 9,
        title: "Code review",
        description: "Review pull request dari anggota tim",
        category: "work",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 10,
        title: "Testing kode",
        description: "Lakukan unit testing dan integration testing",
        category: "work",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 11,
        title: "Update dokumentasi",
        description: "Perbarui dokumentasi API atau README",
        category: "work",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 12,
        title: "Commit & push kode",
        description: "Commit perubahan dan push ke repository",
        category: "work",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 13,
        title: "Meeting dengan tim",
        description: "Ikuti meeting rutin atau meeting project",
        category: "work",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 14,
        title: "Update task tracker",
        description: "Update progress di Jira/Trello/Asana",
        category: "work",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },

    // Tugas Istirahat (4 tugas)
    {
        id: 15,
        title: "Istirahat makan siang",
        description: "Jangan lupa makan siang yang bergizi",
        category: "break",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 16,
        title: "Istirahat mata 20-20-20",
        description: "Setiap 20 menit, lihat objek 20 kaki selama 20 detik",
        category: "break",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 17,
        title: "Jalan-jalan sebentar",
        description: "Berdiri dan berjalan selama 5-10 menit",
        category: "break",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 18,
        title: "Minum air putih",
        description: "Tetap terhidrasi, minum air putih secara teratur",
        category: "break",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },

    // Tugas Sore/Malam (4 tugas)
    {
        id: 19,
        title: "Persiapan untuk besok",
        description: "Siapkan tugas yang akan dikerjakan besok",
        category: "evening",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 20,
        title: "Clean up workspace",
        description: "Bersihkan dan rapikan workspace",
        category: "evening",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 21,
        title: "Review pencapaian hari ini",
        description: "Evaluasi apa yang sudah dicapai hari ini",
        category: "evening",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 22,
        title: "Backup pekerjaan",
        description: "Backup kode dan data penting",
        category: "evening",
        priority: "high",
        completed: false,
        createdAt: new Date().toISOString()
    },

    // Tugas Belajar (4 tugas)
    {
        id: 23,
        title: "Baca artikel teknologi",
        description: "Baca blog/artikel tentang teknologi terbaru",
        category: "learning",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 24,
        title: "Belajar skill baru",
        description: "Luangkan 30 menit untuk belajar skill/framework baru",
        category: "learning",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 25,
        title: "Ikuti tutorial/course",
        description: "Ikuti tutorial online atau course",
        category: "learning",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 26,
        title: "Practice coding challenge",
        description: "Kerjakan 1-2 soal coding challenge",
        category: "learning",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },

    // Tugas Kesehatan (4 tugas)
    {
        id: 27,
        title: "Olahraga ringan",
        description: "Lakukan olahraga ringan 15-30 menit",
        category: "health",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 28,
        title: "Meditasi/relaksasi",
        description: "Meditasi atau relaksasi selama 10 menit",
        category: "health",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 29,
        title: "Cukup tidur",
        description: "Pastikan tidur 7-8 jam per hari",
        category: "health",
        priority: "high",
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 30,
        title: "Batasi screen time",
        description: "Batasi waktu di depan layar sebelum tidur",
        category: "health",
        priority: "low",
        completed: false,
        createdAt: new Date().toISOString()
    }
];

// Data aplikasi
let tasks = [...defaultTasks];

// State aplikasi
let currentFilter = "all";
let currentCategory = "all";
let editTaskId = null;

// DOM Elements
const checklistItemsContainer = document.getElementById('checklistItems');
const taskForm = document.getElementById('taskForm');
const categoryTabs = document.querySelectorAll('.category-tab');
const filterButtons = {
    all: document.getElementById('showAll'),
    completed: document.getElementById('showCompleted'),
    pending: document.getElementById('showPending')
};
const stats = {
    completed: document.getElementById('completedCount'),
    pending: document.getElementById('pendingCount'),
    total: document.getElementById('totalCount')
};
const footerStats = {
    completed: document.getElementById('footerCompleted'),
    total: document.getElementById('footerTotal')
};
const progressFill = document.getElementById('progressFill');
const progressPercentage = document.getElementById('progressPercentage');
const completionAnimation = document.getElementById('completionAnimation');
const bulkActionButtons = {
    selectAll: document.getElementById('selectAllBtn'),
    markAllComplete: document.getElementById('markAllCompleteBtn'),
    clearCompleted: document.getElementById('clearCompletedBtn')
};
const resetDataBtn = document.getElementById('resetDataBtn');

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function () {
    console.log('DevDailyCheck initialized');

    // Tampilkan tanggal saat ini
    displayCurrentDate();

    // Load data dari localStorage
    loadFromLocalStorage();

    // Render checklist items
    renderChecklistItems();

    // Update stats
    updateStats();

    // Setup event listeners
    setupEventListeners();

    // Setup form submission
    taskForm.addEventListener('submit', handleFormSubmit);

    // Setup filter buttons
    Object.keys(filterButtons).forEach(key => {
        filterButtons[key].addEventListener('click', () => {
            setFilter(key);
        });
    });

    // Setup category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            setCategory(category);
        });
    });

    // Setup theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Setup bulk action buttons
    bulkActionButtons.selectAll.addEventListener('click', selectAllTasks);
    bulkActionButtons.markAllComplete.addEventListener('click', markAllComplete);
    bulkActionButtons.clearCompleted.addEventListener('click', clearCompletedTasks);

    // Setup reset data button
    resetDataBtn.addEventListener('click', resetToDefault);
});

// Fungsi untuk menampilkan tanggal saat ini
function displayCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    document.getElementById('currentDate').textContent = dateString;
}

// Fungsi untuk merender checklist items
function renderChecklistItems() {
    // Filter tasks berdasarkan kategori dan filter status
    let filteredTasks = tasks;

    // Filter berdasarkan kategori
    if (currentCategory !== 'all') {
        filteredTasks = filteredTasks.filter(task => task.category === currentCategory);
    }

    // Filter berdasarkan status
    if (currentFilter === 'completed') {
        filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (currentFilter === 'pending') {
        filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    // Kosongkan container
    checklistItemsContainer.innerHTML = '';

    // Jika tidak ada tugas
    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'checklist-item';
        emptyMessage.innerHTML = `
            <div class="item-content">
                <h3>Tidak ada tugas</h3>
                <p>Tidak ada tugas yang sesuai dengan filter yang dipilih.</p>
            </div>
        `;
        checklistItemsContainer.appendChild(emptyMessage);
        return;
    }

    // Render setiap task
    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        checklistItemsContainer.appendChild(taskElement);
    });
}

// Fungsi untuk membuat elemen task
function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `checklist-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
    taskElement.setAttribute('data-id', task.id);

    // Map kategori ke nama yang lebih user-friendly
    const categoryNames = {
        morning: 'Pagi',
        work: 'Kerja',
        break: 'Istirahat',
        evening: 'Sore/Malam',
        learning: 'Belajar',
        health: 'Kesehatan'
    };

    // Map prioritas ke nama yang lebih user-friendly
    const priorityNames = {
        low: 'Rendah',
        medium: 'Sedang',
        high: 'Tinggi'
    };

    taskElement.innerHTML = `
        <div class="checkbox-container">
            <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
            <span class="checkmark"></span>
        </div>
        <div class="item-content">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <div class="item-meta">
                <span class="item-tag">${categoryNames[task.category]}</span>
                <span class="item-priority priority-${task.priority}">${priorityNames[task.priority]}</span>
                ${task.completed ? '<span class="item-tag" style="background-color: rgba(16, 185, 129, 0.2); color: var(--success);"><i class="fas fa-check"></i> Selesai</span>' : ''}
            </div>
        </div>
        <div class="item-actions">
            <button class="btn-icon edit-btn" title="Edit tugas">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon delete-btn" title="Hapus tugas">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Tambahkan event listeners untuk checkbox
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        toggleTaskCompletion(task.id);
    });

    // Juga tambahkan event listener pada container checkbox
    const checkboxContainer = taskElement.querySelector('.checkbox-container');
    checkboxContainer.addEventListener('click', function (e) {
        if (e.target === this || e.target.classList.contains('checkmark')) {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
        }
    });

    // Tambahkan event listeners untuk tombol edit dan delete
    const editBtn = taskElement.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editTask(task.id));

    const deleteBtn = taskElement.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    return taskElement;
}

// Fungsi untuk toggle status penyelesaian task
function toggleTaskCompletion(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        const wasCompleted = tasks[taskIndex].completed;
        tasks[taskIndex].completed = !wasCompleted;

        // Tampilkan animasi jika tugas baru saja diselesaikan
        if (!wasCompleted && tasks[taskIndex].completed) {
            showCompletionAnimation();
        }

        updateStats();
        renderChecklistItems();

        // Simpan ke localStorage
        saveToLocalStorage();
    }
}

// Fungsi untuk menampilkan animasi penyelesaian
function showCompletionAnimation() {
    completionAnimation.classList.add('show');
    setTimeout(() => {
        completionAnimation.classList.remove('show');
    }, 1500);
}

// Fungsi untuk mengedit task
function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (!task) return;

    // Isi form dengan data task
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskCategory').value = task.category;
    document.getElementById('taskPriority').value = task.priority;

    // Ubah teks tombol submit
    const submitBtn = taskForm.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Simpan Perubahan';

    // Set edit mode
    editTaskId = taskId;

    // Scroll ke form
    document.querySelector('.add-task-form').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk menghapus task
function deleteTask(taskId) {
    if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        updateStats();
        renderChecklistItems();

        // Simpan ke localStorage
        saveToLocalStorage();
    }
}

// Fungsi untuk menangani form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const category = document.getElementById('taskCategory').value;
    const priority = document.getElementById('taskPriority').value;

    if (!title) {
        alert('Judul tugas tidak boleh kosong!');
        return;
    }

    if (editTaskId) {
        // Update task yang ada
        const taskIndex = tasks.findIndex(task => task.id === editTaskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].title = title;
            tasks[taskIndex].description = description;
            tasks[taskIndex].category = category;
            tasks[taskIndex].priority = priority;
        }
        editTaskId = null;

        // Reset teks tombol
        const submitBtn = taskForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-plus"></i> Tambah Tugas';
    } else {
        // Tambah task baru
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title,
            description,
            category,
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
    }

    // Reset form
    taskForm.reset();

    // Update UI
    updateStats();
    renderChecklistItems();

    // Simpan ke localStorage
    saveToLocalStorage();

    // Tampilkan notifikasi sukses
    alert(editTaskId ? 'Tugas berhasil diperbarui!' : 'Tugas berhasil ditambahkan!');
}

// Fungsi untuk mengupdate stats dan progress
function updateStats() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.filter(task => !task.completed).length;
    const totalTasks = tasks.length;

    // Update statistik
    stats.completed.textContent = completedTasks;
    stats.pending.textContent = pendingTasks;
    stats.total.textContent = totalTasks;

    footerStats.completed.textContent = completedTasks;
    footerStats.total.textContent = totalTasks;

    // Update progress bar
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    progressFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${progress}%`;

    // Update warna progress berdasarkan persentase
    if (progress < 30) {
        progressFill.style.background = 'linear-gradient(90deg, var(--danger), var(--warning))';
    } else if (progress < 70) {
        progressFill.style.background = 'linear-gradient(90deg, var(--warning), var(--primary))';
    } else {
        progressFill.style.background = 'linear-gradient(90deg, var(--primary), var(--success))';
    }
}

// Fungsi untuk mengatur filter
function setFilter(filter) {
    currentFilter = filter;

    // Update UI untuk tombol filter
    Object.keys(filterButtons).forEach(key => {
        if (key === filter) {
            filterButtons[key].style.backgroundColor = 'var(--primary)';
        } else {
            filterButtons[key].style.backgroundColor = '';
        }
    });

    renderChecklistItems();
}

// Fungsi untuk mengatur kategori
function setCategory(category) {
    currentCategory = category;

    // Update UI untuk tab kategori
    categoryTabs.forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderChecklistItems();
}

// Fungsi untuk toggle tema
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
    }

    // Simpan preferensi tema ke localStorage
    const isLightTheme = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Fungsi untuk menyimpan data ke localStorage
function saveToLocalStorage() {
    localStorage.setItem('devDailyCheckTasks', JSON.stringify(tasks));
}

// Fungsi untuk memuat data dari localStorage
function loadFromLocalStorage() {
    const savedTasks = localStorage.getItem('devDailyCheckTasks');
    if (savedTasks) {
        try {
            tasks = JSON.parse(savedTasks);
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            tasks = [...defaultTasks];
        }
    } else {
        tasks = [...defaultTasks];
    }
}

// Fungsi untuk reset ke data default
function resetToDefault() {
    if (confirm('Apakah Anda yakin ingin mereset semua data ke default? Semua tugas yang Anda tambah/edit akan hilang.')) {
        tasks = [...defaultTasks];
        updateStats();
        renderChecklistItems();
        saveToLocalStorage();
        alert('Data berhasil direset ke default!');
    }
}

// Fungsi untuk setup event listeners
function setupEventListeners() {
    // Load preferensi tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }

    // Setup keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl + Enter untuk submit form
        if (e.ctrlKey && e.key === 'Enter' &&
            (document.activeElement === document.getElementById('taskTitle') ||
                document.activeElement === document.getElementById('taskDescription'))) {
            taskForm.dispatchEvent(new Event('submit'));
        }

        // Escape untuk cancel edit
        if (e.key === 'Escape' && editTaskId) {
            editTaskId = null;
            taskForm.reset();
            const submitBtn = taskForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-plus"></i> Tambah Tugas';
        }

        // Ctrl + A untuk select all
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            selectAllTasks();
        }

        // Ctrl + Shift + C untuk mark all complete
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            markAllComplete();
        }
    });
}

// Fungsi untuk memilih semua tugas
function selectAllTasks() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
        // Trigger change event
        const event = new Event('change');
        checkbox.dispatchEvent(event);
    });

    alert(allChecked ? 'Semua tugas tidak dipilih' : 'Semua tugas dipilih');
}

// Fungsi untuk menandai semua tugas selesai
function markAllComplete() {
    if (confirm('Tandai semua tugas sebagai selesai?')) {
        tasks.forEach(task => {
            task.completed = true;
        });
        updateStats();
        renderChecklistItems();
        saveToLocalStorage();
        showCompletionAnimation();
    }
}

// Fungsi untuk menghapus semua tugas yang selesai
function clearCompletedTasks() {
    const completedCount = tasks.filter(task => task.completed).length;
    if (completedCount === 0) {
        alert('Tidak ada tugas yang selesai untuk dihapus');
        return;
    }

    if (confirm(`Hapus ${completedCount} tugas yang sudah selesai?`)) {
        tasks = tasks.filter(task => !task.completed);
        updateStats();
        renderChecklistItems();
        saveToLocalStorage();
    }
}