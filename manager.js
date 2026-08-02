let x = 0;
let y = false;
let cat2 = new Audio("soundsz/Cat_2.m4a");
let cat = new Audio("soundsz/Cat.m4a");
let chicken = new Audio("soundsz/Chicken.m4a");
let cow = new Audio("soundsz/Cow.m4a");
let cuckoo = new Audio("soundsz/Cuckoo.m4a");
let dog = new Audio("soundsz/Dog.m4a");
let donkey = new Audio("soundsz/Donkey.m4a");
let duck2 = new Audio("soundsz/Duck_2.m4a");
let duck = new Audio("soundsz/Duck.wav");
let eagle = new Audio("soundsz/Eagle.m4a");
let elephant = new Audio("soundsz/Elephant.m4a");
let frog = new Audio("soundsz/Frog.m4a");
let gorilla = new Audio("soundsz/Gorilla.m4a");
let horse = new Audio("soundsz/Horse.m4a");
let hyena = new Audio("soundsz/Hyena.m4a");
let monkey = new Audio("soundsz/Monkey.m4a");
let pig = new Audio("soundsz/Pig.m4a");
let rooster = new Audio("soundsz/Rooster.m4a");
let sheep = new Audio("soundsz/Sheep.m4a");
let wolf = new Audio("soundsz/Wolf.m4a");
let soundsz = [cat2, cat, chicken, cow, cuckoo, dog, donkey, duck2, duck, eagle, elephant, frog, gorilla, horse, hyena, monkey, pig, rooster, sheep, wolf];


function toggleMuted() {
  y = !y;
  if (y)
    document.getElementById('mutebut').src = "imagesz/WoVolum.png";
  else
    document.getElementById('mutebut').src = "imagesz/WiVolum.png";
}

