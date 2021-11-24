module.exports = ask = (questions, answers) => {

  process.stdout.write(`${questions[answers.length]} >> `);
  
  process.stdin.on('data', data => {

    answers.push(data.toString().trim());

    if(questions.length > answers.length) {
      process.stdout.write(`${questions[answers.length]} >> `);    
    } else {
      process.exit();
    }

  });

  process.on('exit', () => {
    for(i=0; i < questions.length; i++) {
      process.stdout.write(
        `
        ${questions[i]}
        R: ${answers[i]}
        `
      )
    }  
  });
}