(function () {
  let clockId = null;

  function stopClock() {
    if (clockId) {
      window.clearInterval(clockId);
      clockId = null;
    }
  }

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

  function quizItem(prompt, answer, wrongs) {
    const value = String(answer);
    const choices = [value];
    wrongs.forEach((item) => {
      const text = String(item);
      if (text !== value && choices.indexOf(text) === -1 && text !== "0") choices.push(text);
    });
    if (choices.length < 3) throw new Error("პასუხები არ ყოფნის: " + prompt);
    return { prompt: prompt, answer: value, choices: choices.slice(0, 3) };
  }

  function unknownItem(prompt, answer, check) {
    if (!check(answer)) throw new Error("უცნობი არ ემთხვევა: " + prompt);
    const wrongs = [answer + 1, answer + 2, answer - 1, answer - 2].filter((n) => n > 0 && !check(n));
    return quizItem(prompt, answer, wrongs);
  }

  function cellItem(fn, inputs) {
    const outs = inputs.map(fn);
    if (outs.some((n) => !Number.isInteger(n) || n <= 0)) throw new Error("უჯრა: " + inputs.join(","));
    const answer = outs[2];
    const prompt = inputs.map((n, index) => n + " → " + (index === 2 ? "□" : outs[index])).join("\n");
    return quizItem(prompt, answer, [answer + 1, answer + 2, answer - 1, answer - 2]);
  }

  function nextItem(rule, fn, start, hops) {
    const seq = [start];
    for (let i = 0; i < hops; i += 1) seq.push(fn(seq[seq.length - 1]));
    const answer = seq.pop();
    if (!Number.isInteger(answer) || answer <= 0 || answer > 120) throw new Error("შემდეგი: " + rule);
    return quizItem(rule + "\n" + seq.join(", ") + ", □", answer, [answer + 1, answer + 2, answer - 1, answer - 2]);
  }

  function ruleItem(samples, answer, distractors) {
    samples.forEach((pair) => {
      if (answer.fn(pair[0]) !== pair[1]) throw new Error("წესი არ ემთხვევა: " + answer.text);
    });
    distractors.forEach((item) => {
      if (samples.every((pair) => item.fn(pair[0]) === pair[1])) {
        throw new Error("მეორე წესიც ერგება: " + item.text);
      }
    });
    const prompt = samples.map((pair) => pair[0] + " → " + pair[1]).join("\n");
    return quizItem(prompt, answer.text, distractors.map((item) => item.text));
  }

  const words = ["იზრდება", "მცირდება", "არ იცვლება"];

  const sprintCompute = {
    id: "sprint10",
    para: "10",
    title: "გამოთვლის სპრინტი",
    say: "გაქვს 3 წუთი. გამოთვალე.",
    seconds: 180,
    center: true,
    rounds: [
      ["8 + 4 × 2", 8 + 4 * 2, [24, 14]],
      ["(15 − 7) × 3", (15 - 7) * 3, [16, 36]],
      ["36 : 4 + 5", 36 / 4 + 5, [4, 9]],
      ["6 × (4 + 3)", 6 * (4 + 3), [27, 18]],
      ["20 − 4 × 3", 20 - 4 * 3, [48, 16]],
      ["(8 + 2) × 5", (8 + 2) * 5, [18, 40]],
      ["48 : 6 + 3", 48 / 6 + 3, [8, 5]],
      ["7 × 8 − 6", 7 * 8 - 6, [14, 56]],
      ["100 − 25 × 2", 100 - 25 * 2, [150, 75]],
      ["(30 − 6) : 3", (30 - 6) / 3, [28, 12]],
      ["4 × 5 + 3 × 2", 4 * 5 + 3 * 2, [46, 22]],
      ["9 × 4 − 12", 9 * 4 - 12, [12, 36]],
      ["(18 + 6) : 4", (18 + 6) / 4, [19, 12]],
      ["5 × (9 − 3)", 5 * (9 - 3), [42, 15]],
      ["60 : 5 − 4", 60 / 5 - 4, [60, 12]],
      ["3 × 7 + 5", 3 * 7 + 5, [36, 21]],
      ["(40 + 8) : 8", (40 + 8) / 8, [41, 8]],
      ["12 + 12 : 3", 12 + 12 / 3, [8, 24]],
      ["2 × (10 − 3)", 2 * (10 - 3), [17, 20]],
      ["9 × 3 + 4", 9 * 3 + 4, [63, 27]],
      ["(50 − 14) : 6", (50 - 14) / 6, [48, 8]],
      ["8 × 4 − 10", 8 * 4 - 10, [16, 32]],
      ["36 : 9 × 2", 36 / 9 * 2, [2, 18]],
      ["(7 + 5) × 4", (7 + 5) * 4, [27, 32]],
      ["15 + 3 × 5", 15 + 3 * 5, [90, 18]],
      ["(24 : 3) + 9", 24 / 3 + 9, [2, 8]],
      ["6 × 6 − 5", 6 * 6 - 5, [6, 36]],
      ["(11 − 2) × 3", (11 - 2) * 3, [5, 33]],
      ["45 : 5 + 6", 45 / 5 + 6, [4, 9]],
      ["4 × (8 − 2)", 4 * (8 - 2), [30, 16]],
      ["80 − 9 × 7", 80 - 9 * 7, [71, 63]],
      ["(16 + 8) : 4", (16 + 8) / 4, [18, 8]],
    ].map((item) => quizItem(item[0], item[1], item[2])),
  };

  const sprintSimple = {
    id: "simple10",
    para: "10",
    title: "გამარტივების სპრინტი",
    say: "გაქვს 3 წუთი. გაამარტივე.",
    seconds: 180,
    center: true,
    rounds: [
      ["2 × y × 3", "6y", ["5y", "2y"]],
      ["4a + 3a", "7a", ["12a", "a"]],
      ["8b − 3b", "5b", ["11b", "24b"]],
      ["n + n + n", "3n", ["n", "4n"]],
      ["5 × m × 2", "10m", ["7m", "5m"]],
      ["9x − 4x", "5x", ["13x", "36x"]],
      ["2 × (a + 3)", "2a + 6", ["2a + 3", "5a"]],
      ["6k + k", "7k", ["6k", "8k"]],
      ["12p − 5p", "7p", ["17p", "60p"]],
      ["3 × (n + 2)", "3n + 6", ["3n + 2", "6n"]],
      ["4y + 2y + y", "7y", ["6y", "8y"]],
      ["10a − 2a − 3a", "5a", ["9a", "15a"]],
      ["5 × b × 3", "15b", ["8b", "5b"]],
      ["2 × 4 × n", "8n", ["6n", "8"]],
      ["9c − c", "8c", ["9", "10c"]],
      ["(6 + a) + (4 + a)", "2a + 10", ["10a", "a + 10"]],
      ["3 × (2 + x)", "3x + 6", ["x + 5", "6x"]],
      ["7n − 2n + 4", "5n + 4", ["9n + 4", "5n"]],
      ["4 × (b + 5)", "4b + 20", ["4b + 5", "9b"]],
      ["12k − 4k − k", "7k", ["8k", "16k"]],
      ["2a + 3a + 6", "5a + 6", ["11a", "5a"]],
      ["5 × (y − 1)", "5y − 5", ["5y − 1", "4y"]],
      ["6 × t × 2", "12t", ["8t", "14t"]],
      ["8m − 3m + m", "6m", ["5m", "12m"]],
    ].map((item) => quizItem(item[0], item[1], item[2])),
  };

  const sprintMissing = {
    id: "missing10",
    para: "10",
    title: "უცნობი რიცხვი",
    say: "გაქვს 3 წუთი. იპოვე □.",
    seconds: 180,
    center: true,
    rounds: [
      ["(□ + 3) × 2 = 16", 5, (n) => (n + 3) * 2 === 16],
      ["□ × 4 + 6 = 26", 5, (n) => n * 4 + 6 === 26],
      ["(□ − 2) × 5 = 20", 6, (n) => (n - 2) * 5 === 20],
      ["3 × □ − 4 = 11", 5, (n) => 3 * n - 4 === 11],
      ["(□ + 6) : 2 = 8", 10, (n) => (n + 6) / 2 === 8],
      ["□ : 3 + 4 = 9", 15, (n) => n / 3 + 4 === 9],
      ["2 × (□ + 4) = 18", 5, (n) => 2 * (n + 4) === 18],
      ["5 × □ − 7 = 18", 5, (n) => 5 * n - 7 === 18],
      ["(□ − 5) × 3 = 12", 9, (n) => (n - 5) * 3 === 12],
      ["□ × 2 + 9 = 21", 6, (n) => n * 2 + 9 === 21],
      ["(□ + 2) × 4 = 28", 5, (n) => (n + 2) * 4 === 28],
      ["□ × 6 − 8 = 22", 5, (n) => n * 6 - 8 === 22],
      ["(□ + 8) : 4 = 5", 12, (n) => (n + 8) / 4 === 5],
      ["3 × (□ − 2) = 15", 7, (n) => 3 * (n - 2) === 15],
      ["□ : 5 + 3 = 7", 20, (n) => n / 5 + 3 === 7],
      ["4 × □ + 5 = 29", 6, (n) => 4 * n + 5 === 29],
      ["(□ − 4) × 2 = 10", 9, (n) => (n - 4) * 2 === 10],
      ["2 × □ + 3 × □ = 25", 5, (n) => 2 * n + 3 * n === 25],
      ["100 − □ × 6 = 40", 10, (n) => 100 - n * 6 === 40],
      ["(□ + 1) × 3 = 24", 7, (n) => (n + 1) * 3 === 24],
      ["□ × 5 − 10 = 25", 7, (n) => n * 5 - 10 === 25],
      ["(□ − 3) : 2 = 6", 15, (n) => (n - 3) / 2 === 6],
      ["8 × □ − 12 = 20", 4, (n) => 8 * n - 12 === 20],
      ["(□ + 7) × 2 = 30", 8, (n) => (n + 7) * 2 === 30],
      ["□ : 4 − 3 = 2", 20, (n) => n / 4 - 3 === 2],
      ["6 × (□ − 1) = 18", 4, (n) => 6 * (n - 1) === 18],
      ["□ × 3 + 8 = 23", 5, (n) => n * 3 + 8 === 23],
      ["(□ + 4) : 5 = 3", 11, (n) => (n + 4) / 5 === 3],
      ["9 × □ − 9 = 18", 3, (n) => 9 * n - 9 === 18],
      ["50 − (□ + 2) = 38", 10, (n) => 50 - (n + 2) === 38],
      ["□ × 2 + 14 = 30", 8, (n) => n * 2 + 14 === 30],
      ["(□ − 6) × 4 = 16", 10, (n) => (n - 6) * 4 === 16],
    ].map((item) => unknownItem(item[0], item[1], item[2])),
  };

  const sprintChange = {
    id: "fastchange",
    para: "11",
    title: "სწრაფი ცვლილება",
    say: "გაქვს 3 წუთი. რა ემართება სიდიდეს?",
    seconds: 180,
    rounds: [
      ["მანქანა უფრო დიდხანს მიდის.\nგავლილი გზა...", "იზრდება"],
      ["ფასიდან უფრო დიდ თანხას აკლებენ.\nგადასახდელი თანხა...", "მცირდება"],
      ["სანთელი უფრო დიდხანს იწვის.\nდარჩენილი სანთელი...", "მცირდება"],
      ["ნაყინს უფრო მეტს ყიდულობენ. ფასი იგივეა.\nსაერთო ფასი...", "იზრდება"],
      ["ავტობუსიდან მგზავრები ჩამოდიან.\nდარჩენილი მგზავრები...", "მცირდება"],
      ["ავზში წყალს ასხამენ.\nწყალი...", "იზრდება"],
      ["იგივე კანფეტი უფრო მეტ ბავშვზე იყოფა.\nთითო ბავშვის წილი...", "მცირდება"],
      ["საათები იზრდება. სიჩქარე იგივეა.\nგავლილი გზა...", "იზრდება"],
      ["კალათაში ვაშლს ამატებენ.\nვაშლი...", "იზრდება"],
      ["იგივე სიჩქარით ნაკლებ ხანს მიდიან.\nგავლილი გზა...", "მცირდება"],
      ["ტორტს უფრო მეტ ნაწილად ჭრიან.\nერთი ნაჭერი...", "მცირდება"],
      ["სიჩქარე იზრდება. დრო იგივეა.\nგავლილი გზა...", "იზრდება"],
      ["ჩანთიდან წიგნებს იღებენ.\nწიგნები ჩანთაში...", "მცირდება"],
      ["თოკს კიდევ ამატებენ.\nთოკის სიგრძე...", "იზრდება"],
      ["მანქანა დგას. დრო გადის.\nგავლილი გზა...", "არ იცვლება"],
      ["წყალს ერთი ჭიქიდან მეორეში ასხამენ.\nორივე ჭიქის წყალი ერთად...", "არ იცვლება"],
      ["ფასიც იგივეა და რაოდენობაც.\nსაერთო ფასი...", "არ იცვლება"],
      ["3 ვაშლი ერთი ჩანთიდან მეორეში გადააქვთ.\nორივე ჩანთის ვაშლი ერთად...", "არ იცვლება"],
      ["ყუთში ფანქრებს ამატებენ.\nფანქრები...", "იზრდება"],
      ["ბალონიდან ჰაერი გამოდის.\nჰაერი ბალონში...", "მცირდება"],
      ["ბავშვი ყოველ წელს უფროსდება.\nასაკი...", "იზრდება"],
      ["ფასდაკლება იზრდება.\nგადასახდელი თანხა...", "მცირდება"],
      ["იყიდეს იმდენივე და ფასიც იგივეა.\nსაერთო ფასი...", "არ იცვლება"],
      ["ავზიდან წყალს იღებენ. ახალს არ ასხამენ.\nწყალი...", "მცირდება"],
      ["ერთნაირ რვეულს უფრო მეტს ყიდულობენ.\nსაერთო ფასი...", "იზრდება"],
      ["დრო იგივეა. სიჩქარე იკლებს.\nგავლილი გზა...", "მცირდება"],
      ["თოკიდან ნაჭერს ჭრიან.\nდარჩენილი თოკი...", "მცირდება"],
      ["არაფერს არ ამატებენ და არ აკლებენ.\nრაოდენობა...", "არ იცვლება"],
      ["პურის ფასი გაიზარდა.\nერთი პურის ფასი...", "იზრდება"],
      ["ავტობუსში მგზავრები ჯდებიან.\nმგზავრები...", "იზრდება"],
    ].map((item) => quizItem(item[0], item[1], words)),
  };

  const sprintRule = {
    id: "fastrule",
    para: "11",
    title: "სწრაფი წესი",
    say: "გაქვს 3 წუთი. აირჩიე წესი.",
    seconds: 180,
    rounds: [
      [[[2, 7], [5, 10], [9, 14]], { text: "ემატება 5", fn: (n) => n + 5 }, [{ text: "მრავლდება 3-ზე", fn: (n) => n * 3 }, { text: "აკლდება 2", fn: (n) => n - 2 }]],
      [[[3, 9], [4, 12], [7, 21]], { text: "მრავლდება 3-ზე", fn: (n) => n * 3 }, [{ text: "ემატება 6", fn: (n) => n + 6 }, { text: "ემატება 5", fn: (n) => n + 5 }]],
      [[[10, 7], [14, 11], [20, 17]], { text: "აკლდება 3", fn: (n) => n - 3 }, [{ text: "ემატება 3", fn: (n) => n + 3 }, { text: "იყოფა 2-ზე", fn: (n) => n / 2 }]],
      [[[1, 4], [2, 7], [4, 13]], { text: "3 × რიცხვი + 1", fn: (n) => n * 3 + 1 }, [{ text: "ემატება 3", fn: (n) => n + 3 }, { text: "მრავლდება 4-ზე", fn: (n) => n * 4 }]],
      [[[2, 6], [3, 8], [6, 14]], { text: "მრავლდება 2-ზე და ემატება 2", fn: (n) => n * 2 + 2 }, [{ text: "ემატება 4", fn: (n) => n + 4 }, { text: "მრავლდება 3-ზე", fn: (n) => n * 3 }]],
      [[[4, 9], [6, 13], [8, 17]], { text: "მრავლდება 2-ზე და ემატება 1", fn: (n) => n * 2 + 1 }, [{ text: "ემატება 5", fn: (n) => n + 5 }, { text: "მრავლდება 2-ზე", fn: (n) => n * 2 }]],
      [[[2, 8], [3, 11], [5, 17]], { text: "მრავლდება 3-ზე და ემატება 2", fn: (n) => n * 3 + 2 }, [{ text: "ემატება 6", fn: (n) => n + 6 }, { text: "მრავლდება 4-ზე", fn: (n) => n * 4 }]],
      [[[9, 4], [13, 6], [17, 8]], { text: "აკლდება 1 და იყოფა 2-ზე", fn: (n) => (n - 1) / 2 }, [{ text: "აკლდება 5", fn: (n) => n - 5 }, { text: "იყოფა 2-ზე", fn: (n) => n / 2 }]],
      [[[1, 2], [2, 5], [4, 11]], { text: "მრავლდება 3-ზე და აკლდება 1", fn: (n) => n * 3 - 1 }, [{ text: "ემატება 3", fn: (n) => n + 3 }, { text: "მრავლდება 2-ზე", fn: (n) => n * 2 }]],
      [[[2, 16], [3, 24], [5, 40]], { text: "მრავლდება 8-ზე", fn: (n) => n * 8 }, [{ text: "ემატება 14", fn: (n) => n + 14 }, { text: "მრავლდება 6-ზე", fn: (n) => n * 6 }]],
      [[[10, 2], [20, 4], [30, 6]], { text: "იყოფა 5-ზე", fn: (n) => n / 5 }, [{ text: "იყოფა 2-ზე", fn: (n) => n / 2 }, { text: "აკლდება 8", fn: (n) => n - 8 }]],
      [[[20, 9], [16, 7], [12, 5]], { text: "იყოფა 2-ზე და აკლდება 1", fn: (n) => n / 2 - 1 }, [{ text: "აკლდება 11", fn: (n) => n - 11 }, { text: "იყოფა 2-ზე", fn: (n) => n / 2 }]],
      [[[3, 10], [5, 14], [8, 20]], { text: "მრავლდება 2-ზე და ემატება 4", fn: (n) => n * 2 + 4 }, [{ text: "ემატება 7", fn: (n) => n + 7 }, { text: "მრავლდება 3-ზე", fn: (n) => n * 3 }]],
      [[[4, 10], [7, 13], [11, 17]], { text: "ემატება 6", fn: (n) => n + 6 }, [{ text: "მრავლდება 2-ზე", fn: (n) => n * 2 }, { text: "აკლდება 4", fn: (n) => n - 4 }]],
      [[[2, 10], [4, 20], [6, 30]], { text: "მრავლდება 5-ზე", fn: (n) => n * 5 }, [{ text: "ემატება 8", fn: (n) => n + 8 }, { text: "მრავლდება 4-ზე", fn: (n) => n * 4 }]],
      [[[15, 11], [12, 8], [9, 5]], { text: "აკლდება 4", fn: (n) => n - 4 }, [{ text: "აკლდება 5", fn: (n) => n - 5 }, { text: "იყოფა 2-ზე", fn: (n) => n / 2 }]],
      [[[4, 5], [6, 9], [9, 15]], { text: "მრავლდება 2-ზე და აკლდება 3", fn: (n) => n * 2 - 3 }, [{ text: "ემატება 1", fn: (n) => n + 1 }, { text: "მრავლდება 2-ზე", fn: (n) => n * 2 }]],
      [[[1, 10], [3, 12], [8, 17]], { text: "ემატება 9", fn: (n) => n + 9 }, [{ text: "მრავლდება 10-ზე", fn: (n) => n * 10 }, { text: "ემატება 7", fn: (n) => n + 7 }]],
      [[[8, 4], [14, 7], [18, 9]], { text: "იყოფა 2-ზე", fn: (n) => n / 2 }, [{ text: "აკლდება 4", fn: (n) => n - 4 }, { text: "მრავლდება 2-ზე", fn: (n) => n * 2 }]],
      [[[2, 10], [3, 14], [5, 22]], { text: "მრავლდება 4-ზე და ემატება 2", fn: (n) => n * 4 + 2 }, [{ text: "ემატება 8", fn: (n) => n + 8 }, { text: "მრავლდება 5-ზე", fn: (n) => n * 5 }]],
      [[[3, 7], [5, 13], [6, 16]], { text: "მრავლდება 3-ზე და აკლდება 2", fn: (n) => n * 3 - 2 }, [{ text: "ემატება 4", fn: (n) => n + 4 }, { text: "მრავლდება 2-ზე", fn: (n) => n * 2 }]],
      [[[1, 12], [3, 16], [6, 22]], { text: "ჯერ ემატება 5, მერე × 2", fn: (n) => (n + 5) * 2 }, [{ text: "ემატება 11", fn: (n) => n + 11 }, { text: "მრავლდება 4-ზე", fn: (n) => n * 4 }]],
      [[[9, 10], [7, 6], [12, 16]], { text: "ჯერ აკლდება 4, მერე × 2", fn: (n) => (n - 4) * 2 }, [{ text: "იყოფა 2-ზე", fn: (n) => n / 2 }, { text: "ემატება 1", fn: (n) => n + 1 }]],
      [[[12, 6], [18, 8], [24, 10]], { text: "იყოფა 3-ზე და ემატება 2", fn: (n) => n / 3 + 2 }, [{ text: "იყოფა 2-ზე", fn: (n) => n / 2 }, { text: "აკლდება 6", fn: (n) => n - 6 }]],
    ].map((item) => ruleItem(item[0], item[1], item[2])),
  };

  const sprintCell = {
    id: "fastcell",
    para: "11",
    title: "სწრაფი უჯრა",
    say: "გაქვს 3 წუთი. შეავსე □.",
    seconds: 180,
    rounds: [
      [(n) => n + 4, [2, 5, 8, 11]],
      [(n) => n + 6, [3, 4, 7, 9]],
      [(n) => n - 3, [12, 10, 8, 6]],
      [(n) => n * 2, [3, 5, 7, 9]],
      [(n) => n * 4, [2, 3, 5, 6]],
      [(n) => n * 3 + 1, [1, 2, 4, 5]],
      [(n) => n * 2 + 3, [2, 4, 6, 8]],
      [(n) => n * 2 - 1, [3, 6, 8, 10]],
      [(n) => n / 2, [8, 12, 18, 20]],
      [(n) => n / 3, [9, 15, 21, 27]],
      [(n) => n * 5 + 1, [1, 2, 3, 4]],
      [(n) => n * 2 + 4, [3, 5, 7, 9]],
      [(n) => n * 5 - 2, [2, 3, 4, 6]],
      [(n) => n * 4, [2, 3, 5, 7]],
      [(n) => 40 - n * 4, [2, 4, 6, 8]],
      [(n) => n * 2 + 10, [1, 3, 6, 8]],
      [(n) => n * 2 + 3, [10, 6, 4, 8]],
      [(n) => n + 7, [4, 9, 12, 15]],
      [(n) => n - 5, [20, 16, 13, 11]],
      [(n) => n * 3, [4, 6, 8, 9]],
      [(n) => n * 6, [2, 4, 5, 7]],
      [(n) => n + 8, [1, 4, 6, 9]],
      [(n) => n - 4, [18, 14, 11, 9]],
      [(n) => n * 3 + 2, [2, 3, 5, 6]],
      [(n) => n / 2 - 1, [10, 14, 18, 20]],
      [(n) => n * 4 + 1, [2, 3, 5, 6]],
    ].map((item) => cellItem(item[0], item[1])),
  };

  const sprintNext = {
    id: "next11",
    para: "11",
    title: "შემდეგი რიცხვი",
    say: "გაქვს 3 წუთი. იპოვე შემდეგი რიცხვი.",
    seconds: 180,
    center: true,
    rounds: [
      ["ემატება 4.", (n) => n + 4, 5, 3],
      ["აკლდება 3.", (n) => n - 3, 30, 3],
      ["ორმაგდება.", (n) => n * 2, 2, 3],
      ["ემატება 2.", (n) => n + 2, 7, 4],
      ["ორმაგდება და ემატება 1.", (n) => n * 2 + 1, 1, 4],
      ["ემატება 6.", (n) => n + 6, 4, 3],
      ["აკლდება 5.", (n) => n - 5, 40, 3],
      ["მრავლდება 3-ზე.", (n) => n * 3, 2, 3],
      ["იყოფა 2-ზე.", (n) => n / 2, 32, 3],
      ["ემატება 8.", (n) => n + 8, 1, 3],
      ["აკლდება 4.", (n) => n - 4, 28, 4],
      ["მრავლდება 2-ზე და ემატება 3.", (n) => n * 2 + 3, 2, 3],
      ["ჯერ აკლდება 1, მერე მრავლდება 3-ზე.", (n) => (n - 1) * 3, 4, 2],
      ["იყოფა 2-ზე და ემატება 4.", (n) => n / 2 + 4, 24, 3],
      ["მრავლდება 4-ზე.", (n) => n * 4, 3, 2],
      ["ემატება 9.", (n) => n + 9, 6, 3],
      ["აკლდება 6.", (n) => n - 6, 36, 3],
      ["მრავლდება 3-ზე და აკლდება 2.", (n) => n * 3 - 2, 3, 3],
      ["ჯერ ემატება 2, მერე მრავლდება 2-ზე.", (n) => (n + 2) * 2, 3, 3],
      ["იყოფა 3-ზე.", (n) => n / 3, 27, 2],
      ["მრავლდება 5-ზე.", (n) => n * 5, 2, 2],
      ["აკლდება 2.", (n) => n - 2, 19, 4],
      ["ემატება 7.", (n) => n + 7, 3, 3],
      ["მრავლდება 2-ზე და აკლდება 1.", (n) => n * 2 - 1, 4, 3],
    ].map((item) => nextItem(item[0], item[1], item[2], item[3])),
  };

  const catalog = [race, pairs, change, rule, cell, train, sprintCompute, sprintSimple, sprintMissing, sprintChange, sprintRule, sprintCell, sprintNext];
  window.GAME_LIST = catalog.map((game) => ({
    id: game.id,
    para: game.para,
    title: game.title,
    timed: Boolean(game.seconds),
  }));

  function formatTime(total) {
    const safe = Math.max(0, total);
    const minutes = Math.floor(safe / 60);
    const seconds = safe % 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function mountQuiz(root, api, game) {
    stopClock();
    const timed = Boolean(game.seconds);
    const maxLives = game.lives || 3;
    const state = {
      rounds: shuffle(game.rounds),
      index: 0,
      score: 0,
      lives: maxLives,
      streak: 0,
      best: 0,
      marks: [],
      lock: false,
      left: game.seconds || 0,
      over: "",
    };
    const stage = api.el("section", { class: "stage" });
    root.replaceChildren(topBar(api, game), stage);

    if (timed) {
      clockId = window.setInterval(() => {
        if (!stage.isConnected) {
          stopClock();
          return;
        }
        state.left -= 1;
        const node = stage.querySelector(".clock");
        if (node) {
          node.textContent = formatTime(state.left);
          if (state.left <= 15) node.classList.add("low");
        }
        if (state.left <= 0) {
          state.over = "time";
          stopClock();
          drawEnd();
        }
      }, 1000);
    }

    function drawEnd() {
      stopClock();
      let title = "კარგი თამაშია.";
      if (state.over === "time") title = "3 წუთი ამოიწურა.";
      else if (state.over === "lives") title = game.lose || "სიცოცხლე გაგითავდა.";
      else if (state.score === state.rounds.length) title = game.win || "ყოჩაღ! ყველა სწორია.";
      const scoreText = timed
        ? "სწორია " + state.score + (state.best > 1 ? "   ·   სერია " + state.best : "")
        : "სწორია " + state.score + " / " + state.rounds.length;
      stage.replaceChildren(
        api.el("p", { class: "eyebrow", text: game.say }),
        api.el("h1", { class: "end-title", text: title }),
        api.el("p", { class: "score-line", text: scoreText }),
        api.el("p", { class: "stars", text: timed ? timedStars(state.score) : starLine(state.score, state.rounds.length) }),
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
      if (state.over) {
        drawEnd();
        return;
      }
      if (!timed && (state.index >= state.rounds.length || state.lives === 0)) {
        state.over = state.lives === 0 ? "lives" : "done";
        drawEnd();
        return;
      }
      if (timed && state.index >= state.rounds.length) {
        const last = state.rounds[state.rounds.length - 1];
        state.rounds = shuffle(game.rounds);
        if (state.rounds.length > 1 && state.rounds[0] === last) state.rounds.push(state.rounds.shift());
        state.index = 0;
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
      const hudKids = timed ? [
        api.el("span", { class: state.left <= 15 ? "clock low" : "clock", text: formatTime(state.left) }),
        api.el("span", { text: "სწორია " + state.score }),
      ] : [
        api.el("span", { text: (game.step || "კითხვა") + " " + (state.index + 1) + " / " + state.rounds.length }),
        api.el("span", { class: "hearts", text: "♥".repeat(state.lives) + "♡".repeat(maxLives - state.lives) }),
      ];
      if (state.streak > 1) hudKids.push(api.el("span", { text: "ზედიზედ " + state.streak }));
      const parts = [
        api.el("p", { class: "say-line", text: game.say }),
        api.el("div", { class: "hud" }, hudKids),
        trackRow(),
        api.el("div", { class: game.center ? "prompt center" : "prompt", text: round.prompt }),
        choices,
        api.el("p", { class: "feedback", text: "" }),
      ].filter(Boolean);
      stage.replaceChildren.apply(stage, parts);
    }

    function pick(choiceButton, choice, round) {
      if (state.lock) return;
      state.lock = true;
      const buttons = stage.querySelectorAll(".choice");
      const feedback = stage.querySelector(".feedback");
      buttons.forEach((node) => { node.disabled = true; });
      const right = choice === round.answer;
      if (right) {
        choiceButton.classList.add("good");
        state.score += 1;
        state.streak += 1;
        if (state.streak > state.best) state.best = state.streak;
        state.marks.push("good");
        feedback.textContent = state.streak > 1 ? "სწორია! ზედიზედ " + state.streak : "სწორია!";
      } else {
        choiceButton.classList.add("bad");
        buttons.forEach((node) => {
          if (node.textContent === round.answer) node.classList.add("good");
        });
        feedback.textContent = "სწორია: " + round.answer;
        if (!timed) state.lives -= 1;
        state.streak = 0;
        state.marks.push("bad");
      }
      window.setTimeout(() => {
        if (state.over) return;
        state.index += 1;
        state.lock = false;
        draw();
      }, right ? (timed ? 420 : 700) : (timed ? 750 : 1200));
    }

    draw();
  }

  function timedStars(score) {
    const filled = Math.max(0, Math.min(5, Math.floor(score / 4)));
    return "★".repeat(filled) + "☆".repeat(5 - filled);
  }

  function mountPairs(root, api) {
    stopClock();
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

  window.addEventListener("hashchange", stopClock);

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
