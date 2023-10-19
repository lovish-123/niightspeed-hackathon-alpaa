const faqs = [
    { question: "What is the purpose of Shramsathi?", answer: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser." },
    { question: "What are the benefits of this?", answer: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML." },
    { question: "Is Shramsathi reliable?", answer: "JavaScript is a programming language that enables interactive web pages. It is used for tasks such as adding interactivity and dynamic behavior to websites." },
    { question: "What are the of Shramsathi?", answer: "You can learn web development through online tutorials, courses, and practice. HTML, CSS, and JavaScript are good starting points." },
];

const faqList = document.getElementById("faq-list");

faqs.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const faqQuestion = document.createElement("div");
    faqQuestion.className = "faq-question";
    faqQuestion.textContent = faq.question;

    const faqAnswer = document.createElement("div");
    faqAnswer.className = "faq-answer";
    faqAnswer.textContent = faq.answer;

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);

    faqItem.addEventListener("click", () => {
        faqAnswer.classList.toggle("active");
    });

    faqList.appendChild(faqItem);
});
