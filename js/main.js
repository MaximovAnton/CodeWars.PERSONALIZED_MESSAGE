const personalizedMessage = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`

document.write(personalizedMessage('Jack', 'Jack'))
document.write(personalizedMessage('Daniels', 'Jack'))
