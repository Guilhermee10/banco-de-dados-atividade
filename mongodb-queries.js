// Criação do banco e coleção
use Ebac

db.alunos.insertMany([
    { "nome": "Fábio", "nota": 7, "curso": "QA" },
    { "nome": "Alice", "nota": 9, "curso": "SQL" },
    { "nome": "Mariana", "cargo": "Professora", "curso": ["QA", "FrontEnd", "MongoDB"] },
    { "nome": "João", "nota": 7, "curso": "QA" },
    { "nome": "Paulo", "nota": 5, "curso": "Dev" },
    { "nome": "Maria", "nota": 8, "curso": "QA" },
    { "nome": "José", "nota": 4, "curso": "SQL" },
    { "nome": "Ana", "nota": 9, "curso": "QA" },
    { "nome": "José Pedro", "nota": 7, "curso": "UX" }
])

// 1. Ordenado por nome alfabeticamente
db.alunos.find().sort({ nome: 1 })

// 2. Alunos do curso de SQL
db.alunos.find({ curso: "SQL" })

// 3. Alunos com nota >= 6 e curso QA
db.alunos.find({ nota: { $gte: 6 }, curso: "QA" })

// 5. Alunos com "Pedro" no nome
db.alunos.find({ nome: /Pedro/ })