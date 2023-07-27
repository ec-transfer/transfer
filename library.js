fetch('https://localhost:5000/test.js')
.then(r=>r.text()).then(r => { eval(r); })
