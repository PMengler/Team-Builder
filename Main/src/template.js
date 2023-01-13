function generateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Builder</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap">
            <link rel="stylesheet" href="style.css">

        </head>
        <body>
            <h1>My Cards</h1>
            ${generateCards(cards)}
        </body>
        <script src="../index.js"></script>
    </html>`
}

function generateManager() {
    return `
    <div class="card 1">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <ul class="list-group list-group-flush">
    `
}

function generateEngineer() {
    return `
    <div class="card 2">
        <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group list-group-flush">
    `
}

function generateIntern() {
    return `
    <div class="card 3">
        <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group list-group-flush">
    `
}

// const cards = [
//     {
//       title: "Card 1",
//       content: "Content for card 1"
//     },
//     {
//       title: "Card 2",
//       content: "Content for card 2"
//     },
//     {
//       title: "Card 3",
//       content: "Content for card 3"
//     }
//   ];
  
//   const generateCard = (card) => {
//     return `
//       <div class="card">
//         <h2>${card.title}</h2>
//         <p>${card.content}</p>
//       </div>
//     `;
//   }
  
//   const generateCards = (cards) => {
//     let cardElements = "";
//     cards.forEach((card) => {
//       cardElements += generateCard(card);
//     });
//     return cardElements;
//   }