function plrmsnD() {
    let l = soundsz.length;
    let n = Math.floor(getRandomArbitrary(0, l));
    if (!y) {
        soundsz[n].volume = 0.2;
        soundsz[n].play();
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getTheF() {
    let engluno = ["Absence", "Actions", "All's well", "All good things", "All that glitters", "All's fair", "Among the blind", "An apple a day", "A chain", "A journey of a thousand miles", "A leopard", "A picture", "A stitch in time", "A watched pot", "Beauty", "Beggars", "Better late", "Better safe", "Birds of a feather", "Blood", "Curiosity", "Don't bite", "Don't count your chickens", "Don't cry", "Don't judge a book", "Don't put all of your eggs", "Easy come", "Every cloud", "Fortune", "Good things come", "Honesty", "Hope for the best", "If it ain't broke", "If you can't beat 'em", "If you play with fire", "If you want something done right", "Keep your friends close", "Knowledge", "Like father", "Look", "Out of sight", "Practice", "Rome", "Strike", "The early bird", "The enemy of my enemy", "The grass", "The pen", "Time", "Two heads", "Two wrongs"];
    let spanuno = ["Agua pasada", "Al mal tiempo", "A falta de pan", "Caminante no hay camino", "De tal palo", "Dios los cría", "El burro delante", "El que ríe último", "El que se fue a Sevilla", "En Abril", "La curiosidad", "Mas vale pájaro en mano", "Mas vale prevenir", "Mas vale solo", "No dejes para mañana", "No es más rico quien más tiene", "No hay que empezar la casa", "No le pidas peras", "No por madrugar", "Para presumir", "Perro ladrador", "Quien mucho abarca", "Se coje antes a un mentiroso"];
    let frenuno = ["Qui vole un œuf", "L'habit", "Il n'y a pas de fumée", "Qui sème le vent", "Les murs", "Pierre qui roule", "Mieux vaut tard", "Qui ne risque rien", "L'union", "Après la pluie", "Loin des yeux", "Chacun voit midi", "Il faut battre le fer", "Rira bien", "On ne peut pas avoir le beurre", "Qui va à la chasse", "Les bons comptes", "Il ne faut pas mettre tous ses œufs", "Un tiens vaut mieux", "Tel est pris", "Quand le chat n'est pas là", "L'argent", "Qui se ressemble", "Tout vient à point", "Les grands esprits", "La nuit", "Il faut tourner sa langue sept fois dans sa bouche", "Ce n'est pas la mer", "Chose promise", "Qui aime bien", "On n'apprend pas à un vieux singe", "Quand on veut", "Il vaut mieux prévenir", "Tout est bien", "À bon entendeur"];
    let germuno = ["Hochmut", "Der Apfel", "Aller Anfang", "Reden", "Schönheit", "Alte Liebe", "Alter", "Angriff", "Die Ausnahme", "Aufgeschoben", "Blut", "Blinder Eifer", "Das Auge", "Das letzte Hemd", "Der Fisch", "Der frühe Vogel", "Der Glaube", "Der Klügere", "Der Ton", "Der Zweck", "Des einen Glück", "Die Ratte", "Die Welt", "Die Zeit", "Ehrlichkeit", "Ein blindes Huhn", "Eine Hand", "Ein Unglück", "Nicht alles was glänzt", "Guter Rat", "Jeder", "Keine Rose", "Kleinvieh", "Lachen", "Liebe", "Morgenstund", "Not", "Probieren", "Steter Tropfen", "Schönheit", "Übung", "Unkraut", "Der Blinde", "Zeit", "Wer zuerst kommt", "Wer im Glashaus sitzt", "Pech im Spiel", "Sonnenschein", "Großem Glück", "Glück und Glas", "Das Glück", "Bescheiden Glück", "Ende gut", "Das Glück der Erde", "Eine Schwalbe", "Gelegenheit", "Geld", "Leben", "Jeder Topf", "Wer Wind sät", "Harte Schale"];
    let portuno = ["A cavalo dado", "A mentira", "À noite", "A ocasião", "A pensar", "A pressa", "A união", "A voz do povo", "Água mole em pedra dura", "Águas passadas", "Amigos amigos", "Antes tarde", "Apressado", "Aqui se faz", "Árvore que nasce torta", "As aparências", "Batatinha quando nasce", "Cachorro que late", "Cada cabeça", "Casa de ferreiro", "De grão em grão", "Desgraça pouco", "Deus ajuda", "Deus escreve certo", "Devagar com o andor", "Devagar", "Dizei-me com quem andas", "É melhor não cutucar a onça", "É melhor prevenir", "Em boca fechada", "Em rio que tem piranha", "Em terra de cego", "Entre marido e mulher", "Filho de peixe", "Gato escaldado", "Ladrão que rouba ladrão", "Macaco velho", "Mais vale um pássaro", "Melhor prevenir", "Nada como um dia", "Não adianta chorar", "Não deixes para amanhã", "Não há bem que sempre dure", "Não se faz uma omelete", "Nem tanto ao mar", "Nem tudo que reluz", "Nem tudo", "O barato", "O bom filho", "O pior cego", "O prometido", "O que não mata", "O que os olhos não veem", "O seguro", "Olho por olho", "Onde há fumaça", "Os últimos", "Para baixo", "Para bom entendedor", "Pela boca", "Quando a esmola é muita", "Quando um burro fala", "Quando um não quer", "Quanto mais alto", "Quem avisa", "Quem cala", "Quem canta seus males", "Quem casa", "Quem com ferro fere", "Quem conta um conto", "Quem desdenha", "Quem é vivo", "Quem espera", "Quem fala o que quer", "Quem feio ama", "Quem não arrisca", "Quem não chora", "Quem não tem cão", "Quem nunca comeu melado", "Quem parte e reparte e não fica com a melhor parte", "Quem procura", "Quem ri por último", "Quem sai aos seus", "Quem semeia ventos", "Quem tem boca", "Quem tudo quer", "Quem vai ao vento", "Quem vê cara", "Rapadura é doce", "Saco vazio", "Santo da casa", "Se conselho fosse bom ninguém dava", "Se Maomé não vai à montanha", "Tudo tem solução", "Um gesto", "Um homem prevenido", "Vão-se os anéis", "Vingança"];
    let poliuno = ["Bez pracy", "Co dwie głowy", "Kto pyta", "Lepszy rydz", "Nie taki diabeł", "Raz na wozie", "Lepszy wróbel w garści", "Darowanemu koniowi", "Dobry zwyczaj", "Dzieci i ryby", "Gdzie kucharek sześć", "Pies co dużo szczeka", "Lepszy wróbel w garści", "Skleroza nie boli", "Jak sobie pościelesz", "Nie mój cyrk", "Kto pod kim dołki kopie", "Mądry Polak", "Apetyt", "Do wesela", "Szukać igły", "Twardy orzech", "Gdyby kózka nie skakała", "Jedna jaskółka", "Nie śmiej się dziadku", "Dziadek się śmiał", "Jak dbasz"];
    let italuno = ["A buon intenditor", "A caval donato", "A mali estremi", "Al cuor", "Anno nuovo", "Buon sangue", "Can che abbaia", "Chi ben comincia", "Chi di spada ferisce", "Chi dorme", "Chi è causa del suo mal", "Chi fa da sé", "Chi ha denti non ha pane", "Chi ha tempo", "Chi la dura", "Chi la fa", "Chi non beve in compagnia", "Chi non ha testa", "Chi non muore", "Chi non risica", "Chi non sa leggere la sua scrittura", "Chi più ne ha", "Chi rompe paga", "Chi sa fa", "Chi si accontenta", "Chi si fa i fatti suoi", "Chi tace", "Chi tardi arriva", "Chi troppo vuole", "Chi trova un amico", "Chi va con lo zoppo", "Chi va piano", "Chi va via", "Cielo a pecorelle", "Da cosa", "Date a Cesare", "Del senno di poi", "Dimmi con chi vai", "Domandare è lecito", "Errare è umano", "Fatta la legge", "Fidarsi è bene", "Fortunato al gioco", "Gallina vecchia", "Gente allegra", "Gioco di mano", "Il diavolo fa le pentole", "Il gioco è bello", "Il lupo perde il pelo", "Il mattino", "Il primo amore", "Il riso nasce nell'acqua", "Il tempo", "Impara l'arte", "L'abito", "L'acqua fa male", "L'altezza", "L'amore non è bello", "L'apparenza", "L'appetito", "L'eccezione", "L'erba del vicino", "L'erba voglio", "L'occasione", "L'ospite è come il pesce:", "L'unione", "La calma", "La fortuna", "La fretta", "La gatta frettolosa", "La lingua batte", "La madre degli imbecilli", "La notte", "La pazienza", "La ruota della fortuna", "La sera leoni", "La speranza", "Inutile piangere", "La via dell'inferno", "La virtù", "Le bugie", "Mal comune", "Meglio soli", "Meglio tardi", "Moglie e buoi", "Morto un papa", "Natale con i tuoi", "Ne uccide più la lingua", "Nel regno dei ciechi", "Nella botte piccola", "Non c'è due", "Non c'è peggior sordo", "Non dire gatto", "Non è bello ciò che è bello", "Non è tutto oro", "Non mettere il carro", "Non rimandare a domani", "Non si insegna", "Non si può avere la botte piena", "Non tutte le ciambelle", "Non tutto il male", "Occhio non vede", "Occhio per occhio", "Ogni lasciata", "Paese che vai", "Passata la festa", "Patti chiari", "Persona trista", "Piove sempre", "Quando c'è la salute", "Quando il gatto non c'è", "Quando il gioco si fa duro", "Ride bene", "Rosso di sera", "Sbagliando", "Verba volant", "Se non è zuppa", "Se son rose", "Si dice il peccato", "Si parla del diavolo", "Si stava meglio", "Sposa bagnata", "Tale padre", "Tutto fumo", "Tanto va la gatta al lardo", "Tentar", "Tra i due litiganti", "Tra il dire e il fare", "Tra moglie e marito", "Tromba di culo", "Tutte le strade", "Tutti i nodi", "Tutto è bene", "Una ciliegia", "Una mela al giorno", "Una rondine", "Una volta per uno", "Uomo avvisato", "Vivi", "In vino", "Escusatio non petita"];
    let allofem = [engluno, spanuno, frenuno, germuno, portuno, poliuno, italuno];
    return allofem[x];
}

function getTheS() {
    let engldue = [" makes the heart grow fonder.", " speak louder than words.", " that ends well.", " come to an end.", " is not gold.", " in love and war.", " the one-eyed man is king.", " keeps the doctor away.", " is only as strong as its weakest link.", " begins with a single step.", " can't change its spots.", " is worth a thousand words.", " saves nine.", " never boils.", " is in the eye of the beholder.", " can't be choosers.", " than never.", " than sorry.", " flock together.", " is thicker than water.", " killed the cat.", " the hand that feeds you.", " before they hatch.", " over spilled milk.", " by its cover.", " in one basket.", " easy go.", " has a silver lining.", " favors the bold.", " to those who wait.", " is the best policy.", " prepare for the worst.", " don't fix it.", " join 'em.", " you'll get burned.", " you have to do it yourself.", " and your enemies closer.", " is power.", " like son.", " before you leap.", " out of mind.", " makes perfect.", " wasn't built in a day.", " while the iron is hot.", " catches the worm.", " is my friend.", " is always greener on the other side.", " is mightier than the sword.", " is money.", " are better than one.", " don't make a right."];
    let spandue = [" no mueve molinos.", " buena cara.", " buenas son tortas.", " se hace camino al andar.", " tal astilla.", " y ellos se juntan.", " para que no se espante.", " ríe mejor.", " perdió su silla.", " aguas mil.", " mató al gato.", " que ciento volando.", " que curar.", " que mal acompañado.", " lo que puedes hacer hoy.", " sino quien menos necesita.", " por el tejado.", " al olmo.", " amanece más temprano.", " hay que sufrir.", " poco mordedor.", " poco aprieta.", " que a un cojo."];
    let frendue = [" vole un bœuf.", " ne fait pas le moine.", " sans feu.", " récolte la tempête.", " ont des oreilles.", " n'amasse pas mousse.", " que jamais.", " n'a rien.", " fait la force.", " le beau temps.", " loin du cœur.", " à sa porte.", " tant qu'il est chaud.", " qui rira le dernier.", " et l'argent du beurre.", " perd sa place.", " font les bons amis.", " dans le même panier.", " que deux tu l'auras.", " qui croyait prendre.", " les souris dansent.", " ne fait pas le bonheur.", " s'assemble.", " à qui sait attendre.", " se rencontrent.", " porte conseil.", " avant de parler.", " à boire.", " chose due.", " châtie bien.", " à faire la grimace.", " on peut.", " que guérir.", " qui finit bien.", " salut."];
    let germdue = [" kommt vor dem Fall.", " fällt nicht weit vom Stamm.", " ist schwer.", " ist Silber, schweigen ist Gold.", " liegt im Auge des Betrachters.", " rostet nicht.", " vor Schönheit.", " ist die beste Verteidigung.", " bestätigt die Regel.", " ist nicht aufgehoben.", " ist dicker als Wasser.", " schadet nur.", " isst mit.", " hat keine Taschen.", " stinkt vom Kopf her.", " fängt den Wurm.", " versetzt Berge.", " gibt nach.", " macht die Musik.", " heiligt die Mittel.", " des andern Unglück.", " verlässt das sinkende Schiff.", " ist ein Dorf.", " heilt alle Wunden.", " währt am längsten.", " findet auch mal ein Korn.", " wäscht die andere Hand.", " kommt selten allein.", " ist gold.", " ist teuer.", " ist seines Glückes Schmied.", " ohne Dornen.", " macht auch Mist.", " ist die beste Medizin.", " macht blind.", " hat Gold im Mund.", " macht erfinderisch.", " geht über studieren.", " höhlt den Stein.", " vergeht, Tugend besteht.", " macht den Meister.", " vergeht nicht.", " ist unter den Einäugigen König.", " ist Geld.", " mahlt zuerst.", " sollte nicht mit Steinen werfen.", " Glück in der Liebe.", " folgt meist nach Regen.", " ist nicht zu trauen.", " wie leicht bricht das.", " ist mit den Tüchtigen.", " kommt alle Tage.", " Alles gut.", " liegt auf dem Rücken der Pferde.", " macht noch keinen Sommer.", " macht Diebe.", " regiert die Welt.", " und leben lassen.", " findet einen Deckel.", " wird Sturm ernten.", " weicher Kern."];
    let portdue = [" não se olham os dentes.", " tem perna curta.", " todos os gatos são pardos.", " faz o ladrão.", " morreu um burro.", " é inimiga da perfeição.", " faz a força.", " é voz de Deus.", " tanto bate até que fura.", " não movem moinhos.", " negócios à parte.", " do que nunca.", " come cru.", " aqui se paga.", " morre torta.", " enganam.", " se esparrama pelo chão.", " não morde.", " uma sentença.", " espeto de pau.", " a galinha enche o papo.", " é bobagem.", " quem cedo madruga.", " por linhas tortas.", " que o santo é de barro.", " se vai ao longe.", " e eu te direi quem és.", " com vara curta.", " do que remediar.", " não entra mosca.", " jacaré nada de costas.", " quem tem um olho é rei.", " não se mete a colher.", " peixinho é.", " tem medo de água fria.", " tem cem anos de perdão.", " não pula em galho seco.", " na mão do que dois voando.", " que remediar.", " depois do outro.", " sobre o leite derramado.", " o que podes fazer hoje.", " nem mal que nunca se acabe.", " sem quebrar os ovos.", " nem tanto à terra.", " é ouro.", " são flores.", " sai caro.", " à casa torna.", " é o que não quer ver.", " é devido.", " engorda.", " o coração não sente.", " dente por dente.", " há fogo.", " serão os primeiros.", " todo Santo ajuda.", " meia palavra basta.", " morre o peixe.", " o santo desconfia.", " o outro baixa as orelhas.", " dois não brigam.", " maior a queda.", " amigo é.", " consente.", " espanta.", " quer casa.", " com ferro será ferido.", " aumenta um ponto.", " quer comprar.", " sempre aparece.", " sempre alcança.", " escuta o que não quer.", " bonito lhe parece.", " não petisca.", " caça com gato.", " quando come se lambuza.", " ou é tolo ou não sabe da arte.", " acha.", " ri melhor.", " não degenera.", " colhe tempestades.", " vai a Roma.", " tudo perde.", " perde o assento.", " não vê coração.", " mas não é mole.", " não fica de pé.", " não faz milagre.", " vendia.", " vai a montanha a Maomé.", " menos a morte.", " vale mais que mil palavras.", " vale por dois.", " ficam os dedos.", " é um prato que se come frio."];
    let polidue = [" nie ma kołaczy.", " to nie jedna.", " nie błądzi.", " niż nic.", " straszny jak go malują.", " raz pod wozem.", " niż gołąb na dachu.", " nie zagląda się w zęby.", " nie pożyczaj.", " głosu nie mają.", " tam nie ma co jeść.", " nie ugryzie.", " niż gołąb na dachu.", " ale nachodzić się trzeba.", " tak się wyśpisz.", " nie moje małpy.", " ten sam w nie wpada.", " po szkodzie.", " rośnie w miarę jedzenia.", " się zagoi.", " w stogu siana.", " do zgryzienia.", " toby nóżki nie złamała.", " wiosny nie czyni.", " z czyjegoś wypadku.", " i sam wypadek miał.", " tak masz."];
    let italdue = [" poche parole.", " non si guarda in bocca.", " estremi rimedi.", " non si comanda.", " vita nuova.", " non mente.", " non morde.", " è già a metà dell'opera.", " di spada perisce.", " non piglia pesci.", " pianga se stesso.", " fa per tre.", " e chi ha pane non ha denti.", " non aspetti tempo.", " la vince.", " l'aspetti.", " o è un ladro o è una spia.", " abbia gambe.", " si rivede.", " non rosica.", " è asino di natura.", " più ne metta.", " e i cocci sono suoi.", " e chi non sa insegna.", " gode.", " campa cent'anni.", " acconsente.", " male alloggia.", " nulla stringe.", " trova un tesoro.", " impara a zoppicare.", " va sano e va lontano.", " perde il posto all'osteria.", " pioggia a catinelle.", " nasce cosa.", " quel che è di Cesare.", " sono piene le fosse.", " e ti dirò chi sei.", " rispondere è cortesia.", " perseverare è diabolico.", " trovato l'inganno.", " non fidarsi è meglio.", " sfortunato in amore.", " fa buon brodo.", " il ciel la aiuta.", " gioco di villano.", " ma non i coperchi.", " quando dura poco.", " ma non il vizio.", " ha l'oro in bocca.", " non si scorda mai.", " ma muore nel vino.", " è denaro.", " e mettila da parte.", " non fa il monaco.", " e il vino fa cantare.", " è mezza bellezza.", " se non è litigarello.", " inganna.", " vien mangiando.", " conferma la regola.", " è sempre la più verde.", " non cresce nemmeno nel giardino del re.", " fa l'uomo ladro.", " dopo tre giorni puzza.", " fa la forza.", " è la virtù dei forti.", " aiuta gli audaci.", " è cattiva consigliera.", " fece i gattini ciechi.", " dove il dente duole.", " è sempre incinta.", " porta consiglio.", " è la virtù dei forti.", " gira.", " e la mattina coglioni.", " è l'ultima a morire.", " sul latte versato.", " è lastricata di buone intenzioni.", " sta nel mezzo.", " hanno le gambe corte.", " mezzo gaudio.", " che male accompagnati.", " che mai.", " dei paesi tuoi.", " se ne fa un altro.", " Pasqua con chi vuoi.", " che la spada.", " anche un orbo è re.", " c'è il vino buono.", " senza tre.", " di chi non vuol sentire.", " se non ce l'hai nel sacco.", " ma è bello ciò che piace.", " quel che luccica.", " davanti ai buoi.", " quello che puoi fare oggi.", " a nuotare ai pesci.", " e la moglie ubriaca.", " riescono col buco.", " vien per nuocere.", " cuore non duole.", " dente per dente.", " è persa.", " usanza che trovi.", " gabbato lo santo.", " amicizia lunga.", " nominata e vista.", " sul bagnato.", " c'è tutto.", " i topi ballano.", " i duri iniziano a giocare.", " chi ride ultimo.", " bel tempo si spera.", " scripta manent.", " s'impara.", " è pan bagnato.", " fioriranno.", " ma non il peccatore.", " e spuntano le corna.", " quando si stava peggio.", " sposa fortunata.", " tale figlio.", " e niente arrosto.", " che ci lascia lo zampino.", " non nuoce.", " il terzo gode.", " c'è di mezzo il mare.", " non mettere il dito.", " sanità di corpo.", " portano a Roma.", " vengono al pettine.", " quel che finisce bene.", " tira l'altra.", " leva il medico di torno.", " non fa primavera.", " non fa male a nessuno.", " mezzo salvato.", " e lascia vivere.", " veritas.", " accusatio manifesta."];
    let allofem = [engldue, spandue, frendue, germdue, portdue, polidue, italdue];
    return allofem[x];
}

function changeD() {
    let frsthlf = getTheF();
    let scndhlf = getTheS();
    let l = frsthlf.length;
    let n = Math.floor(getRandomArbitrary(0, l));
    let m = Math.floor(getRandomArbitrary(0, l));
    while (m == n) {
        m = Math.floor(getRandomArbitrary(0, l));
    }
    let newtext = frsthlf[n] + scndhlf[m];
    document.getElementById("textooo").innerHTML = newtext;
}


function changeE() {
    x = 0;
    document.getElementById("textooo").innerHTML = "Get your random mixed up proverbs here";
}

function changeS() {
    x = 1;
    document.getElementById("textooo").innerHTML = "Consigue aquí tus refranes mezclados al azar";
}

function changeF() {
    x = 2;
    document.getElementById("textooo").innerHTML = "Retrouvez ici vos proverbes mélangés au hasard";
}

function changeG() {
    x = 3;
    document.getElementById("textooo").innerHTML = "Hol dir hier deine bunt gemischten Sprichwörter";
}

function changeB() {
    x = 4;
    document.getElementById("textooo").innerHTML = "Confira aqui uma seleção aleatória de provérbios misturados";
}

function changeP() {
    x = 5;
    document.getElementById("textooo").innerHTML = "Znajdź tutaj losowe poprzestawiane przysłowia";
}

function changeI() {
    x = 6;
    document.getElementById("textooo").innerHTML = "Beccati dei proverbi alla membro di segugio";
}