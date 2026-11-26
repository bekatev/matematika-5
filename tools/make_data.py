# -*- coding: utf-8 -*-
"""Build data.js for the grade-5 worksheet site. Paragraphs 10, 11, 12 and 13."""

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
        ex(s, "10", task="(□ + 15) × 4 = 100", center=True, lines=6),
        ex(s, "8", task="120 − (□ + 8) × 3 = 72", center=True, lines=6),
        ex(s, "42", task="(□ − 12) : 5 = 6", center=True, lines=6),
        ex(s, "9", task="3 × □ + 2 × □ = 45", center=True, lines=6),
        ex(s, "5", task="2 × (3 × □ − 4) = 22", center=True, lines=6),
        ex(s, "20", task="(□ : 4 + 3) × 5 = 40", center=True, lines=6),
        ex(s, "8", task="80 − □ × 6 = 4 × 8", center=True, lines=6),
        ex(s, "5", task="5 × (□ + 2) + 10 = 45", center=True, lines=6),
    ]
    a = "იპოვე ასოს მნიშვნელობა."
    items += [
        ex(a, "11", task="4 × a + 18 = 62", center=True, lines=6),
        ex(a, "12", task="100 − 3 × n = 64", center=True, lines=6),
        ex(a, "5", task="(b + 9) × 4 = 56", center=True, lines=6),
        ex(a, "50", task="c : 5 − 4 = 6", center=True, lines=6),
        ex(a, "7", task="2 × x + 3 × x − 4 = 31", center=True, lines=6),
        ex(a, "13", task="3 × (y − 6) + 8 = 29", center=True, lines=6),
    ]
    items += [
        ex(s, "5", task="4 × (a + □) + 2 × a = 6 × a + 20", center=True, lines=6,
           note="ჯერ გახსენი ფრჩხილები: 4a + 4×□ + 2a = 6a + 20."),
        ex(s, "9", task="(3 × n + □) + (2 × n + 5) = 5 × n + 14", center=True, lines=6),
        ex(s, "3", task="8 × k − 3 × k − □ × k = 2 × k", center=True, lines=5),
        ex(s, "5", task="2 × (n + 4) + 3 × (n + □) = 5 × n + 23", center=True, lines=6),
        ex(s, "12", task="6 × (2 × a + 3) = □ × a + 18", center=True, lines=6),
        ex(s, "7", task="(8 + x) + (□ + x) = 2 × x + 15", center=True, lines=5),
    ]
    f = "იპოვე რიცხვი."
    items += [
        ex(f, "5", task="3 ერთნაირი რვეული და 2 ლარის საშლელი ჯამში 17 ლარი ღირს. ერთი რვეული რამდენი ლარია?", lines=5),
        ex(f, "20", task="კალათაში ვაშლი იდო. ჯერ ნახევარი შეჭამეს, შემდეგ კიდევ 4, და დარჩა 6. თავიდან რამდენი ვაშლი იყო?", lines=5,
           note="4-ის შემდეგ 6 დარჩა, ანუ ნახევარი 10 იყო. თავიდან 20."),
        ex(f, "7", task="რიცხვი გავაორმაგეთ, დავუმატეთ 8 და მიღებული გავყავით 2-ზე. მივიღეთ 11. თავიდან რომელი რიცხვი იყო?", lines=5,
           note="(2 × 7 + 8) : 2 = 11."),
        ex(f, "6", task="48 კანფეტი ბავშვებმა თანაბრად გაიყვეს. თითოეულმა 4 შეჭამა და 4 დარჩა. რამდენი ბავშვი იყო?", lines=5,
           note="თითო ბავშვს 8 კანფეტი შეხვდა. 48 : 8 = 6."),
        ex(f, "95", task="ლენტას მოჭრეს 15 სანტიმეტრი. დარჩენილი 4 ტოლ ნაწილად გაიყო. თითო ნაწილი 20 სანტიმეტრი გამოვიდა. თავიდან რამდენი სანტიმეტრი იყო?", lines=5),
        ex(f, "16", task="ორი რიცხვის ჯამი 50-ია. დიდი პატარაზე 18-ით მეტია. რამდენია პატარა რიცხვი?", lines=5,
           note="(50 − 18) : 2 = 16."),
    ]
    items += [
        ex(s, "15", task="5 × (2 × n + 3) = 10 × n + □", center=True, lines=6),
        ex("შეავსე უჯრა.", "3 × a + 6", task="4 × a + □ = 7 × a + 6", center=True, lines=5,
           note="3a + 6-ც სწორია."),
        ex(s, "4", task="x = 7\n3 × (x + □) = 33", center=True, lines=6),
        ex(s, "8", task="□ × 6 + 12 = 4 × 15", center=True, lines=6,
           note="ჯერ მარჯვენა მხარეა 60. შემდეგ (60 − 12) : 6 = 8."),
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
        ex(f, "6", task="რიცხვს დაემატა 8, შემდეგ გავამრავლეთ 3-ზე და მივიღეთ 42.", lines=5,
           note="(6 + 8) × 3 = 42."),
        ex(f, "29", task="რიცხვს გამოაკლდა 5, შემდეგ გავყავით 4-ზე და მივიღეთ 6.", lines=5),
        ex(f, "13", task="რიცხვი გავაორმაგეთ და გამოვაკელით 7. მივიღეთ 19.", lines=5),
        ex(f, "24", task="რიცხვი გავყავით 3-ზე და დავუმატეთ 9. მივიღეთ 17.", lines=5),
        ex(f, "18", task="ანა დედაზე 28 წლით უმცროსია. მათი ასაკების ჯამი 64-ია. ანა რამდენი წლისაა?", lines=5,
           note="(64 − 28) : 2 = 18."),
        ex(f, "3", task="1 კგ ვაშლი 3 ლარით ძვირია, ვიდრე 1 კგ მსხალი. 2 კგ ვაშლი და 1 კგ მსხალი ჯამში 15 ლარი ღირს. 1 კგ მსხალი რამდენი ლარია?", lines=5,
           note="მსხალი 3 ლარი, ვაშლი 6. 2 × 6 + 3 = 15."),
        ex("იპოვე a.", "6", task="2 × (a + 5) − 3 = 19", center=True, lines=6),
        ex("იპოვე n.", "11", task="(n − 4) × 5 + 7 = 42", center=True, lines=6),
    ]
    rule = "იპოვე წესი და შეავსე უჯრა."
    items += [
        ex(rule, "ყოველ 1 რიცხვზე შედეგი 3-ით იზრდება; 20", task="წესი არ იცვლება.", lines=3,
           table=pairs([["1", "5"], ["2", "8"], ["3", "11"], ["6", None]]),
           note="6 არის 3-ზე 3-ით მეტი, ამიტომ 11 + 3 × 3 = 20."),
        ex(rule, "ყოველ 1 რიცხვზე შედეგი 3-ით მცირდება; 5", task="წესი არ იცვლება.", lines=3,
           table=pairs([["2", "20"], ["3", "17"], ["4", "14"], ["7", None]]),
           note="4-დან 7-მდე სამი ნაბიჯია: 14 − 9 = 5."),
        ex(rule, "3 × რიცხვი + 1; 16", task="წესი არ იცვლება.", lines=3,
           table=pairs([["1", "4"], ["2", "7"], ["4", "13"], ["5", None]])),
        ex(f, "7", task="რიცხვი ჯერ მრავლდება 2-ზე, შემდეგ ემატება 3. შედეგი 17-ია.", lines=5),
        ex("შეავსე ცარიელი უჯრები.", "4; 23",
           task="როცა რიცხვი 1-ით იზრდება, შედეგი თანაბრად იცვლება.", lines=3,
           table=pairs([["2", "7"], ["3", "11"], [None, "15"], ["6", None]]),
           note="ნაბიჯი +4-ია. გამოტოვებული რიცხვია 4, ბოლო შედეგი 23."),
        ex(rule, "ჯამი 40-ია; 29", task="წესი არ იცვლება.", lines=3,
           table=pairs([["8", "32"], ["15", "25"], ["21", "19"], [None, "11"]]),
           note="8 + 32 = 15 + 25 = 21 + 19 = 40. 40 − 11 = 29."),
        ex("შეავსე ცარიელი უჯრები.", "24; 6",
           task="ჩანთა 4 ლარი ღირს და წიგნის ფასს ემატება. წიგნის ფასი არ იცვლება.", lines=3,
           table=(["წიგნი", "სულ ლარი"], [["1", "9"], ["2", "14"], ["4", None], [None, "34"]]),
           note="წიგნი 5 ლარია. 4 წიგნი: 24 ლარი. 34 ლარში 6 წიგნია."),
        ex("შეავსე ცარიელი უჯრები.", "7; 280",
           task="სიჩქარე არ იცვლება.", lines=3,
           table=(["საათი", "კილომეტრი"], [["2", "70"], ["4", "140"], [None, "245"], ["8", None]]),
           note="სიჩქარე 35 კმ/სთ. 245 : 35 = 7 საათი. 8 × 35 = 280 კმ."),
    ]
    items += [
        ex("იპოვე რიცხვი.", "32",
           task="3 რვეული და 2 ლარის კალამი ჯამში 14 ლარი ღირს. რვეულის ფასი არ იცვლება. 8 რვეული რამდენი ლარია?",
           lines=5),
        ex("იპოვე რიცხვი.", "21",
           task="სანთელი ყოველ წუთში 2 სანტიმეტრით მოკლდება. 6 წუთის შემდეგ 9 სანტიმეტრი დარჩა. თავიდან რამდენი სანტიმეტრი იყო?",
           lines=5),
        ex("იპოვე რიცხვი.", "5",
           task="ტემპერატურა ყოველ 200 მეტრ სიმაღლეზე 1 გრადუსით იკლებს. სიმაღლემ 1000 მეტრით მოიმატა. ტემპერატურა რამდენი გრადუსით დაიკლებს?",
           lines=4),
        ex("იპოვე რიცხვი.", "14",
           task="ავტობუსში 30 მგზავრი იყო. გაჩერებაზე რამდენიმე ჩამოვიდა და 6 ჩაჯდა. ავტობუსში 22 მგზავრი დარჩა. რამდენი ჩამოვიდა?",
           lines=5, note="30 − 14 + 6 = 22."),
        ex("იპოვე რიცხვი.", "44",
           task="დედა შვილზე 28 წლით უფროსია. ახლა ორივეს ასაკის ჯამი 52-ია და შვილი 12 წლისაა. 4 წლის შემდეგ დედა რამდენი წლის იქნება?",
           lines=5, note="დედა ახლა 40 წლისაა. 4 წლის შემდეგ 44."),
        ex("იპოვე რიცხვი.", "2",
           task="24 კანფეტი ჯერ 4 ბავშვზე გაიყო, შემდეგ იმავე 24 კანფეტი 6 ბავშვზე. მეორედ თითო ბავშვზე რამდენით ნაკლები ხვდება?",
           lines=5, note="6 − 4 = 2."),
    ]
    items += [
        ex("შეავსე ცარიელი უჯრები.", "11; 17",
           task="როცა x ერთით იზრდება, შედეგიც თანაბრად იცვლება.", lines=3,
           table=(["x", "შედეგი"], [["1", "5"], ["3", "9"], ["4", None], ["7", None]]),
           note="თითო ნაბიჯზე +2. წესი 2 × x + 3."),
        ex("შეავსე ცარიელი უჯრები.", "18; 9",
           task="როცა x ერთით იზრდება, შედეგიც თანაბრად იცვლება.", lines=3,
           table=(["x", "შედეგი"], [["1", "30"], ["2", "27"], ["5", None], ["8", None]]),
           note="თითო ნაბიჯზე −3."),
        ex(f, "3", task="რიცხვს დავუმატეთ 6, გავამრავლეთ 3-ზე და გამოვაკელით 4. მივიღეთ 23.", lines=5,
           note="(3 + 6) × 3 − 4 = 23."),
        ex("შეავსე ცარიელი უჯრები.", "7; 36",
           task="წესი არ იცვლება.", lines=3,
           table=(["გვერდი", "პერიმეტრი"], [["3", "12"], [None, "28"], ["9", None], ["6", "24"]]),
           note="პერიმეტრი = გვერდი × 4."),
        ex("შეავსე ცარიელი უჯრები.", "6; 17",
           task="წესი არ იცვლება.", lines=3,
           table=(["სიგანე", "სიგრძე"], [["2", "5"], ["4", "9"], [None, "13"], ["8", None]]),
           note="სიგრძე = სიგანე × 2 + 1."),
        ex("იპოვე არასწორი წყვილი და გაასწორე.", "6 და 14. სწორია 6 და 13.",
           task="წესი: მეორე რიცხვი პირველის ორმაგზე 1-ით მეტია.\n\n3 და 7\n5 და 11\n6 და 14\n8 და 17", lines=4),
        ex("შემოხაზე ის თანხა, რომლის გადახდაც არ შეიძლება.", "7 ლარი",
           task="ბავშვის ბილეთი 3 ლარია, უფროსის 5 ლარი. იყიდება ერთი ან რამდენიმე ბილეთი.\n\n8 ლარი      9 ლარი      7 ლარი      10 ლარი", lines=3,
           note="3-ისა და 5-ის ჯამით 7 ვერ შედგება."),
        ex("უპასუხე კითხვას.", "2",
           task="დარჩენილი გვერდი ყოველ წუთში თანაბრად იცვლება. რამდენი გვერდი დარჩება მე-10 წუთზე?",
           lines=4, box=True,
           table=(["წუთი", "დარჩენილი გვერდი"], [["2", "26"], ["4", "20"], ["6", "14"]]),
           note="ყოველ წუთში 3 გვერდით მცირდება. მე-10 წუთს 2 დარჩება."),
    ]
    return items


