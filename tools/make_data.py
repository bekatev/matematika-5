# -*- coding: utf-8 -*-
"""Build data.js for the grade-5 worksheet site. Paragraphs 10 and 11 only."""

import json
from pathlib import Path


def ex(say, answer, task=None, table=None, lines=4, center=False, box=None, note=None):
    item = {
        "say": say,
        "answer": answer,
        "lines": lines,
        "center": center,
        "box": (table is None) if box is None else box,
    }
    if task:
        item["task"] = task
    if table:
        item["table"] = {"cols": table[0], "rows": table[1]}
    if note:
        item["note"] = note
    return item


def horizontal(label, inputs):
    cols = inputs[0]
    return cols, [[label] + [None] * (len(cols) - 1)]


def pairs(rows):
    return ["რიცხვი", "შედეგი"], rows


def easy_10():
    s = "გამოთვალე."
    items = [
        ex(s, "16", task="8 + 4 × 2 =", center=True, lines=6),
        ex(s, "24", task="(15 − 7) × 3 =", center=True, lines=6),
        ex(s, "14", task="36 : 4 + 5 =", center=True, lines=6),
        ex(s, "42", task="6 × (4 + 3) =", center=True, lines=6),
        ex(s, "5", task="48 : 6 − 3 =", center=True, lines=6),
        ex(s, "8", task="20 − 4 × 3 =", center=True, lines=6),
    ]
    w = "მხოლოდ ჩაწერე გამოსახულება. ნუ გამოთვლი."
    items += [
        ex(w, "(7 + 5) : 3", task="7-ს დაუმატე 5. მიღებულ რიცხვს გაყავი 3-ზე.", lines=3,
           note="ფრჩხილები საჭიროა, თორემ ჯერ გაიყოფა."),
        ex(w, "4 × 6 + 8", task="4 გავამრავლოთ 6-ზე და მივუმატოთ 8.", lines=3,
           note="(4 × 6) + 8-ც სწორია."),
        ex(w, "30 − 12 × 3", task="30-ს გამოვაკლოთ 12-ისა და 3-ის ნამრავლი.", lines=3),
        ex(w, "(9 + 6) : 5", task="ჯერ შევკრიბოთ 9 და 6, შემდეგ გავყოთ 5-ზე.", lines=3,
           note="ფრჩხილები საჭიროა."),
        ex(w, "8 × (2 + 5)", task="8 გავამრავლოთ 2-ისა და 5-ის ჯამზე.", lines=3,
           note="ფრჩხილები საჭიროა."),
        ex(w, "100 : 4 − 7", task="100 გავყოთ 4-ზე და გამოვაკლოთ 7.", lines=3,
           note="(100 : 4) − 7-ც სწორია."),
    ]
    g = "გაამარტივე."
    items += [
        ex(g, "a + 10", task="a + 6 + 4 =", center=True, lines=4),
        ex(g, "x + 10", task="4 + x + 6 =", center=True, lines=4),
        ex(g, "6y", task="2 × y × 3 =", center=True, lines=4, note="6 × y-ც სწორია."),
        ex(g, "4m", task="m + m + m + m =", center=True, lines=4, note="4 × m-ც სწორია."),
        ex(g, "5b", task="7 × b − 2 × b =", center=True, lines=4, note="5 × b-ც სწორია."),
        ex(g, "2a + 6", task="2 × (a + 3) =", center=True, lines=4, note="2 × a + 6-ც სწორია."),
    ]
    v = "იპოვე მნიშვნელობა."
    items += [
        ex(v, "13", task="a + 8\na = 5", center=True, lines=5),
        ex(v, "12", task="3 × n\nn = 4", center=True, lines=5),
        ex(v, "13", task="20 − b\nb = 7", center=True, lines=5),
        ex(v, "6", task="c : 3\nc = 18", center=True, lines=5),
        ex(v, "13", task="2 × a + 1\na = 6", center=True, lines=5),
        ex(v, "7", task="15 − 2 × x\nx = 4", center=True, lines=5),
    ]
    e = "ჩაწერე გამოსახულება."
    items += [
        ex(e, "12 × n", task="ერთ რვეულში 12 ფურცელია. n რვეულში რამდენი ფურცელია?", lines=3,
           note="12n ან n × 12-ც სწორია."),
        ex(e, "a + 5", task="კალათაში იყო a ვაშლი. დაუმატეს კიდევ 5 ვაშლი. სულ რამდენი გახდა?", lines=3),
        ex(e, "40 − b", task="საფულეში იყო 40 ლარი. გადაიხადეს b ლარი. რამდენი დარჩა?", lines=3),
        ex(e, "k : 3", task="k თხილი 3 მეგობარმა თანაბრად გაიყო. ერთმა რამდენი მიიღო?", lines=3),
        ex(e, "8 × t + 2", task="წიგნი 8 ლარი ღირს. იყიდეს t წიგნი და 2 ლარის საშლელი. სულ რამდენი ლარია?", lines=3),
        ex(e, "2 × x + 4", task="რიცხვი x გავაორმაგეთ და დავუმატეთ 4.", lines=3, note="2x + 4-ც სწორია."),
    ]
    return items


