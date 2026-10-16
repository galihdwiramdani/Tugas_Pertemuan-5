// 1. Hamburger menu: buka/tutup sidebar di layar kecil
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', open);
});

// 2. Pencarian: menyaring link sidebar dan daftar tutorial di halaman utama
const noResult = document.getElementById('none');
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.sidebar a, .tut').forEach(el => {
    const text = (el.dataset.title || el.textContent).toLowerCase();
    el.hidden = !text.includes(q);
  });
  if (noResult) noResult.hidden = document.querySelector('.tut:not([hidden])') !== null;
});

// 3. Salin teks (dengan cadangan untuk browser yang membatasi clipboard)
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  const t = document.createElement('textarea');
  t.value = text;
  document.body.appendChild(t);
  t.select();
  document.execCommand('copy');
  t.remove();
  return Promise.resolve();
}

// 4. Contoh kode: Copy Code, Try it Yourself, dan preview di iframe sandbox
document.querySelectorAll('.example').forEach(ex => {
  const code = ex.querySelector('code').textContent;
  const frame = ex.querySelector('iframe');
  const editor = ex.querySelector('.editor');
  const area = ex.querySelector('textarea');
  area.value = code;
  frame.srcdoc = code;

  const copyBtn = ex.querySelector('.copy');
  copyBtn.addEventListener('click', () => {
    copyText(code).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy Code'), 1500);
    });
  });
  ex.querySelector('.try').addEventListener('click', () => { editor.hidden = !editor.hidden; });
  ex.querySelector('.run').addEventListener('click', () => { frame.srcdoc = area.value; });
});