def easy_12():
    s = "ამოხსენი."
    items = [
        ex(s, "8", task="x + 9 = 17", center=True, lines=5),
        ex(s, "17", task="x − 6 = 11", center=True, lines=5),
        ex(s, "8", task="3 × x = 24", center=True, lines=5),
        ex(s, "28", task="x : 4 = 7", center=True, lines=5),
        ex(s, "28", task="40 − x = 12", center=True, lines=5),
        ex(s, "25", task="x + 15 = 40", center=True, lines=5),
        ex(s, "7", task="5 × x = 35", center=True, lines=5),
        ex(s, "30", task="x : 6 = 5", center=True, lines=5),
        ex(s, "23", task="x − 9 = 14", center=True, lines=5),
        ex(s, "8", task="48 : x = 6", center=True, lines=5),
        ex(s, "7", task="2 × x + 6 = 20", center=True, lines=5),
        ex(s, "15", task="x : 3 + 4 = 9", center=True, lines=5),
        ex(s, "7", task="5 × x − 10 = 25", center=True, lines=5),
        ex(s, "5", task="(x + 4) × 2 = 18", center=True, lines=5),
        ex(s, "14", task="x : 2 − 3 = 4", center=True, lines=5),
        ex(s, "5", task="3 × (x + 2) = 21", center=True, lines=5),
    ]
    w = "მხოლოდ ჩაწერე განტოლება."
    items += [
        ex(w, "x + 8 = 21", task="რიცხვს დაუმატეს 8 და მიიღეს 21.", lines=3),
        ex(w, "4 × x = 28", task="რიცხვი გაამრავლეს 4-ზე და მიიღეს 28.", lines=3,
           note="x × 4 = 28-ც სწორია."),
        ex(w, "x − 6 = 15", task="რიცხვს გამოაკლეს 6 და დარჩა 15.", lines=3),
        ex(w, "2 × x = 18", task="ორი ერთნაირი რიცხვის ჯამია 18.", lines=3,
           note="x + x = 18-ც სწორია."),
        ex(w, "x + (x + 5) = 23", task="პატარა რიცხვია x. დიდი 5-ით მეტია. ჯამი 23-ია.", lines=3,
           note="2 × x + 5 = 23-ც სწორია."),
        ex(w, "x − 7 = 13", task="იყო x ლარი. გადაიხადეს 7 ლარი და დარჩა 13.", lines=3),
    ]
    c = "დაწერე: კი ან არა."
    items += [
        ex(c, "კი", task="x = 6\nx + 8 = 14", center=True, lines=3),
        ex(c, "არა", task="x = 5\n3 × x − 2 = 11", center=True, lines=3),
        ex(c, "კი", task="x = 4\n2 × (x + 3) = 14", center=True, lines=3),
        ex(c, "არა", task="x = 9\nx : 3 + 1 = 5", center=True, lines=3),
    ]
    f = "იპოვე რიცხვი."
    items += [
        ex(f, "7", task="ნინომ წაიკითხა რამდენიმე გვერდი, გიორგიმ 6-ით მეტი. ერთად 20 გვერდი წაიკითხეს. ნინომ რამდენი წაიკითხა?", lines=5),
        ex(f, "5", task="4 ერთნაირი რვეული 20 ლარი ღირს. ერთი რვეული რამდენი ლარია?", lines=4),
        ex(f, "21", task="კალათიდან 8 ვაშლი ამოიღეს და დარჩა 13. თავიდან რამდენი ვაშლი იყო?", lines=4),
        ex(f, "30", task="რიცხვი გაყვეს 5-ზე და მიიღეს 6. რომელი რიცხვი იყო?", lines=4),
    ]
    return items