def hard_10():
    s = "იპოვე გამოტოვებული რიცხვი."
    items = [
        ex(s, "23", task="□ + 17 = 40", center=True, lines=5),
        ex(s, "7", task="8 × □ = 56", center=True, lines=5),
        ex(s, "65", task="□ − 25 = 40", center=True, lines=5),
        ex(s, "9", task="72 : □ = 8", center=True, lines=5),
        ex(s, "5", task="6 × □ + 4 = 34", center=True, lines=6),
        ex(s, "7", task="(□ + 8) × 2 = 30", center=True, lines=6),
        ex(s, "9", task="100 − □ × 5 = 55", center=True, lines=6),
        ex(s, "32", task="□ : 4 − 3 = 5", center=True, lines=6),
    ]
    a = "იპოვე ასოს მნიშვნელობა."
    items += [
        ex(a, "27", task="a + 15 = 42", center=True, lines=5),
        ex(a, "9", task="4 × n = 36", center=True, lines=5),
        ex(a, "32", task="50 − b = 18", center=True, lines=5),
        ex(a, "42", task="c : 6 = 7", center=True, lines=5),
        ex(a, "7", task="3 × x + 5 = 26", center=True, lines=6),
        ex(a, "5", task="2 × (y + 4) = 18", center=True, lines=6),
    ]
    items += [
        ex(s, "8", task="a + □ + 4 = a + 12", center=True, lines=4),
        ex(s, "4", task="5 × n × □ = 20 × n", center=True, lines=4),
        ex(s, "7", task="□ × b + 2 × b = 9 × b", center=True, lines=4),
        ex(s, "5", task="3 × (a + □) = 3 × a + 15", center=True, lines=5),
        ex(s, "2", task="6 × k − □ × k = 4 × k", center=True, lines=5),
        ex(s, "4", task="(6 + x) + □ = x + 10", center=True, lines=4),
    ]
    f = "იპოვე რიცხვი."
    items += [
        ex(f, "5", task="4 ერთნაირი რვეული ჯამში 20 ლარი ღირს. ერთი რვეული რამდენი ლარი ღირს?", lines=5),
        ex(f, "22", task="კალათაში ვაშლი იდო. 7 ვაშლი შეჭამეს და 15 დარჩა. თავიდან რამდენი ვაშლი იყო?", lines=5),
        ex(f, "7", task="რიცხვი გავამრავლეთ 3-ზე, შემდეგ დავუმატეთ 6. მივიღეთ 27. თავიდან რომელი რიცხვი იყო?", lines=5),
        ex(f, "8", task="48 კანფეტი ბავშვებმა თანაბრად გაიყვეს. თითოეულმა 6 მიიღო. რამდენი ბავშვი იყო?", lines=5),
        ex(f, "55", task="ლენტა 90 სანტიმეტრი იყო. მოჭრის შემდეგ 35 სანტიმეტრი დარჩა. რამდენი სანტიმეტრი მოაჭრეს?", lines=5),
        ex(f, "22", task="დიდი რიცხვი 40-ია. ის პატარა რიცხვზე 18-ით მეტია. რამდენია პატარა რიცხვი?", lines=5),
    ]
    items += [
        ex(s, "10", task="5 × (n + 2) = 5 × n + □", center=True, lines=5),
        ex("შეავსე უჯრა.", "5 × a", task="3 × a + □ = 8 × a", center=True, lines=4, note="5a-ც სწორია."),
        ex(s, "8", task="x = 6\n2 × x + □ = 20", center=True, lines=5),
        ex("იპოვე გამოტოვებული რიცხვი. შემდეგ შეამოწმე.", "13", task="□ + 14 = 3 × 9", center=True, lines=5,
           note="შემოწმება: 13 + 14 = 27 და 3 × 9 = 27."),
    ]
    return items


