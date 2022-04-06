const question = [
    "O que aprendi hoje? ",
    "O que me aborreceu hoje?",
    "O que me deixou feliz? ",
    "Quantas pessoas eu Ajudei hoje",
]
// processo de saísa 
const ask = (index = 0) =>{
    process.stdout.write("\n" + question[index] + "> ")
}
ask()
const answers = []
//entrada
process.stdin.on('data', data =>{
    answers.push(data.toString().trim())
    if(answers.length < question.length) {
        ask(answers.length)
    }else{
        process.exit()
    }
    
})
process.on("exit", ()=>{
    console.log(`
    Bacana Diego!
    
    O que eu aprendi hoje foi:
    ${answers[0]}
    
    O que me Aborreceu hoje foi:
    ${answers[1]}
    
    O que me deixou feliz hoje foi:
    ${answers[2]}
    
    Eu ajudei ${answers[3]} pessoas hoje
    
    Volte amanhã para novas reflexões!!
    `)
})