def hard_12():
    s = "ამოხსენი."
    items = [
        ex(s, "6", task="2 × (x + 6) − 4 = 20", center=True, lines=6),
        ex(s, "7", task="3 × (x − 2) + 5 = 20", center=True, lines=6),
        ex(s, "10", task="(x + 8) : 2 − 3 = 6", center=True, lines=6),
        ex(s, "5", task="4 × x + 3 × x − 5 = 30", center=True, lines=6),
        ex(s, "4", task="100 − (x + 6) × 4 = 60", center=True, lines=6),
        ex(s, "5", task="2 × (3 × x − 4) = 22", center=True, lines=6),
        ex(s, "7", task="(2 × x + 6) : 4 = 5", center=True, lines=6),
        ex(s, "4", task="5 × (x + 1) − 2 × x = 17", center=True, lines=6),
        ex(s, "15", task="(x : 3 + 4) × 2 = 18", center=True, lines=6),
        ex(s, "3", task="3 × (2 × x + 1) − 4 = 17", center=True, lines=6),
    ]
    f = "იპოვე რიცხვი."
    items += [
        ex(f, "20", task="ორი რიცხვის ჯამია 48. მეორე პირველზე 8-ით მეტია. პატარა რიცხვი რამდენია?", lines=5),
        ex(f, "14", task="დედა შვილზე 24 წლით უფროსია. ასაკების ჯამი 52-ია. შვილი რამდენი წლისაა?", lines=5),
        ex(f, "7", task="თოკი ორ ნაწილად გაჭრეს. გრძელი ნაწილი მოკლეზე 6 მეტრით მეტია. სულ 20 მეტრია. მოკლე ნაწილი რამდენი მეტრია?", lines=5),
        ex(f, "12", task="კლასში გოგო 8-ით ნაკლებია ვაჟზე. სულ 32 მოსწავლეა. გოგო რამდენია?", lines=5),
        ex(f, "6", task="დიდი რიცხვი პატარაზე 3-ჯერ მეტია. ჯამი 24-ია. პატარა რიცხვი რამდენია?", lines=5),
        ex(f, "12", task="ველოსიპედისტი 3 საათი მიდიოდა. ყოველ მომდევნო საათში 3 კილომეტრით მეტს გადიოდა. სულ 45 კილომეტრი გაიარა. პირველ საათში რამდენი კილომეტრი გაიარა?", lines=5),
        ex(f, "11", task="4 ერთნაირი წიგნი იყიდა. 50 ლარიდან 6 ლარი დარჩა. ერთი წიგნი რამდენი ლარია?", lines=5),
        ex(f, "8", task="რიცხვი გავაორმაგეთ, დავუმატეთ 6 და გავყავით 2-ზე. მივიღეთ 11. თავიდან რომელი რიცხვი იყო?", lines=5),
    ]
    b = "ფესვი მოცემულია. იპოვე □."
    items += [
        ex(b, "4", task="x = 6\n3 × (x + □) = 30", center=True, lines=5),
        ex(b, "4", task="x = 4\n2 × (x + □) − 3 = 13", center=True, lines=5),
        ex(b, "8", task="x = 5\n(2 × x + □) : 3 = 6", center=True, lines=5),
        ex(b, "10", task="x = 7\n4 × x − □ = 18", center=True, lines=5),
        ex(b, "2", task="x = 3\n5 × (x + □) − 4 = 21", center=True, lines=5),
        ex(b, "6", task="x = 8\n(x + □) : 2 + 3 = 10", center=True, lines=5),
    ]
    items += [
        ex(f, "7", task="მართკუთხედის ოთხი გვერდის ჯამია 36 სანტიმეტრი. სიგრძე სიგანეზე 4 სანტიმეტრით მეტია. სიგანე რამდენი სანტიმეტრია?", lines=5),
        ex(f, "15", task="36 კანფეტი გაიყო. ანამ ლაშაზე 6-ით მეტი აიღო. ლაშამ რამდენი კანფეტი აიღო?", lines=5),
        ex(f, "35", task="ავზიდან ჯერ 12 ლიტრი გამოუშვეს, მერე 5 ლიტრი დაუმატეს. დარჩა 28 ლიტრი. თავიდან რამდენი ლიტრი იყო?", lines=5),
        ex(f, "5", task="ერთი რიცხვი მეორეზე 3-ჯერ მეტია და კიდევ 2-ით დიდი. ჯამი 22-ია. პატარა რიცხვი რამდენია?", lines=5),
        ex(f, "5", task="5 ერთნაირი ბილეთი და 4 ლარის წვენი 29 ლარი ღირს. ერთი ბილეთი რამდენი ლარია?", lines=5),
        ex(f, "6", task="რიცხვს დაუმატეს 4, გაამრავლეს 3-ზე და გამოაკლეს 5. მიიღეს 25. თავიდან რომელი რიცხვი იყო?", lines=5),
    ]
    return items