def easy_11():
    fill = "შეავსე ცხრილი."
    items = [
        ex(fill, "4; 5; 8; 13", task="რიცხვს ემატება 3.", lines=2,
           table=horizontal("შედეგი", (["რიცხვი", "1", "2", "5", "10"],))),
        ex(fill, "3; 5; 7; 10", task="რიცხვს აკლდება 2.", lines=2,
           table=horizontal("შედეგი", (["რიცხვი", "5", "7", "9", "12"],))),
        ex(fill, "4; 8; 12; 20", task="რიცხვი მრავლდება 4-ზე.", lines=2,
           table=horizontal("შედეგი", (["რიცხვი", "1", "2", "3", "5"],))),
        ex(fill, "2; 4; 5; 8", task="რიცხვი იყოფა 2-ზე.", lines=2,
           table=horizontal("შედეგი", (["რიცხვი", "4", "8", "10", "16"],))),
        ex(fill, "3; 6; 9; 12", task="1 კილოგრამი ვაშლი 3 ლარი ღირს.", lines=2,
           table=(["კილოგრამი", "ლარი"], [["1", None], ["2", None], ["3", None], ["4", None]])),
        ex(fill, "60; 120; 180; 240", task="მანქანა საათში 60 კილომეტრს გადის.", lines=2,
           table=(["საათი", "კილომეტრი"], [["1", None], ["2", None], ["3", None], ["4", None]])),
        ex(fill, "33; 34; 35; 36", task="დედა ანაზე 25 წლით უფროსია.", lines=2,
           table=(["ანა", "დედა"], [["8", None], ["9", None], ["10", None], ["11", None]])),
        ex(fill, "10; 20; 30; 50", task="ერთ ყუთში 10 ფანქარია.", lines=2,
           table=(["ყუთი", "ფანქარი"], [["1", None], ["2", None], ["3", None], ["5", None]])),
        ex(fill, "5; 10; 15; 20", task="ყოველ დღე იწურება 5 ლიტრი. რამდენი ლიტრი დაიწურება?", lines=2,
           table=(["დღე", "ლიტრი"], [["1", None], ["2", None], ["3", None], ["4", None]])),
        ex(fill, "10; 13; 16; 18", task="შუადღის ტემპერატურა დილისაზე 6 გრადუსით მეტია.", lines=2,
           table=(["დილა", "შუადღე"], [["4", None], ["7", None], ["10", None], ["12", None]])),
        ex(fill, "6; 8; 11; 15", task="გამოთვალე a + 6.", lines=2,
           table=horizontal("a + 6", (["a", "0", "2", "5", "9"],))),
        ex(fill, "9; 7; 6; 2", task="გამოთვალე 10 − b.", lines=2,
           table=horizontal("10 − b", (["b", "1", "3", "4", "8"],))),
        ex(fill, "6; 8; 12; 14", task="გამოთვალე 2 × n.", lines=2,
           table=horizontal("2 × n", (["n", "3", "4", "6", "7"],))),
        ex(fill, "2; 4; 8; 10", task="გამოთვალე n + n.", lines=2,
           table=horizontal("n + n", (["n", "1", "2", "4", "5"],))),
        ex(fill, "1; 4; 7; 10", task="გამოთვალე 3 × x + 1.", lines=2,
           table=horizontal("3 × x + 1", (["x", "0", "1", "2", "3"],))),
        ex(fill, "18; 16; 14; 10", task="გამოთვალე 20 − 2 × y.", lines=2,
           table=horizontal("20 − 2 × y", (["y", "1", "2", "3", "5"],))),
    ]
    word = "დაწერე: იზრდება ან მცირდება."
    items += [
        ex(word, "იზრდება", task="ავტომობილი უფრო დიდხანს მოძრაობს. გავლილი მანძილი იზრდება თუ მცირდება?", lines=2),
        ex(word, "მცირდება", task="ფასს უფრო დიდ თანხას დააკლებ. გადასახდელი თანხა იზრდება თუ მცირდება?", lines=2),
        ex("დაწერე: ღიავდება ან მუქდება.", "მუქდება",
           task="ადგილი ზღვის დონიდან უფრო მაღალია. რუკაზე ფერი ღიავდება თუ მუქდება?", lines=2),
        ex(word, "მცირდება", task="ავტობუსიდან მგზავრები ჩამოდიან. დარჩენილი მგზავრები იზრდება თუ მცირდება?", lines=2),
        ex(word, "იზრდება", task="ერთი ნაყინის ფასი არ იცვლება. ნაყინს უფრო მეტს ყიდულობენ. საერთო ფასი იზრდება თუ მცირდება?", lines=2),
        ex(word, "მცირდება", task="სანთელი უფრო დიდხანს იწვის. დარჩენილი სანთლის სიგრძე იზრდება თუ მცირდება?", lines=2),
    ]
    e = "ჩაწერე ასოითი გამოსახულება."
    items += [
        ex(e, "n + 7", task="რიცხვი n-ია. ჩაწერე რიცხვი, რომელიც მასზე 7-ით მეტია.", lines=3),
        ex(e, "n − 4", task="რიცხვი n-ია. ჩაწერე რიცხვი, რომელიც მასზე 4-ით ნაკლებია.", lines=3),
        ex(e, "3 × n", task="რიცხვი n-ია. ჩაწერე მისი სამმაგი.", lines=3, note="3n-ც სწორია."),
        ex(e, "n : 2", task="რიცხვი n-ია. ჩაწერე მისი ნახევარი.", lines=3),
    ]
    items += [
        ex(fill, "8; 10; 12; 14",
           task="ტემპერატურა ყოველ საათში 2 გრადუსით იზრდება. პირველ საათზე 8 გრადუსი იყო.", lines=2,
           table=(["საათი", "გრადუსი"], [["1", None], ["2", None], ["3", None], ["4", None]])),
        ex(fill, "27; 24; 18; 12",
           task="ავზში 30 ლიტრი წყალია. ყოველ დღე 3 ლიტრი იწურება. რამდენი დარჩება?", lines=2,
           table=(["დღე", "დარჩენილი ლიტრი"], [["1", None], ["2", None], ["4", None], ["6", None]])),
        ex(fill, "9; 12; 18; 24", task="ერთი ბარათი 3 ლარი ღირს.", lines=2,
           table=(["ბარათი", "ლარი"], [["3", None], ["4", None], ["6", None], ["8", None]])),
        ex(fill, "56; 58; 59; 61", task="ბებია შვილიშვილზე 50 წლით უფროსია.", lines=2,
           table=(["შვილიშვილი", "ბებია"], [["6", None], ["8", None], ["9", None], ["11", None]])),
    ]
    return items


