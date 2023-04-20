function addQuestion() {
    var quizQuestions = document.getElementById("quiz-questions");
    var numQuestions = quizQuestions.childElementCount + 1;

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    quizQuestions.appendChild(questionDiv);

    var questionLabel = document.createElement("label");
    questionLabel.textContent = "Câu Hỏi " + numQuestions + ":";
    questionDiv.appendChild(questionLabel);

    var questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.name = "question-" + numQuestions;
    questionInput.required = true;
    questionDiv.appendChild(questionInput);

    var optionLabel = document.createElement("label");
    optionLabel.textContent = "Phương Án:";
    questionDiv.appendChild(optionLabel);

    var optionA = createOption(numQuestions, "A");
    questionDiv.appendChild(optionA);

    var optionB = createOption(numQuestions, "B");
    questionDiv.appendChild(optionB);

    var optionC = createOption(numQuestions, "C");
    questionDiv.appendChild(optionC);

	var optionC = createOption(numQuestions, "D");
    questionDiv.appendChild(optionC);
}

function createOption(questionNum, optionLetter) {
    var optionDiv = document.createElement("div");
    optionDiv.classList.add("option");

    var optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.id = "q" + questionNum + "-" + optionLetter;
    optionInput.name = "q" + questionNum;
    optionInput.value = optionLetter;
    optionInput.required = true;
    optionDiv.appendChild(optionInput);

    var optionLabel = document.createElement("label");
    optionLabel.textContent = optionLetter;
    optionLabel.htmlFor = "q" + questionNum + "-" + optionLetter;
    optionDiv.appendChild(optionLabel);

    var optionTextInput = document.createElement("input");
    optionTextInput.type = "text";
    optionTextInput.name = "q" + questionNum + "-" + optionLetter + "-text";
    optionTextInput.placeholder = "Nhập nội dung phương án...";
    optionTextInput.required = true;
    optionDiv.appendChild(optionTextInput);

    return optionDiv;
}