def easy_13():
    calc = "გამოთვალე."
    items = [
        ex(calc, "4", task="2² =", center=True, lines=4),
        ex(calc, "9", task="3² =", center=True, lines=4),
        ex(calc, "25", task="5² =", center=True, lines=4),
        ex(calc, "100", task="10² =", center=True, lines=4),
        ex(calc, "8", task="2³ =", center=True, lines=4),
        ex(calc, "64", task="4³ =", center=True, lines=4),
        ex(calc, "125", task="5³ =", center=True, lines=4),
        ex(calc, "1000", task="10³ =", center=True, lines=4),
    ]
    power = "ჩაწერე ხარისხით."
    items += [
        ex(power, "6²", task="6 × 6", center=True, lines=3),
        ex(power, "4³", task="4 × 4 × 4", center=True, lines=3),
        ex(power, "2⁴", task="2 × 2 × 2 × 2", center=True, lines=3),
        ex(power, "10⁴", task="10 × 10 × 10 × 10", center=True, lines=3),
        ex(power, "7⁵", task="7 × 7 × 7 × 7 × 7", center=True, lines=3),
        ex(power, "3²", task="3 × 3", center=True, lines=3),
    ]
    ten = "ჩაწერე 10-ის ხარისხით."
    items += [
        ex(ten, "10²", task="100", center=True, lines=3),
        ex(ten, "10³", task="1 000", center=True, lines=3),
        ex(ten, "10⁴", task="10 000", center=True, lines=3),
        ex(ten, "10⁵", task="100 000", center=True, lines=3),
        ex(ten, "10⁶", task="მილიონი", center=True, lines=3),
        ex(ten, "10⁹", task="მილიარდი", center=True, lines=3),
    ]
    expand = "გაშალე 10-ის ხარისხებით."
    items += [
        ex(expand, "3×10³ + 5×10² + 4×10 + 8", task="3 548", center=True, lines=4),
        ex(expand, "8×10³ + 4×10² + 5×10 + 3", task="8 453", center=True, lines=4),
        ex(expand, "2×10² + 6", task="206", center=True, lines=4),
        ex(expand, "7×10³ + 3×10²", task="7 300", center=True, lines=4),
    ]
    arabic = "ჩაწერე ათობითი რიცხვით."
    items += [
        ex(arabic, "12", task="XII", center=True, lines=3),
        ex(arabic, "4", task="IV", center=True, lines=3),
        ex(arabic, "26", task="XXVI", center=True, lines=3),
        ex(arabic, "9", task="IX", center=True, lines=3),
    ]
    roman = "ჩაწერე რომაული ციფრებით."
    items += [
        ex(roman, "XV", task="15", center=True, lines=3),
        ex(roman, "XXIV", task="24", center=True, lines=3),
    ]
    return items