def hard_11():
    f = "იპოვე საწყისი რიცხვი."
    items = [
        ex(f, "12", task="რიცხვს დაემატა 9 და მივიღეთ 21.", lines=4),
        ex(f, "20", task="რიცხვს გამოაკლდა 6 და მივიღეთ 14.", lines=4),
        ex(f, "9", task="რიცხვი გავამრავლეთ 5-ზე და მივიღეთ 45.", lines=4),
        ex(f, "32", task="რიცხვი გავყავით 4-ზე და მივიღეთ 8.", lines=4),
        ex(f, "12", task="დედა ანაზე 30 წლით უფროსია. დედა 42 წლისაა. ანა რამდენი წლისაა?", lines=4),
        ex(f, "7", task="1 კილოგრამი ხილი 4 ლარი ღირს. გადაიხადეს 28 ლარი. რამდენი კილოგრამი იყიდეს?", lines=4),
        ex("იპოვე a.", "11", task="a + 8 = 19", center=True, lines=4),
        ex("იპოვე n.", "8", task="3 × n = 24", center=True, lines=4),
    ]
    rule = "იპოვე წესი და შეავსე უჯრა."
    items += [
        ex(rule, "ემატება 5; 15", task="წესი არ იცვლება.", lines=3,
           table=pairs([["3", "8"], ["5", "10"], ["7", "12"], ["10", None]])),
        ex(rule, "აკლდება 3; 11", task="წესი არ იცვლება.", lines=3,
           table=pairs([["12", "9"], ["15", "12"], ["20", "17"], [None, "8"]])),
        ex(rule, "მრავლდება 3-ზე; 27", task="წესი არ იცვლება.", lines=3,
           table=pairs([["2", "6"], ["5", "15"], ["7", "21"], ["9", None]])),
        ex(rule, "იყოფა 2-ზე; 18", task="წესი არ იცვლება.", lines=3,
           table=pairs([["4", "2"], ["10", "5"], ["16", "8"], [None, "9"]])),
        ex("იპოვე, რამდენი ემატება, და შეავსე უჯრა.", "ემატება 7; 13", lines=3,
           table=(["a", "1", "4", "6", "9"], [["შედეგი", "8", "11", None, "16"]])),
        ex("შეავსე ცარიელი უჯრები.", "2; 7",
           task="რიცხვისა და შედეგის ჯამი არ იცვლება.", lines=3,
           table=pairs([[None, "16"], ["4", "14"], [None, "11"], ["10", "8"]]),
           note="ჯამი 18-ია. 18 − 16 = 2 და 18 − 11 = 7."),
        ex("შეავსე ცარიელი უჯრები.", "4; 7",
           task="1 კილოგრამის ფასი არ იცვლება.", lines=3,
           table=(["კგ", "ლარი"], [["2", "8"], [None, "16"], ["5", "20"], [None, "28"]]),
           note="1 კგ ღირს 4 ლარი."),
        ex("შეავსე ცარიელი უჯრები.", "4; 200",
           task="სიჩქარე არ იცვლება.", lines=3,
           table=(["საათი", "კილომეტრი"], [["1", "40"], ["2", "80"], [None, "160"], ["5", None]]),
           note="სიჩქარე 40 კმ/სთ. 160 : 40 = 4 საათი. 5 × 40 = 200 კმ."),
    ]
    grow = "დაწერე: გაიზარდა ან შემცირდა."
    items += [
        ex(grow, "გაიზარდა",
           task="ერთი რვეულის ფასი არ შეცვლილა. სალაროში მეტი თანხა გადაიხადეს. რვეულების რაოდენობა გაიზარდა თუ შემცირდა?",
           lines=2),
        ex("დაწერე: იზრდება ან მცირდება.", "იზრდება",
           task="სანთელი იწვის და დარჩენილი სანთელი მოკლდება. გასული დრო იზრდება თუ მცირდება?", lines=2),
        ex("დაწერე: მეტია ან ნაკლებია.", "მეტია",
           task="რუკაზე ადგილი უფრო მუქი ფერითაა. ზღვის დონიდან სიმაღლე მეტია თუ ნაკლებია?", lines=2),
        ex("დაწერე: ჩაჯდნენ ან ჩამოვიდნენ.", "ჩაჯდნენ",
           task="ავტობუსში მგზავრი მეტი გახდა. მგზავრები ჩაჯდნენ თუ ჩამოვიდნენ?", lines=2),
        ex("დაწერე, რამდენით შეიცვალა.", "1 წლით გაიზარდა",
           task="დედა შვილზე ყოველთვის 28 წლით უფროსია. შვილი ერთი წლით გაიზარდა. დედის ასაკი რამდენით შეიცვალა?",
           lines=3),
        ex(grow, "გაიზარდა",
           task="იგივე რაოდენობის კანფეტი თანაბრად გაიყო. თითო ბავშვზე ნაკლები ხვდება. ბავშვების რაოდენობა გაიზარდა თუ შემცირდა?",
           lines=2),
    ]
    items += [
        ex("შეავსე ბოლო უჯრა.", "14",
           task="როცა x ერთით იზრდება, შედეგიც თანაბრად იცვლება.", lines=3,
           table=(["x", "შედეგი"], [["1", "5"], ["2", "8"], ["3", "11"], ["4", None]]),
           note="ყოველ ნაბიჯზე შედეგი 3-ით იზრდება."),
        ex("შეავსე ბოლო უჯრა.", "4",
           task="როცა x ერთით იზრდება, შედეგიც თანაბრად იცვლება.", lines=3,
           table=(["x", "შედეგი"], [["1", "20"], ["2", "16"], ["3", "12"], ["5", None]]),
           note="თითო ნაბიჯზე შედეგი 4-ით მცირდება. x=3-დან x=5-მდე ორი ნაბიჯია: 12 − 8 = 4."),
        ex(f, "5", task="რიცხვს დავუმატეთ 4, შემდეგ გავამრავლეთ 2-ზე და მივიღეთ 18.", lines=5,
           note="(5 + 4) × 2 = 18."),
        ex("შეავსე ცარიელი უჯრები.", "4; 20",
           task="კვადრატის პერიმეტრი არის გვერდი × 4.", lines=3,
           table=(["გვერდი", "პერიმეტრი"], [["2", "8"], [None, "16"], ["5", None], ["8", "32"]])),
        ex("შეავსე ცარიელი უჯრები.", "7; 7; 12",
           task="სიგრძე სიგანეზე 3 სანტიმეტრით მეტია.", lines=3,
           table=(["სიგანე", "სიგრძე"], [["2", "5"], ["4", None], [None, "10"], ["9", None]])),
        ex("იპოვე არასწორი წყვილი და გაასწორე.", "9 და 18. სწორია 9 და 19.",
           task="წესი: მეორე რიცხვი პირველზე 10-ით მეტია.\n\n4 და 14\n7 და 17\n9 და 18\n12 და 22", lines=3),
        ex("შემოხაზე ის თანხა, რომლის გადახდაც არ შეიძლება.", "9 ლარი",
           task="ერთი ბილეთი 2 ლარი ღირს.\n\n6 ლარი      9 ლარი      10 ლარი      14 ლარი", lines=2),
        ex("უპასუხე კითხვას.", "9",
           task="დარჩენილი გვერდი ყოველ წუთში თანაბრად იცვლება. რამდენი გვერდი დარჩება მე-6 წუთზე?",
           lines=4, box=True,
           table=(["წუთი", "დარჩენილი გვერდი"], [["1", "19"], ["2", "17"], ["3", "15"], ["4", "13"]]),
           note="ყოველ წუთში 2 გვერდით მცირდება. მე-5 წუთს 11 დარჩება, მე-6 წუთს 9."),
    ]
    return items


