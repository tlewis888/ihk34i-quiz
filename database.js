// database.js
const database = [
    // ============================================================
    // KAPITEL 1: VOLKSWIRTSCHAFTLICHE GRUNDLAGEN (Fragen 1-25)
    // ============================================================
    {
        cat: "1. VWL",
        q: "Frage 1 (MC): Welche der Grundfragen wirtschaftlichen Handelns eines EU-Landes sind korrekt wiedergegeben?",
        a: [
            { t: "Verteilung der Güter und des Erfolges der Produktion", c: true },
            { t: "Entscheidung über die Nachfrage aus dem Ausland", c: false },
            { t: "Abstimmung von Angebot und Nachfrage", c: true },
            { t: "Festlegung der Gehaltsstrukturen aller am Prozess beteiligten", c: false }
        ],
        e: "Grundfragen: Was, Wie und für Wen (Verteilung)."
    },
    {
        cat: "1. VWL",
        q: "Frage 2 (SC): Welches Wirtschaftssystem hat den größten Staatseinfluss?",
        a: [
            { t: "Sozialistische Marktwirtschaft", c: true },
            { t: "Soziale Marktwirtschaft", c: false },
            { t: "Reine Marktwirtschaft", c: false },
            { t: "Solo Marktwirtschaft", c: false }
        ],
        e: "Auch Zentralverwaltungswirtschaft genannt."
    },
    {
        cat: "1. VWL",
        q: "Frage 3 (SC): Mit welchem Satz ist die soziale Marktwirtschaft am besten beschreiben?",
        a: [
            { t: "Die Freiheit des Marktes mit einem Grundsatz des sozialen Ausgleichs.", c: true },
            { t: "Das Koordinationsprinzip der dezentralen Planung.", c: false },
            { t: "Der Staat bestimmt alles.", c: false },
            { t: "Die Freiheit des Individuums als höchstes Gut.", c: false }
        ],
        e: "Verbindung von Freiheit und sozialer Sicherheit."
    },
    {
        cat: "1. VWL",
        q: "Frage 4 (MC): Welche Funktionen im Wettbewerb übernimmt der Staat in der sozialen Marktwirtschaft?",
        a: [
            { t: "Verteilungsfunktion", c: true },
            { t: "Innovationsfunktion", c: true },
            { t: "Reibungsfunktion", c: false },
            { t: "Vorbildfunktion", c: false }
        ],
        e: "Staat korrigiert Verteilung und fördert Innovation."
    },
    {
        cat: "1. VWL",
        q: "Frage 5 (SC): Welches Hauptziel verfolgt die EZB mit den geld- und finanzpolitischen Maßnahmen?",
        a: [
            { t: "Preisniveaustabilität", c: true },
            { t: "Statistik", c: false },
            { t: "Zahlungssystem", c: false },
            { t: "Geldpolitik", c: false }
        ],
        e: "Inflation nahe unter 2% halten."
    },
    {
        cat: "1. VWL",
        q: "Frage 6 (MC): Das Stabilitätsgesetz definiert das 'magische Viereck'. Welche Ziele gehören dazu?",
        a: [
            { t: "Preisniveaustabilität", c: true },
            { t: "Außenwirtschaftliches Gleichgewicht", c: true },
            { t: "Angemessenes Wirtschaftswachstum alle fünf Jahre", c: false },
            { t: "Gerechte Einkommensverteilung", c: false }
        ],
        e: "Ziele: Preisstabilität, Wachstum, Beschäftigung, Außenwirtschaft."
    },
    {
        cat: "1. VWL",
        q: "Frage 7 (MC): Wodurch wird das 'magische Viereck' zum Sechseck erweitert?",
        a: [
            { t: "Umwelt", c: true },
            { t: "Gerechte Einkommensverteilung", c: true },
            { t: "Vollbeschäftigung", c: false },
            { t: "Stetiges Wachstum", c: false }
        ],
        e: "Qualitative Zusatzziele."
    },
    {
        cat: "1. VWL",
        q: "Frage 8 (SC): Welche Handlungsweise des ökonomischen Prinzips wird hier beschreiben: '...vorgegebenes Ziel mit möglichst geringem Mitteleinsatz erreichen'?",
        a: [
            { t: "Minimalprinzip", c: true },
            { t: "Maximalprinzip", c: false },
            { t: "Optimumprinzip", c: false },
            { t: "Erfolgsprinzip", c: false }
        ],
        e: "Ziel ist fix (Minimum an Aufwand)."
    },
    {
        cat: "1. VWL",
        q: "Frage 9 (MC): Welche der u. g. Faktoren werden zum Produktionsfaktor Boden gezählt?",
        a: [
            { t: "Rohstoffe", c: true },
            { t: "Anbaufläche/Standort", c: true },
            { t: "Geld", c: false },
            { t: "Maschinen", c: false }
        ],
        e: "Anbaufläche, Standort, Rohstoffe."
    },
    {
        cat: "1. VWL",
        q: "Frage 10 (SC): Wann entsteht ein Marktgleichgewicht?",
        a: [
            { t: "Angebot und Nachfrage stimmen in Menge, Art, Preis überein", c: true },
            { t: "Mehr Angebot als Nachfrage", c: false },
            { t: "Weniger Angebot als Nachfrage", c: false },
            { t: "Kein Angebot vorhanden", c: false }
        ],
        e: "Schnittpunkt der Kurven."
    },
    {
        cat: "1. VWL",
        q: "Frage 11 (SC): Welche Funktionen erfüllt ein Markt?",
        a: [
            { t: "Versorgungs-, Preisbildungs-, Koordinationsfunktion", c: true },
            { t: "Sozialfunktion", c: false },
            { t: "Verteilungsfunktion", c: false },
            { t: "Planungsfunktion", c: false }
        ],
        e: "Marktmechanismen."
    },
    {
        cat: "1. VWL",
        q: "Frage 12 (SC): Geld existiert in unserer Wirtschaft als Giral- oder Bargeld. Zur Bestimmung der Geldmenge wird welcher Faktor herangezogen?",
        a: [
            { t: "Bargeld und Buchgeld (Giralgeld)", c: true },
            { t: "Umlaufgeschwindigkeit des Geldes", c: false },
            { t: "Ausschließlich Banknoten", c: false },
            { t: "Ausschließlich alle Einlagen", c: false }
        ],
        e: "Geldmenge umfasst Bar- und Buchgeld."
    },
    {
        cat: "1. VWL",
        q: "Frage 13 (SC): Der Verbraucherpreisindex wird von welchem Amt ermittelt?",
        a: [
            { t: "Statistisches Bundesamt", c: true },
            { t: "Bundesbank", c: false },
            { t: "Finanzministerium", c: false },
            { t: "Deutsche Bank", c: false }
        ],
        e: "Warenkorb-Messung."
    },
    {
        cat: "1. VWL",
        q: "Frage 14 (SC): Was ist der HVPI?",
        a: [
            { t: "Harmonisierter Verbraucherpreisindex", c: true },
            { t: "Hoher Verbraucherpreisindex", c: false },
            { t: "Horizontaler Preisindex", c: false },
            { t: "Hundertjähriger Preisindex", c: false }
        ],
        e: "Für den EU-Vergleich."
    },
    {
        cat: "1. VWL",
        q: "Frage 15 (SC): Was ist Deflation?",
        a: [
            { t: "Gütermenge > Geldmenge (Preise sinken)", c: true },
            { t: "Geldmenge > Gütermenge", c: false },
            { t: "Preise steigen", c: false },
            { t: "Weltweite Geldmenge zu hoch", c: false }
        ],
        e: "Geldmangel führt zu Preisverfall."
    },
    {
        cat: "1. VWL",
        q: "Frage 16 (MC): In einer Aufschwungphase...",
        a: [
            { t: "sinkt die Arbeitslosigkeit", c: true },
            { t: "steigen die Zinsen", c: true },
            { t: "sinkt die Produktion", c: false },
            { t: "sinken die Preise stark", c: false }
        ],
        e: "Expansion: Wirtschaft wächst."
    },
    {
        cat: "1. VWL",
        q: "Frage 17 (MC): In einer Abschwungphase (Rezession) verhalten sich Faktoren wie folgt:",
        a: [
            { t: "Die Produktion sinkt", c: true },
            { t: "Die Einkommen sinken", c: true },
            { t: "Die Zinsen steigen stark", c: false },
            { t: "Arbeitslosigkeit sinkt", c: false }
        ],
        e: "Rückgang der Wirtschaft."
    },
    {
        cat: "1. VWL",
        q: "Frage 18 (SC): Der Staat versucht in einer Abschwungphase entgegenzuwirken (Antizyklisch). Was tut er?",
        a: [
            { t: "Kreditaufnahme für Investitionen erleichtern (Ausgaben erhöhen)", c: true },
            { t: "Erhöhung von Steuern", c: false },
            { t: "Senkung der Ausgaben", c: false },
            { t: "Senkung der Mindestreserve", c: false }
        ],
        e: "Nachfrage stärken."
    },
    {
        cat: "1. VWL",
        q: "Frage 19 (MC): Der Staat versucht in einer Aufschwungphase (Boom) entgegenzuwirken. Was tut er?",
        a: [
            { t: "Senkung der Staatsausgaben", c: true },
            { t: "Steuererhöhung", c: true },
            { t: "Erhöhung der Ausgaben", c: false },
            { t: "Kreditaufnahme erleichtern", c: false }
        ],
        e: "Konjunktur dämpfen."
    },
    {
        cat: "1. VWL",
        q: "Frage 20 (MC): Die Zentralbank versucht durch geldpolitische Maßnahmen in einer Aufschwungphase dem entgegenzuwirken (Restriktiv). Was tut sie?",
        a: [
            { t: "Erhöhung der Leitzinsen", c: true },
            { t: "Erhöhung der Mindestreservesätze", c: true },
            { t: "Senkung der Leitzinsen", c: false },
            { t: "Kauf von Devisen", c: false }
        ],
        e: "Geld verteuern."
    },
    {
        cat: "1. VWL",
        q: "Frage 21 (MC): Die Zentralbank versucht durch geldpolitische Maßnahmen in einer Abschwungphase dem entgegenzuwirken (Expansiv). Was tut sie?",
        a: [
            { t: "Senkung der Leitzinsen", c: true },
            { t: "Senkung der Mindestreservesätze", c: true },
            { t: "Erhöhung der Leitzinsen", c: false },
            { t: "Verkauf von Devisen", c: false }
        ],
        e: "Geld billiger machen."
    },
    {
        cat: "1. VWL",
        q: "Frage 22 (SC): Wie heißen die beiden Säulen der EZB-Strategie?",
        a: [
            { t: "Wirtschaftliche und monetäre Analyse", c: true },
            { t: "Global- und Mikroanalyse", c: false },
            { t: "Zins- und Währungsanalyse", c: false },
            { t: "Konsum- und Investitionsanalyse", c: false }
        ],
        e: "Zwei-Säulen-Prinzip."
    },
    {
        cat: "1. VWL",
        q: "Frage 23 (MC): Die EZB hat verschiedene geldpolitische Instrumente. Welche gehören dazu?",
        a: [
            { t: "Offenmarktgeschäfte", c: true },
            { t: "Ständige Fazilitäten", c: true },
            { t: "Mindestreserve", c: true },
            { t: "Steuererhöhung", c: false }
        ],
        e: "Instrumentarium der EZB."
    },
    {
        cat: "1. VWL",
        q: "Frage 24 (MC): Das Ziel einer expansiven Geldpolitik ist es...",
        a: [
            { t: "die Investitionen der Unternehmen zu steigern", c: true },
            { t: "den Konsum der privaten Haushalte zu steigern", c: true },
            { t: "den Konsum zu verringern", c: false },
            { t: "die Zinsen zu erhöhen", c: false }
        ],
        e: "Wirtschaft ankurbeln."
    },
    {
        cat: "1. VWL",
        q: "Frage 25 (MC): Das Ziel einer restriktiven Geldpolitik ist es...",
        a: [
            { t: "den Konsum der privaten Haushalte zu verringern", c: true },
            { t: "die Investitionen der Unternehmen zu verringern", c: true },
            { t: "die Wirtschaft zu fördern", c: false },
            { t: "die Zinsen zu senken", c: false }
        ],
        e: "Geldmenge verknappen."
    },

    // ============================================================
    // KAPITEL 2: GRUNDLAGEN DES IMMOBILIENRECHTS (Fragen 1-50)
    // ============================================================
    {
        cat: "2. Recht",
        q: "Frage 1 (MC): Die Festlegung der Rechtsnormen für die einzelnen Bereiche haben welche Aufgaben?",
        a: [
            { t: "das Zusammenleben ermöglichen", c: true },
            { t: "die Schwachen schützen", c: true },
            { t: "den Staat schützen", c: false },
            { t: "Vertrauen schaffen", c: false }
        ],
        e: "Ordnungsfunktion des Rechts."
    },
    {
        cat: "2. Recht",
        q: "Frage 2 (SC): Wann beginnt die Rechtsfähigkeit einer natürlichen Person?",
        a: [
            { t: "mit Vollendung der Geburt", c: true },
            { t: "mit Vollendung des 18. Lebensjahres", c: false },
            { t: "mit Eintragung ins Register", c: false },
            { t: "mit notarieller Beurkundung", c: false }
        ],
        e: "§ 1 BGB."
    },
    {
        cat: "2. Recht",
        q: "Frage 3 (MC): Welche Aussagen zur Rechts- und Geschäftsfähigkeit sind korrekt?",
        a: [
            { t: "Rechtsfähigkeit ist die Fähigkeit, Träger von Rechten und Pflichten zu sein", c: true },
            { t: "Geschäftsfähigkeit ist die Fähigkeit, rechtsverbindlich Willenserklärungen abzugeben", c: true },
            { t: "Rechtsfähigkeit ist die Fähigkeit, vor Gericht zu klagen", c: false },
            { t: "Geschäftsfähigkeit ist die Fähigkeit ohne Formzwang abzuschließen", c: false }
        ],
        e: "Rechtsfähig = Passiv, Geschäftsfähig = Aktiv."
    },
    {
        cat: "2. Recht",
        q: "Frage 4 (SC): Wer besitzt die volle Geschäftsfähigkeit?",
        a: [
            { t: "Iris Bender, 21 Jahre, Soldatin", c: true },
            { t: "Julia Bender, 14 Jahre", c: false },
            { t: "Klaus Bender, 16 Jahre, Azubi", c: false },
            { t: "Nils Bender, 6 Jahre", c: false }
        ],
        e: "Volljährigkeit ab 18 Jahren."
    },
    {
        cat: "2. Recht",
        q: "Frage 5 (SC): Welche Aussage beschreibt den Begriff Besitz korrekt?",
        a: [
            { t: "Besitz ist die tatsächliche Herrschaft über eine Sache", c: true },
            { t: "Besitz ist die vermutete Herrschaft", c: false },
            { t: "Besitz ist die vorgetäuschte Herrschaft", c: false },
            { t: "Besitz ist die mittelbare Herrschaft", c: false }
        ],
        e: "Besitz = Tatsächlich (z.B. Mieter)."
    },
    {
        cat: "2. Recht",
        q: "Frage 6 (SC): Welche Definition beschreibt das Eigentum korrekt?",
        a: [
            { t: "Eigentum ist die rechtliche Herrschaft über Sachen und Rechte", c: true },
            { t: "Eigentum ist die tatsächliche Herrschaft", c: false },
            { t: "Eigentum ist immer mit dem Besitz verbunden", c: false },
            { t: "Eigentum ist die unmittelbare Herrschaft", c: false }
        ],
        e: "Eigentum = Rechtlich (z.B. Vermieter)."
    },
    {
        cat: "2. Recht",
        q: "Frage 7 (SC): Wie kann man eine Willenserklärung abgeben?",
        a: [
            { t: "auch durch konkludentes (schlüssiges) Handeln", c: true },
            { t: "Ausschließlich mündlich", c: false },
            { t: "Immer nur schriftlich", c: false },
            { t: "Niemals am Telefon", c: false }
        ],
        e: "Jedes Verhalten, das einen Rechtsbindungswillen zeigt."
    },
    {
        cat: "2. Recht",
        q: "Frage 8 (MC): Rechtsgeschäfte können ein- oder mehrseitig sein. Welche Aussagen sind korrekt?",
        a: [
            { t: "Mehrseitige Rechtsgeschäfte haben mind. zwei Willenserklärungen", c: true },
            { t: "Bei einseitigen Rechtsgeschäften ist nur eine Willenserklärung erforderlich", c: true },
            { t: "Einseitige Rechtsgeschäfte sind immer schriftlich fixiert", c: false },
            { t: "Mehrseitige Rechtsgeschäfte haben mind. zwei Seiten Papier", c: false }
        ],
        e: "Verträge sind mehrseitig, Kündigung einseitig."
    },
    {
        cat: "2. Recht",
        q: "Frage 9 (MC): Welche der u.g. Rechtsgeschäfte gehören zu den einseitigen Rechtsgeschäften?",
        a: [
            { t: "Testament", c: true },
            { t: "Mahnung", c: true },
            { t: "Kündigung", c: true },
            { t: "Mietvertrag", c: false }
        ],
        e: "Eine Person entscheidet."
    },
    {
        cat: "2. Recht",
        q: "Frage 10 (MC): Welche der u.g. Rechtsgeschäfte gehören zu den mehrseitigen Rechtsgeschäften?",
        a: [
            { t: "Mietvertrag", c: true },
            { t: "Ehevertrag", c: true },
            { t: "Testament", c: false },
            { t: "Kündigung", c: false }
        ],
        e: "Einigung erforderlich."
    },
    {
        cat: "2. Recht",
        q: "Frage 11 (SC): Was passiert, wenn der Verbraucher nicht innerhalb der Annahmefrist den Vertrag annimmt?",
        a: [
            { t: "Der Antrag erlischt", c: true },
            { t: "Der Vertrag kommt dennoch zustande", c: false },
            { t: "Der Antrag gilt als angenommen", c: false },
            { t: "Der Vertrag erlischt", c: false }
        ],
        e: "§ 146 BGB."
    },
    {
        cat: "2. Recht",
        q: "Frage 12 (SC): In welcher Form kann ein Kaufvertrag rechtswirksam über eine Eigentumswohnung abgeschlossen werden?",
        a: [
            { t: "Notarielle Beurkundung", c: true },
            { t: "Schriftform", c: false },
            { t: "Fernmündlich", c: false },
            { t: "Konkludentes Handeln", c: false }
        ],
        e: "Formzwang § 311b BGB."
    },
    {
        cat: "2. Recht",
        q: "Frage 13 (SC): Welche Aussage zum Formzwang § 311b BGB ist korrekt?",
        a: [
            { t: "Notarielle Beurkundung", c: true },
            { t: "Notarielle Beglaubigung", c: false },
            { t: "Notarielle Bekanntmachung", c: false },
            { t: "Schriftlich, eigenhändig", c: false }
        ],
        e: "Strengste Formvorschrift."
    },
    {
        cat: "2. Recht",
        q: "Frage 14 (MC): Welche Funktionen übernimmt der gesetzliche Formzwang?",
        a: [
            { t: "Beratungsfunktion", c: true },
            { t: "Warnfunktion", c: true },
            { t: "Beweisfunktion", c: true },
            { t: "Kollisionsfunktion", c: false }
        ],
        e: "Schutz vor Übereilung."
    },
    {
        cat: "2. Recht",
        q: "Frage 15 (MC): Welche Aussagen zur Beurkundung eines Immobilienkaufvertrages sind korrekt?",
        a: [
            { t: "Der Notar liest zwingend den Anwesenden den Kaufvertrag vor", c: true },
            { t: "Der Notar muss eine extra Prüfung für den Abschluss vornehmen", c: false },
            { t: "Der Notar hat den Vertrag abgefasst", c: false },
            { t: "Die Parteien müssen eigenhändig unterschreiben", c: true }
        ],
        e: "Verlesungspflicht."
    },
    {
        cat: "2. Recht",
        q: "Frage 16 (SC): Welche Funktionen übernimmt die Auflassungsvormerkung?",
        a: [
            { t: "Schutzfunktion für den Erwerber", c: true },
            { t: "Schutzfunktion für den Veräußerer", c: false },
            { t: "Schutzfunktion für den Notar", c: false },
            { t: "Schutzfunktion für das Grundbuchamt", c: false }
        ],
        e: "Sichert den Anspruch auf Eigentum."
    },
    {
        cat: "2. Recht",
        q: "Frage 17 (SC): Welche Sachverhalte müssen vor dem eigentlichen Eigentumsübergang positiv festgestellt werden?",
        a: [
            { t: "Unbedenklichkeitsbescheinigung des Finanzamts", c: true },
            { t: "Unbedenklichkeitsbescheinigung des Gewerbeaufsichtsamts", c: false },
            { t: "Unbedenklichkeitsbescheinigung der Bank", c: false },
            { t: "Unbedenklichkeitsbescheinigung der Gemeinde", c: false }
        ],
        e: "Zahlung der Grunderwerbsteuer."
    },
    {
        cat: "2. Recht",
        q: "Frage 18 (SC): Welcher Sachverhalt muss vor dem eigentlichen Eigentumsübergang positiv festgestellt werden?",
        a: [
            { t: "Verzichtserklärung von Vorkaufsberechtigten", c: true },
            { t: "Verzichtserklärung der Bank", c: false },
            { t: "Verzichtserklärung der Erben", c: false },
            { t: "Verzichtserklärung des Verkäufers", c: false }
        ],
        e: "Vorkaufsrecht der Gemeinde."
    },
    {
        cat: "2. Recht",
        q: "Frage 19 (MC): Wie kann die Sicherung des Kaufpreises gewährleistet werden?",
        a: [
            { t: "Notaranderkonto", c: true },
            { t: "Bankbürgschaft", c: true },
            { t: "Bürgschaft des Käufers", c: false },
            { t: "Treuhandzahlung an Verkäuferbank", c: false }
        ],
        e: "Sicherstellung der Leistung."
    },
    {
        cat: "2. Recht",
        q: "Frage 20 (SC - Zuordnung): Sortieren Sie folgende Schritte eines Immobilienkaufvertrages richtig!",
        a: [
            { t: "3 (Vertrag) -> 1 (Vormerkung) -> 2 (Auflassung) -> 4 (Zahlung) -> 5 (Eintragung)", c: false },
            { t: "3 (Vertrag) -> 1 (Vormerkung) -> 3 (Unterlagen) -> 4 (Zahlung) -> 5 (Auflassung/Umschreibung)", c: true },
            { t: "1 -> 2 -> 3 -> 4 -> 5", c: false },
            { t: "5 -> 4 -> 3 -> 2 -> 1", c: false }
        ],
        e: "Logischer Ablauf: Erst Sicherung (Vormerkung), dann Geld, dann Eigentum."
    },
    {
        cat: "2. Recht",
        q: "Frage 21 (MC): Welche Personen gehören zu den Abkömmlingen einer Person?",
        a: [
            { t: "Kinder", c: true },
            { t: "Enkel", c: true },
            { t: "Eltern", c: false },
            { t: "Geschwister", c: false }
        ],
        e: "Nachkommen in gerader Linie."
    },
    {
        cat: "2. Recht",
        q: "Frage 22 (SC): Ein Grundstück ist ein räumlich abgegrenzter Teil der Erdoberfläche. Wer ist für die Erfassung zuständig?",
        a: [
            { t: "Katasteramt", c: true },
            { t: "Kassenamt", c: false },
            { t: "Liegestuhlbörde", c: false },
            { t: "Kasemattenamt", c: false }
        ],
        e: "Liegenschaftskataster."
    },
    {
        cat: "2. Recht",
        q: "Frage 23 (MC): Was beinhaltet eine Flurkarte?",
        a: [
            { t: "Flurstücke mit Grenzen und Nummern", c: true },
            { t: "Nutzungsarten von Grund und Boden", c: false },
            { t: "Eigentümer", c: false },
            { t: "Pachtverhältnisse", c: false }
        ],
        e: "Geometrische Darstellung."
    },
    {
        cat: "2. Recht",
        q: "Frage 24 (SC): Der Bebauungsplan unterscheidet verschiedene Gebiete. Welche Abkürzung steht für reine Wohngebiete?",
        a: [
            { t: "WR", c: true },
            { t: "RW", c: false },
            { t: "WS", c: false },
            { t: "WB", c: false }
        ],
        e: "Baunutzungsverordnung."
    },
    {
        cat: "2. Recht",
        q: "Frage 25 (SC): Grundstücke können im Eigentum von einer oder mehreren Personen sein. Wenn vier Geschwister das Elternhaus erben, dann handelt es sich um...",
        a: [
            { t: "Gesamthandseigentum", c: true },
            { t: "Alleineigentum", c: false },
            { t: "Bruchteilseigentum", c: false },
            { t: "Mieteigentum", c: false }
        ],
        e: "Erbengemeinschaft."
    },
    {
        cat: "2. Recht",
        q: "Frage 26 (SC): Wie heißt das Sondereigentum an einer Gewerbeeinheit in einem Mehrfamilienhaus?",
        a: [
            { t: "Teileigentum", c: true },
            { t: "Wohnungseigentum", c: false },
            { t: "Mieteigentum", c: false },
            { t: "Gesamthandseigentum", c: false }
        ],
        e: "Nicht zu Wohnzwecken dienend."
    },
    {
        cat: "2. Recht",
        q: "Frage 27 (SC): Der Vollzug eines Immobilienkaufvertrages unterliegt einem Formzwang. Welcher ist das?",
        a: [
            { t: "Die notarielle Beurkundung", c: true },
            { t: "Die notarielle Beglaubigung", c: false },
            { t: "Die notarielle Bestätigung", c: false },
            { t: "Die notarielle Benotung", c: false }
        ],
        e: "Gesetzliche Vorschrift."
    },
    {
        cat: "2. Recht",
        q: "Frage 28 (MC): Was passiert, wenn trotz dieses Formfehlers ein Vertrag geschlossen wird? (Mündlich)",
        a: [
            { t: "Gültigkeit, wenn die Auflassung und Eintragung ins Grundbuch erfolgt sind (Heilung)", c: true },
            { t: "grundsätzlich keine Gültigkeit", c: false },
            { t: "volle Gültigkeit, wenn beide Willenserklärungen vorliegen", c: false },
            { t: "keine Gültigkeit und dieser Fehler kann nicht geheilt werden", c: false }
        ],
        e: "Heilung durch Vollzug."
    },
    {
        cat: "2. Recht",
        q: "Frage 29 (MC): Ein Immobilienkaufvertrag nach § 311b BGB beinhaltet immer...",
        a: [
            { t: "das Vorlesen für die Beteiligten durch den Notar", c: true },
            { t: "die Abfassung oder Niederschrift des Kaufvertrages durch einen Notar", c: false },
            { t: "die Unterzeichnung in Abwesenheit", c: false },
            { t: "die Unterlassungsvormerkung", c: false }
        ],
        e: "Beurkundungspflicht."
    },
    {
        cat: "2. Recht",
        q: "Frage 30 (MC): Durch den § 311b BGB werden folgende Funktionen übernommen:",
        a: [
            { t: "Warnfunktion, Schutzfunktion, Beweisfunktion", c: true },
            { t: "Beratungsfunktion, da der Notar neutrale Instanz ist", c: true },
            { t: "Kontrollfunktion des Staates", c: false },
            { t: "Kontrollfunktion des Gutachterausschusses", c: false }
        ],
        e: "Schutz der Parteien."
    },
    {
        cat: "2. Recht",
        q: "Frage 31 (SC): Wie geschieht beim Immobilienkauf die Übergabe?",
        a: [
            { t: "die Auflassung § 873 in Verbindung mit § 925 BGB (Einigung + Eintragung)", c: true },
            { t: "die Übergabe der Schlüssel", c: false },
            { t: "die Auflassungsvormerkung", c: false },
            { t: "den notariellen Kaufvertrag", c: false }
        ],
        e: "Rechtlicher Übergang."
    },
    {
        cat: "2. Recht",
        q: "Frage 32 (MC): Auch der Kauf einer Immobilie ist letztendlich ein Zug-um-Zug-Geschäft. Wie wird die Zahlung gesichert?",
        a: [
            { t: "auf ein Notaranderkonto", c: true },
            { t: "durch eine Bankbürgschaft", c: true },
            { t: "auf ein anderes Konto des Verkäufers", c: false },
            { t: "durch Barzahlung", c: false }
        ],
        e: "Sicherstellung der Leistung."
    },
    {
        cat: "2. Recht",
        q: "Frage 33 (MC): Worüber gibt das Grundbuch insbesondere Auskunft?",
        a: [
            { t: "Eigentumsverhältnisse in Abteilung I", c: true },
            { t: "Lasten und Beschränkungen in Abteilung II", c: true },
            { t: "Exakte Größe in m²", c: false },
            { t: "Rangverhältnisse der einzelnen Rechte untereinander", c: true }
        ],
        e: "Rechtsverhältnisse."
    },
    {
        cat: "2. Recht",
        q: "Frage 34 (MC): Aus der Aufschrift kann man Folgendes erkennen:",
        a: [
            { t: "Amtsgericht", c: true },
            { t: "Grundbuchbezirk", c: true },
            { t: "Band/Blatt", c: true },
            { t: "Eigentümer", c: false }
        ],
        e: "Deckblatt."
    },
    {
        cat: "2. Recht",
        q: "Frage 35 (MC): Aus dem Bestandsverzeichnis kann man Folgendes erkennen:",
        a: [
            { t: "Lage und Größe", c: true },
            { t: "Gemarkung", c: true },
            { t: "Flurstück", c: true },
            { t: "Eigentümer", c: false }
        ],
        e: "Vom Katasteramt."
    },
    {
        cat: "2. Recht",
        q: "Frage 36 (SC): Aus der Abteilung I kann man Folgendes erkennen:",
        a: [
            { t: "Eigentumsverhältnisse (Eigentümer)", c: true },
            { t: "Hypotheken", c: false },
            { t: "Lasten", c: false },
            { t: "Grundschulden", c: false }
        ],
        e: "Eigentum."
    },
    {
        cat: "2. Recht",
        q: "Frage 37 (SC): Aus der Abteilung II kann man Folgendes erkennen:",
        a: [
            { t: "Lasten und Beschränkungen (Dienstbarkeiten, Vormerkung)", c: true },
            { t: "Grundschulden", c: false },
            { t: "Hypotheken", c: false },
            { t: "Eigentümer", c: false }
        ],
        e: "Rechte Dritter."
    },
    {
        cat: "2. Recht",
        q: "Frage 38 (SC): Aus der Abteilung III kann man Folgendes erkennen:",
        a: [
            { t: "Grundpfandrechte (Hypotheken, Grundschulden)", c: true },
            { t: "Wegerechte", c: false },
            { t: "Eigentümer", c: false },
            { t: "Nießbrauch", c: false }
        ],
        e: "Geldrechte."
    },
    {
        cat: "2. Recht",
        q: "Frage 39 (SC): Beschränkte persönliche Grunddienstbarkeiten sind (Abt II)...",
        a: [
            { t: "Nießbrauch, Wohnrecht", c: true },
            { t: "Grundschuld", c: false },
            { t: "Hypothek", c: false },
            { t: "Rentenschuld", c: false }
        ],
        e: "Nutzungsrechte."
    },
    {
        cat: "2. Recht",
        q: "Frage 40 (SC): Welches der u.g. Rechte gehört zu den Grunddienstbarkeiten?",
        a: [
            { t: "Wegerecht", c: true },
            { t: "Wohnrecht", c: false },
            { t: "Nießbrauch", c: false },
            { t: "Reallast", c: false }
        ],
        e: "Duldungspflichten."
    },
    {
        cat: "2. Recht",
        q: "Frage 41 (MC): Das Prioritätsprinzip soll die Reihenfolge regeln (Tempus-Prinzip).",
        a: [
            { t: "Der Rang entscheidet sich nach dem Datum der Eintragung", c: true },
            { t: "In verschiedenen Abteilungen entscheidet der Rang nach Datum", c: true },
            { t: "Nach Alphabet", c: false },
            { t: "Nach der Höhe", c: false }
        ],
        e: "Früher = Besser."
    },
    {
        cat: "2. Recht",
        q: "Frage 42 (SC): In verschiedenen Abteilungen entscheidet der Rang sich nach (Locus-Prinzip)...",
        a: [
            { t: "dem Datum der Eintragung", c: true },
            { t: "der Summe", c: false },
            { t: "dem Alphabet", c: false },
            { t: "dem Eigentümer", c: false }
        ],
        e: "Zeitpunkt."
    },
    {
        cat: "2. Recht",
        q: "Frage 43 (MC): Das Grundbuch genießt den öffentlichen Glauben. Dies gilt aber nicht für alle Teile. Welcher Teil genießt keinen öffentlichen Glauben?",
        a: [
            { t: "Das Bestandsverzeichnis", c: true },
            { t: "Abteilung I", c: false },
            { t: "Abteilung II", c: false },
            { t: "Abteilung III", c: false }
        ],
        e: "Tatsächliche Angaben."
    },
    {
        cat: "2. Recht",
        q: "Frage 44 (SC): Das Dauerwohnrecht ist im Wohnungseigentumsrecht begründet. Der wesentliche Unterschied zum Wohnrecht liegt darin, dass...",
        a: [
            { t: "das Dauerwohnrecht veräußerlich und vererbbar ist", c: true },
            { t: "es befristet ist", c: false },
            { t: "es nur für eine Person gilt", c: false },
            { t: "es im Grundbuch steht", c: false }
        ],
        e: "Stärkeres Recht."
    },
    {
        cat: "2. Recht",
        q: "Frage 45 (SC): Das Vorkaufsrecht wird in Abt. II eingetragen. Allerdings gibt es ein gesetzliches Vorkaufsrecht, das nicht im Grundbuch steht.",
        a: [
            { t: "Das gesetzliche Vorkaufsrecht der Gemeinde", c: true },
            { t: "Das der Miterben", c: false },
            { t: "Das der Bank", c: false },
            { t: "Das des Nachbarn", c: false }
        ],
        e: "BauGB."
    },
    {
        cat: "2. Recht",
        q: "Frage 46 (SC): Das Erbbaurecht berechtigt den Begünstigten...",
        a: [
            { t: "auf oder unter einem fremden Grundstück ein Bauwerk zu errichten", c: true },
            { t: "das Grundstück zu kaufen", c: false },
            { t: "das Grundstück zu pachten", c: false },
            { t: "die Ernte zu behalten", c: false }
        ],
        e: "Pachtzins."
    },
    {
        cat: "2. Recht",
        q: "Frage 47 (SC): Wo werden Reallasten eingetragen?",
        a: [
            { t: "Abteilung II", c: true },
            { t: "Abteilung III", c: false },
            { t: "Abteilung I", c: false },
            { t: "Bestandsverzeichnis", c: false }
        ],
        e: "Wiederkehrende Leistungen."
    },
    {
        cat: "2. Recht",
        q: "Frage 48 (SC): Nacherbenvermerk in Abt. II?",
        a: [
            { t: "Zum Schutz der Nacherben, Vorerbe ist in Verfügung beschränkt", c: true },
            { t: "Zum Schutz der Bank", c: false },
            { t: "Zum Schutz des Vorerben", c: false },
            { t: "Zum Schutz des Mieters", c: false }
        ],
        e: "Sicherung."
    },
    {
        cat: "2. Recht",
        q: "Frage 49 (SC): Grundpfandrechte können sein...",
        a: [
            { t: "abstrakt oder akzessorisch", c: true },
            { t: "nur abstrakt", c: false },
            { t: "nur akzessorisch", c: false },
            { t: "weder noch", c: false }
        ],
        e: "Grundschuld vs. Hypothek."
    },
    {
        cat: "2. Recht",
        q: "Frage 50 (SC): Grundschulden sind als... der gesetzliche Normalfall.",
        a: [
            { t: "Briefgrundschuld", c: true },
            { t: "Buchgrundschuld", c: false },
            { t: "Rentenschuld", c: false },
            { t: "Hypothek", c: false }
        ],
        e: "Gesetzlich Brief, praktisch oft Buch."
    },

    // ============================================================
    // KAPITEL 3: STEUERRECHTLICHE GRUNDLAGEN (Fragen 1-40)
    // ============================================================
    {
        cat: "3. Steuern",
        q: "Frage 1 (SC): Der Begriff Steuern ist in § 3 AO definiert. Welche Aussage zu Steuern ist danach korrekt?",
        a: [
            { t: "Steuern sind Geldleistungen, die nicht eine Gegenleistung für eine besondere Leistung darstellen.", c: true },
            { t: "Steuern sind Sachleistungen, die dem Staat zufließen.", c: false },
            { t: "Steuern sind Geldleistungen, die eine direkte Gegenleistung für eine besondere Leistung darstellen.", c: false },
            { t: "Steuern sind freiwillige Zahlungen an juristische Personen des öffentlichen Rechts.", c: false }
        ],
        e: "Geldleistung ohne Anspruch auf individuelle Gegenleistung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 2 (MC): Steuern können direkt vom Steuerschuldner abgeführt werden oder indirekt. Zu den indirekten Steuern gehören u. a.:",
        a: [
            { t: "Umsatzsteuer", c: true },
            { t: "Grunderwerbsteuer", c: true },
            { t: "Einkommensteuer", c: false },
            { t: "Körperschaftsteuer", c: false }
        ],
        e: "Steuerschuldner (Zahler) und Steuerträger (Belasteter) sind nicht identisch."
    },
    {
        cat: "3. Steuern",
        q: "Frage 3 (MC): Zu den direkten Steuern gehören u. a.:",
        a: [
            { t: "Kfz-Steuer", c: true },
            { t: "Einkommensteuer", c: true },
            { t: "Umsatzsteuer", c: false },
            { t: "Versicherungsteuer", c: false }
        ],
        e: "Steuerschuldner und Steuerträger sind identisch."
    },
    {
        cat: "3. Steuern",
        q: "Frage 4 (SC): Zu den öffentlich-rechtlichen Abgaben gehören auch Gebühren und Beiträge. Welche Unterscheidung zu den Steuern besteht?",
        a: [
            { t: "Gebühren werden als Gegenleistung für eine besondere Amtshandlung erhoben.", c: true },
            { t: "Gebühren werden ohne entsprechende Gegenleistung erhoben.", c: false },
            { t: "Gebühren sind immer freiwillig.", c: false },
            { t: "Gebühren werden nur von Kirchen erhoben.", c: false }
        ],
        e: "Gebühren sind Entgelt für eine konkrete Leistung (z.B. Müllabfuhr, Pass)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 5 (SC): Im EStG wird die persönliche Steuerpflicht geregelt. Welche Personen sind demnach unbeschränkt einkommensteuerpflichtig?",
        a: [
            { t: "Natürliche Personen, die im Inland einen Wohnsitz oder ihren gewöhnlichen Aufenthalt haben.", c: true },
            { t: "Nur deutsche Staatsbürger.", c: false },
            { t: "Alle Personen, die im Ausland wohnen, aber in Deutschland arbeiten.", c: false },
            { t: "Kapitalgesellschaften.", c: false }
        ],
        e: "Wohnsitzprinzip (§ 1 EStG)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 6 (SC): Wann beginnt die Steuerpflicht einer natürlichen Person?",
        a: [
            { t: "Mit Vollendung der Geburt", c: true },
            { t: "Mit Vollendung des 18. Lebensjahres", c: false },
            { t: "Mit Aufnahme einer Arbeit", c: false },
            { t: "Mit der ersten Steuererklärung", c: false }
        ],
        e: "Beginnt mit Geburt, endet mit Tod."
    },
    {
        cat: "3. Steuern",
        q: "Frage 7 (SC): Welche Einkünfte unterliegen bei unbeschränkt Steuerpflichtigen der Einkommensteuer?",
        a: [
            { t: "Sämtliche Einkünfte aus dem In- und Ausland (Welteinkommensprinzip)", c: true },
            { t: "Nur Einkünfte aus dem Inland", c: false },
            { t: "Nur Einkünfte aus nichtselbstständiger Arbeit", c: false },
            { t: "Nur gewerbliche Einkünfte", c: false }
        ],
        e: "Totalitätsprinzip."
    },
    {
        cat: "3. Steuern",
        q: "Frage 8 (SC): Unter welchen Voraussetzungen ist eine Zusammenveranlagung von Ehegatten möglich?",
        a: [
            { t: "Beide sind unbeschränkt steuerpflichtig und leben nicht dauernd getrennt.", c: true },
            { t: "Einer ist unbeschränkt steuerpflichtig.", c: false },
            { t: "Sie sind geschieden, leben aber im selben Haus.", c: false },
            { t: "Sie sind verlobt.", c: false }
        ],
        e: "Ehegattenprivileg."
    },
    {
        cat: "3. Steuern",
        q: "Frage 9 (SC): Bei welchen Steuerpflichtigen wird der Grundtarif zur Berechnung der Einkommensteuer angewendet?",
        a: [
            { t: "Ledige und dauernd getrennt lebende Ehegatten", c: true },
            { t: "Zusammen veranlagte Ehegatten", c: false },
            { t: "Eingetragene Lebenspartner (zusammen veranlagt)", c: false },
            { t: "Verwitwete im Sterbejahr des Partners", c: false }
        ],
        e: "Individualbesteuerung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 10 (SC): Bei welchen Steuerpflichtigen wird der Splittingtarif angewendet?",
        a: [
            { t: "Bei zusammen veranlagten Ehegatten/Lebenspartnern", c: true },
            { t: "Bei Ledigen", c: false },
            { t: "Bei Geschiedenen (dauerhaft)", c: false },
            { t: "Bei beschränkt Steuerpflichtigen", c: false }
        ],
        e: "Splittingvorteil."
    },
    {
        cat: "3. Steuern",
        q: "Frage 11 (MC): Das EStG kennt sieben Einkunftsarten. Zu den Gewinneinkünften gehören:",
        a: [
            { t: "Einkünfte aus Gewerbebetrieb", c: true },
            { t: "Einkünfte aus Land- und Forstwirtschaft", c: true },
            { t: "Einkünfte aus nichtselbstständiger Arbeit", c: false },
            { t: "Einkünfte aus Vermietung und Verpachtung", c: false }
        ],
        e: "Ermittlung durch Bilanz oder EÜR."
    },
    {
        cat: "3. Steuern",
        q: "Frage 12 (MC): Zu den Überschusseinkünften gehören:",
        a: [
            { t: "Einkünfte aus Vermietung und Verpachtung", c: true },
            { t: "Einkünfte aus nichtselbstständiger Arbeit", c: true },
            { t: "Einkünfte aus selbstständiger Arbeit", c: false },
            { t: "Einkünfte aus Gewerbebetrieb", c: false }
        ],
        e: "Einnahmen minus Werbungskosten."
    },
    {
        cat: "3. Steuern",
        q: "Frage 13 (SC): Wer erzielt Einkünfte aus Vermietung und Verpachtung?",
        a: [
            { t: "Personen, die Grundstücke des Privatvermögens gegen Entgelt zur Nutzung überlassen", c: true },
            { t: "Personen, die gewerblich mit Immobilien handeln", c: false },
            { t: "Immobilienmakler", c: false },
            { t: "Bauunternehmer", c: false }
        ],
        e: "Private Vermögensverwaltung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 14 (SC): Welche Ausgaben sind steuerlich grundsätzlich NICHT abzugsfähig?",
        a: [
            { t: "Kosten der privaten Lebensführung (§ 12 EStG)", c: true },
            { t: "Werbungskosten", c: false },
            { t: "Betriebsausgaben", c: false },
            { t: "Sonderausgaben", c: false }
        ],
        e: "Hobbys, Kleidung, Essen."
    },
    {
        cat: "3. Steuern",
        q: "Frage 15 (MC): Sonderausgaben sind bestimmte private Aufwendungen. Welche gehören dazu?",
        a: [
            { t: "Gezahlte Kirchensteuer", c: true },
            { t: "Spenden für gemeinnützige Zwecke", c: true },
            { t: "Mietzahlungen für die eigene Wohnung", c: false },
            { t: "Benzinkosten für den Urlaub", c: false }
        ],
        e: "Vom Gesetzgeber geförderte Privatausgaben."
    },
    {
        cat: "3. Steuern",
        q: "Frage 16 (MC): Was zählt zu den Werbungskosten bei Vermietung und Verpachtung?",
        a: [
            { t: "Schuldzinsen", c: true },
            { t: "Gebäudeabschreibung (AfA)", c: true },
            { t: "Tilgungsraten", c: false },
            { t: "Grunderwerbsteuer für das selbstgenutzte Haus", c: false }
        ],
        e: "Kosten zur Erzielung der Einnahmen."
    },
    {
        cat: "3. Steuern",
        q: "Frage 17 (SC): Was versteht man unter horizontalem Verlustausgleich?",
        a: [
            { t: "Verrechnung von Verlusten mit Gewinnen innerhalb derselben Einkunftsart", c: true },
            { t: "Verrechnung von Verlusten mit Gewinnen aus anderen Einkunftsarten", c: false },
            { t: "Übertragung von Verlusten auf den Ehepartner", c: false },
            { t: "Verlustvortrag in das nächste Jahr", c: false }
        ],
        e: "Gleicher Topf (z.B. Verlust aus Haus A mit Gewinn aus Haus B)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 18 (SC): Was versteht man unter vertikalem Verlustausgleich?",
        a: [
            { t: "Verrechnung von Verlusten einer Einkunftsart mit positiven Einkünften anderer Einkunftsarten", c: true },
            { t: "Verrechnung innerhalb derselben Einkunftsart", c: false },
            { t: "Verrechnung nur mit Kapitalerträgen", c: false },
            { t: "Verlustrücktrag in das Vorjahr", c: false }
        ],
        e: "Verschiedene Töpfe (z.B. Verlust aus Vermietung mit Gehalt)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 19 (MC): Welche Einnahmen gehören zu den Einkünften aus V+V?",
        a: [
            { t: "Mietzahlungen (Kaltmiete)", c: true },
            { t: "Nebenkostenvorauszahlungen (Umlagen)", c: true },
            { t: "Vom Mieter gezahlte Kaution", c: false },
            { t: "Darlehensauszahlung der Bank", c: false }
        ],
        e: "Zuflussprinzip."
    },
    {
        cat: "3. Steuern",
        q: "Frage 20 (MC): Welche Finanzierungskosten sind bei V+V als Werbungskosten abzugsfähig?",
        a: [
            { t: "Schuldzinsen", c: true },
            { t: "Disagio / Damnum", c: true },
            { t: "Tilgungsanteil der Rate", c: false },
            { t: "Kosten für die Grundschuldbestellung beim selbstgenutzten Haus", c: false }
        ],
        e: "Geldbeschaffungskosten."
    },
    {
        cat: "3. Steuern",
        q: "Frage 21 (SC): Wann ist der Gewinn aus dem Verkauf einer vermieteten Immobilie steuerpflichtig (Private Veräußerungsgeschäfte)?",
        a: [
            { t: "Wenn zwischen Anschaffung und Veräußerung weniger als 10 Jahre liegen", c: true },
            { t: "Wenn die Immobilie länger als 10 Jahre gehalten wurde", c: false },
            { t: "Immer", c: false },
            { t: "Nie, da Privatvermögen", c: false }
        ],
        e: "Spekulationsfrist § 23 EStG."
    },
    {
        cat: "3. Steuern",
        q: "Frage 22 (SC): Was ist ein Freibetrag?",
        a: [
            { t: "Ein Betrag, der stets steuerfrei bleibt; nur der übersteigende Teil wird besteuert", c: true },
            { t: "Ein Betrag, bei dessen Überschreitung die gesamte Summe steuerpflichtig wird", c: false },
            { t: "Ein Betrag, den man vom Finanzamt geschenkt bekommt", c: false },
            { t: "Die Grenze für die Kleinunternehmerregelung", c: false }
        ],
        e: "Sockelbetrag."
    },
    {
        cat: "3. Steuern",
        q: "Frage 23 (SC): Was ist eine Freigrenze?",
        a: [
            { t: "Ein Betrag, bei dessen Überschreitung der gesamte Betrag steuerpflichtig wird", c: true },
            { t: "Ein Betrag, der immer steuerfrei abgezogen wird", c: false },
            { t: "Die Grenze zur Steuerhinterziehung", c: false },
            { t: "Ein anderes Wort für Pauschbetrag", c: false }
        ],
        e: "Alles oder Nichts (z.B. bei Spekulationsgewinnen 600€)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 24 (MC): Welche Kosten gelten als sofort abzugsfähige Werbungskosten bei V+V?",
        a: [
            { t: "Grundsteuer", c: true },
            { t: "Gebäudeversicherung", c: true },
            { t: "Tilgung", c: false },
            { t: "Grunderwerbsteuer", c: false }
        ],
        e: "Laufende Kosten."
    },
    {
        cat: "3. Steuern",
        q: "Frage 25 (SC): Was sind anschaffungsnahe Herstellungskosten?",
        a: [
            { t: "Instandsetzungsaufwendungen in den ersten 3 Jahren nach Kauf, die 15% des Gebäudewerts übersteigen (ohne USt)", c: true },
            { t: "Laufende Schönheitsreparaturen", c: false },
            { t: "Kosten für den Notar", c: false },
            { t: "Kosten, die erst nach 10 Jahren anfallen", c: false }
        ],
        e: "Müssen abgeschrieben werden, nicht sofort abziehbar."
    },
    {
        cat: "3. Steuern",
        q: "Frage 26 (MC): Welche Nebenkosten gehören zur Bemessungsgrundlage der Gebäude-AfA?",
        a: [
            { t: "Maklergebühr (anteilig für Gebäude)", c: true },
            { t: "Grunderwerbsteuer (anteilig für Gebäude)", c: true },
            { t: "Grundschuldeintragungskosten", c: false },
            { t: "Kosten für das Grundstück selbst", c: false }
        ],
        e: "Anschaffungsnebenkosten ohne Geldbeschaffungskosten."
    },
    {
        cat: "3. Steuern",
        q: "Frage 27 (SC): Welche Abschreibungsmethode ist der Regelfall für vermietete Wohngebäude?",
        a: [
            { t: "Lineare AfA", c: true },
            { t: "Degressive AfA", c: false },
            { t: "Sofortabschreibung", c: false },
            { t: "Leistungsabschreibung", c: false }
        ],
        e: "Gleichmäßige Verteilung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 28 (SC): Wie hoch ist der lineare AfA-Satz für Wohngebäude, die VOR 1925 fertiggestellt wurden?",
        a: [
            { t: "2,5 % (40 Jahre)", c: true },
            { t: "2,0 % (50 Jahre)", c: false },
            { t: "3,0 % (33 Jahre)", c: false },
            { t: "1,0 % (100 Jahre)", c: false }
        ],
        e: "Altbauten."
    },
    {
        cat: "3. Steuern",
        q: "Frage 29 (SC): Wie hoch ist der lineare AfA-Satz für Wohngebäude, die NACH 1924 fertiggestellt wurden?",
        a: [
            { t: "2,0 % (50 Jahre)", c: true },
            { t: "2,5 % (40 Jahre)", c: false },
            { t: "4,0 % (25 Jahre)", c: false },
            { t: "5,0 % (20 Jahre)", c: false }
        ],
        e: "Neubauten Standard."
    },
    {
        cat: "3. Steuern",
        q: "Frage 30 (SC): Wie werden Sanierungskosten bei vermieteten Baudenkmalen abgeschrieben (§ 7i EStG)?",
        a: [
            { t: "8 Jahre mit 9 % und 4 Jahre mit 7 %", c: true },
            { t: "50 Jahre mit 2 %", c: false },
            { t: "10 Jahre mit 10 %", c: false },
            { t: "Sofort zu 100 %", c: false }
        ],
        e: "Hohe steuerliche Förderung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 31 (SC): Was ist die Basis für die Berechnung der Gebäude-AfA?",
        a: [
            { t: "Die Anschaffungs- oder Herstellungskosten des Gebäudes (ohne Bodenanteil)", c: true },
            { t: "Der gesamte Kaufpreis inklusive Grundstück", c: false },
            { t: "Der Einheitswert", c: false },
            { t: "Der Verkehrswert", c: false }
        ],
        e: "Boden nutzt sich nicht ab."
    },
    {
        cat: "3. Steuern",
        q: "Frage 32 (SC): Rechenbeispiel: Kaufpreis 300.000 €, Bodenwertanteil 20 %, Nebenkosten 30.000 €. Wie hoch ist die AfA-Bemessungsgrundlage?",
        a: [
            { t: "264.000 € ((300T + 30T) * 80%)", c: true },
            { t: "330.000 €", c: false },
            { t: "300.000 €", c: false },
            { t: "240.000 €", c: false }
        ],
        e: "Gesamtkosten minus Bodenanteil."
    },
    {
        cat: "3. Steuern",
        q: "Frage 33 (MC): Welche Kosten erhöhen die Anschaffungskosten einer Immobilie?",
        a: [
            { t: "Maklercourtage", c: true },
            { t: "Notarkosten für die Beurkundung des Kaufvertrags", c: true },
            { t: "Grundschuldeintragungkosten", c: false },
            { t: "Damnum", c: false }
        ],
        e: "Alles was zum Erwerb nötig ist, außer Finanzierung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 34 (SC): Wann geht das Eigentum an einer Immobilie im Erbfall auf den Erben über?",
        a: [
            { t: "Mit dem Tod des Erblassers (Gesamtrechtsnachfolge)", c: true },
            { t: "Mit der Grundbuchumschreibung", c: false },
            { t: "Mit der Erteilung des Erbscheins", c: false },
            { t: "Mit der Testamentseröffnung", c: false }
        ],
        e: "Automatisch per Gesetz (§ 1922 BGB)."
    },
    {
        cat: "3. Steuern",
        q: "Frage 35 (MC): Wer gehört zu den Erben der 1. Ordnung?",
        a: [
            { t: "Kinder des Erblassers", c: true },
            { t: "Enkelkinder des Erblassers", c: true },
            { t: "Eltern des Erblassers", c: false },
            { t: "Geschwister des Erblassers", c: false }
        ],
        e: "Abkömmlinge."
    },
    {
        cat: "3. Steuern",
        q: "Frage 36 (MC): Wer gehört zu den Erben der 2. Ordnung?",
        a: [
            { t: "Eltern des Erblassers", c: true },
            { t: "Geschwister des Erblassers", c: true },
            { t: "Kinder des Erblassers", c: false },
            { t: "Großeltern des Erblassers", c: false }
        ],
        e: "Eltern und deren Abkömmlinge."
    },
    {
        cat: "3. Steuern",
        q: "Frage 37 (SC): Wie hoch ist der persönliche Freibetrag bei der Erbschaftsteuer für Ehegatten?",
        a: [
            { t: "500.000 EUR", c: true },
            { t: "400.000 EUR", c: false },
            { t: "20.000 EUR", c: false },
            { t: "256.000 EUR", c: false }
        ],
        e: "Höchster Freibetrag."
    },
    {
        cat: "3. Steuern",
        q: "Frage 38 (SC): Wie hoch ist der persönliche Freibetrag bei der Erbschaftsteuer für Kinder?",
        a: [
            { t: "400.000 EUR", c: true },
            { t: "200.000 EUR", c: false },
            { t: "20.000 EUR", c: false },
            { t: "100.000 EUR", c: false }
        ],
        e: "Pro Kind, pro Elternteil."
    },
    {
        cat: "3. Steuern",
        q: "Frage 39 (SC): Fällt bei einem Erwerb von Todes wegen (Erbschaft) Grunderwerbsteuer an?",
        a: [
            { t: "Nein, der Erwerb ist von der Grunderwerbsteuer befreit", c: true },
            { t: "Ja, immer", c: false },
            { t: "Ja, aber nur der halbe Satz", c: false },
            { t: "Nur wenn keine Erbschaftsteuer gezahlt wird", c: false }
        ],
        e: "Vermeidung von Doppelbelastung."
    },
    {
        cat: "3. Steuern",
        q: "Frage 40 (SC): Welche Steuerart wird von den Gemeinden auf den Grundbesitz erhoben?",
        a: [
            { t: "Grundsteuer", c: true },
            { t: "Grunderwerbsteuer", c: false },
            { t: "Umsatzsteuer", c: false },
            { t: "Erbschaftsteuer", c: false }
        ],
        e: "Laufende Besteuerung des Substanzwertes."
    },

    // ============================================================
    // KAPITEL 4: STAATLICHE FÖRDERUNG (Fragen 1-21)
    // ============================================================
    {
        cat: "4. Förderung",
        q: "Frage 1 (MC): Welche Personen gehören zum begünstigten Personenkreis des 5. VermBG (Arbeitnehmersparzulage)?",
        a: [
            { t: "Arbeitnehmer", c: true },
            { t: "Auszubildende", c: true },
            { t: "Beamte, Soldaten, Richter", c: true },
            { t: "Selbstständige", c: false }
        ],
        e: "Abhängig Beschäftigte."
    },
    {
        cat: "4. Förderung",
        q: "Frage 2 (MC): In welche Anlageformen können vermögenswirksame Leistungen (VL) gefördert angelegt werden?",
        a: [
            { t: "Bausparverträge", c: true },
            { t: "Investmentfonds (Aktienfonds)", c: true },
            { t: "Sparbuch", c: false },
            { t: "Girokonto", c: false }
        ],
        e: "Wohnungsbau oder Beteiligungen."
    },
    {
        cat: "4. Förderung",
        q: "Frage 3 (SC): Wie hoch ist die Einkommensgrenze (zu versteuerndes Einkommen) für die Arbeitnehmersparzulage bei Bausparverträgen für Alleinstehende? (Stand 2024)",
        a: [
            { t: "40.000 EUR", c: true },
            { t: "17.900 EUR", c: false },
            { t: "25.600 EUR", c: false },
            { t: "50.000 EUR", c: false }
        ],
        e: "Grenze wurde 2024 deutlich erhöht."
    },
    {
        cat: "4. Förderung",
        q: "Frage 4 (SC): Wie hoch ist die Einkommensgrenze für die Arbeitnehmersparzulage bei Bausparverträgen für Verheiratete? (Stand 2024)",
        a: [
            { t: "80.000 EUR", c: true },
            { t: "35.800 EUR", c: false },
            { t: "51.200 EUR", c: false },
            { t: "100.000 EUR", c: false }
        ],
        e: "Doppelter Betrag."
    },
    {
        cat: "4. Förderung",
        q: "Frage 5 (SC): Wie hoch ist der maximale Fördersatz für VL in Bausparverträgen?",
        a: [
            { t: "9 % auf max. 470 EUR", c: true },
            { t: "20 % auf max. 400 EUR", c: false },
            { t: "10 % auf max. 512 EUR", c: false },
            { t: "8,8 % auf max. 512 EUR", c: false }
        ],
        e: "43 EUR pro Jahr maximal."
    },
    {
        cat: "4. Förderung",
        q: "Frage 6 (SC): Wie hoch ist der maximale Fördersatz für VL in Investmentfonds?",
        a: [
            { t: "20 % auf max. 400 EUR", c: true },
            { t: "9 % auf max. 470 EUR", c: false },
            { t: "25 % auf max. 800 EUR", c: false },
            { t: "10 % auf max. 400 EUR", c: false }
        ],
        e: "80 EUR pro Jahr maximal."
    },
    {
        cat: "4. Förderung",
        q: "Frage 7 (MC): Wann ist eine vorzeitige Verfügung über VL-Verträge förderunschädlich?",
        a: [
            { t: "Bei Tod des Ehegatten", c: true },
            { t: "Bei Arbeitslosigkeit von mindestens einem Jahr", c: true },
            { t: "Bei Heirat", c: true },
            { t: "Für den Kauf eines Autos", c: false }
        ],
        e: "Härtefallregelungen."
    },
    {
        cat: "4. Förderung",
        q: "Frage 8 (SC): Wie hoch ist der Fördersatz der Wohnungsbauprämie (WoP) aktuell (ab 2021)?",
        a: [
            { t: "10 %", c: true },
            { t: "8,8 %", c: false },
            { t: "9 %", c: false },
            { t: "20 %", c: false }
        ],
        e: "Wurde von 8,8% angehoben."
    },
    {
        cat: "4. Förderung",
        q: "Frage 9 (SC): Wie hoch sind die maximalen Sparbeträge für die Wohnungsbauprämie (Alleinstehende / Verheiratete)?",
        a: [
            { t: "700 EUR / 1.400 EUR", c: true },
            { t: "512 EUR / 1.024 EUR", c: false },
            { t: "1.000 EUR / 2.000 EUR", c: false },
            { t: "470 EUR / 940 EUR", c: false }
        ],
        e: "Prämienbegünstigte Aufwendungen."
    },
    {
        cat: "4. Förderung",
        q: "Frage 10 (SC): Welche Einkommensgrenze gilt für die Wohnungsbauprämie (Alleinstehende / Verheiratete)?",
        a: [
            { t: "35.000 EUR / 70.000 EUR", c: true },
            { t: "25.600 EUR / 51.200 EUR", c: false },
            { t: "17.900 EUR / 35.800 EUR", c: false },
            { t: "60.000 EUR / 120.000 EUR", c: false }
        ],
        e: "Grenzen wurden angehoben."
    },
    {
        cat: "4. Förderung",
        q: "Frage 11 (MC): Wer gehört zum unmittelbar förderberechtigten Personenkreis der Riester-Rente?",
        a: [
            { t: "Pflichtversicherte in der gesetzlichen Rentenversicherung", c: true },
            { t: "Beamte und Richter", c: true },
            { t: "Pflichtversicherte Landwirte", c: true },
            { t: "Selbstständige in berufsständischen Versorgungswerken (z.B. Ärzte)", c: false }
        ],
        e: "Anknüpfung an GRV-Pflicht oder Besoldung."
    },
    {
        cat: "4. Förderung",
        q: "Frage 12 (SC): Was ist die Grundvoraussetzung für die Riester-Förderung nach § 10a EStG?",
        a: [
            { t: "Unbeschränkte Steuerpflicht und Zugehörigkeit zum begünstigten Personenkreis", c: true },
            { t: "Deutscher Pass", c: false },
            { t: "Mindestalter 25 Jahre", c: false },
            { t: "Eigentum einer Immobilie", c: false }
        ],
        e: "Zugangsberechtigung."
    },
    {
        cat: "4. Förderung",
        q: "Frage 13 (MC): Welche Zulagen gibt es bei der Riester-Rente?",
        a: [
            { t: "Grundzulage", c: true },
            { t: "Kinderzulage", c: true },
            { t: "Berufseinsteigerbonus (einmalig)", c: true },
            { t: "Treuebonus", c: false }
        ],
        e: "Staatliche Zuschüsse."
    },
    {
        cat: "4. Förderung",
        q: "Frage 14 (SC): Wie hoch ist die jährliche Grundzulage (aktuell)?",
        a: [
            { t: "175 EUR", c: true },
            { t: "154 EUR", c: false },
            { t: "300 EUR", c: false },
            { t: "60 EUR", c: false }
        ],
        e: "Für jeden Erwachsenen."
    },
    {
        cat: "4. Förderung",
        q: "Frage 15 (SC): Wie hoch ist die Kinderzulage für ab 2008 geborene Kinder?",
        a: [
            { t: "300 EUR", c: true },
            { t: "185 EUR", c: false },
            { t: "154 EUR", c: false },
            { t: "210 EUR", c: false }
        ],
        e: "Für ältere Kinder (vor 2008) gibt es 185 EUR."
    },
    {
        cat: "4. Förderung",
        q: "Frage 16 (SC): Welchen Mindesteigenbeitrag muss man leisten, um die volle Zulage zu erhalten?",
        a: [
            { t: "4 % des rentenversicherungspflichtigen Vorjahreseinkommens (abzüglich Zulagen)", c: true },
            { t: "3 % des aktuellen Bruttogehalts", c: false },
            { t: "Pauschal 2.100 EUR", c: false },
            { t: "Mindestens 1.200 EUR", c: false }
        ],
        e: "Formel: 4% Brutto - Zulage = Eigenbeitrag."
    },
    {
        cat: "4. Förderung",
        q: "Frage 17 (SC): Welcher Sockelbetrag (Mindestbeitrag) muss in jedem Fall gezahlt werden, um eine Zulage zu erhalten?",
        a: [
            { t: "60 EUR pro Jahr", c: true },
            { t: "10 EUR pro Monat", c: false },
            { t: "175 EUR pro Jahr", c: false },
            { t: "Kein Mindestbeitrag", c: false }
        ],
        e: "Gilt z.B. bei geringem Einkommen oder mittelbar Begünstigten."
    },
    {
        cat: "4. Förderung",
        q: "Frage 18 (SC): Wie hoch ist der maximale Sonderausgabenabzug für Riester-Beiträge (inkl. Zulagen)?",
        a: [
            { t: "2.100 EUR", c: true },
            { t: "1.920 EUR", c: false },
            { t: "3.000 EUR", c: false },
            { t: "4.500 EUR", c: false }
        ],
        e: "Günstigerprüfung durch das Finanzamt."
    },
    {
        cat: "4. Förderung",
        q: "Frage 19 (SC): Wofür darf das Kapital aus einem Wohn-Riester-Vertrag verwendet werden?",
        a: [
            { t: "Für die Anschaffung oder Herstellung einer selbstgenutzten Wohnimmobilie (Hauptwohnsitz)", c: true },
            { t: "Für eine Ferienwohnung", c: false },
            { t: "Für vermietete Immobilien", c: false },
            { t: "Für den Kauf von Möbeln", c: false }
        ],
        e: "Zweckbindung Eigenheim."
    },
    {
        cat: "4. Förderung",
        q: "Frage 20 (SC): Wo muss sich die mit Wohn-Riester geförderte Immobilie befinden?",
        a: [
            { t: "In einem Mitgliedstaat der EU oder des EWR", c: true },
            { t: "Nur in Deutschland", c: false },
            { t: "Weltweit", c: false },
            { t: "Nur im Bundesland des Arbeitsplatzes", c: false }
        ],
        e: "Dienstleistungsfreiheit."
    },
    {
        cat: "4. Förderung",
        q: "Frage 21 (SC): Was ist das Wohnförderkonto?",
        a: [
            { t: "Ein fiktives Konto, auf dem die geförderten Beträge und Zulagen erfasst und mit 2 % verzinst werden (für die spätere Besteuerung)", c: true },
            { t: "Ein echtes Sparkonto bei der Bank", c: false },
            { t: "Das Konto, auf das die Zulagen überwiesen werden", c: false },
            { t: "Ein Konto für Wohngeldempfänger", c: false }
        ],
        e: "Grundlage für die nachgelagerte Besteuerung im Alter."
    },

    // ============================================================
    // KAPITEL 5: FINANZIERUNG (Darlehensarten & Zinsen)
    // ============================================================
    {
        cat: "5. Finanzierung",
        q: "Frage 1 (SC): Was ist das wesentliche Merkmal eines Annuitätendarlehens?",
        a: [
            { t: "Die monatliche Rate (Annuität) bleibt über die Zinsbindungsfrist konstant.", c: true },
            { t: "Der Tilgungsanteil bleibt konstant, die Rate sinkt.", c: false },
            { t: "Die Zinsen werden erst am Ende gezahlt.", c: false },
            { t: "Die Rate steigt jährlich an.", c: false }
        ],
        e: "Klassiker: Konstante Rate, Zins sinkt, Tilgung steigt."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 2 (MC): Wie verändert sich die Zusammensetzung der Rate bei einem Annuitätendarlehen im laufe der Zeit?",
        a: [
            { t: "Der Zinsanteil sinkt.", c: true },
            { t: "Der Tilgungsanteil steigt.", c: true },
            { t: "Der Zinsanteil steigt.", c: false },
            { t: "Die Gesamt-Rate verändert sich.", c: false }
        ],
        e: "Weil die Restschuld sinkt, fallen weniger Zinsen an -> mehr Geld für Tilgung."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 3 (SC): Was kennzeichnet ein Abzahlungsdarlehen (Tilgungsdarlehen)?",
        a: [
            { t: "Der Tilgungsbetrag bleibt konstant, die Gesamtrate sinkt monatlich.", c: true },
            { t: "Die Rate bleibt gleich.", c: false },
            { t: "Die Tilgung wird ausgesetzt.", c: false },
            { t: "Es wird am Ende in einer Summe getilgt.", c: false }
        ],
        e: "Lineare Tilgung: Hohe Belastung am Anfang."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 4 (SC): Was ist ein Endfälliges Darlehen (Festdarlehen)?",
        a: [
            { t: "Während der Laufzeit werden nur Zinsen gezahlt, die Tilgung erfolgt am Ende in einer Summe.", c: true },
            { t: "Es werden Zins und Tilgung monatlich verrechnet.", c: false },
            { t: "Es ist ein Darlehen ohne Zinsen.", c: false },
            { t: "Die Laufzeit ist unbegrenzt.", c: false }
        ],
        e: "Oft kombiniert mit Bausparvertrag oder Lebensversicherung (Tilgungsaussetzung)."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 5 (SC): Wofür eignet sich ein Forward-Darlehen?",
        a: [
            { t: "Um sich die aktuellen Zinsen für eine zukünftige Finanzierung (bis zu 60 Monate im Voraus) zu sichern.", c: true },
            { t: "Um variable Zinsen zu nutzen.", c: false },
            { t: "Um eine Finanzierung rückwirkend zu ändern.", c: false },
            { t: "Für kurzfristige Überbrückungen.", c: false }
        ],
        e: "Zinssicherung gegen Aufschlag."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 6 (MC): Was versteht man unter Disagio (Damnum)?",
        a: [
            { t: "Eine Zinsvorauszahlung.", c: true },
            { t: "Einen Abschlag von der Auszahlungssumme (Auszahlung < 100%).", c: true },
            { t: "Eine Bearbeitungsgebühr.", c: false },
            { t: "Eine Vorfälligkeitsentschädigung.", c: false }
        ],
        e: "Senkt den Nominalzins, erhöht aber den Effektivzins, wenn Laufzeit kurz."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 7 (SC): Was gibt der Effektivzins gemäß PAngV an?",
        a: [
            { t: "Die Gesamtkosten des Kredits pro Jahr in Prozent.", c: true },
            { t: "Nur den reinen Zins ohne Nebenkosten.", c: false },
            { t: "Den Zins der EZB.", c: false },
            { t: "Die Marge der Bank.", c: false }
        ],
        e: "Dient der Vergleichbarkeit von Angeboten."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 8 (SC): Ein Kunde möchte Sondertilgungen leisten. Was muss vereinbart werden?",
        a: [
            { t: "Ein Sondertilgungsrecht im Darlehensvertrag (meist 5% p.a.).", c: true },
            { t: "Nichts, das ist gesetzlich immer erlaubt.", c: false },
            { t: "Er muss erst kündigen.", c: false },
            { t: "Er muss das Haus verkaufen.", c: false }
        ],
        e: "Ohne Vereinbarung kein Recht auf Sondertilgung während der Zinsbindung."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 9 (SC): Wann hat ein Kunde ein gesetzliches Sonderkündigungsrecht gemäß § 489 BGB (ohne Vorfälligkeitsentschädigung)?",
        a: [
            { t: "10 Jahre nach Vollauszahlung des Darlehens (mit 6 Monaten Frist).", c: true },
            { t: "Jederzeit mit 3 Monaten Frist.", c: false },
            { t: "Nach 5 Jahren.", c: false },
            { t: "Nur bei Arbeitslosigkeit.", c: false }
        ],
        e: "Schützt Verbraucher bei sehr langen Zinsbindungen."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 10 (SC): Was ist ein Cap-Darlehen?",
        a: [
            { t: "Ein variables Darlehen mit einer Zinsobergrenze (Cap).", c: true },
            { t: "Ein Darlehen mit einer Kappe oben drauf.", c: false },
            { t: "Ein Festzinsdarlehen.", c: false },
            { t: "Ein Darlehen in Fremdwährung.", c: false }
        ],
        e: "Schutz vor steigenden Zinsen bei variablen Krediten."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 11 (SC): Welche Phasen hat ein Bausparvertrag?",
        a: [
            { t: "Ansparphase -> Zuteilungsphase -> Darlehensphase", c: true },
            { t: "Darlehensphase -> Ansparphase", c: false },
            { t: "Nur Sparphase", c: false },
            { t: "Zuteilung -> Sparen -> Kredit", c: false }
        ],
        e: "Erst sparen (Guthabenzins), dann leihen (günstiger Darlehenszins)."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 12 (SC): Was bedeutet 'Bereitstellungszinsen'?",
        a: [
            { t: "Zinsen, die die Bank berechnet, wenn das Darlehen nicht sofort abgerufen wird (z.B. beim Neubau).", c: true },
            { t: "Zinsen für die Beratung.", c: false },
            { t: "Zinsen, die die Bank dem Kunden zahlt.", c: false },
            { t: "Zinsen für das Guthaben.", c: false }
        ],
        e: "Kosten für das 'Reservieren' des Geldes (meist 0,25% pro Monat nach freier Zeit)."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 13 (MC): Welche Vorteile hat ein Volltilger-Darlehen?",
        a: [
            { t: "Zinssicherheit über die gesamte Laufzeit.", c: true },
            { t: "Schuldenfreiheit am Ende der Zinsbindung garantiert.", c: true },
            { t: "Niedrige monatliche Rate.", c: false },
            { t: "Hohe Flexibilität.", c: false }
        ],
        e: "Planungssicherheit pur."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 14 (SC): Was ist ein Euribor-Darlehen?",
        a: [
            { t: "Ein Darlehen mit variablem Zins, der sich am Euribor orientiert (z.B. alle 3 Monate angepasst).", c: true },
            { t: "Ein Darlehen von der Europäischen Union.", c: false },
            { t: "Ein Festzinsdarlehen.", c: false },
            { t: "Ein Förderkredit.", c: false }
        ],
        e: "Zinsrisiko liegt beim Kunden."
    },
    {
        cat: "5. Finanzierung",
        q: "Frage 15 (SC): Wie berechnet man die anfängliche Tilgung in Prozent?",
        a: [
            { t: "(Monatliche Rate x 12) - (Darlehenssumme x Zinssatz) / Darlehenssumme * 100", c: false },
            { t: "Jahresrate in % minus Sollzins in %", c: true },
            { t: "Sollzins plus Effektivzins", c: false },
            { t: "Darlehen durch Laufzeit", c: false }
        ],
        e: "Annuität (in %) - Zins (in %) = Tilgung (in %)."
    },

    // ============================================================
    // KAPITEL 6: KREDITPRÜFUNG (Fragen 1-15)
    // ============================================================
    {
        cat: "6. Kreditprüfung",
        q: "Frage 1 (SC): Was ist der Unterschied zwischen Kreditfähigkeit und Kreditwürdigkeit?",
        a: [
            { t: "Kreditfähigkeit ist die rechtliche Fähigkeit (Geschäftsfähigkeit), Kreditwürdigkeit ist die wirtschaftliche/persönliche Eignung.", c: true },
            { t: "Es gibt keinen Unterschied.", c: false },
            { t: "Kreditfähigkeit betrifft nur Firmen.", c: false },
            { t: "Kreditwürdigkeit ist die Rechtsfähigkeit.", c: false }
        ],
        e: "Darf er? (Fähigkeit) vs. Kann/Will er? (Würdigkeit)."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 2 (MC): Was gehört zur Prüfung der persönlichen Kreditwürdigkeit?",
        a: [
            { t: "Abfrage der SCHUFA-Daten", c: true },
            { t: "Einschätzung der Zuverlässigkeit und Zahlungsmoral", c: true },
            { t: "Prüfung des Objektwertes", c: false },
            { t: "Berechnung des Nettoeinkommens", c: false }
        ],
        e: "Charakterliche Eignung."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 3 (MC): Was gehört zur Prüfung der materiellen Kreditwürdigkeit?",
        a: [
            { t: "Prüfung der Einkommensnachweise (Gehalt, Rente)", c: true },
            { t: "Prüfung der Ausgaben (Haushaltsrechnung)", c: true },
            { t: "Prüfung des Personalausweises", c: false },
            { t: "Prüfung des Grundbuchs", c: false }
        ],
        e: "Wirtschaftliche Fähigkeit."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 4 (SC): Welche Unterlagen muss ein Angestellter in der Regel vorlegen?",
        a: [
            { t: "Die letzten 3 Gehaltsabrechnungen und den letzten Steuerbescheid", c: true },
            { t: "Eine BWA (Betriebswirtschaftliche Auswertung)", c: false },
            { t: "Eine Einnahmen-Überschuss-Rechnung", c: false },
            { t: "Nur den Personalausweis", c: false }
        ],
        e: "Standard bei Unselbstständigen."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 5 (MC): Welche Unterlagen muss ein Selbstständiger/Freiberufler vorlegen?",
        a: [
            { t: "Jahresabschlüsse / Bilanzen der letzten 2-3 Jahre", c: true },
            { t: "Aktuelle BWA (Betriebswirtschaftliche Auswertung)", c: true },
            { t: "Einkommensteuerbescheide der letzten Jahre", c: true },
            { t: "Lohnsteuerbescheinigung", c: false }
        ],
        e: "Umfangreichere Prüfung wegen schwankendem Einkommen."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 6 (SC): Was ist die Haushaltsrechnung?",
        a: [
            { t: "Gegenüberstellung der nachhaltigen Einnahmen und Ausgaben zur Ermittlung des freien Budgets.", c: true },
            { t: "Die Rechnung für den Strom.", c: false },
            { t: "Die Berechnung der Wohnfläche.", c: false },
            { t: "Die Aufstellung der Baukosten.", c: false }
        ],
        e: "Kapitaldienstfähigkeit: Einnahmen - Ausgaben = Max. Rate."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 7 (SC): Was bedeutet 'Nachhaltigkeit' des Einkommens?",
        a: [
            { t: "Das Einkommen muss auf Dauer gesichert sein (z.B. entfristeter Arbeitsvertrag).", c: true },
            { t: "Das Einkommen muss ökologisch erwirtschaftet werden.", c: false },
            { t: "Es zählt auch das Einkommen aus einem befristeten Job, der morgen endet.", c: false },
            { t: "Es zählt auch Lottogewinn.", c: false }
        ],
        e: "Zukunftsprognose."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 8 (SC): Wie werden Kinder in der Haushaltsrechnung berücksichtigt?",
        a: [
            { t: "Durch Pauschalen für Lebenshaltungskosten, die das verfügbare Einkommen mindern.", c: true },
            { t: "Sie werden nicht berücksichtigt.", c: false },
            { t: "Das Kindergeld wird als Einkommen gezählt, aber keine Kosten angesetzt.", c: false },
            { t: "Kinder erhöhen die Kreditwürdigkeit immer.", c: false }
        ],
        e: "Kinder kosten Geld -> Haushaltsüberschuss sinkt."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 9 (SC): Was ist die SCHUFA?",
        a: [
            { t: "Eine Auskunftei, die Daten über das Zahlungsverhalten von Verbrauchern speichert.", c: true },
            { t: "Eine Behörde.", c: false },
            { t: "Ein Kreditinstitut.", c: false },
            { t: "Ein Gesetz.", c: false }
        ],
        e: "Schutzgemeinschaft für allgemeine Kreditsicherung."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 10 (MC): Welche Daten speichert die SCHUFA? (Positivmerkmale)",
        a: [
            { t: "Girokonten", c: true },
            { t: "Kreditkarten", c: true },
            { t: "Laufende Kredite", c: true },
            { t: "Einkommen und Vermögen", c: false }
        ],
        e: "Vertragsdaten."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 11 (SC): Was ist ein Negativmerkmal in der SCHUFA?",
        a: [
            { t: "Eidesstattliche Versicherung, Haftbefehl, Kündigung eines Kredits durch die Bank.", c: true },
            { t: "Viele Kreditanfragen.", c: false },
            { t: "Ein hoher Kredit.", c: false },
            { t: "Wohnungswechsel.", c: false }
        ],
        e: "Hard Facts -> K.O.-Kriterium."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 12 (SC): Darf der Vermittler die SCHUFA-Auskunft selbst einholen?",
        a: [
            { t: "Nein, in der Regel macht das die Bank mit Einwilligung des Kunden (Schufa-Klausel).", c: true },
            { t: "Ja, immer.", c: false },
            { t: "Ja, aber nur heimlich.", c: false },
            { t: "Nein, das macht das Finanzamt.", c: false }
        ],
        e: "Datenschutz."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 13 (SC): Was ist der Verschuldungsgrad?",
        a: [
            { t: "Das Verhältnis von monatlichen Belastungen zum Nettoeinkommen.", c: true },
            { t: "Die Höhe der Schulden in Euro.", c: false },
            { t: "Die Anzahl der Kredite.", c: false },
            { t: "Das Verhältnis von Eigenkapital zu Fremdkapital.", c: false }
        ],
        e: "Belastungsquote (sollte meist nicht über 40% liegen)."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 14 (SC): Welche Rolle spielt das Eigenkapital bei der Bonitätsprüfung?",
        a: [
            { t: "Je mehr Eigenkapital, desto geringer das Risiko für die Bank und desto besser der Zins.", c: true },
            { t: "Es spielt keine Rolle.", c: false },
            { t: "Eigenkapital ist schädlich.", c: false },
            { t: "Eigenkapital ersetzt das Einkommen.", c: false }
        ],
        e: "Risikominimierung."
    },
    {
        cat: "6. Kreditprüfung",
        q: "Frage 15 (SC): Was bedeutet 'Kapitaldienst'?",
        a: [
            { t: "Die Summe aus Zins und Tilgung, die regelmäßig gezahlt werden muss.", c: true },
            { t: "Der Dienst am Kunden.", c: false },
            { t: "Nur die Zinsen.", c: false },
            { t: "Das Eigenkapital.", c: false }
        ],
        e: "Die monatliche Belastung."
    },

    // ============================================================
    // KAPITEL 7: BEWERTUNG VON SICHERHEITEN (Fragen 1-35)
    // ============================================================
    {
        cat: "7. Sicherheiten",
        q: "Frage 1 (SC): Welche Sicherheit gehört zu den Personalsicherheiten?",
        a: [
            { t: "Bürgschaft", c: true },
            { t: "Grundschuld", c: false },
            { t: "Hypothek", c: false },
            { t: "Verpfändung von Wertpapieren", c: false }
        ],
        e: "Eine Person haftet mit ihrem Vermögen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 2 (MC): Welche Sicherheit gehört zu den Sachsicherheiten (Realsicherheiten)?",
        a: [
            { t: "Grundschuld", c: true },
            { t: "Hypothek", c: true },
            { t: "Abtretung von Forderungen (Zession)", c: false },
            { t: "Bürgschaft", c: false }
        ],
        e: "Haftung mit einem Gegenstand/Recht."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 3 (SC): Was ist das wesentliche Merkmal der 'gewöhnlichen Bürgschaft'?",
        a: [
            { t: "Der Bürge hat die Einrede der Vorausklage (Gläubiger muss erst Hauptschuldner pfänden).", c: true },
            { t: "Der Bürge muss sofort zahlen.", c: false },
            { t: "Der Bürge haftet nur zur Hälfte.", c: false },
            { t: "Die Bürgschaft erlischt bei Tod.", c: false }
        ],
        e: "Schutz des Bürgen vor schnellem Zugriff."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 4 (SC): Was kennzeichnet eine 'selbstschuldnerische Bürgschaft'?",
        a: [
            { t: "Der Bürge verzichtet auf die Einrede der Vorausklage (zahlt sofort bei Verzug).", c: true },
            { t: "Der Bürge zahlt erst nach Zwangsvollstreckung beim Hauptschuldner.", c: false },
            { t: "Sie ist im Bankgeschäft unüblich.", c: false },
            { t: "Sie muss notariell beurkundet werden.", c: false }
        ],
        e: "Standard im Kreditgeschäft."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 5 (SC): Welcher Form bedarf eine Bürgschaftserklärung durch eine Privatperson?",
        a: [
            { t: "Schriftform (§ 766 BGB)", c: true },
            { t: "Mündliche Erklärung reicht.", c: false },
            { t: "Notarielle Beurkundung.", c: false },
            { t: "Elektronische Form (E-Mail).", c: false }
        ],
        e: "Warnfunktion durch Schriftform."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 6 (SC): Was ist eine 'Lohn- und Gehaltsabtretung' (Zession)?",
        a: [
            { t: "Der Kreditnehmer tritt den pfändbaren Teil seines Einkommens an die Bank ab.", c: true },
            { t: "Der Arbeitgeber bürgt für den Arbeitnehmer.", c: false },
            { t: "Das Gehalt wird direkt auf das Konto der Bank überwiesen.", c: false },
            { t: "Eine Pfändung durch das Gericht.", c: false }
        ],
        e: "Sicherung durch künftiges Einkommen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 7 (SC): Was versteht man unter einer 'Stillen Zession'?",
        a: [
            { t: "Die Abtretung wird dem Drittschuldner (Arbeitgeber) nicht offengelegt.", c: true },
            { t: "Der Arbeitgeber wird sofort informiert.", c: false },
            { t: "Die Abtretung ist unwirksam.", c: false },
            { t: "Der Arbeitgeber muss zustimmen.", c: false }
        ],
        e: "Normalfall, um das Arbeitsverhältnis nicht zu belasten."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 8 (SC): Was passiert bei einer 'Offenen Zession'?",
        a: [
            { t: "Der Drittschuldner wird informiert und darf nur noch an den Gläubiger (Bank) zahlen.", c: true },
            { t: "Nichts ändert sich.", c: false },
            { t: "Der Kreditvertrag wird gekündigt.", c: false },
            { t: "Die Schulden sind erlassen.", c: false }
        ],
        e: "Meist erst bei Leistungsstörungen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 9 (SC): Wann eignet sich eine Kapitallebensversicherung als Kreditsicherheit?",
        a: [
            { t: "Wenn sie einen Rückkaufswert hat.", c: true },
            { t: "Wenn sie gerade erst abgeschlossen wurde.", c: false },
            { t: "Nur bei Risikolebensversicherungen.", c: false },
            { t: "Nur wenn der Versicherte über 60 ist.", c: false }
        ],
        e: "Verpfändung oder Abtretung des Rückkaufswerts."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 10 (MC): Welche Grundpfandrechte gibt es?",
        a: [
            { t: "Hypothek", c: true },
            { t: "Grundschuld", c: true },
            { t: "Rentenschuld", c: true },
            { t: "Bürgschaft", c: false }
        ],
        e: "Dingliche Sicherungsrechte an Grundstücken."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 11 (SC): Was bedeutet 'Akzessorietät' bei der Hypothek?",
        a: [
            { t: "Die Hypothek ist vom Bestand der gesicherten Forderung abhängig.", c: true },
            { t: "Die Hypothek ist unabhängig von der Forderung.", c: false },
            { t: "Die Hypothek kann jederzeit an Dritte übertragen werden ohne Forderung.", c: false },
            { t: "Die Hypothek erlischt nie.", c: false }
        ],
        e: "Ohne Forderung keine Hypothek (wird zur Eigentümergrundschuld)."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 12 (SC): Was ist der Vorteil einer Grundschuld gegenüber einer Hypothek?",
        a: [
            { t: "Sie ist abstrakt (unabhängig) von der Forderung und kann flexibel wiederverwendet werden.", c: true },
            { t: "Sie ist billiger im Grundbuch.", c: false },
            { t: "Sie braucht keinen Notar.", c: false },
            { t: "Sie erlischt automatisch bei Tilgung.", c: false }
        ],
        e: "Heute der Standard bei Baufinanzierungen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 13 (SC): Was ist eine Sicherungszweckerklärung?",
        a: [
            { t: "Ein Vertrag, der die abstrakte Grundschuld mit dem konkreten Darlehen verknüpft.", c: true },
            { t: "Eine Erklärung des Notars.", c: false },
            { t: "Eine Versicherungspolice.", c: false },
            { t: "Die Löschungsbewilligung.", c: false }
        ],
        e: "Verbindet Recht (Grundschuld) und Zweck (Kredit)."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 14 (SC): Was ist die 'Dingliche Zwangsvollstreckungsunterwerfung'?",
        a: [
            { t: "Der Eigentümer erlaubt der Bank die sofortige Vollstreckung in das Grundstück ohne Klage.", c: true },
            { t: "Der Eigentümer muss ausziehen.", c: false },
            { t: "Die Bank gehört dem Eigentümer.", c: false },
            { t: "Das Grundbuchamt prüft die Bonität.", c: false }
        ],
        e: "Spart der Bank im Ernstfall den langwierigen Klageweg."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 15 (SC): Was ist der Verkehrswert (Marktwert) gemäß § 194 BauGB?",
        a: [
            { t: "Der Preis, der zum Wertermittlungsstichtag im gewöhnlichen Geschäftsverkehr zu erzielen wäre.", c: true },
            { t: "Der Wert, der dauerhaft erzielt werden kann.", c: false },
            { t: "Der Preis, den der Eigentümer haben möchte.", c: false },
            { t: "Der steuerliche Einheitswert.", c: false }
        ],
        e: "Aktueller Marktwert."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 16 (SC): Was ist der Beleihungswert?",
        a: [
            { t: "Ein Wert, der während der gesamten Beleihungszeit bei ordnungsgemäßer Bewirtschaftung sicher erzielt werden kann.", c: true },
            { t: "Der maximale Verkaufspreis bei Spekulation.", c: false },
            { t: "Der Kaufpreis plus Nebenkosten.", c: false },
            { t: "Der Versicherungswert.", c: false }
        ],
        e: "Sicherheitsorientierter Wert (meist < Verkehrswert)."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 17 (SC): Wie hoch ist die Beleihungsgrenze bei Pfandbriefbanken (Realkredit)?",
        a: [
            { t: "60 % des Beleihungswertes", c: true },
            { t: "80 % des Verkehrswertes", c: false },
            { t: "100 % des Kaufpreises", c: false },
            { t: "54 % des Ertragswertes", c: false }
        ],
        e: "§ 14 PfandBG - sehr strenge Grenze für günstige Zinsen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 18 (MC): Welche Wertermittlungsverfahren gibt es (ImmoWertV)?",
        a: [
            { t: "Vergleichswertverfahren", c: true },
            { t: "Ertragswertverfahren", c: true },
            { t: "Sachwertverfahren", c: true },
            { t: "Schätzwertverfahren", c: false }
        ],
        e: "Die drei normierten Verfahren."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 19 (SC): Wann wird das Vergleichswertverfahren angewendet?",
        a: [
            { t: "Bei unbebauten Grundstücken und Eigentumswohnungen (wenn Vergleichspreise vorhanden).", c: true },
            { t: "Bei Fabrikanlagen.", c: false },
            { t: "Bei Kirchen.", c: false },
            { t: "Wenn keine Kaufpreise bekannt sind.", c: false }
        ],
        e: "Direkter Marktvergleich."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 20 (SC): Wann wird das Ertragswertverfahren angewendet?",
        a: [
            { t: "Bei Mietwohnhäusern und Gewerbeobjekten (Rendite steht im Vordergrund).", c: true },
            { t: "Bei selbstgenutzten Einfamilienhäusern.", c: false },
            { t: "Bei unbebauten Grundstücken.", c: false },
            { t: "Bei Liebhaberobjekten.", c: false }
        ],
        e: "Der Wert kommt aus den Mieteinnahmen."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 21 (SC): Wann wird das Sachwertverfahren angewendet?",
        a: [
            { t: "Bei eigengenutzten Ein- und Zweifamilienhäusern (Substanz steht im Vordergrund).", c: true },
            { t: "Bei Bürohochhäusern.", c: false },
            { t: "Bei Eigentumswohnungen.", c: false },
            { t: "Bei reinen Kapitalanlagen.", c: false }
        ],
        e: "Bodenwert + Bauwert = Sachwert."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 22 (SC): Wie berechnet sich der Bodenwert?",
        a: [
            { t: "Bodenrichtwert x Grundstücksfläche", c: true },
            { t: "Jahresmiete x Vervielfältiger", c: false },
            { t: "Herstellungskosten minus Abschreibung", c: false },
            { t: "Schätzung des Maklers", c: false }
        ],
        e: "Bodenrichtwerte werden vom Gutachterausschuss veröffentlicht."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 23 (SC): Was ist der Rohertrag beim Ertragswertverfahren?",
        a: [
            { t: "Die marktüblich erzielbare Jahresnettokaltmiete", c: true },
            { t: "Die Warmmiete inkl. Heizung", c: false },
            { t: "Der Gewinn nach Steuern", c: false },
            { t: "Die Miete eines Monats", c: false }
        ],
        e: "Basis der Berechnung."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 24 (MC): Was gehört zu den Bewirtschaftungskosten (nicht umlagefähig)?",
        a: [
            { t: "Verwaltungskosten", c: true },
            { t: "Instandhaltungskosten", c: true },
            { t: "Mietausfallwagnis", c: true },
            { t: "Heizkosten", c: false }
        ],
        e: "Kosten, die den Ertrag mindern."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 25 (SC): Was ist der Liegenschaftszinssatz?",
        a: [
            { t: "Der Zinssatz, mit dem Verkehrswerte von Grundstücken im Durchschnitt marktüblich verzinst werden.", c: true },
            { t: "Der Hypothekenzins der Bank.", c: false },
            { t: "Der Zinssatz für das Sparbuch.", c: false },
            { t: "Die Inflation.", c: false }
        ],
        e: "Maßstab für die Rentabilität des Grundstücks."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 26 (SC): Welche Reihenfolge gilt bei der Zwangsversteigerung (Rangklassen § 10 ZVG)?",
        a: [
            { t: "Verfahrenskosten -> Öffentliche Lasten -> Grundpfandrechte", c: true },
            { t: "Bank -> Staat -> Gericht", c: false },
            { t: "Persönliche Gläubiger -> Dingliche Gläubiger", c: false },
            { t: "Alphabetisch", c: false }
        ],
        e: "Kosten und Steuern gehen vor Banken."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 27 (SC): Wann kann der Zuschlag in der Zwangsversteigerung im ersten Termin versagt werden (Wertgrenzen)?",
        a: [
            { t: "Wenn das Gebot unter 5/10 (50%) des Verkehrswertes liegt (Muss-Versagung).", c: true },
            { t: "Wenn das Gebot unter 100% liegt.", c: false },
            { t: "Wenn der Schuldner widerspricht.", c: false },
            { t: "Wenn die Bank unzufrieden ist.", c: false }
        ],
        e: "Schutz vor Verschleuderung."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 28 (SC): Was ist die 7/10-Grenze in der Zwangsversteigerung?",
        a: [
            { t: "Ein Gläubiger kann den Zuschlag versagen lassen, wenn das Gebot unter 70% des Verkehrswertes bleibt (Kann-Versagung).", c: true },
            { t: "Die Bank muss zuschlagen.", c: false },
            { t: "Der Bieter muss 70% anzahlen.", c: false },
            { t: "Die Gebühren betragen 7/10.", c: false }
        ],
        e: "Recht des betreibenden Gläubigers."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 29 (SC): Wie hoch ist die Sicherheitsleistung (Bietersicherheit) im Versteigerungstermin?",
        a: [
            { t: "10 % des festgesetzten Verkehrswertes", c: true },
            { t: "10 % des Gebotes", c: false },
            { t: "5.000 EUR pauschal", c: false },
            { t: "Keine Sicherheit nötig", c: false }
        ],
        e: "Muss vor oder im Termin geleistet werden (Scheck/Überweisung)."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 30 (SC): Was ist die Zwangsverwaltung?",
        a: [
            { t: "Ein Verfahren, bei dem ein Verwalter die Erträge (Mieten) einzieht, um Gläubiger zu befriedigen (Substanz bleibt erhalten).", c: true },
            { t: "Der Verkauf des Hauses.", c: false },
            { t: "Die Renovierung durch die Bank.", c: false },
            { t: "Die Sperrung des Kontos.", c: false }
        ],
        e: "Alternative zur Versteigerung bei Mietobjekten."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 31 (MC): Welche Risiken deckt die Wohngebäudeversicherung ab?",
        a: [
            { t: "Feuer", c: true },
            { t: "Leitungswasser", c: true },
            { t: "Sturm/Hagel", c: true },
            { t: "Diebstahl", c: false }
        ],
        e: "Pflichtversicherung bei Finanzierung (meist Feuer)."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 32 (SC): Was ist eine Elementarschadenversicherung?",
        a: [
            { t: "Zusatzversicherung für Schäden durch Naturereignisse (Überschwemmung, Erdbeben, Schneedruck).", c: true },
            { t: "Versicherung gegen Einbruch.", c: false },
            { t: "Versicherung für Glasbruch.", c: false },
            { t: "Haftpflichtversicherung.", c: false }
        ],
        e: "Wichtig in Risikogebieten."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 33 (SC): Wozu dient die Risikolebensversicherung bei einer Finanzierung?",
        a: [
            { t: "Absicherung der Hinterbliebenen/Bank im Todesfall des Darlehensnehmers.", c: true },
            { t: "Geldanlage für das Alter.", c: false },
            { t: "Absicherung gegen Arbeitslosigkeit.", c: false },
            { t: "Zahlung der Reparaturen.", c: false }
        ],
        e: "Schutz vor Zwangsverkauf bei Tod des Verdieners."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 34 (SC): Was ist die Restschuldversicherung?",
        a: [
            { t: "Spezielle Versicherung, die bei Tod, Arbeitsunfähigkeit oder Arbeitslosigkeit die Raten übernimmt.", c: true },
            { t: "Versicherung gegen Zinsanstieg.", c: false },
            { t: "Rechtsschutzversicherung.", c: false },
            { t: "Hausratversicherung.", c: false }
        ],
        e: "Oft teuer, aber bietet umfassenden Raten-Schutz."
    },
    {
        cat: "7. Sicherheiten",
        q: "Frage 35 (SC): Was ist eine 'Vorratsgrundschuld'?",
        a: [
            { t: "Eine Grundschuld, die noch im Grundbuch steht, aber aktuell kein Darlehen sichert (Eigentümergrundschuld).", c: true },
            { t: "Eine Grundschuld auf Vorrat für Lebensmittel.", c: false },
            { t: "Eine gelöschte Grundschuld.", c: false },
            { t: "Eine illegale Grundschuld.", c: false }
        ],
        e: "Kann kostengünstig für neue Kredite abgetreten werden."
    },

    // ============================================================
    // KAPITEL 8: IMMOBILIE ALS KAPITALANLAGE (Fragen 1-12)
    // ============================================================
    {
        cat: "8. Kapitalanlage",
        q: "Frage 1 (MC): Welche Motive hat ein Kapitalanleger beim Immobilienkauf?",
        a: [
            { t: "Erzielung einer Rendite (Mieteinnahmen)", c: true },
            { t: "Steuerliche Vorteile (Abschreibung/Werbungskosten)", c: true },
            { t: "Schutz vor Inflation (Sachwert)", c: true },
            { t: "Mietfreies Wohnen", c: false }
        ],
        e: "Vermögensaufbau und -sicherung."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 2 (MC): Welche Risiken trägt der Kapitalanleger?",
        a: [
            { t: "Mietausfallwagnis (Leerstand)", c: true },
            { t: "Instandhaltungsrisiko", c: true },
            { t: "Zinsänderungsrisiko (bei Anschlussfinanzierung)", c: true },
            { t: "Risiko, dass er selbst einziehen muss", c: false }
        ],
        e: "Immobilie ist keine risikolose Anlage."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 3 (SC): Was beschreibt der 'Leverage-Effekt' (Hebelwirkung)?",
        a: [
            { t: "Die Erhöhung der Eigenkapitalrendite durch den Einsatz von Fremdkapital (sofern GK-Rendite > FK-Zins).", c: true },
            { t: "Das Risiko, alles zu verlieren.", c: false },
            { t: "Die Hebelwirkung beim Bau.", c: false },
            { t: "Die Steuerersparnis durch AfA.", c: false }
        ],
        e: "Schulden machen kann sich lohnen, wenn der Zins niedrig ist."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 4 (SC): Welche Kennzahl ist für den Kapitalanleger am wichtigsten?",
        a: [
            { t: "Nettomietrendite (Reinertrag im Verhältnis zum Gesamtkaufpreis)", c: true },
            { t: "Bruttomietrendite", c: false },
            { t: "Liebhaberwert", c: false },
            { t: "Bodenrichtwert", c: false }
        ],
        e: "Echte Verzinsung des eingesetzten Kapitals."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 5 (SC): Was ist der Unterschied zwischen Brutto- und Nettomietrendite?",
        a: [
            { t: "Die Nettomietrendite berücksichtigt Kaufnebenkosten und nicht umlagefähige Bewirtschaftungskosten.", c: true },
            { t: "Es gibt keinen Unterschied.", c: false },
            { t: "Die Bruttorendite ist immer niedriger.", c: false },
            { t: "Nettorendite ist nach Steuern.", c: false }
        ],
        e: "Netto ist ehrlicher."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 6 (MC): Welche steuerlichen Vorteile kann ein Kapitalanleger nutzen?",
        a: [
            { t: "Abzug der Schuldzinsen als Werbungskosten", c: true },
            { t: "Gebäudeabschreibung (AfA)", c: true },
            { t: "Abzug der Tilgung", c: false },
            { t: "Baukindergeld", c: false }
        ],
        e: "Staatliche Beteiligung an den Kosten."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 7 (SC): Was ist eine 'Verlustzuweisungsgesellschaft' (Geschlossener Fonds)?",
        a: [
            { t: "Eine Gesellschaft, die Anlegern steuerliche Verluste zuweist, um deren Steuerschuld zu mindern (heute stark eingeschränkt).", c: true },
            { t: "Ein Verein für Verlierer.", c: false },
            { t: "Eine Bank, die Verluste macht.", c: false },
            { t: "Eine Versicherung.", c: false }
        ],
        e: "Steuersparmodell (früher populär)."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 8 (SC): Was bedeutet 'Fungibilität' bei Immobilien?",
        a: [
            { t: "Die Eigenschaft, wie leicht oder schwer die Immobilie wieder zu Geld gemacht (verkauft) werden kann.", c: true },
            { t: "Die Brennbarkeit.", c: false },
            { t: "Die Vermietbarkeit.", c: false },
            { t: "Die Finanzierbarkeit.", c: false }
        ],
        e: "Immobilien sind 'immobil' und daher oft schwer fungibel."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 9 (SC): Welches Standortrisiko ist für Gewerbeimmobilien besonders relevant?",
        a: [
            { t: "Klumpenrisiko (Abhängigkeit von einem großen Mieter/Branche)", c: true },
            { t: "Kindergärten in der Nähe.", c: false },
            { t: "Fehlender Spielplatz.", c: false },
            { t: "Zu viel Sonne.", c: false }
        ],
        e: "Wenn der Hauptmieter pleite geht, steht alles leer."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 10 (SC): Was ist Gentrifizierung?",
        a: [
            { t: "Aufwertung eines Stadtteils durch Sanierung, was zu steigenden Mieten und Verdrängung einkommensschwacher Bewohner führt.", c: true },
            { t: "Der Verfall von Altbauten.", c: false },
            { t: "Der Bau von Sozialwohnungen.", c: false },
            { t: "Die Begrünung der Stadt.", c: false }
        ],
        e: "Soziodemografischer Wandel."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 11 (SC): Was ist die Mietpreisbremse?",
        a: [
            { t: "Gesetzliche Regelung, die den Anstieg der Mieten bei Wiedervermietung in angespannten Märkten begrenzt (meist max. 10% über Vergleichsmiete).", c: true },
            { t: "Ein Bauteil am Haus.", c: false },
            { t: "Ein Verbot, Miete zu verlangen.", c: false },
            { t: "Eine Steuer.", c: false }
        ],
        e: "Eingriff in den Markt zum Mieterschutz."
    },
    {
        cat: "8. Kapitalanlage",
        q: "Frage 12 (SC): Was gilt für die Spekulationssteuer bei Kapitalanlagen?",
        a: [
            { t: "Gewinne sind steuerfrei, wenn zwischen Kauf und Verkauf mehr als 10 Jahre liegen.", c: true },
            { t: "Gewinne sind immer steuerfrei.", c: false },
            { t: "Gewinne sind immer steuerpflichtig.", c: false },
            { t: "Frist beträgt 2 Jahre.", c: false }
        ],
        e: "Wichtiger Exit-Faktor."
    },

    // ============================================================
    // KAPITEL 9: KUNDENBERATUNG & RECHTLICHE PFLICHTEN (Fragen 1-25)
    // ============================================================
    {
        cat: "9. Beratung",
        q: "Frage 1 (MC): Welche Voraussetzungen müssen für die Erlaubniserteilung nach § 34i GewO erfüllt sein?",
        a: [
            { t: "Sachkundenachweis", c: true },
            { t: "Berufshaftpflichtversicherung", c: true },
            { t: "Zuverlässigkeit und geordnete Vermögensverhältnisse", c: true },
            { t: "Ein abgeschlossenes Hochschulstudium", c: false }
        ],
        e: "Die 'vier Säulen' der Erlaubnis."
    },
    {
        cat: "9. Beratung",
        q: "Frage 2 (SC): Wer führt das Vermittlerregister für Immobiliardarlehensvermittler?",
        a: [
            { t: "Die Industrie- und Handelskammer (DIHK)", c: true },
            { t: "Das Finanzamt", c: false },
            { t: "Die BaFin", c: false },
            { t: "Das Gewerbeamt", c: false }
        ],
        e: "Zentrales Register."
    },
    {
        cat: "9. Beratung",
        q: "Frage 3 (SC): Wann müssen dem Kunden die 'Statusbezogenen Informationen' (Wer bin ich?) übergeben werden?",
        a: [
            { t: "Beim ersten Geschäftskontakt (vor der Beratung)", c: true },
            { t: "Erst bei Vertragsunterschrift", c: false },
            { t: "Zusammen mit dem ESIS-Merkblatt", c: false },
            { t: "Nur auf Nachfrage", c: false }
        ],
        e: "Transparenzpflicht zu Beginn."
    },
    {
        cat: "9. Beratung",
        q: "Frage 4 (MC): Welche Angaben müssen in den Statusinformationen enthalten sein?",
        a: [
            { t: "Name und Anschrift des Vermittlers", c: true },
            { t: "Registrierungsnummer und Registerstelle", c: true },
            { t: "Angaben zur Beratung und Vergütung", c: false },
            { t: "Die private Handynummer", c: false }
        ],
        e: "Identität und Zulassung."
    },
    {
        cat: "9. Beratung",
        q: "Frage 5 (SC): Was ist das ESIS-Merkblatt?",
        a: [
            { t: "Das Europäische Standardisierte Merkblatt mit individuellen Kreditinfos", c: true },
            { t: "Ein allgemeiner Werbeflyer der Bank", c: false },
            { t: "Der Darlehensvertrag", c: false },
            { t: "Die AGB der Bank", c: false }
        ],
        e: "Muss vorvertraglich ausgehändigt werden zur Vergleichbarkeit."
    },
    {
        cat: "9. Beratung",
        q: "Frage 6 (SC): Wann muss das ESIS-Merkblatt dem Kunden ausgehändigt werden?",
        a: [
            { t: "Rechtzeitig vor Abgabe der Vertragserklärung (vor Unterschrift)", c: true },
            { t: "Nach der Unterschrift", c: false },
            { t: "Bei der Auszahlung des Geldes", c: false },
            { t: "Zusammen mit der ersten Rate", c: false }
        ],
        e: "Damit der Kunde vergleichen kann."
    },
    {
        cat: "9. Beratung",
        q: "Frage 7 (SC): Welche Pflicht besteht bezüglich der Beratung?",
        a: [
            { t: "Beratungspflicht (Kunde muss beraten werden, Verzicht nicht möglich)", c: true },
            { t: "Beratung ist freiwillig", c: false },
            { t: "Der Kunde kann schriftlich auf Beratung verzichten", c: false },
            { t: "Nur bei komplizierten Fällen", c: false }
        ],
        e: "Gesetzlicher Schutz des Verbrauchers."
    },
    {
        cat: "9. Beratung",
        q: "Frage 8 (MC): Was muss das Beratungsprotokoll enthalten?",
        a: [
            { t: "Wünsche und Bedürfnisse des Kunden", c: true },
            { t: "Die empfohlene Finanzierungslösung", c: true },
            { t: "Gründe für die Empfehlung", c: true },
            { t: "Den Wetterbericht", c: false }
        ],
        e: "Dokumentationspflicht."
    },
    {
        cat: "9. Beratung",
        q: "Frage 9 (SC): Wann darf sich ein Vermittler 'Unabhängiger Berater' (Honorarberater) nennen?",
        a: [
            { t: "Wenn er ausschließlich vom Kunden bezahlt wird und keine Provisionen von Banken annimmt", c: true },
            { t: "Wenn er Produkte von mindestens 10 Banken anbietet", c: false },
            { t: "Wenn er selbstständig ist (kein Angestellter)", c: false },
            { t: "Wenn er keine Zielvorgaben hat", c: false }
        ],
        e: "Provisionen schließen den Titel 'Unabhängig' aus."
    },
    {
        cat: "9. Beratung",
        q: "Frage 10 (SC): Was besagt das Kopplungsverbot (§ 492b BGB)?",
        a: [
            { t: "Der Abschluss eines Immobilienkredits darf nicht an den Kauf anderer Finanzprodukte gebunden werden (Ausnahmen: Konto, Versicherung)", c: true },
            { t: "Man darf keine zwei Kredite koppeln", c: false },
            { t: "Eheleute dürfen nicht gekoppelt werden", c: false },
            { t: "Kredite dürfen nicht mit Immobilien gekoppelt werden", c: false }
        ],
        e: "Schutz vor unnötigen Zusatzprodukten."
    },
    {
        cat: "9. Beratung",
        q: "Frage 11 (SC): Welche Ausnahme vom Kopplungsverbot ist zulässig?",
        a: [
            { t: "Ein kostenloses Girokonto zur Ratenzahlung oder eine Wohngebäudeversicherung", c: true },
            { t: "Eine Aktienfonds-Sparplan", c: false },
            { t: "Eine Unfallversicherung", c: false },
            { t: "Ein Handyvertrag", c: false }
        ],
        e: "Dient der Sicherung des Kredits."
    },
    {
        cat: "9. Beratung",
        q: "Frage 12 (SC): Wie lange beträgt die Widerrufsfrist bei Immobiliardarlehen, wenn ordnungsgemäß belehrt wurde?",
        a: [
            { t: "14 Tage", c: true },
            { t: "1 Woche", c: false },
            { t: "1 Monat", c: false },
            { t: "30 Tage", c: false }
        ],
        e: "Ab Vertragsschluss + Belehrung."
    },
    {
        cat: "9. Beratung",
        q: "Frage 13 (SC): Was passiert, wenn die Widerrufsbelehrung fehlt oder fehlerhaft ist?",
        a: [
            { t: "Die Frist verlängert sich auf 1 Jahr und 14 Tage (ewiges Widerrufsrecht früher, jetzt gedeckelt)", c: true },
            { t: "Der Vertrag ist nichtig", c: false },
            { t: "Der Kunde muss sofort zurückzahlen", c: false },
            { t: "Nichts, die Frist bleibt 14 Tage", c: false }
        ],
        e: "Sanktion für die Bank."
    },
    {
        cat: "9. Beratung",
        q: "Frage 14 (SC): Was ist eine Vorfälligkeitsentschädigung?",
        a: [
            { t: "Schadenersatz, den der Kunde an die Bank zahlen muss, wenn er den Kredit während der Zinsbindung zurückzahlt", c: true },
            { t: "Eine Prämie für schnelle Rückzahlung", c: false },
            { t: "Eine Gebühr für die Beratung", c: false },
            { t: "Die Abschlussgebühr", c: false }
        ],
        e: "Ausgleich für den Zinsausfall der Bank."
    },
    {
        cat: "9. Beratung",
        q: "Frage 15 (SC): In welchem Fall darf die Bank KEINE Vorfälligkeitsentschädigung verlangen?",
        a: [
            { t: "Wenn das Darlehen nach Ablauf von 10 Jahren (bei längerer Zinsbindung) gemäß § 489 BGB gekündigt wird", c: true },
            { t: "Wenn der Kunde arbeitslos wird", c: false },
            { t: "Wenn das Haus verkauft wird", c: false },
            { t: "Wenn die Zinsen gesunken sind", c: false }
        ],
        e: "Gesetzliches Kündigungsrecht nach 10 Jahren."
    },
    {
        cat: "9. Beratung",
        q: "Frage 16 (MC): Welche Angaben sind bei Werbung mit Zinssätzen zwingend erforderlich (Preisangabenverordnung PAngV)?",
        a: [
            { t: "Der Name des Kreditgebers", c: true },
            { t: "Der effektive Jahreszins", c: true },
            { t: "Der Sollzins", c: true },
            { t: "Ein 'Repräsentatives Beispiel' (2/3-Beispiel)", c: true }
        ],
        e: "Transparenzgebot."
    },
    {
        cat: "9. Beratung",
        q: "Frage 17 (SC): Was besagt das 'Repräsentative Beispiel' in der Werbung?",
        a: [
            { t: "Ein Zinssatz, den mindestens 2/3 der Kunden voraussichtlich erhalten werden", c: true },
            { t: "Der günstigste Zinssatz (Lockvogel)", c: false },
            { t: "Der Durchschnittszins aller Banken", c: false },
            { t: "Der Zins für Beamte", c: false }
        ],
        e: "Verbot von Lockvogelangeboten."
    },
    {
        cat: "9. Beratung",
        q: "Frage 18 (SC): Was ist ein 'Allgemein-Verbraucherdarlehensvertrag' im Gegensatz zum Immobiliardarlehensvertrag?",
        a: [
            { t: "Ein normaler Ratenkredit ohne Grundpfandrecht (z.B. für Möbel)", c: true },
            { t: "Ein Kredit für Hausbau", c: false },
            { t: "Ein Kredit über 200.000 EUR", c: false },
            { t: "Ein Vertrag zwischen Firmen", c: false }
        ],
        e: "Andere Rechtsvorschriften (z.B. Widerruf)."
    },
    {
        cat: "9. Beratung",
        q: "Frage 19 (SC): Was bedeutet 'Gesamtschuldnerische Haftung' bei Eheleuten?",
        a: [
            { t: "Jeder Partner haftet für die volle Kreditsumme (Bank kann es sich aussuchen)", c: true },
            { t: "Jeder haftet nur für 50%", c: false },
            { t: "Der Mann haftet zuerst", c: false },
            { t: "Man haftet nur bei Scheidung", c: false }
        ],
        e: "Standard bei gemeinsamen Krediten."
    },
    {
        cat: "9. Beratung",
        q: "Frage 20 (SC): Was ist ein 'Fremdwährungsdarlehen'?",
        a: [
            { t: "Ein Kredit in einer anderen Währung (z.B. Schweizer Franken)", c: true },
            { t: "Ein Kredit von einer ausländischen Bank in Euro", c: false },
            { t: "Ein Kredit für den Urlaub", c: false },
            { t: "Ein Kredit in Gold", c: false }
        ],
        e: "Risiko: Währungsschwankungen."
    },
    {
        cat: "9. Beratung",
        q: "Frage 21 (SC): Welches besondere Recht hat der Kunde bei Fremdwährungsdarlehen?",
        a: [
            { t: "Recht auf Umwandlung in Euro, wenn der Wechselkurs sich um mehr als 20% zu seinem Nachteil ändert", c: true },
            { t: "Recht auf sofortige Kündigung ohne Kosten", c: false },
            { t: "Recht auf festen Wechselkurs", c: false },
            { t: "Keine besonderen Rechte", c: false }
        ],
        e: "Schutz vor Überschuldung durch Kursverluste."
    },
    {
        cat: "9. Beratung",
        q: "Frage 22 (SC): Wer muss eine Berufshaftpflichtversicherung abschließen?",
        a: [
            { t: "Jeder Immobiliardarlehensvermittler (§ 34i GewO)", c: true },
            { t: "Nur Makler", c: false },
            { t: "Nur Banken", c: false },
            { t: "Nur, wenn man Angestellte hat", c: false }
        ],
        e: "Pflichtversicherung für Erlaubnis."
    },
    {
        cat: "9. Beratung",
        q: "Frage 23 (SC): Wie hoch ist die Mindestdeckungssumme der Berufshaftpflicht pro Schadensfall?",
        a: [
            { t: "460.000 EUR (Stand 2024, angepasst)", c: true },
            { t: "1 Million EUR", c: false },
            { t: "100.000 EUR", c: false },
            { t: "10.000 EUR", c: false }
        ],
        e: "Schutz bei Falschberatung."
    },
    {
        cat: "9. Beratung",
        q: "Frage 24 (SC): Was passiert, wenn der Vermittler keine Haftpflichtversicherung mehr hat?",
        a: [
            { t: "Die Erlaubnis wird widerrufen (Berufsverbot)", c: true },
            { t: "Er muss Strafe zahlen, darf aber weiterarbeiten", c: false },
            { t: "Nichts, sie ist freiwillig", c: false },
            { t: "Er muss dem Kunden Bescheid geben", c: false }
        ],
        e: "Ohne Versicherung keine Erlaubnis."
    },
    {
        cat: "9. Beratung",
        q: "Frage 25 (SC): Darf ein Vermittler Gelder des Kunden entgegennehmen?",
        a: [
            { t: "Nein, grundsätzlich nicht (außer mit gesonderter Erlaubnis, die sehr selten ist)", c: true },
            { t: "Ja, immer", c: false },
            { t: "Ja, bis 10.000 EUR", c: false },
            { t: "Ja, für den Notar", c: false }
        ],
        e: "Schutz vor Veruntreuung."
    },

    // ============================================================
    // KAPITEL 10: BERECHNUNGEN & FALLBEISPIELE (Die "Rechenaufgaben")
    // ============================================================
    {
        cat: "10. Rechnen",
        q: "Frage 1 (SC): Ein Kunde hat ein monatliches Nettoeinkommen von 4.000 EUR und Ausgaben von 2.500 EUR. Wie hoch ist der maximale monatliche Kapitaldienst (Rate)?",
        a: [
            { t: "1.500 EUR", c: true },
            { t: "4.000 EUR", c: false },
            { t: "2.500 EUR", c: false },
            { t: "1.000 EUR (Sicherheitsabschlag beachten)", c: false }
        ],
        e: "Einnahmen - Ausgaben = Freies Budget."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 2 (SC): Ein Darlehen über 200.000 EUR hat einen Zinssatz von 2,0 % und eine anfängliche Tilgung von 3,0 %. Wie hoch ist die monatliche Rate?",
        a: [
            { t: "833,33 EUR", c: true },
            { t: "1.000,00 EUR", c: false },
            { t: "500,00 EUR", c: false },
            { t: "416,67 EUR", c: false }
        ],
        e: "Rechnung: 200.000 * 5% (2+3) = 10.000 p.a. / 12 = 833,33."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 3 (SC): Ein Kunde kann monatlich 1.000 EUR zahlen. Der Zins beträgt 1,5 %, die Tilgung soll 2,5 % betragen. Wie viel Kredit kann er aufnehmen? (Annuitätendarlehen)",
        a: [
            { t: "300.000 EUR", c: true },
            { t: "250.000 EUR", c: false },
            { t: "100.000 EUR", c: false },
            { t: "400.000 EUR", c: false }
        ],
        e: "Rechnung: (1.000 * 12) / 0,04 = 300.000."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 4 (SC): Kaufpreis 300.000 EUR. Nebenkosten: 6,5% GrESt, 2% Notar, 3,57% Makler. Wie hoch sind die Anschaffungskosten gesamt?",
        a: [
            { t: "336.210 EUR", c: true },
            { t: "300.000 EUR", c: false },
            { t: "318.000 EUR", c: false },
            { t: "360.000 EUR", c: false }
        ],
        e: "NK gesamt = 12,07%. 300.000 * 1,1207 = 336.210."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 5 (SC): Ein Darlehen über 100.000 EUR hat 10 Jahre Zinsbindung. Zinssatz 2%. Tilgung 2%. Wie hoch ist die Restschuld nach 1 Jahr (grob)?",
        a: [
            { t: "ca. 98.000 EUR", c: true },
            { t: "96.000 EUR", c: false },
            { t: "100.000 EUR", c: false },
            { t: "90.000 EUR", c: false }
        ],
        e: "2% Tilgung = 2.000 EUR Abtrag im ersten Jahr (plus ersparte Zinsen)."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 6 (SC): Verkehrswert 400.000 EUR. Beleihungswert 360.000 EUR. Kunde möchte 280.000 EUR Kredit. Wie hoch ist der Beleihungsauslauf (Beleihungswert als Basis)?",
        a: [
            { t: "ca. 77,8 %", c: true },
            { t: "70 %", c: false },
            { t: "100 %", c: false },
            { t: "60 %", c: false }
        ],
        e: "280.000 / 360.000 * 100 = 77,77%."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 7 (SC): Bei welcher Tilgungshöhe ist ein Darlehen (Zins 2%) am schnellsten zurückgezahlt?",
        a: [
            { t: "5 % Tilgung", c: true },
            { t: "1 % Tilgung", c: false },
            { t: "2 % Tilgung", c: false },
            { t: "3 % Tilgung", c: false }
        ],
        e: "Höhere Tilgung = schnellere Schuldenfreiheit."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 8 (SC): Ein Kunde zahlt 50.000 EUR Eigenkapital bei einem Kaufpreis von 250.000 EUR (ohne NK). Wie hoch ist der Finanzierungsbedarf (ohne NK)?",
        a: [
            { t: "200.000 EUR", c: true },
            { t: "250.000 EUR", c: false },
            { t: "300.000 EUR", c: false },
            { t: "150.000 EUR", c: false }
        ],
        e: "Kaufpreis - Eigenkapital."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 9 (SC): Wie viel Grunderwerbsteuer fällt bei einem Kaufpreis von 500.000 EUR in einem Bundesland mit 5,0 % an?",
        a: [
            { t: "25.000 EUR", c: true },
            { t: "17.500 EUR", c: false },
            { t: "32.500 EUR", c: false },
            { t: "50.000 EUR", c: false }
        ],
        e: "500.000 * 0,05."
    },
    {
        cat: "10. Rechnen",
        q: "Frage 10 (SC): Was ist teurer: Ein Nominalzins von 1,9 % mit 100% Auszahlung oder ein Nominalzins von 1,7 % mit 95% Auszahlung (Disagio) auf 5 Jahre?",
        a: [
            { t: "Das Disagio-Angebot ist wahrscheinlich teurer (Effektivzins prüfen!)", c: true },
            { t: "Das Disagio-Angebot ist immer billiger", c: false },
            { t: "Beide sind gleich", c: false },
            { t: "Nominalzins ist entscheidend", c: false }
        ],
        e: "Effektivzinsvergleich ist notwendig."
    }
]; // EOF