def hard_13():
    blank = "იპოვე □."
    items = [
        ex(blank, "7", task="□² = 49", center=True, lines=4),
        ex(blank, "2", task="□³ = 8", center=True, lines=4),
        ex("იპოვე მაჩვენებელი.", "5", task="2-ის რომელი ხარისხია 32?", center=True, lines=4),
        ex("იპოვე მაჩვენებელი.", "5", task="10-ის რომელი ხარისხია 100 000?", center=True, lines=4),
        ex(blank, "2", task="□⁴ = 16", center=True, lines=4),
        ex("იპოვე მაჩვენებელი.", "4", task="5-ის რომელი ხარისხია 625?", center=True, lines=4),
        ex(blank, "12", task="□² = 144", center=True, lines=4),
        ex("იპოვე მაჩვენებელი.", "4", task="3-ის რომელი ხარისხია 81?", center=True, lines=4),
        ex(blank, "9", task="2² × □ = 36", center=True, lines=4),
        ex(blank, "45", task="□ × 10² = 4 500", center=True, lines=4),
        ex(blank, "2", task="3² × □³ = 72", center=True, lines=5),
        ex(blank, "3", task="□² × 10 = 90", center=True, lines=4),
        ex("იპოვე მაჩვენებელი.", "3", task="10-ის რომელ ხარისხს უნდა დაემატოს 4×10², რომ მივიღოთ 1 400?", center=True, lines=5),
        ex("იპოვე მაჩვენებელი.", "4", task="2-ის რომელ ხარისხს უნდა დაემატოს 3², რომ მივიღოთ 25?", center=True, lines=5),
    ]
    calc = "გამოთვალე."
    items += [
        ex(calc, "72", task="2³ × 3² =", center=True, lines=5),
        ex(calc, "128", task="4² × 2³ =", center=True, lines=5),
        ex(calc, "100", task="5² × 2² =", center=True, lines=5),
        ex(calc, "900", task="10² × 3² =", center=True, lines=5),
    ]
    number = "ჩაწერე რიცხვი."
    items += [
        ex(number, "4205", task="4×10³ + 2×10² + 5", center=True, lines=4),
        ex(number, "6083", task="6×10³ + 8×10 + 3", center=True, lines=4),
        ex(number, "90401", task="9×10⁴ + 4×10² + 1", center=True, lines=4),
        ex(number, "7160", task="7×10³ + 10² + 6×10", center=True, lines=4),
        ex(number, "2003000", task="2×10⁶ + 3×10³", center=True, lines=4),
        ex(number, "8005", task="8×10³ + 5", center=True, lines=4),
    ]
    arabic = "ჩაწერე ათობითი რიცხვით."
    items += [
        ex(arabic, "24", task="XXIV", center=True, lines=3),
        ex(arabic, "19", task="XIX", center=True, lines=3),
        ex(arabic, "14", task="XIV", center=True, lines=3),
        ex(arabic, "40", task="XL", center=True, lines=3),
        ex(arabic, "5000", task="V ზედა ხაზით", center=True, lines=3),
    ]
    bigger = "ჩაწერე ის, რომელიც მეტია."
    items += [
        ex(bigger, "2⁵", task="2⁵ თუ 5²", center=True, lines=4),
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
        pack("10", "easy", "პირველი", "რიცხვითი და ასოითი გამოსახულება", "მათ.V.6",
             "გამოთვლა, გამოსახულების ჩაწერა, გამარტივება და მნიშვნელობა.", easy_10()),
        pack("10", "hard", "მეორე", "რიცხვითი და ასოითი გამოსახულება", "მათ.V.6",
             "შედეგი მოცემულია. უკან ორი ან სამი ნაბიჯით უნდა დაბრუნდე.", hard_10()),
        pack("11", "easy", "პირველი", "ორ სიდიდეს შორის დამოკიდებულება", "მათ.V.5",
             "ცხრილი, ასოითი ჩანაწერი და სიტყვა: რა იზრდება, რა მცირდება.", easy_11()),
        pack("11", "hard", "მეორე", "ორ სიდიდეს შორის დამოკიდებულება", "მათ.V.5",
             "წესი ან საწყისი რიცხვი შედეგიდან უნდა აღადგინო, ხშირად ორი ნაბიჯით.", hard_11()),
        pack("12", "easy", "პირველი", "ამოცანა განტოლების შედგენით", "მათ.V.6",
             "მარტივი განტოლების ამოხსნა, შედგენა და ფესვის შემოწმება.", easy_12()),
        pack("12", "hard", "მეორე", "ამოცანა განტოლების შედგენით", "მათ.V.6",
             "განტოლება ან ამოცანა ორ-სამ ნაბიჯიანია. უცნობი ერთ მხარესაა.", hard_12()),
        pack("13", "easy", "პირველი", "ხარისხი და რიცხვების ჩაწერა", "მათ.V.1",
             "ხარისხის გამოთვლა, 10-ის ხარისხი, გაშლა და რომაული ციფრი.", easy_13()),
        pack("13", "hard", "მეორე", "ხარისხი და რიცხვების ჩაწერა", "მათ.V.1",
             "ფუძე, მაჩვენებელი ან რიცხვი შედეგიდან უნდა აღადგინო. ხშირად ორი ნაბიჯია.", hard_13()),
    ]
    checks = {
        ("10", "easy"): ["16", "24", "14", "42", "5", "8"],
        ("10", "hard"): ["10", "8", "42", "9", "5", "20", "8", "5", "11", "12", "5", "50", "7", "13"],
    }
    by_id = {s["id"]: s for s in sets}
    for (para, level), answers in checks.items():
        items = by_id[f"{para}-{level}"]["items"]
        for i, answer in enumerate(answers):
            if items[i]["answer"] != answer:
                raise SystemExit(f"check failed {para} {level} #{i+1}")
    # Spot-check a few reverse results that are easy to recompute.
    assert by_id["10-hard"]["items"][20]["answer"] == "5"
    assert by_id["10-hard"]["items"][21]["answer"] == "20"
    assert by_id["10-hard"]["items"][24]["answer"] == "95"
    assert by_id["10-hard"]["items"][25]["answer"] == "16"
    assert by_id["11-easy"]["items"][14]["answer"] == "1; 4; 7; 10"
    assert by_id["11-easy"]["items"][15]["answer"] == "18; 16; 14; 10"
    assert by_id["11-hard"]["items"][0]["answer"] == "6"
    assert by_id["11-hard"]["items"][24]["answer"] == "3"
    assert by_id["11-hard"]["items"][29]["answer"] == "2"
    easy12 = [
        "8", "17", "8", "28", "28", "25", "7", "30", "23", "8",
        "7", "15", "7", "5", "14", "5",
        "x + 8 = 21", "4 × x = 28", "x − 6 = 15", "2 × x = 18",
        "x + (x + 5) = 23", "x − 7 = 13",
        "კი", "არა", "კი", "არა",
        "7", "5", "21", "30",
    ]
    hard12_fns = [
        lambda x: 2 * (x + 6) - 4 == 20,
        lambda x: 3 * (x - 2) + 5 == 20,
        lambda x: (x + 8) / 2 - 3 == 6,
        lambda x: 4 * x + 3 * x - 5 == 30,
        lambda x: 100 - (x + 6) * 4 == 60,
        lambda x: 2 * (3 * x - 4) == 22,
        lambda x: (2 * x + 6) / 4 == 5,
        lambda x: 5 * (x + 1) - 2 * x == 17,
        lambda x: (x / 3 + 4) * 2 == 18,
        lambda x: 3 * (2 * x + 1) - 4 == 17,
        lambda x: x + (x + 8) == 48,
        lambda x: x + (x + 24) == 52,
        lambda x: x + (x + 6) == 20,
        lambda x: x + (x + 8) == 32,
        lambda x: x + 3 * x == 24,
        lambda x: x + (x + 3) + (x + 6) == 45,
        lambda x: 4 * x + 6 == 50,
        lambda x: (2 * x + 6) / 2 == 11,
        lambda blank: 3 * (6 + blank) == 30,
        lambda blank: 2 * (4 + blank) - 3 == 13,
        lambda blank: (2 * 5 + blank) / 3 == 6,
        lambda blank: 4 * 7 - blank == 18,
        lambda blank: 5 * (3 + blank) - 4 == 21,
        lambda blank: (8 + blank) / 2 + 3 == 10,
        lambda x: 2 * (x + (x + 4)) == 36,
        lambda x: x + (x + 6) == 36,
        lambda x: x - 12 + 5 == 28,
        lambda x: x + (3 * x + 2) == 22,
        lambda x: 5 * x + 4 == 29,
        lambda x: 3 * (x + 4) - 5 == 25,
    ]
    for i, answer in enumerate(easy12):
        if by_id["12-easy"]["items"][i]["answer"] != answer:
            raise SystemExit(f"12 easy #{i+1}")
    for i, check in enumerate(hard12_fns):
        got = int(by_id["12-hard"]["items"][i]["answer"])
        if not check(got):
            raise SystemExit(f"12 hard #{i+1} answer {got}")
        near = [n for n in (got - 2, got - 1, got + 1, got + 2) if n > 0 and n != got]
        if any(check(n) for n in near):
            raise SystemExit(f"12 hard #{i+1} is not unique near {got}")
    easy13 = [
        "4", "9", "25", "100", "8", "64", "125", "1000",
        "6²", "4³", "2⁴", "10⁴", "7⁵", "3²",
        "10²", "10³", "10⁴", "10⁵", "10⁶", "10⁹",
        "3×10³ + 5×10² + 4×10 + 8", "8×10³ + 4×10² + 5×10 + 3",
        "2×10² + 6", "7×10³ + 3×10²",
        "12", "4", "26", "9", "XV", "XXIV",
    ]
    hard13_fns = [
        lambda n: n * n == 49,
        lambda n: n ** 3 == 8,
        lambda n: 2 ** n == 32,
        lambda n: 10 ** n == 100000,
        lambda n: n ** 4 == 16,
        lambda n: 5 ** n == 625,
        lambda n: n * n == 144,
        lambda n: 3 ** n == 81,
        lambda n: 4 * n == 36,
        lambda n: n * 100 == 4500,
        lambda n: 9 * (n ** 3) == 72,
        lambda n: n * n * 10 == 90,
        lambda n: 10 ** n + 400 == 1400,
        lambda n: 2 ** n + 9 == 25,
        lambda n: n == 72,
        lambda n: n == 128,
        lambda n: n == 100,
        lambda n: n == 900,
        lambda n: n == 4205,
        lambda n: n == 6083,
        lambda n: n == 90401,
        lambda n: n == 7160,
        lambda n: n == 2003000,
        lambda n: n == 8005,
        lambda n: n == 24,
        lambda n: n == 19,
        lambda n: n == 14,
        lambda n: n == 40,
        lambda n: n == 5000,
    ]
    for i, answer in enumerate(easy13):
        if by_id["13-easy"]["items"][i]["answer"] != answer:
            raise SystemExit(f"13 easy #{i+1}")
    for i, check in enumerate(hard13_fns):
        got = int(by_id["13-hard"]["items"][i]["answer"])
        if not check(got):
            raise SystemExit(f"13 hard #{i+1} answer {got}")
        near = [n for n in (got - 2, got - 1, got + 1, got + 2) if n > 0 and n != got]
        if any(check(n) for n in near):
            raise SystemExit(f"13 hard #{i+1} is not unique near {got}")
    if by_id["13-hard"]["items"][29]["answer"] != "2⁵":
        raise SystemExit("13 hard #30")
    for group in sets:
        for item in group["items"]:
            item.pop("answer", None)
            item.pop("note", None)
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
