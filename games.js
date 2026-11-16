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
    say: "წაიკითხე და აირჩიე ერთი სიტყვა.",
    rounds: [
      { prompt: "მანქანა უფრო დიდხანს მიდის.\nგავლილი გზა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ფასიდან უფრო დიდ თანხას აკლებენ.\nგადასახდელი თანხა...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "სანთელი უფრო დიდხანს იწვის.\nდარჩენილი სანთელი...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ნაყინს უფრო მეტს ყიდულობენ.\nერთის ფასი იგივეა.\nსაერთო ფასი...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ავტობუსიდან მგზავრები ჩამოდიან.\nდარჩენილი მგზავრები...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "ავზში წყალს ასხამენ.\nწყლის რაოდენობა...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "იგივე კანფეტი უფრო მეტ ბავშვზე იყოფა.\nთითო ბავშვის წილი...", answer: "მცირდება", choices: ["იზრდება", "მცირდება"] },
      { prompt: "საათები იზრდება, სიჩქარე იგივეა.\nგავლილი კილომეტრები...", answer: "იზრდება", choices: ["იზრდება", "მცირდება"] },
    ],
  };

  const rule = {
    id: "rule",
    para: "11",
    title: "წესის გასაღები",
    say: "ნახე წყვილები. აირჩიე წესი.",
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

  const catalog = [race, pairs, change, rule];
  window.GAME_LIST = catalog.map((game) => ({
    id: game.id,
    para: game.para,
    title: game.title,
  }));

  function mountQuiz(root, api, game) {
    const state = {
      rounds: shuffle(game.rounds),
      index: 0,
      score: 0,
      lives: 3,
      lock: false,
    };
    const stage = api.el("section", { class: "stage" });
    root.replaceChildren(topBar(api, game), stage);

    function drawEnd() {
      const won = state.score === state.rounds.length;
      const title = won ? "ყოჩაღ! ყველა სწორია." : (state.lives === 0 ? "სიცოცხლე გაგითავდა." : "კარგი თამაშია.");
      stage.replaceChildren(
        api.el("p", { class: "eyebrow", text: game.say }),
        api.el("h1", { class: "end-title", text: title }),
        api.el("p", { class: "score-line", text: "სწორია " + state.score + " / " + state.rounds.length }),
        api.el("p", { class: "stars", text: starLine(state.score, state.rounds.length) }),
        api.button("თავიდან", { class: "solid" }, () => mountQuiz(root, api, game))
      );
    }

    function draw() {
      if (state.index >= state.rounds.length || state.lives === 0) {
        drawEnd();
        return;
      }
      const round = state.rounds[state.index];
      const choices = api.el("div", { class: round.choices.length === 2 ? "choices two" : "choices" });
      shuffle(round.choices).forEach((choice) => {
        const choiceButton = api.el("button", { type: "button", class: "choice", text: choice });
        choiceButton.addEventListener("click", () => pick(choiceButton, choice, round));
        choices.append(choiceButton);
      });
      stage.replaceChildren(
        api.el("p", { class: "say-line", text: game.say }),
        api.el("div", { class: "hud" }, [
          api.el("span", { text: "კითხვა " + (state.index + 1) + " / " + state.rounds.length }),
          api.el("span", { class: "hearts", text: "♥".repeat(state.lives) + "♡".repeat(3 - state.lives) }),
        ]),
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
        feedback.textContent = "სწორია!";
        state.score += 1;
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
    return "★".repeat(score) + "☆".repeat(total - score);
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
