(function () {
  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy;
  }

  const race = {
    id: "race",
    para: "10",
    title: "ვარსკვლავის რბოლა",
    say: "აირჩიე სწორი პასუხი.",
    center: true,
    rounds: [
      { prompt: "8 + 4 × 2", answer: "16", choices: ["16", "24", "14"] },
      { prompt: "(15 − 7) × 3", answer: "24", choices: ["24", "16", "36"] },
      { prompt: "36 : 4 + 5", answer: "14", choices: ["14", "9", "4"] },
      { prompt: "6 × (4 + 3)", answer: "42", choices: ["42", "27", "18"] },
      { prompt: "20 − 4 × 3", answer: "8", choices: ["8", "48", "16"] },
      { prompt: "გაამარტივე:\n2 × y × 3", answer: "6y", choices: ["6y", "5y", "2y"] },
      { prompt: "a = 6\n2 × a + 1", answer: "13", choices: ["13", "12", "18"] },
      { prompt: "4 ერთნაირი რვეული 20 ლარი ღირს.\nერთი რვეული რამდენი ლარია?", answer: "5", choices: ["5", "4", "16"] },
    ],
  };

  const change = {
    id: "change",
    para: "11",
    title: "იზრდება თუ მცირდება",
    say: "წაიკითხე და აირჩიე.",
    lives: 4,
    rounds: [
      { prompt: "მანქანა უფრო დიდხანს მიდის.\nგავლილი გზა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ფასიდან უფრო დიდ თანხას აკლებენ.\nგადასახდელი თანხა...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "სანთელი უფრო დიდხანს იწვის.\nდარჩენილი სანთელი...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ნაყინს უფრო მეტს ყიდულობენ.\nერთის ფასი იგივეა.\nსაერთო ფასი...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ავტობუსიდან მგზავრები ჩამოდიან.\nდარჩენილი მგზავრები...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ავზში წყალს ასხამენ.\nწყლის რაოდენობა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "იგივე კანფეტი უფრო მეტ ბავშვზე იყოფა.\nთითო ბავშვის წილი...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "საათები იზრდება, სიჩქარე იგივეა.\nგავლილი კილომეტრები...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "კალათაში ვაშლს ამატებენ.\nვაშლების რაოდენობა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "იგივე სიჩქარით ნაკლებ ხანს მიდიან.\nგავლილი გზა...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ტორტს უფრო მეტ თანაბარ ნაწილად ჭრიან.\nერთი ნაჭრის ზომა...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "სიჩქარე იზრდება. დრო იგივეა.\nგავლილი გზა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ჩანთიდან წიგნებს იღებენ.\nწიგნები ჩანთაში...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "თოკს კიდევ ამატებენ.\nთოკის სიგრძე...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "მანქანა დგას. დრო გადის.\nგავლილი გზა...", answer: "არ იცვლება", choices: ["იზრდება", "მცირდება", "არ იცვლება"] },
      { prompt: "წყალს ერთი ჭიქიდან მეორეში ასხამენ.\nორივე ჭიქის წყალი ერთად...", answer: "არ იცვლება", choices: ["იზრდება", "მცირდება", "არ იცვლება"] },
      { prompt: "ფასიც იგივეა და რაოდენობაც.\nსაერთო ფასი...", answer: "არ იცვლება", choices: ["იზრდება", "მცირდება", "არ იცვლება"] },
      { prompt: "ერთი ჩანთიდან 3 ვაშლი გადააქვთ მეორეში.\nორივე ჩანთის ვაშლი ერთად...", answer: "არ იცვლება", choices: ["იზრდება", "მცირდება", "არ იცვლება"] },
    ],
  };

  const rule = {
    id: "rule",
    para: "11",
    title: "წესის გასაღები",
    say: "ნახე წყვილები. აირჩიე წესი.",
    lives: 4,
    rounds: [
      {
        prompt: "2 → 7\n5 → 10\n9 → 14",
        answer: "ემატება 5",
        choices: ["ემატება 5", "მრავლდება 3-ზე", "აკლდება 2"],
      },
      {
        prompt: "3 → 9\n4 → 12\n7 → 21",
        answer: "მრავლდება 3-ზე",
        choices: ["მრავლდება 3-ზე", "ემატება 6", "ემატება 5"],
      },
      {
        prompt: "10 → 7\n14 → 11\n20 → 17",
        answer: "აკლდება 3",
        choices: ["აკლდება 3", "ემატება 3", "იყოფა 2-ზე"],
      },
      {
        prompt: "1 → 4\n2 → 7\n4 → 13",
        answer: "3 × რიცხვი + 1",
        choices: ["3 × რიცხვი + 1", "ემატება 3", "მრავლდება 4-ზე"],
      },
      {
        prompt: "2 → 6\n3 → 8\n6 → 14",
        answer: "მრავლდება 2-ზე და ემატება 2",
        choices: ["მრავლდება 2-ზე და ემატება 2", "ემატება 4", "მრავლდება 3-ზე"],
      },
      {
        prompt: "1 სთ → 40 კმ\n2 სთ → 80 კმ\n3 სთ → 120 კმ",
        answer: "საათი × 40",
        choices: ["საათი × 40", "საათს ემატება 40", "საათი × 20"],
      },
      {
        prompt: "1 დღე → დარჩა 27 ლ\n2 დღე → დარჩა 24 ლ\n4 დღე → დარჩა 18 ლ",
        answer: "დღეში 3 ლიტრი იწურება",
        choices: ["დღეში 3 ლიტრი იწურება", "დღეში 2 ლიტრი იწურება", "დღეში 4 ლიტრი იწურება"],
      },
      {
        prompt: "1 → 5\n2 → 8\n3 → 11",
        answer: "ყოველ ნაბიჯზე ემატება 3",
        choices: ["ყოველ ნაბიჯზე ემატება 3", "ყოველ ნაბიჯზე ემატება 5", "მრავლდება 3-ზე"],
      },
      {
        prompt: "4 → 9\n6 → 13\n8 → 17",
        answer: "მრავლდება 2-ზე და ემატება 1",
        choices: ["მრავლდება 2-ზე და ემატება 1", "ემატება 5", "მრავლდება 2-ზე"],
      },
      {
        prompt: "2 → 8\n3 → 11\n5 → 17",
        answer: "მრავლდება 3-ზე და ემატება 2",
        choices: ["მრავლდება 3-ზე და ემატება 2", "ემატება 6", "მრავლდება 4-ზე"],
      },
      {
        prompt: "9 → 4\n13 → 6\n17 → 8",
        answer: "აკლდება 1 და იყოფა 2-ზე",
        choices: ["აკლდება 1 და იყოფა 2-ზე", "აკლდება 5", "იყოფა 2-ზე"],
      },
      {
        prompt: "1 → 2\n2 → 5\n4 → 11",
        answer: "მრავლდება 3-ზე და აკლდება 1",
        choices: ["მრავლდება 3-ზე და აკლდება 1", "ემატება 3", "მრავლდება 2-ზე"],
      },
      {
        prompt: "2 კგ → 16 ლარი\n3 კგ → 24 ლარი\n5 კგ → 40 ლარი",
        answer: "კილოგრამი × 8",
        choices: ["კილოგრამი × 8", "ემატება 14", "კილოგრამი × 6"],
      },
      {
        prompt: "10 წუთი → 2 გვერდი\n20 წუთი → 4 გვერდი\n30 წუთი → 6 გვერდი",
        answer: "ყოველ 10 წუთში 2 გვერდი",
        choices: ["ყოველ 10 წუთში 2 გვერდი", "ყოველ 10 წუთში 1 გვერდი", "წუთს ემატება 2"],
      },
      {
        prompt: "20 → 9\n16 → 7\n12 → 5",
        answer: "იყოფა 2-ზე და აკლდება 1",
        choices: ["იყოფა 2-ზე და აკლდება 1", "აკლდება 11", "იყოფა 2-ზე"],
      },
      {
        prompt: "3 → 10\n5 → 14\n8 → 20",
        answer: "მრავლდება 2-ზე და ემატება 4",
        choices: ["მრავლდება 2-ზე და ემატება 4", "ემატება 7", "მრავლდება 3-ზე"],
      },
    ],
  };

  const cell = {
    id: "cell",
    para: "11",
    title: "დაკარგული უჯრა",
    say: "იპოვე წესი და შეავსე უჯრა.",
    step: "უჯრა",
    lives: 5,
    track: true,
    win: "ყოჩაღ! ყველა უჯრა იპოვე.",
    lose: "სიცოცხლე გაგითავდა. წესი კიდევ სცადე.",
    rounds: [
      { prompt: "2 → 6\n5 → 9\n8 → □\n11 → 15", answer: "12", choices: ["12", "10", "16"] },
      { prompt: "3 → 9\n4 → 10\n7 → □\n9 → 15", answer: "13", choices: ["13", "12", "15"] },
      { prompt: "12 → 9\n10 → 7\n8 → □\n6 → 3", answer: "5", choices: ["5", "6", "4"] },
      { prompt: "3 → 6\n5 → 10\n7 → □\n9 → 18", answer: "14", choices: ["14", "12", "16"] },
      { prompt: "2 → 8\n3 → 12\n5 → □\n6 → 24", answer: "20", choices: ["20", "16", "24"] },
      { prompt: "1 → 4\n2 → 7\n4 → □\n5 → 16", answer: "13", choices: ["13", "12", "15"] },
      { prompt: "2 → 7\n4 → 11\n6 → □\n8 → 19", answer: "15", choices: ["15", "14", "18"] },
      { prompt: "3 → 5\n6 → 11\n8 → □\n10 → 19", answer: "15", choices: ["15", "16", "14"] },
      { prompt: "8 → 4\n12 → 6\n18 → □\n20 → 10", answer: "9", choices: ["9", "8", "10"] },
      { prompt: "9 → 3\n15 → 5\n21 → □\n27 → 9", answer: "7", choices: ["7", "6", "8"] },
      { prompt: "1 სთ → 30 კმ\n2 სთ → 60 კმ\n4 სთ → □\n5 სთ → 150 კმ", answer: "120", choices: ["120", "90", "100"] },
      { prompt: "2 რვეული → 10 ლარი\n3 რვეული → 15 ლარი\n6 რვეული → □\n8 რვეული → 40 ლარი", answer: "30", choices: ["30", "25", "35"] },
      { prompt: "1 დღე → 18 ლ\n2 დღე → 15 ლ\n3 დღე → □\n4 დღე → 9 ლ", answer: "12", choices: ["12", "13", "11"] },
      { prompt: "1 → 6\n2 → 11\n3 → □\n4 → 21", answer: "16", choices: ["16", "15", "18"] },
      { prompt: "3 → 10\n5 → 14\n7 → □\n9 → 22", answer: "18", choices: ["18", "16", "20"] },
      { prompt: "2 → 8\n3 → 13\n4 → □\n6 → 28", answer: "18", choices: ["18", "20", "16"] },
      { prompt: "2 ჩანთა → 8 ვაშლი\n3 ჩანთა → 12 ვაშლი\n5 ჩანთა → □\n7 ჩანთა → 28 ვაშლი", answer: "20", choices: ["20", "16", "24"] },
      { prompt: "2 სთ → 32 ლ\n4 სთ → 24 ლ\n6 სთ → □\n8 სთ → 8 ლ", answer: "16", choices: ["16", "20", "12"] },
      { prompt: "1 → 12\n3 → 16\n6 → □\n8 → 26", answer: "22", choices: ["22", "20", "24"] },
      { prompt: "10 → 23\n6 → 15\n4 → □\n8 → 19", answer: "11", choices: ["11", "12", "9"] },
    ],
  };

  const train = {
    id: "train",
    para: "11",
    title: "მატარებლის გზა",
    say: "მატარებელი შემდეგ გაჩერებაზე მიდის. იპოვე რიცხვი.",
    step: "გაჩერება",
    lives: 5,
    track: true,
    win: "ყოჩაღ! მატარებელი ბოლომდე მივიდა.",
    lose: "გზა შუაში შეწყდა. თავიდან სცადე.",
    rounds: [
      { prompt: "ხიდი\nრიცხვს ემატება 4.\n5, 9, 13, □", answer: "17", choices: ["17", "16", "21"] },
      { prompt: "ტყე\nრიცხვს აკლდება 3.\n30, 27, 24, □", answer: "21", choices: ["21", "22", "18"] },
      { prompt: "წისქვილი\nრიცხვი ორმაგდება.\n2, 4, 8, □", answer: "16", choices: ["16", "12", "10"] },
      { prompt: "მდინარე\nრიცხვს ემატება 2.\n7, 9, 11, 13, □", answer: "15", choices: ["15", "14", "17"] },
      { prompt: "გორა\nრიცხვი ორმაგდება და ემატება 1.\n1, 3, 7, 15, □", answer: "31", choices: ["31", "30", "17"] },
      { prompt: "სოფელი\nსაათში 6 კმ.\n2 სთ → 12 კმ\n3 სთ → 18 კმ\n5 სთ → □", answer: "30", choices: ["30", "24", "36"] },
      { prompt: "ბაღი\n1 კგ 7 ლარი ღირს.\n2 კგ → 14\n4 კგ → 28\n6 კგ → □", answer: "42", choices: ["42", "35", "49"] },
      { prompt: "ავზი\n50 ლ იყო. საათში 5 ლ იწურება.\n2 სთ → 40 ლ\n4 სთ → 30 ლ\n6 სთ → □", answer: "20", choices: ["20", "25", "15"] },
      { prompt: "წიგნები\nთითო წიგნი 4 ლარია და ჩანთა 3 ლარი.\n2 წიგნი → 11\n3 წიგნი → 15\n5 წიგნი → □", answer: "23", choices: ["23", "20", "25"] },
      { prompt: "კოშკი\nჯერ აკლდება 4, მერე შედეგი ორმაგდება.\n9 → 10\n7 → 6\n12 → □", answer: "16", choices: ["16", "14", "8"] },
      { prompt: "წყარო\nიყოფა 3-ზე და ემატება 2.\n12 → 6\n18 → 8\n24 → □", answer: "10", choices: ["10", "8", "12"] },
      { prompt: "გაჩერება\nავტობუსში 40 მგზავრი იყო.\nყოველ გაჩერებაზე 3 ჩამოდის.\n2 გაჩერება → 34\n4 გაჩერება → 28\n7 გაჩერება → □", answer: "19", choices: ["19", "21", "16"] },
      { prompt: "სკოლა\nგიორგი ანაზე 8 წლით უფროსია.\nანა 10 → გიორგი 18\nანა 13 → გიორგი 21\nანა 16 → გიორგი □", answer: "24", choices: ["24", "22", "26"] },
      { prompt: "მოედანი\nკვადრატის გვერდს 4-ზე ამრავლებენ.\nგვერდი 3 → 12\nგვერდი 4 → 16\nგვერდი 6 → □", answer: "24", choices: ["24", "20", "18"] },
      { prompt: "ბაზარი\nდიდი რიცხვი პატარაზე 3-ჯერ მეტია.\nპატარა 4 → დიდი 12\nპატარა 5 → დიდი 15\nპატარა 8 → დიდი □", answer: "24", choices: ["24", "16", "21"] },
      { prompt: "ციხე\nმრავლდება 3-ზე და აკლდება 2.\n2 → 4\n3 → 7\n6 → □", answer: "16", choices: ["16", "18", "15"] },
      { prompt: "ბიბლიოთეკა\nწუთში 4 გვერდს კითხულობს.\n5 წთ → 20\n8 წთ → 32\n11 წთ → □", answer: "44", choices: ["44", "40", "48"] },
      { prompt: "ფასდაკლება\nთითო ნივთზე 6 ლარი კლდება.\n2 ნივთი → 12\n3 ნივთი → 18\n7 ნივთი → □", answer: "42", choices: ["42", "36", "48"] },
      { prompt: "ხეობა\nჯერ ემატება 5, მერე მრავლდება 2-ზე.\n1 → 12\n3 → 16\n6 → □", answer: "22", choices: ["22", "20", "18"] },
      { prompt: "სანთელი\n30 სმ იყო. საათში 2 სმ იკლებს.\n3 სთ → 24 სმ\n5 სთ → 20 სმ\n9 სთ → □", answer: "12", choices: ["12", "14", "10"] },
    ],
  };

  const pairs = {
    id: "pairs",
    para: "10",
    title: "წყვილების პოვნა",
    say: "შეაბრუნე ორი ბარათი. იპოვე გამოსახულება და მისი მნიშვნელობა.",
    cards: [
      ["4 × 6 + 8", "32"],
      ["(9 + 6) : 5", "3"],
      ["7b − 2b", "5b"],
      ["m + m + m", "3m"],
      ["2 × (a + 3)", "2a + 6"],
      ["100 : 4 − 7", "18"],
    ],
  };

  const catalog = [race, pairs, change, rule, cell, train];
  window.GAME_LIST = catalog.map((game) => ({
    id: game.id,
    para: game.para,
    title: game.title,
  }));

  function mountQuiz(root, api, game) {
    const maxLives = game.lives || 3;
    const state = {
      rounds: shuffle(game.rounds),
      index: 0,
      score: 0,
      lives: maxLives,
      streak: 0,
      marks: [],
      lock: false,
    };
    const stage = api.el("section", { class: "stage" });
    root.replaceChildren(topBar(api, game), stage);

    function drawEnd() {
      const won = state.score === state.rounds.length;
      const title = won
        ? (game.win || "ყოჩაღ! ყველა სწორია.")
        : (state.lives === 0 ? (game.lose || "სიცოცხლე გაგითავდა.") : "კარგი თამაშია.");
      stage.replaceChildren(
        api.el("p", { class: "eyebrow", text: game.say }),
        api.el("h1", { class: "end-title", text: title }),
        api.el("p", { class: "score-line", text: "სწორია " + state.score + " / " + state.rounds.length }),
        api.el("p", { class: "stars", text: starLine(state.score, state.rounds.length) }),
        api.button("თავიდან", { class: "solid" }, () => mountQuiz(root, api, game))
      );
    }

    function trackRow() {
      if (!game.track) return null;
      const row = api.el("div", { class: "track", "aria-hidden": "true" });
      state.rounds.forEach((item, index) => {
        let mark = "stop";
        if (index < state.marks.length) mark += state.marks[index] === "good" ? " done" : " miss";
        else if (index === state.index) mark += " now";
        row.append(api.el("i", { class: mark }));
      });
      return row;
    }

    function draw() {
      if (state.index >= state.rounds.length || state.lives === 0) {
        drawEnd();
        return;
      }
      const round = state.rounds[state.index];
      const short = round.choices.every((choice) => choice.length <= 12);
      const columns = short && (round.choices.length === 2 || round.choices.length === 3);
      const choiceClass = columns ? "choices " + (round.choices.length === 2 ? "two" : "three") : "choices";
      const choices = api.el("div", { class: choiceClass });
      shuffle(round.choices).forEach((choice) => {
        const choiceButton = api.el("button", { type: "button", class: "choice", text: choice });
        choiceButton.addEventListener("click", () => pick(choiceButton, choice, round));
        choices.append(choiceButton);
      });
      stage.replaceChildren(
        api.el("p", { class: "say-line", text: game.say }),
        api.el("div", { class: "hud" }, [
          api.el("span", { text: (game.step || "კითხვა") + " " + (state.index + 1) + " / " + state.rounds.length }),
          api.el("span", { text: state.streak > 1 ? "ზედიზედ " + state.streak : "" }),
          api.el("span", { class: "hearts", text: "♥".repeat(state.lives) + "♡".repeat(maxLives - state.lives) }),
        ]),
        trackRow(),
        api.el("div", { class: game.center ? "prompt center" : "prompt", text: round.prompt }),
        choices,
        api.el("p", { class: "feedback", text: "" })
      );
    }

    function pick(choiceButton, choice, round) {
      if (state.lock) return;
      state.lock = true;
      const buttons = stage.querySelectorAll(".choice");
      const feedback = stage.querySelector(".feedback");
      buttons.forEach((node) => { node.disabled = true; });
      if (choice === round.answer) {
        choiceButton.classList.add("good");
        state.score += 1;
        state.streak += 1;
        state.marks.push("good");
        feedback.textContent = state.streak > 1 ? "სწორია! ზედიზედ " + state.streak : "სწორია!";
        window.setTimeout(() => {
          state.index += 1;
          state.lock = false;
          draw();
        }, 700);
        return;
      }
      choiceButton.classList.add("bad");
      buttons.forEach((node) => {
        if (node.textContent === round.answer) node.classList.add("good");
      });
      feedback.textContent = "სწორია: " + round.answer;
      state.lives -= 1;
      state.streak = 0;
      state.marks.push("bad");
      window.setTimeout(() => {
        state.index += 1;
        state.lock = false;
        draw();
      }, 1200);
    }

    draw();
  }

  function mountPairs(root, api) {
    const deck = shuffle(pairs.cards.flatMap((pair, index) => [
      { key: index + "a", pair: index, text: pair[0], open: false, done: false },
      { key: index + "b", pair: index, text: pair[1], open: false, done: false },
    ]));
    const state = { open: [], lock: false, moves: 0, found: 0 };
    const stage = api.el("section", { class: "stage" });
    root.replaceChildren(topBar(api, pairs), stage);

    function draw() {
      const grid = api.el("div", { class: "cards-grid" });
      deck.forEach((card, index) => {
        const face = card.open || card.done;
        const node = api.el("button", {
          type: "button",
          class: "mem" + (face ? " face" : " back") + (card.done ? " done" : ""),
          text: face ? card.text : "?",
          "aria-label": face ? card.text : "დახურული ბარათი",
        });
        node.addEventListener("click", () => flip(index));
        grid.append(node);
      });
      const kids = [
        api.el("p", { class: "say-line", text: pairs.say }),
        api.el("div", { class: "hud" }, [
          api.el("span", { text: "სვლა: " + state.moves }),
          api.el("span", { text: "წყვილი: " + state.found + " / 6" }),
        ]),
        grid,
      ];
      if (state.found === 6) {
        kids.push(api.el("h1", { class: "end-title", text: "ყოჩაღ! ყველა წყვილი იპოვე." }));
        kids.push(api.button("თავიდან", { class: "solid" }, () => mountPairs(root, api)));
      }
      stage.replaceChildren.apply(stage, kids);
    }

    function flip(index) {
      const card = deck[index];
      if (state.lock || card.open || card.done) return;
      card.open = true;
      state.open.push(card);
      if (state.open.length < 2) {
        draw();
        return;
      }
      state.moves += 1;
      const first = state.open[0];
      const second = state.open[1];
      if (first.pair === second.pair) {
        first.done = true;
        second.done = true;
        first.open = false;
        second.open = false;
        state.open = [];
        state.found += 1;
        draw();
        return;
      }
      state.lock = true;
      draw();
      window.setTimeout(() => {
        first.open = false;
        second.open = false;
        state.open = [];
        state.lock = false;
        draw();
      }, 800);
    }

    draw();
  }

  function topBar(api, game) {
    return api.el("div", { class: "bar noprint" }, [
      api.el("div", { class: "bar-inner" }, [
        api.button("მთავარი", {}, () => api.go("#/")),
        api.el("span", { class: "where", text: "§" + game.para + " · " + game.title }),
      ]),
    ]);
  }

  function starLine(score, total) {
    const stars = total > 8 ? 5 : total;
    const filled = total > 8 ? Math.round((score / total) * 5) : score;
    return "★".repeat(filled) + "☆".repeat(stars - filled);
  }

  window.mountGame = function (root, id, api) {
    if (id === "pairs") {
      mountPairs(root, api);
      document.title = pairs.title;
      return true;
    }
    const game = catalog.find((item) => item.id === id);
    if (!game || !game.rounds) return false;
    document.title = game.title;
    mountQuiz(root, api, game);
    return true;
  };
})();
