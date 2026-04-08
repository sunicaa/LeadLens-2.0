const profileMap = {
  anna: {
    name: 'Анна Петрова',
    role: 'Frontend Engineer',
    avatar: 'А',
    avatarClass: 'avatar-pink',
    summary: 'Сильная динамика по delivery, рост в коммуникации и UX-мышлении.'
  },
  ivan: {
    name: 'Иван Сидоров',
    role: 'Backend Engineer',
    avatar: 'И',
    avatarClass: 'avatar-blue',
    summary: 'Стабильно закрывает backend-задачи, фокус на архитектурной глубине.'
  },
  dmitry: {
    name: 'Дмитрий Козлов',
    role: 'Product Manager',
    avatar: 'Д',
    avatarClass: 'avatar-violet',
    summary: 'Сильный в синхронизации команды и приоритизации продуктовых решений.'
  }
};

let previousScreen = 'team';

function showScreen(id) {
  const active = document.querySelector('.screen.active');
  if (active && active.id !== id) previousScreen = active.id;

  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function showEmployee(name) {
  const profile = profileMap[name] || profileMap.anna;

  document.getElementById('profile-name').textContent = profile.name;
  document.querySelector('.profile-title').textContent = profile.role;
  document.querySelector('.profile-hero .muted').textContent = profile.summary;

  const avatar = document.getElementById('profile-avatar');
  avatar.textContent = profile.avatar;
  avatar.className = `avatar avatar-xl ${profile.avatarClass}`;

  showScreen('profile');
}

function goBack() {
  showScreen(previousScreen === 'retro' ? 'profile' : previousScreen || 'profile');
}

window.onload = () => {
  showScreen('login');
};
