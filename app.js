(function () {
  const app = document.getElementById("app");
  const data = window.DATA;
  const sets = Object.fromEntries(data.sets.map((set) => [set.id, set]));

  function el(tag, attrs, kids) {
    const node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach((key) => {
      const value = attrs[key];
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key.slice(0, 2) === "on" && typeof value === "function") {
        node.addEventListener(key.slice(2), value);
      } else if (value != null && value !== false) node.setAttribute(key, value);
    });
    (kids || []).forEach((kid) => {
      if (kid == null || kid === false) return;
      node.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    });
    return node;
  }

  function find(para, level) {
    return sets[para + "-" + level] || null;
  }

  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  function printAll(set) {
    sessionStorage.setItem("autoprint", "1");
    go("#/" + set.para + "/" + set.level + "/all");
  }

  function snippet(item) {
    if (item.task) return item.task.replace(/\s+/g, " ");
    if (item.table) return "ცხრილი";
    return item.say;
  }

  function sheet(set, item) {
    const head = el("header", { class: "head" }, [
      el("div", {}, [
        el("p", { class: "brand", text: "მათემატიკა · V კლასი" }),
        el("p", { class: "para", text: "§" + set.para + ". " + set.title }),
      ]),
      el("p", { class: "num" }, [
        set.kicker,
        el("b", { text: item.n + " / 30" }),
      ]),
    ]);

    const meta = el("div", { class: "meta" }, [
      el("div", {}, ["სახელი: ", el("span")]),
      el("div", {}, ["თარიღი: ", el("span")]),
    ]);

    const say = el("p", { class: "say " + set.level, text: item.say });
    const kids = [head, meta, say];

    if (item.task) {
      kids.push(el("div", { class: item.center ? "task center" : "task", text: item.task }));
    }
    if (item.table) kids.push(table(item.table));

    const scratch = el("div", { class: "scratch" });
    for (let i = 0; i < item.lines; i += 1) scratch.append(el("div", { class: "rule" }));
    kids.push(scratch);

    if (item.box) {
      kids.push(el("p", { class: "answer" }, ["პასუხი:", el("i")]));
    }

    return el("article", { class: "sheet" }, kids);
  }

  function table(spec) {
    const headRow = el("tr", {}, spec.cols.map((col) => el("th", { text: col })));
    const body = spec.rows.map((row) => el("tr", {}, row.map((cell) => {
      const blank = cell == null || cell === "";
      return el("td", { class: blank ? "gap" : "", text: blank ? "" : String(cell) });
    })));
    return el("table", { class: "grid" }, [
      el("thead", {}, [headRow]),
      el("tbody", {}, body),
    ]);
  }

  function button(label, attrs, onClick) {
    return el("button", Object.assign({ type: "button", text: label, onclick: onClick }, attrs));
  }

  function bar(set, extra) {
    const home = button("მთავარი", {}, () => go("#/"));
    const title = el("span", { class: "where", text: "§" + set.para + " · " + set.kicker });
    return el("div", { class: "bar noprint" }, [
      el("div", { class: "bar-inner" }, [home, title].concat(extra || [])),
    ]);
  }

  function renderHome() {
    document.title = "სავარჯიშოები · მათემატიკა, V კლასი";
    const groups = [
      { para: "10", standard: "მათ.V.6" },
      { para: "11", standard: "მათ.V.5" },
    ];
    const cards = groups.map((group) => {
      const easy = find(group.para, "easy");
      const hard = find(group.para, "hard");
      return el("section", { class: "card" }, [
        el("p", { class: "eyebrow", text: "I თავი · §" + group.para + " · " + group.standard }),
        el("h2", { text: easy.title }),
        el("p", { class: "about", text: easy.about }),
        levelRow(easy),
        levelRow(hard),
      ]);
    });

    app.replaceChildren(el("div", { class: "wrap" }, [
      el("p", { class: "eyebrow", text: "მათემატიკა · V კლასი · 11–12 კვირა" }),
      el("h1", { text: "სავარჯიშოები" }),
      el("p", { class: "lede", text: "თითო გვერდზე თითო სავარჯიშოა. ინსტრუქცია ერთი მოკლე წინადადებაა. ფურცელი საიტიდანვე იბეჭდება." }),
      el("p", { class: "lede", text: "მარტივ ფურცელზე მოსწავლე პირდაპირ აკეთებს ნაბიჯს. რთულზე შედეგი უკვე წერია და რიცხვამდე ორი ან სამი ნაბიჯით უნდა დაბრუნდეს." }),
      el("p", { class: "hint", text: "პირველი ეტაპი: §10 და §11, თითო თემაზე 30 მარტივი და 30 რთული." }),
      el("div", { class: "cards" }, cards),
    ]));
  }

  function levelRow(set) {
    return el("div", { class: "row" }, [
      el("span", { class: "tag " + set.level, text: set.kicker + " · 30" }),
      button("გახსნა", {}, () => go("#/" + set.para + "/" + set.level + "/1")),
      button("ბეჭდვა", { class: "solid" }, () => printAll(set)),
      button("პასუხები", {}, () => go("#/" + set.para + "/" + set.level + "/answers")),
    ]);
  }

  function renderOne(set, n) {
    const item = set.items[n - 1];
    document.title = "§" + set.para + " " + set.kicker + " · " + n;
    const jump = el("select", {
      "aria-label": "სავარჯიშოს ნომერი",
      onchange: (event) => go("#/" + set.para + "/" + set.level + "/" + event.target.value),
    }, set.items.map((it) => el("option", {
      value: String(it.n),
      text: String(it.n),
      selected: it.n === n ? "selected" : null,
    })));

    const tools = [
      button("← წინა", { disabled: n === 1 }, () => go("#/" + set.para + "/" + set.level + "/" + (n - 1))),
      jump,
      button("შემდეგი →", { disabled: n === 30 }, () => go("#/" + set.para + "/" + set.level + "/" + (n + 1))),
      el("span", { class: "grow" }),
      button("ამ ფურცლის ბეჭდვა", { class: "solid" }, () => window.print()),
      button("30 ფურცელი", {}, () => printAll(set)),
      button("პასუხები", {}, () => go("#/" + set.para + "/" + set.level + "/answers")),
    ];

    app.replaceChildren(
      bar(set, tools),
      el("div", { class: "pile" }, [sheet(set, item)])
    );
  }

  function renderAll(set) {
    document.title = "§" + set.para + " " + set.kicker + " · 30 ფურცელი";
    const tools = [
      button("ბეჭდვა", { class: "solid" }, () => window.print()),
      button("პასუხები", {}, () => go("#/" + set.para + "/" + set.level + "/answers")),
      el("span", { class: "hint", text: "30 გვერდი, თითო სავარჯიშო ცალკე ფურცელზე." }),
    ];
    app.replaceChildren(
      bar(set, tools),
      el("div", { class: "pile" }, set.items.map((item) => sheet(set, item)))
    );
    if (sessionStorage.getItem("autoprint") === "1") {
      sessionStorage.removeItem("autoprint");
      const print = () => setTimeout(() => window.print(), 150);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(print);
      else print();
    }
  }

  function renderAnswers(set) {
    document.title = "პასუხები · §" + set.para + " " + set.kicker;
    const rows = set.items.map((item) => el("tr", {}, [
      el("td", { class: "n", text: String(item.n) }),
      el("td", { text: snippet(item) }),
      el("td", { class: "ans" }, [
        item.answer,
        item.note ? el("span", { class: "note", text: item.note }) : null,
      ]),
    ]));
    const tools = [
      button("ბეჭდვა", { class: "solid" }, () => window.print()),
      button("სავარჯიშოები", {}, () => go("#/" + set.para + "/" + set.level + "/1")),
    ];
    const key = el("section", { class: "key" }, [
      el("p", { class: "eyebrow", text: "მასწავლებლისთვის · მოსწავლის ფურცელზე პასუხი არ იბეჭდება" }),
      el("h1", { text: "§" + set.para + ". " + set.title }),
      el("p", { text: set.kicker + " · 30 სავარჯიშო. ცხრილის პასუხები მიდის მარცხნიდან მარჯვნივ, ზემოდან ქვემოთ." }),
      el("table", {}, [
        el("thead", {}, [el("tr", {}, [
          el("th", { text: "№" }),
          el("th", { text: "დავალება" }),
          el("th", { text: "პასუხი" }),
        ])]),
        el("tbody", {}, rows),
      ]),
    ]);
    app.replaceChildren(bar(set, tools), key);
  }

  function renderMissing() {
    document.title = "სავარჯიშოები";
    app.replaceChildren(el("div", { class: "wrap missing" }, [
      el("h1", { text: "ეს გვერდი ჯერ არ არის" }),
      el("p", { class: "lede", text: "პირველ ეტაპზე მხოლოდ §10 და §11 არის." }),
      button("მთავარზე დაბრუნება", { class: "solid" }, () => go("#/")),
    ]));
  }

  function render() {
    const parts = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts.length === 0) {
      renderHome();
      return;
    }
    const set = find(parts[0], parts[1]);
    if (!set) {
      renderMissing();
      return;
    }
    const mode = parts[2] || "1";
    if (mode === "all") renderAll(set);
    else if (mode === "answers") renderAnswers(set);
    else {
      const n = parseInt(mode, 10);
      if (!n || n < 1 || n > set.items.length) renderMissing();
      else renderOne(set, n);
    }
    window.scrollTo(0, 0);
  }

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.target.closest("input, textarea, select, button")) return;
    const match = (location.hash || "").match(/^#\/(\d+)\/(easy|hard)\/(\d+)$/);
    if (!match) return;
    const n = parseInt(match[3], 10);
    if (event.key === "ArrowRight" && n < 30) go("#/" + match[1] + "/" + match[2] + "/" + (n + 1));
    if (event.key === "ArrowLeft" && n > 1) go("#/" + match[1] + "/" + match[2] + "/" + (n - 1));
  });

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/";
  render();
})();
