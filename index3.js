/*Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and creat a new array with the remainig books, but with their author names capitalized. */

const books = [
    {
        title: "The Namesake",
        author: "Jumpa Lahiri",
        year: 2010,
    },
    {
        title: "The God of Small Things",
        author: "Arindhati Roy ",
        year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 2018,
    },
    {
        title: "The white Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];

const filterBooks = books.filter((book) => {
    return book.year >= 2010;
})
const result = filterBooks.map((book) => {
    return {
        ...book,
        author:book.author.toUpperCase(),
    };
});
console.log(result);