def pack(para, level, kicker, title, standard, about, items):
    if len(items) != 30:
        raise SystemExit(f"{para} {level} has {len(items)} items")
    for i, item in enumerate(items, 1):
        item["n"] = i
        if not item["say"] or not item["answer"]:
            raise SystemExit(f"empty text in {para} {level} {i}")
        table = item.get("table")
        if table:
            width = len(table["cols"])
            for row in table["rows"]:
                if len(row) != width:
                    raise SystemExit(f"bad table {para} {level} {i}")
    return {
        "id": f"{para}-{level}",
        "para": para,
        "level": level,
        "kicker": kicker,
        "title": title,
        "standard": standard,
        "about": about,
        "items": items,
    }


def main():
    sets = [
        pack("10", "easy", "მარტივი", "რიცხვითი და ასოითი გამოსახულება", "მათ.V.6",
             "გამოთვლა, გამოსახულების ჩაწერა, გამარტივება და მნიშვნელობა.", easy_10()),
        pack("10", "hard", "რთული", "რიცხვითი და ასოითი გამოსახულება", "მათ.V.6",
             "შედეგი მოცემულია. მოსწავლე პირიქით პოულობს გამოტოვებულ რიცხვს.", hard_10()),
        pack("11", "easy", "მარტივი", "ორ სიდიდეს შორის დამოკიდებულება", "მათ.V.5",
             "ცხრილი, ასოითი ჩანაწერი და სიტყვა: რა იზრდება, რა მცირდება.", easy_11()),
        pack("11", "hard", "რთული", "ორ სიდიდეს შორის დამოკიდებულება", "მათ.V.5",
             "შედეგიდან ბრუნდება საწყის რიცხვამდე ან წესამდე.", hard_11()),
    ]
    checks = {
        ("10", "easy"): ["16", "24", "14", "42", "5", "8"],
        ("10", "hard"): ["23", "7", "65", "9", "5", "7", "9", "32", "27", "9", "32", "42", "7", "5"],
    }
    by_id = {s["id"]: s for s in sets}
    for (para, level), answers in checks.items():
        items = by_id[f"{para}-{level}"]["items"]
        for i, answer in enumerate(answers):
            if items[i]["answer"] != answer:
                raise SystemExit(f"check failed {para} {level} #{i+1}")
    # Spot-check a few reverse results that are easy to recompute.
    assert by_id["10-hard"]["items"][20]["answer"] == "5"
    assert by_id["10-hard"]["items"][22]["answer"] == "7"
    assert by_id["10-hard"]["items"][24]["answer"] == "55"
    assert by_id["11-easy"]["items"][14]["answer"] == "1; 4; 7; 10"
    assert by_id["11-easy"]["items"][15]["answer"] == "18; 16; 14; 10"
    assert by_id["11-hard"]["items"][24]["answer"] == "5"
    assert by_id["11-hard"]["items"][29]["answer"] == "9"
    payload = {
        "title": "სავარჯიშოები",
        "grade": "V კლასი",
        "sets": sets,
    }
    out = Path(__file__).resolve().parent.parent / "data.js"
    out.write_text(
        "window.DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
