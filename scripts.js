const list = [

s_1 = {
    id: 1,
    name: "7 BELO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, glicose líquida, nata, preparado de frutas silvestres (açúcar, amora, água, xarope de glicose, mirtilo, acidulante: ácido cítrico, estabilizante: pectina, conservante: sorbato de potássio, aromatizante e corantes artificiais: ponceau 4r e vermelho amaranto), pasta saborizante de framboesa (água, amido modificado, amido, edulcorante: sorbitol, aromatizante sintético idêntico ao natural, acidulante: ácido cítrico, corante artificial: azorrubina e conservante: sorbato de potássio), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), regulador de acidez: ácido cítrico e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 169, g60: 101, vd: 5 },
        { name: "Carboidratos (g)", g100: 25, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 20, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 9.3, vd: 19 },
        { name: "Proteínas (g)", g100: 4.5, g60: 2.7, vd: 5 },
        { name: "Gorduras totais (g)", g100: 6.6, g60: 3.9, vd: 6 },
        { name: "Gorduras saturadas (g)", g100: 3.7, g60: 2.2, vd: 11 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 45, g60: 27, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"]
},

s_2 = { 
    id: 2,
    name: "ABACAXI COM HORTELÃ",
    ingredientes: "Ingredientes: abacaxi, água, açúcar, mix de estabilizantes em pó (dextrose, xarope de glucose em pó, gordura vegetal, proteína do leite, ésteres de mono e diglicerídeos de ácidos graxos com ácido lático, glucose em pó, alginato de propilenoglicol, goma jataí, carboximetilcelulose, goma guar, maltodextrina, proteína de soja e acidulante: ácido cítrico), hortelã, saborizante de abacaxi em pó (açúcar, amido de milho, regulador de acidez: ácido fumárico, aromatizante artificial e corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo) e pó estabilizante para sorvetes (açúcar e espessantes: goma guar, goma xantana e carboximetilcelulose). CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 137, g60: 82, vd: 4 },
        { name: "Carboidratos (g)", g100: 34, g60: 20, vd: 7 },
        { name: "Açúcares totais (g)", g100: 28, g60: 17, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 28, g60: 17, vd: 34 },
        { name: "Proteínas (g)", g100: 0.6, g60: 0.3, vd: 1 },
        { name: "Gorduras totais (g)", g100: 0.5, g60: 0.3, vd: 0 },
        { name: "Gorduras saturadas (g)", g100: 0.5, g60: 0.3, vd: 2 },
        { name: "Sódio (mg)", g100: 15, g60: 9.1, vd: 0 }
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares e gorduras trans.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"]
},

s_3 = { 
    id: 3,
    name: "AÇAÍ",
    ingredientes: "Ingredientes: polpa de açaí, água, açúcar, dextrose, mistura de hidrocolóides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar) e acidulante: ácido cítrico. CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, LEITE, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 133, g60: 80, vd: 4 },
        { name: "Carboidratos (g)", g100: 24, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 24, g60: 15, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 24, g60: 15, vd: 30 },
        { name: "Gorduras totais (g)", g100: 4.9, g60: 3, vd: 5 },
        { name: "Gorduras saturadas (g)", g100: 0.2, g60: 0.1, vd: 1 },
        { name: "Fibras alimentares (g)", g100: 6.8, g60: 4.1, vd: 16 },
        { name: "Sódio (mg)", g100: 8, g60: 4.1, vd: 0 }
    ],
    quantsignificativas: "Não contém quantidades significativas de proteínas, gorduras trans e sódio.",
    maisinfo: [],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"]
},

s_4 = { 
    id: 4,
    name: "AÇAÍ PARA TIGELA",
    ingredientes: "Ingredientes: polpa de açaí, água, açúcar, dextrose, mistura de hidrocolóides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar) e acidulante: ácido cítrico. CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, LEITE, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 133, g60: 80, vd: 4 },
        { name: "Carboidratos (g)", g100: 24, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 24, g60: 15, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 24, g60: 15, vd: 30 },
        { name: "Gorduras totais (g)", g100: 4.9, g60: 3, vd: 5 },
        { name: "Gorduras saturadas (g)", g100: 0.2, g60: 0.1, vd: 1 },
        { name: "Fibras alimentares (g)", g100: 6.8, g60: 4.1, vd: 16 },
        { name: "Sódio (mg)", g100: 8, g60: 4.1, vd: 0 }
    ],
    quantsignificativas: "Não contém quantidades significativas de proteínas, gorduras trans e sódio.",
    maisinfo: [],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"]
},

s_5 = { 
    id: 5,
    name: "AMEIXA",
    ingredientes: "Ingredientes: água, açúcar, ameixa seca, leite em pó integral, glicose líquida, nata, ovo em pó, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E OVO. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 193, g60: 116, vd: 6 },
        { name: "Carboidratos (g)", g100: 33, g60: 20, vd: 7 },
        { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 18, g60: 11, vd: 22 },
        { name: "Proteínas (g)", g100: 3.4, g60: 2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 5.7, g60: 3.4, vd: 5 },
        { name: "Gorduras saturadas (g)", g100: 3.1, g60: 1.8, vd: 9 },
        { name: "Fibras alimentares (g)", g100: 1, g60: 0.6, vd: 2 },
        { name: "Sódio (mg)", g100: 48, g60: 29, vd: 1 }
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans.",
    maisinfo: [],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"]
},

s_6 = { 
    id: 6,
    name: "AMENDOIM TRUFADO",
    ingredientes: "Ingredientes: água, açúcar, amendoim, leite em pó integral, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), glicose líquida, nata, ovo em pó, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM AMENDOIM E CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 248, g60: 149, vd: 7 },
        { name: "Carboidratos (g)", g100: 28, g60: 17, vd: 6 },
        { name: "Açúcares totais (g)", g100: 24, g60: 14, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 20, g60: 12, vd: 24 },
        { name: "Proteínas (g)", g100: 6, g60: 3.6, vd: 7 },
        { name: "Gorduras totais (g)", g100: 13, g60: 7.9, vd: 12 },
        { name: "Gorduras saturadas (g)", g100: 4.5, g60: 2.7, vd: 14 },
        { name: "Fibras alimentares (g)", g100: 1.3, g60: 0.8, vd: 3 },
        { name: "Sódio (mg)", g100: 65, g60: 39, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans.",
    maisinfo: [
        "Colorido aromatizante."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_7 = { 
    id: 7,
    name: "BANANA CARAMELADA",
    ingredientes: "Ingredientes: água, banana, açúcar, leite em pó integral, glicose líquida, nata, gordura de palma, saborizante de banana em pó (açúcar, amido de milho, aromatizante sintético idêntico ao natural, corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 143, g60: 86, vd: 4 },
        { name: "Carboidratos (g)", g100: 22, g60: 13, vd: 4 },
        { name: "Açúcares totais (g)", g100: 13, g60: 7.6, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 8.9, g60: 5.4, vd: 11 },
        { name: "Proteínas (g)", g100: 2.6, g60: 1.6, vd: 3 },
        { name: "Gorduras totais (g)", g100: 5.3, g60: 3.2, vd: 5 },
        { name: "Gorduras saturadas (g)", g100: 3, g60: 1.8, vd: 9 },
        { name: "Fibras alimentares (g)", g100: 0.6, g60: 0.4, vd: 2 },
        { name: "Sódio (mg)", g100: 35, g60: 21, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_8 = { 
    id: 8,
    name: "BUTIÁ",
    ingredientes: "Ingredientes: butiá, açúcar, água, base estabilizante (dextrose, xarope de glucose em pó, gordura vegetal, proteína do leite, ésteres de mono e diglicerídeos de ácidos graxos com ácido lático, glucose em pó, alginato de propilenoglicol, goma jataí, carboximetilcelulose, goma guar, maltodextrina, proteína de soja e ácido cítrico), estabilizante em pó para sorvetes (açúcar, espessantes: goma guar, goma xantana e carboximetilcelulose). CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 165, g60: 99, vd: 5 },
        { name: "Carboidratos (g)", g100: 39, g60: 23, vd: 8 },
        { name: "Açúcares totais (g)", g100: 28, g60: 17, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 28, g60: 17, vd: 34 },
        { name: "Proteínas (g)", g100: 1.1, g60: 0.6, vd: 1 },
        { name: "Gorduras totais (g)", g100: 1.4, g60: 0.8, vd: 1 },
        { name: "Gorduras saturadas (g)", g100: 0.5, g60: 0.3, vd: 2 },
        { name: "Fibras alimentares (g)", g100: 3.4, g60: 2, vd: 8 },
        { name: "Sódio (mg)", g100: 15, g60: 9, vd: 0 },
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans.",
    maisinfo: [],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_9 = { 
    id: 9,
    name: "CAPPUCCINO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, recheio de cacau com castanha-de-caju e avelã (açúcar, óleo vegetal de girassol, gordura vegetal, castanha-de-caju, cacau em pó, dextrose, avelã, leite em pó desnatado, soro de leite em pó, emulsificante: lecitina de soja e aromatizantes), glicose líquida, nata, gordura de palma, café solúvel, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), canela em pó e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM AVELÃS E CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 184, g60: 110, vd: 6 },
        { name: "Carboidratos (g)", g100: 24, g60: 14, vd: 5 },
        { name: "Açúcares totais (g)", g100: 20, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 9.3, vd: 19 },
        { name: "Proteínas (g)", g100: 3.2, g60: 1.9, vd: 4 },
        { name: "Gorduras totais (g)", g100: 8.5, g60: 5.1, vd: 8 },
        { name: "Gorduras saturadas (g)", g100: 4.2, g60: 2.5, vd: 13 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 53, g60: 32, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_10 = { 
    id: 10,
    name: "CHOCKOKINDER",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, recheio de cacau com castanha-de-caju e avelã (açúcar, óleo vegetal de girassol, gordura vegetal, castanha-de-caju, cacau em pó, dextrose, avelã, leite em pó desnatado, soro de leite em pó, emulsificante: lecitina de soja e aromatizantes), glicose líquida, nata, gordura de palma, saborizante de nata em pó (leite integral em pó, dextrose, leite desnatado em pó, ovo em pó e aromatizantes), mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM CASTANHA-DE-CAJU E AVELÃ. CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 190, g60: 114, vd: 6 },
        { name: "Carboidratos (g)", g100: 24, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 21, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 9.5, vd: 19 },
        { name: "Proteínas (g)", g100: 3.4, g60: 2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 8.9, g60: 5.3, vd: 8 },
        { name: "Gorduras saturadas (g)", g100: 4.4, g60: 2.6, vd: 13 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 57, g60: 34, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


s_11 = { 
    id: 11,
    name: "CHOCOLATE BELGA",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, nata, glicose líquida, cacau em pó alcalino, gordura de palma, dextrose e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 203, g60: 122, vd: 6 },
        { name: "Carboidratos (g)", g100: 25, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 19, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 14, g60: 8.7, vd: 17 },
        { name: "Proteínas (g)", g100: 4.2, g60: 2.5, vd: 5 },
        { name: "Gorduras totais (g)", g100: 10, g60: 5.8, vd: 9 },
        { name: "Gorduras saturadas (g)", g100: 5.6, g60: 3.4, vd: 17 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Fibras alimentares (g)", g100: 1.6, g60: 1, vd: 4 },
        { name: "Sódio (mg)", g100: 47, g60: 28, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_12 = { 
    id: 12,
    name: "CHOCOLATE BRANCO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, chocolate branco (açúcar, manteiga de cacau, leite em pó integral, soro de leite em pó parcialmente desmineralizado, gordura vegetal, gordura anidra de leite e emulsificantes: lecitina e poliglicerol polirricinoleato e aromatizante), glicose líquida, nata, pasta sabor chocolate branco (óleo de girassol, açúcar impalpável, leite em pó integral, aromatizante e emulsificante: lecitina de soja), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), saborizante de chocolate branco em pó [açúcar, amido de milho, aromatizante artificial, aromatizante natural, corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo] e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 195, g60: 117, vd: 6 },
        { name: "Carboidratos (g)", g100: 25, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 10, vd: 20 },
        { name: "Proteínas (g)", g100: 3.3, g60: 2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 9.2, g60: 5.5, vd: 8 },
        { name: "Gorduras saturadas (g)", g100: 4.9, g60: 3, vd: 15 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 52, g60: 31, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_13 = { 
    id: 13,
    name: "CHOCOLATE COM AVELÃS",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, pasta de chocolate com avelã [gordura vegetal, açúcar, biscoito (açúcar, farinha de trigo, clara de ovo, avelã, bicarbonato de amônio, carbonato de sódio e aroma)], leite em pó desnatado, cacau em pó, soro de leite em pó, licor de cacau, manteiga de cacau, lecitina de soja e aroma idêntico ao natural], glicose líquida, creme de cacau e avelã (avelã, óleo vegetal, cacau em pó, glucose em pó, açúcar, dextrose, maltodextrina, aroma idêntico ao natural e lecitina de soja), nata, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM AVELÃS. CONTÉM DERIVADOS DE TRIGO, OVO, LEITE E SOJA. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 206, g60: 123, vd: 6 },
        { name: "Carboidratos (g)", g100: 25, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 21, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 15, g60: 9.1, vd: 18 },
        { name: "Proteínas (g)", g100: 3.5, g60: 2.1, vd: 4 },
        { name: "Gorduras totais (g)", g100: 10, g60: 6.3, vd: 10 },
        { name: "Gorduras saturadas (g)", g100: 5.1, g60: 3.1, vd: 16 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Fibras alimentares (g)", g100: 0.7, g60: 0.4, vd: 2 },
        { name: "Sódio (mg)", g100: 46, g60: 28, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_14 = { 
    id: 14,
    name: "CHOCOLATE DARK 70% CACAU",
    ingredientes: "Ingredientes: água e aromatizante de chocolate em pó [dextrose, cobertura de chocolate (pasta de cacau, emulsificante: lecitina de soja e aroma natural de baunilha), açúcar, frutose, glucose em pó, gordura vegetal, proteína de soja, aroma idêntico ao natural, sal, óleo vegetal, emulsificantes: mono e diglicerídeos de ácidos graxos, ésteres de ácido lático e ácidos graxos com glicerol, espessantes: alginato de sódio, goma tara, carboximetilcelulose sódica e goma guar]. CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, LEITE, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHAS-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 168, g60: 101, vd: 5 },
        { name: "Carboidratos (g)", g100: 24, g60: 14, vd: 5 },
        { name: "Açúcares totais (g)", g100: 19, g60: 11, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 15, g60: 9, vd: 18 },
        { name: "Proteínas (g)", g100: 2.9, g60: 1.7, vd: 3 },
        { name: "Gorduras totais (g)", g100: 6.1, g60: 3.6, vd: 6 },
        { name: "Gorduras saturadas (g)", g100: 3.4, g60: 2.1, vd: 11 },
        { name: "Gorduras trans (g)", g100: 0, g60: 0, vd: 0 },
        { name: "Fibras alimentares (g)", g100: 4, g60: 2.4, vd: 10 },
        { name: "Sódio (mg)", g100: 84, g60: 50, vd: 3 },
    ],
    quantsignificativas: "",
    maisinfo: [
        "Contém aromatizante."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_15 = { 
    id: 15,
    name: "CHOCOLATE LA CREME",
    ingredientes: "Ingredientes: água, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), açúcar, leite em pó integral, nata, creme de leitinho (leite em pó desnatado, açúcar, óleo vegetal, gordura vegetal, polidextrose, sal, emulsificantes: lecitina de soja, mono e diglicerídeos de ácidos graxos, polirricinoleato de poliglicerol e aromatizante sintético idêntico ao natural), glicose líquida, cacau em pó alcalino, gordura de palma, dextrose e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM CASTANHAS DE CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 285, g60: 171, vd: 9 },
        { name: "Carboidratos (g)", g100: 29, g60: 17, vd: 6 },
        { name: "Açúcares totais (g)", g100: 24, g60: 14, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 19, g60: 11, vd: 22 },
        { name: "Proteínas (g)", g100: 4.6, g60: 2.8, vd: 6 },
        { name: "Gorduras totais (g)", g100: 17, g60: 10, vd: 15 },
        { name: "Gorduras saturadas (g)", g100: 6.8, g60: 4.1, vd: 21 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Fibras alimentares (g)", g100: 1.8, g60: 1.1, vd: 4 },
        { name: "Sódio (mg)", g100: 99, g60: 5.9, vd: 3 },
    ],
    quantsignificativas: "",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO", "GORDURA SATURADA"],
},

s_16 = { 
    id: 16,
    name: "CHOCOLATE SENSAÇÃO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, nata, pasta de morango (açúcar, morango, água, xarope de glicose, acidulante: ácido cítrico, estabilizante: pectina, conservante: sorbato de potássio, aromatizante e corante artificial vermelho allura), recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), glicose líquida, cacau alcalino, gordura de palma, dextrose e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM CASTANHAS DE CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 226, g60: 136, vd: 7 },
        { name: "Carboidratos (g)", g100: 28, g60: 17, vd: 6 },
        { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 18, g60: 11, vd: 22 },
        { name: "Proteínas (g)", g100: 4.1, g60: 2.5, vd: 5 },
        { name: "Gorduras totais (g)", g100: 11, g60: 6.6, vd: 10 },
        { name: "Gorduras saturadas (g)", g100: 5.6, g60: 3.4, vd: 17 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Fibras alimentares (g)", g100: 1.8, g60: 1.1, vd: 5 },
        { name: "Sódio (mg)", g100: 59, g60: 35, vd: 2 },
    ],
    quantsignificativas: "",
    maisinfo: [
        "Contém aromatizante.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_17 = { 
    id: 17,
    name: "CHOCOLATE TRUFADO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), nata, glicose líquida, cacau em pó alcalino, gordura de palma, dextrose e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 231, g60: 139, vd: 7 },
        { name: "Carboidratos (g)", g100: 26, g60: 16, vd: 5 },
        { name: "Açúcares totais (g)", g100: 21, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 10, vd: 20 },
        { name: "Proteínas (g)", g100: 4, g60: 2.4, vd: 5 },
        { name: "Gorduras totais (g)", g100: 12, g60: 7.4, vd: 11 },
        { name: "Gorduras saturadas (g)", g100: 6, g60: 3.6, vd: 18 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Fibras alimentares (g)", g100: 1.4, g60: 0.8, vd: 3 },
        { name: "Sódio (mg)", g100: 68, g60: 41, vd: 2 },
    ],
    quantsignificativas: "",
    maisinfo: [
        "Contém aromatizante."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO", "GORDURA SATURADA"],
},

s_18 = { 
    id: 18,
    name: "CHOCOMENTA",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, cobertura sabor chocolate meio amargo (açúcar, óleo vegetal de palmiste, gordura vegetal, cacau em pó, emulsificante: lecitina de soja e aromatizante sintético idêntico ao natural), glicose líquida, nata, gordura de palma, saborizante de menta em pó [açúcar, amido de milho, aromatizante sintético idêntico ao natural, corantes artificiais: amarelo tartrazina (INS 102) e azul brilhante FCFl], mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 201, g60: 121, vd: 6 },
        { name: "Carboidratos (g)", g100: 24, g60: 14, vd: 5 },
        { name: "Açúcares totais (g)", g100: 21, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 10, vd: 20 },
        { name: "Proteínas (g)", g100: 3, g60: 1.8, vd: 4 },
        { name: "Gorduras totais (g)", g100: 11, g60: 6.3, vd: 10 },
        { name: "Gorduras saturadas (g)", g100: 6.1, g60: 3.7, vd: 19 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 65, g60: 39, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO", "GORDURA SATURADA"],
},

s_19 = { 
    id: 19,
    name: "COCO",
    ingredientes: "Ingredientes: água, coco seco, leite de coco, leite em pó integral, açúcar, glicose líquida, nata, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), estabilizante em pó [açúcar, espessantes: goma guar, goma xantana e carboximetilcelulose (CMC)] e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 198, g60: 119, vd: 6 },
        { name: "Carboidratos (g)", g100: 15, g60: 8.9, vd: 3 },
        { name: "Açúcares totais (g)", g100: 10, g60: 6.3, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 6.6, g60: 4, vd: 8 },
        { name: "Proteínas (g)", g100: 2.9, g60: 1.8, vd: 4 },
        { name: "Gorduras totais (g)", g100: 14, g60: 8.5, vd: 13 },
        { name: "Gorduras saturadas (g)", g100: 10, g60: 5.9, vd: 30 },
        { name: "Fibras alimentares (g)", g100: 1, g60: 0.6, vd: 2 },
        { name: "Sódio (mg)", g100: 46, g60: 27, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans.",
    maisinfo: [],
    alto_em: ["ALTO EM", "GORDURA SATURADA"],
},

s_20 = { 
    id: 20,
    name: "COOKIES",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, recheio sabor biscoito [açúcar, biscoito sabor chocolate (Agrobacterium tumefaciens e/ou Bacillus thuringiensis e/ou Zea mays), óleo de girassol, gordura vegetal, castanha-de-caju, cacau em pó, dextrose, avelã, leite em pó desnatado, soro de leite em pó, emulsificante: lecitina de soja e aromatizantes], glicose líquida, nata, pasta sabor biscoito [açúcar, xarope de glicose, água, álcool de cereais, aromatizantes, acidulante: ácido cítrico, espessante: pectina e corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo], gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM AVELÃS E CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, AMENDOIM, AMÊNDOA, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 192, g60: 115, vd: 6 },
        { name: "Carboidratos (g)", g100: 26, g60: 15, vd: 5 },
        { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
        { name: "Proteínas (g)", g100: 3.2, g60: 1.9, vd: 4 },
        { name: "Gorduras totais (g)", g100: 8.7, g60: 5.2, vd: 8 },
        { name: "Gorduras saturadas (g)", g100: 4.2, g60: 2.5, vd: 13 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 55, g60: 33, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante.",
        "Colorido artificialmente.",
        "Contém derivados de milho e soja transgênicos."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


s_21 = {
    id: 21,
    name: "CREME",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, glicose líquida, nata, gordura de palma, pasta açucarada [açúcar, xarope de glucose, sal, aromatizante, espessante: carragena, corantes artificiais: amarelo tartrazina (INS 102), amarelo crepúsculo e ponceau 4R], pó para sorvete sabor creme [açúcar, amido, aromatizante artificial, corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo], mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, SOJA, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 167, g60: 100, vd: 5 },
        { name: "Carboidratos (g)", g100: 23, g60: 14, vd: 5 },
        { name: "Açúcares totais (g)", g100: 19, g60: 11, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 15, g60: 8.9, vd: 18 },
        { name: "Proteínas (g)", g100: 3, g60: 1.8, vd: 4 },
        { name: "Gorduras totais (g)", g100: 6.9, g60: 4.2, vd: 6 },
        { name: "Gorduras saturadas (g)", g100: 4, g60: 2.4, vd: 12 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 47, g60: 28, vd: 1 }
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


s_22 = {
    id: 22,
    name: "DELÍCIA DE ABACAXI",
    ingredientes: "Ingredientes: água, abacaxi, açúcar, leite em pó integral, glicose líquida, nata, gordura de palma, saborizante em pó de abacaxi [açúcar, amido de milho, regulador de acidez: ácido fumárico, aromatizante artificial e corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo], mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 146, g60: 88, vd: 4 },
        { name: "Carboidratos (g)", g100: 21, g60: 13, vd: 4 },
        { name: "Açúcares totais (g)", g100: 16, g60: 10, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 12, g60: 7.4, vd: 15 },
        { name: "Proteínas (g)", g100: 2.6, g60: 1.6, vd: 3 },
        { name: "Gorduras totais (g)", g100: 5.7, g60: 3.4, vd: 5 },
        { name: "Gorduras saturadas (g)", g100: 3.3, g60: 2, vd: 10 },
        { name: "Sódio (mg)", g100: 38, g60: 23, vd: 1 }
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_23 = {
    id: 23,
    name: "DOCE DE LEITE",
    ingredientes: "Ingredientes: água, doce de leite, leite em pó integral, glicose, creme de leite, gordura de palma, saborizante em pó de doce de leite [açúcar, amido de milho, sal, aromatizante artificial, corantes artificiais: amarelo tartrazina (INS 102), amaranto e azul indigotina] e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 228, g60: 137, vd: 7 },
        { name: "Carboidratos (g)", g100: 37, g60: 22, vd: 7 },
        { name: "Açúcares totais (g)", g100: 21, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 16, g60: 9.4, vd: 19 },
        { name: "Proteínas (g)", g100: 3.6, g60: 2.2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 7.4, g60: 4.4, vd: 7 },
        { name: "Gorduras saturadas (g)", g100: 4.3, g60: 2.6, vd: 13 },
        { name: "Sódio (mg)", g100: 85, g60: 51, vd: 3 }
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


s_24 = {
    id: 24,
    name: "DOCE DE LEITE TRUFADO",
    ingredientes: "Ingredientes: água, doce de leite, leite em pó integral, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), glicose líquida, nata, gordura de palma, saborizante de doce de leite em pó [açúcar, amido de milho, sal, aromatizante artificial, corantes artificiais: amarelo tartrazina (INS 102), amaranto e azul indigotina] e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 258, g60: 155, vd: 8 },
        { name: "Carboidratos (g)", g100: 37, g60: 22, vd: 7 },
        { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
        { name: "Proteínas (g)", g100: 3.7, g60: 2.2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 11, g60: 6.4, vd: 10 },
        { name: "Gorduras saturadas (g)", g100: 5.4, g60: 3.3, vd: 17 },
        { name: "Sódio (mg)", g100: 98, g60: 59, vd: 3 }
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
    maisinfo: [
        "Aromatizado artificialmente.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


s_25 = {
    id: 25,
    name: "FLOCOS",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, cobertura sabor chocolate meio amargo (açúcar, óleo vegetal de palmiste, gordura vegetal, cacau em pó, emulsificante: lecitina de soja e aromatizante sintético idêntico ao natural), glicose líquida, nata, gordura de palma, saborizante de nata em pó (leite em pó integral, dextrose, leite desnatado em pó, ovo em pó e aromatizantes), mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: "Valor energético (kcal)", g100: 203, g60: 122, vd: 6 },
        { name: "Carboidratos (g)", g100: 24, g60: 14, vd: 5 },
        { name: "Açúcares totais (g)", g100: 20, g60: 12, vd: 0 },
        { name: "Açúcares adicionados (g)", g100: 15, g60: 9.2, vd: 18 },
        { name: "Proteínas (g)", g100: 3.3, g60: 2, vd: 4 },
        { name: "Gorduras totais (g)", g100: 11, g60: 6.5, vd: 10 },
        { name: "Gorduras saturadas (g)", g100: 6.3, g60: 3.8, vd: 19 },
        { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
        { name: "Sódio (mg)", g100: 68, g60: 41, vd: 2 }
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Aromatizante sintético idêntico ao natural."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO", "GORDURA SATURADA"],
},

s_26 = {
    id: 26,
    name: "IOGURTE COM FRUTAS VERMELHAS",
    ingredientes: "Ingredientes: água, preparado de frutas silvestres (açúcar, amora, água, xarope de glicose, mirtilo, acidulante: ácido cítrico, estabilizante: pectina, conservante: sorbato de potássio, aromatizante e corantes artificiais: ponceau 4R e vermelho amaranto), açúcar, leite em pó integral, glicose líquida, nata, saborizante de iogurte em pó (dextrose, maltodextrina, lactose, iogurte em pó, acidulante: ácido cítrico e aromatizantes), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO E LEITE. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, OVO, SOJA, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: 'Valor energético (kcal)', g100: 183, g60: 110, vd: 6 },
        { name: 'Carboidratos (g)', g100: 30, g60: 18, vd: 6 },
        { name: 'Açúcares totais (g)', g100: 26, g60: 16, vd: 0 },
        { name: 'Açúcares adicionados (g)', g100: 21, g60: 13, vd: 26 },
        { name: 'Proteínas (g)', g100: 2.9, g60: 1.7, vd: 3 },
        { name: 'Gorduras totais (g)', g100: 5.9, g60: 3.6, vd: 6 },
        { name: 'Gorduras saturadas (g)', g100: 3.4, g60: 2, vd: 10 },
        { name: 'Gorduras trans (g)', g100: 0.2, g60: 0.1, vd: 5 },
        { name: 'Sódio (mg)', g100: 44, g60: 27, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_27 = {
    id: 27,
    name: "LAKA ÓREO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, pasta sabor chocolate branco [óleo vegetal, biscoitos (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, fécula de mandioca, açúcar invertido, cacau em pó, corante artificial: caramelo IV, fermentos químicos: bicarbonato de sódio e bicarbonato de amônio, emulsificante: lecitina de soja e aromatizante)], soro de leite, leite em pó integral, gordura vegetal, sal, aromatizante sintético idêntico ao natural e emulsificantes: lecitina de soja, monoestearato de sorbitana e poliricinoleato de poliglicerol), creme de leitinho (leite em pó desnatado, açúcar, óleo vegetal, gordura vegetal, polidextrose, sal, emulsificantes: lecitina de soja, mono e diglicerídeos de ácidos graxos, poliricinoleato de poliglicerol e aromatizante sintético idêntico ao natural), glicose líquida, nata, gordura de palma, biscoito sabor chocolate (açúcar, farinha de trigo enriquecida com ferro e ácido fólico, óleo vegetal, gordura vegetal, cacau, amido, sal, leite em pó integral, soro de leite, farinha de aveia, farinha de centeio, corante caramelo IV, aromatizante: carbonato de cálcio, fermentos químicos: bicarbonato de amônio, fosfato monocálcico e bicarbonato de sódio, emulsificante: lecitina de soja e aromatizantes), mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, CENTEIO, AVEIA, LEITE E SOJA. PODE CONTER CEVADA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: 'Valor energético (kcal)', g100: 221, g60: 132, vd: 7 },
        { name: 'Carboidratos (g)', g100: 26, g60: 16, vd: 5 },
        { name: 'Açúcares totais (g)', g100: 18, g60: 11, vd: 0 },
        { name: 'Açúcares adicionados (g)', g100: 18, g60: 11, vd: 22 },
        { name: 'Proteínas (g)', g100: 3.5, g60: 2.1, vd: 4 },
        { name: 'Gorduras totais (g)', g100: 11, g60: 6.5, vd: 10 },
        { name: 'Gorduras saturadas (g)', g100: 4.7, g60: 2.8, vd: 14 },
        { name: 'Gorduras trans (g)', g100: 0.2, g60: 0.1, vd: 5 },
        { name: 'Sódio (mg)', g100: 61, g60: 36, vd: 2 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_28 = {
    id: 28,
    name: "LEITE CONDENSADO",
    ingredientes: "Ingredientes: água, açúcar, leite em pó integral, glicose líquida, nata, gordura de palma, pasta saborizante de leite condensado [açúcar, xarope de glicose, sal, espessante: carragena, corantes artificiais: caramelo, tartrazina (INS 102), ponceau 4R, laca de Al e aroma idêntico ao natural], mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: 'Valor energético (kcal)', g100: 166, g60: 100, vd: 5 },
        { name: 'Carboidratos (g)', g100: 23, g60: 14, vd: 5 },
        { name: 'Açúcares totais (g)', g100: 20, g60: 12, vd: 0 },
        { name: 'Açúcares adicionados (g)', g100: 15, g60: 8.9, vd: 18 },
        { name: 'Proteínas (g)', g100: 3, g60: 1.8, vd: 4 },
        { name: 'Gorduras totais (g)', g100: 6.9, g60: 4.2, vd: 6 },
        { name: 'Gorduras saturadas (g)', g100: 4, g60: 2.4, vd: 12 },
        { name: 'Gorduras trans (g)', g100: 0.2, g60: 0.1, vd: 5 },
        { name: 'Sódio (mg)', g100: 47, g60: 28, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
    maisinfo: [
        "Contém aromatizante sintético idêntico ao natural.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_29 = {
    id: 29,
    name: "LIMÃO",
    ingredientes: "Ingredientes: água, limão, açúcar, glicose líquida, maltodextrina, dextrose, mistura de hidrocóloides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN.",
    alergicos: "ALÉRGICOS: PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, LEITE, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: 'Valor energético (kcal)', g100: 79, g60: 47, vd: 2 },
        { name: 'Carboidratos (g)', g100: 20, g60: 12, vd: 4 },
        { name: 'Açúcares totais (g)', g100: 18, g60: 11, vd: 0 },
        { name: 'Açúcares adicionados (g)', g100: 12, g60: 7.4, vd: 15 },
        { name: 'Sódio (mg)', g100: 11, g60: 6.8, vd: 0 },
    ],
    quantsignificativas: "Não contém quantidades significativas de proteínas, gorduras totais, gorduras saturadas, gorduras trans e fibras alimentares.",
    maisinfo: [],
    alto_em: [],
},

s_30 = {
    id: 30,
    name: "MARACUJÁ",
    ingredientes: "Ingredientes: água, açúcar, maracujá, mix de estabilizantes em pó (dextrose, xarope de glucose em pó, gordura vegetal, proteína do leite, ésteres de mono e diglicerídeos de ácidos graxos com ácido lático, glucose em pó, alginato de propilenoglicol, goma jataí, carboximetilcelulose, goma guar, maltodextrina, proteína de soja e acidulante: ácido cítrico), preparado de maracujá para recheios e coberturas [açúcar, polpa de maracujá, água, xarope de glicose, estabilizante: pectina, acidulante: ácido cítrico, conservante: sorbato de potássio, aromatizante e corantes artificiais: amarelo crepúsculo e amarelo tartrazina (INS 102)] e estabilizante em pó para sorvetes (açúcar e espessantes: goma guar, goma xantana e carboximetilcelulose). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
    alergicos: "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
    comp: [
        { name: 'Valor energético (kcal)', g100: 138, g60: 80, vd: 4 },
        { name: 'Carboidratos (g)', g100: 33, g60: 20, vd: 7 },
        { name: 'Açúcares totais (g)', g100: 29, g60: 18, vd: 0 },
        { name: 'Açúcares adicionados (g)', g100: 29, g60: 18, vd: 36 },
        { name: 'Proteínas (g)', g100: 0.6, g60: 0.4, vd: 1 },
        { name: 'Gorduras totais (g)', g100: 0.9, g60: 0.6, vd: 1 },
        { name: 'Gorduras saturadas (g)', g100: 0.5, g60: 0.3, vd: 2 },
        { name: 'Sódio (mg)', g100: 16, g60: 10, vd: 1 },
    ],
    quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
    maisinfo: [
        "Contém aromatizante.",
        "Colorido artificialmente."
    ],
    alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_31 = {
  id: 31,
  name: "MORANGO",
  ingredientes: "água, morango, açúcar, leite em pó integral, preparado de morango (açúcar, morango, água, xarope de glucose, acidulante: ácido cítrico, estabilizante: pectina, conservante: sorbato de potássio, aromatizante e corante artificial: vermelho allura), glicose líquida, nata, gordura de palma, pasta de morango (açúcar, morango, água, acidulante: ácido cítrico, aromatizante artificial, estabilizante: pectina amilada e corante artificial: vermelho 40), mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 156, g60: 94, vd: 5 },
    { name: "Carboidratos (g)", g100: 26, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 18, g60: 11, vd: 22 },
    { name: "Proteínas (g)", g100: 2.3, g60: 1.4, vd: 3 },
    { name: "Gorduras totais (g)", g100: 5, g60: 3, vd: 5 },
    { name: "Gorduras saturadas (g)", g100: 2.8, g60: 1.7, vd: 9 },
    { name: "Sódio (mg)", g100: 34, g60: 21, vd: 1 },
  ],
  quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_32 = {
  id: 32,
  name: "MORANGO ÁGUA",
  ingredientes: "morango, água, açúcar, glicose líquida, maltodextrina, dextrose, mistura de hidrocolóides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar), acidulante: ácido cítrico e bicarbonato de sódio. CONTÉM GLÚTEN.",
  alergicos: "PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, LEITE, SOJA, CASTANHA-DO-PARÁ, CASTANHA-DE-CAJU, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 110, g60: 66, vd: 3 },
    { name: "Carboidratos (g)", g100: 27, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 17, g60: 10, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 16, g60: 9.5, vd: 19 },
    { name: "Fibras alimentares (g)", g100: 0.8, g60: 0.5, vd: 2 },
    { name: "Sódio (mg)", g100: 12, g60: 7.3, vd: 0 },
  ],
  quantsignificativas: "Não contém quantidades significativas de proteínas, gorduras totais, gorduras saturadas e gorduras trans.",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_33 = {
  id: 33,
  name: "MORANGO SENSAÇÃO",
  ingredientes: "água, morango, leite em pó integral, açúcar, cobertura sabor chocolate meio amargo (açúcar, óleo vegetal de palmiste, gordura vegetal, cacau em pó, emulsificante: lecitina de soja e aromatizante sintético idêntico ao natural), glicose líquida, nata, preparado de morango para recheios e coberturas (açúcar, morango, água, xarope de glicose, acidulante: ácido cítrico, estabilizante: pectina, conservante: sorbato de potássio, aromatizante e corante artificial: vermelho allura), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), estabilizante em pó para gelados comestíveis (açúcar e espessantes: goma guar, goma xantana e carboximetilcelulose) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, OVO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 160, g60: 96, vd: 5 },
    { name: "Carboidratos (g)", g100: 19, g60: 11, vd: 4 },
    { name: "Açúcacares totais (g)", g100: 16, g60: 8.9, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 11, g60: 6.7, vd: 13 },
    { name: "Proteínas (g)", g100: 2.6, g60: 1.6, vd: 3 },
    { name: "Gorduras totais (g)", g100: 8.3, g60: 5, vd: 8 },
    { name: "Gorduras saturadas (g)", g100: 4.8, g60: 2.9, vd: 15 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 51, g60: 30, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_34 = {
  id: 34,
  name: "MOUSSE DE MARACUJÁ",
  ingredientes: "maracujá, água, leite condensado, açúcar, glicose líquida, maltodextrina, dextrose, mistura de hidrocolóides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, SOJA, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 155, g60: 93, vd: 5 },
    { name: "Carboidratos (g)", g100: 32, g60: 19, vd: 6 },
    { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 19, g60: 12, vd: 24 },
    { name: "Proteínas (g)", g100: 2.4, g60: 1.4, vd: 3 },
    { name: "Gorduras totais (g)", g100: 2.6, g60: 1.6, vd: 2 },
    { name: "Gorduras saturadas (g)", g100: 1.3, g60: 0.8, vd: 4 },
    { name: "Sódio (mg)", g100: 35, g60: 21, vd: 1 },
  ],
  quantsignificativas: "Não contém quantidades significativas de gorduras trans e fibras alimentares.",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_35 = {
  id: 35,
  name: "NEGRESCO",
  ingredientes: "água, açúcar, leite em pó integral, glicose líquida, nata, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), biscoito de chocolate (açúcar, farinha de trigo enriquecida com ferro e ácido fólico, óleo vegetal, gordura vegetal, cacau, amido, sal, leite em pó integral, soro de leite, farinha de aveia, farinha de centeio, corante caramelo IV, antimofo: carbonato de cálcio, fermentos químicos: bicarbonato de amônio, fosfato monocálcico e bicarbonato de sódio, emulsificante: lecitina de soja e aromatizantes), gordura de palma, saborizante de baunilha (xarope de glucose, açúcar, leite caramelizado, espessante: carragena e aroma idêntico ao natural), mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE TRIGO, CENTEIO, AVEIA, LEITE E SOJA. PODE CONTER CEVADA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 194, g60: 116, vd: 6 },
    { name: "Carboidratos (g)", g100: 26, g60: 15, vd: 5 },
    { name: "Açúcares totais (g)", g100: 21, g60: 13, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 16, g60: 10, vd: 20 },
    { name: "Proteínas (g)", g100: 3.2, g60: 1.9, vd: 4 },
    { name: "Gorduras totais (g)", g100: 8.9, g60: 5.3, vd: 8 },
    { name: "Gorduras saturadas (g)", g100: 4.3, g60: 2.6, vd: 13 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 63, g60: 38, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizante sintético idêntico ao natural.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_36 = {
  id: 36,
  name: "NINHO TRUFADO",
  ingredientes: "água, açúcar, leite em pó integral, recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju e emulsificante: lecitina de soja e aromatizantes), leitinho trufado [glicose em pó, leite em pó integral, aromatizante e corante artificial amarelo tartrazina (INS 102)], glicose líquida, nata, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM CASTANHA-DE-CAJU. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 201, g60: 121, vd: 6 },
    { name: "Carboidratos (g)", g100: 26, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 21, g60: 12, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 16, g60: 9.4, vd: 19 },
    { name: "Proteínas (g)", g100: 3.5, g60: 2.1, vd: 4 },
    { name: "Gorduras totais (g)", g100: 9.3, g60: 5.6, vd: 9 },
    { name: "Gorduras saturadas (g)", g100: 4.5, g60: 2.7, vd: 14 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 68, g60: 41, vd: 2 },
  ],
  quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_37 = {
  id: 37,
  name: "NOZES",
  ingredientes: "água, açúcar, leite em pó integral, nozes, glicose líquida, nata, ovo em pó, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM NOZES. CONTÉM DERIVADOS DE LEITE, OVO E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMÊNDOA, AMENDOIM, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 209, g60: 125, vd: 6 },
    { name: "Carboidratos (g)", g100: 27, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 24, g60: 14, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 20, g60: 12, vd: 24 },
    { name: "Proteínas (g)", g100: 4, g60: 2.5, vd: 5 },
    { name: "Gorduras totais (g)", g100: 10, g60: 5.9, vd: 9 },
    { name: "Gorduras saturadas (g)", g100: 3.5, g60: 2.1, vd: 11 },
    { name: "Fibras alimentares (g)", g100: 0.6, g60: 0.4, vd: 2 },
    { name: "Sódio (mg)", g100: 48, g60: 29, vd: 1 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizante sintético idêntico ao natural.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_38 = {
  id: 38,
  name: "OVOMALTINE",
  ingredientes: "água, açúcar, leite em pó integral, recheio crocante de extrato de malte com cacau (óleo vegetal de girassol, açúcar, leite em pó integral, merengue sabor chocolate, extrato de malte, cacau em pó, emulsificante: lecitina de soja e aromatizante), glucose líquida, nata, pó para gelados comestíveis com extrato de malte e cacau (extrato de malte, cacau em pó e aromatizante), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE TRIGO, CEVADA, LEITE E SOJA. PODE CONTER CENTEIO, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 201, g60: 121, vd: 6 },
    { name: "Carboidratos (g)", g100: 27, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
    { name: "Proteínas (g)", g100: 3.6, g60: 2.2, vd: 4 },
    { name: "Gorduras totais (g)", g100: 9, g60: 5.4, vd: 8 },
    { name: "Gorduras saturadas (g)", g100: 4.2, g60: 2.5, vd: 13 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 53, g60: 32, vd: 2 },
  ],
  quantsignificativas: "Não contém quantidades significativas de fibras alimentares.",
  maisinfo: [
    "Aromatizado artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_39 = {
  id: 39,
  name: "PASSAS AO RUM",
  ingredientes: "água, açúcar, leite em pó integral, glicose líquida, uva passa, nata, rum, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), saborizante em pó de passas ao rum [açúcar, amido de milho, aromatizante artificial, corantes artificiais: amarelo tartrazina (INS 102) e amarelo crepúsculo] e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMÊNDOA, AMENDOIM, AVELÃS, SOJA, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 174, g60: 104, vd: 5 },
    { name: "Carboidratos (g)", g100: 24, g60: 15, vd: 5 },
    { name: "Açúcares totais (g)", g100: 20, g60: 12, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 13, g60: 8, vd: 16 },
    { name: "Proteínas (g)", g100: 2.9, g60: 1.8, vd: 4 },
    { name: "Gorduras totais (g)", g100: 6.5, g60: 3.9, vd: 6 },
    { name: "Gorduras saturadas (g)", g100: 3.7, g60: 2.2, vd: 11 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 44, g60: 26, vd: 1 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_40 = {
  id: 40,
  name: "PISTACHE",
  ingredientes: "água, açúcar, leite em pó integral, creme aromatizante de pistache (pistache, óleo vegetal, glucose em pó, gordura vegetal, sal, extrato de malte, cacau, emulsificante: lecitina de soja, corantes naturais: clorofilina cúprica e curcumina e aroma), glicose líquida, nata, gordura de palma, creme aromatizante e corante de pistache (açúcar, xarope de glucose, castanha-de-caju, álcool, espessante: carragena, corante artificial: azul indigotina e aroma idêntico ao natural), pistache, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), sal e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM CASTANHA-DE-CAJU E PISTACHE. CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 196, g60: 117, vd: 6 },
    { name: "Carboidratos (g)", g100: 23, g60: 14, vd: 5 },
    { name: "Açúcares totais (g)", g100: 19, g60: 11, vd: 0 },
    { name: "Açúcares adicionados (g)", g100: 14, g60: 8.5, vd: 17 },
    { name: "Proteínas (g)", g100: 3.5, g60: 2.1, vd: 4 },
    { name: "Gorduras totais (g)", g100: 10, g60: 6, vd: 9 },
    { name: "Gorduras saturadas (g)", g100: 4.2, g60: 2.5, vd: 13 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 206, g60: 124, vd: 6 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizante sintético idêntico ao natural.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_41 = {
  id: 41,
  name: "PRESTÍGIO",
  ingredientes: "água, açúcar, coco seco, leite de coco, leite em pó integral, chocolate ao leite (açúcar, licor de cacau, manteiga de cacau, soro de leite em pó parcialmente desmineralizado, gordura vegetal, leite em pó integral, gordura anidra de leite, emulsificantes: lecitina de soja e poliglicerol polirricinoleato e aromatizante), glicose líquida, nata, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena), estabilizante em pó para gelados comestíveis (açúcar, espessantes: goma guar, goma xantana e carboximetilcelulose) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 232, g60: 139, vd: 7 },
    { name: "Carboidratos (g)", g100: 25, g60: 15, vd: 5 },
    { name: "Açúcares totais (g)", g100: 21, g60: 13, vd: 5 },
    { name: "Açúcares adicionados (g)", g100: 18, g60: 11, vd: 22 },
    { name: "Proteínas (g)", g100: 2.7, g60: 1.6, vd: 3 },
    { name: "Gorduras totais (g)", g100: 14, g60: 8.2, vd: 13 },
    { name: "Gorduras saturadas (g)", g100: 9.3, g60: 5.6, vd: 28 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Fibras alimentares (g)", g100: 1, g60: 0.6, vd: 2 },
    { name: "Sódio (mg)", g100: 43, g60: 26, vd: 1 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Contém aromatizante."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO", "GORDURA SATURADA"],
},

s_42 = {
  id: 42,
  name: "RAFAELLO",
  ingredientes: "água, açúcar, leite em pó integral, pasta cremosa de avelãs (gordura vegetal, leite de coco, pedaços de biscoito (açúcar, avelãs, clara de ovo, farinha de trigo enriquecida com ferro e ácido fólico, açúcar caramelizado, fermento químico: bicarbonato de sódio, fermento químico: bicarbonato de amônio e aroma), açúcar, avelã, leite em pó integral, leite em pó desnatado, soro de leite, manteiga de cacau, emulsificante: lecitina de soja, flavorizante: vanilina e aromatizante), glicose líquida, nata, gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM AVELÃS. CONTÉM DERIVADOS DE TRIGO, OVO, LEITE, SOJA E AMÊNDOAS. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 210, g60: 126, vd: 6 },
    { name: "Carboidratos (g)", g100: 24, g60: 14, vd: 5 },
    { name: "Açúcares totais (g)", g100: 20, g60: 12, vd: 4 },
    { name: "Açúcares adicionados (g)", g100: 14, g60: 8.2, vd: 16 },
    { name: "Proteínas (g)", g100: 3.6, g60: 2.2, vd: 4 },
    { name: "Gorduras totais (g)", g100: 11, g60: 6.8, vd: 10 },
    { name: "Gorduras saturadas (g)", g100: 6.8, g60: 4.1, vd: 21 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Fibras alimentares (g)", g100: 0.6, g60: 0.4, vd: 2 },
    { name: "Sódio (mg)", g100: 53, g60: 32, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Contém aromatizante."
  ],
  alto_em: ["ALTO EM", "GORDURA SATURADA"],
},

s_43 = {
  id: 43,
  name: "TIRAMISÙ",
  ingredientes: "água, açúcar, biscoito champanhe, leite em pó integral, creme sabor tiramisù (vinho marsala, açúcar, ovos, aroma, corantes naturais: caramelo, cúrcuma, urucum e carmim cochonilha, amido modificado e conservante: sorbato de potássio), recheio de cacau com castanha-de-caju (açúcar, óleo vegetal de girassol, cacau em pó, gordura vegetal, leite em pó integral, castanha-de-caju, emulsificante: lecitina de soja e aromatizantes), glicose líquida, nata, licor creme de cacau (água, açúcar, álcool, extrato natural de cacau e corante natural: caramelo), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE TRIGO, OVO, LEITE, SOJA E CASTANHA-DE-CAJU. PODE CONTER CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 216, g60: 130, vd: 7 },
    { name: "Carboidratos (g)", g100: 31, g60: 19, vd: 6 },
    { name: "Açúcares totais (g)", g100: 19, g60: 12, vd: 4 },
    { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
    { name: "Proteínas (g)", g100: 3.5, g60: 2.1, vd: 4 },
    { name: "Gorduras totais (g)", g100: 7.7, g60: 4.6, vd: 7 },
    { name: "Gorduras saturadas (g)", g100: 3.6, g60: 2.2, vd: 11 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 63, g60: 38, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Contém aromatizante."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_44 = {
  id: 44,
  name: "TORTA DE LIMÃO",
  ingredientes: "água, açúcar, leite em pó integral, leite condensado, glicose líquida, nata, pasta sabor torta de limão (óleo vegetal, açúcar, leite em pó desnatado, gordura vegetal, biscoito (farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, fécula de mandioca, açúcar invertido, sal, emulsificante: lecitina de soja, fermentos químicos: bicarbonato de sódio e bicarbonato de amônio e acidulante: ácido cítrico), soro de leite, emulsificantes: lecitina de soja e polirricinoleato de poliglicerol, acidulante: ácido cítrico, aromatizante natural e antioxidante: BHA), saborizante de limão em pó (dextrose, suco de limão em pó, maltodextrina, acidulante: ácido cítrico e aromatizantes), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, OVO, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 195, g60: 117, vd: 6 },
    { name: "Carboidratos (g)", g100: 27, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 19, g60: 12, vd: 4 },
    { name: "Açúcares adicionados (g)", g100: 15, g60: 8.8, vd: 18 },
    { name: "Proteínas (g)", g100: 3.3, g60: 2, vd: 4 },
    { name: "Gorduras totais (g)", g100: 8.5, g60: 5.1, vd: 8 },
    { name: "Gorduras saturadas (g)", g100: 4.3, g60: 2.6, vd: 13 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 52, g60: 31, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Contém aromatizante."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_45 = {
  id: 45,
  name: "TRAMONTANA",
  ingredientes: "água, açúcar, doce de leite, leite em pó integral, nata, glicose líquida, nozes, uva passa, cacau em pó alcalino, gordura de palma, dextrose, licor creme de cacau (água, açúcar, álcool, extrato natural de cacau e corante natural caramelo) e mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena). CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 243, g60: 146, vd: 7 },
    { name: "Carboidratos (g)", g100: 33, g60: 20, vd: 7 },
    { name: "Açúcares totais (g)", g100: 23, g60: 14, vd: 5 },
    { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
    { name: "Proteínas (g)", g100: 4.3, g60: 2.6, vd: 5 },
    { name: "Gorduras totais (g)", g100: 11, g60: 6.5, vd: 10 },
    { name: "Gorduras saturadas (g)", g100: 5.4, g60: 3.3, vd: 17 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Fibras alimentares (g)", g100: 1.2, g60: 0.7, vd: 3 },
    { name: "Sódio (mg)", g100: 51, g60: 31, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_46 = {
  id: 46,
  name: "UNICÓRNIO",
  ingredientes: "água, açúcar, leite em pó integral, creme de leitinho (leite em pó desnatado, açúcar, óleo vegetal, gordura vegetal, polidextrose, sal, emulsificantes: lecitina de soja, mono e diglicerídeos de ácidos graxos e polirricinoleato de poliglicerol e aromatizante sintético idêntico ao natural), glicose líquida, nata, pasta sabor algodão doce rosa (açúcar, xarope de glicose, álcool de cereais, aromatizantes, acidulante: ácido cítrico, espessante: pectina e corante artificial: vermelho 40), pasta sabor algodão doce azul (açúcar, xarope de glicose, álcool de cereais, aromatizantes, acidulante: ácido cítrico, espessante: pectina e corante artificial: azul brilhante), gordura de palma, mistura de emulsificantes e hidrocolóides (mono e diglicerídeos de ácidos graxos, goma jataí, goma guar e carragena) e fermento químico: bicarbonato de sódio. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
  alergicos: "CONTÉM DERIVADOS DE LEITE E SOJA. PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 196, g60: 117, vd: 6 },
    { name: "Carboidratos (g)", g100: 26, g60: 16, vd: 5 },
    { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 5 },
    { name: "Açúcares adicionados (g)", g100: 17, g60: 10, vd: 20 },
    { name: "Proteínas (g)", g100: 3.4, g60: 2, vd: 4 },
    { name: "Gorduras totais (g)", g100: 8.6, g60: 5.2, vd: 8 },
    { name: "Gorduras saturadas (g)", g100: 4.3, g60: 2.6, vd: 13 },
    { name: "Gorduras trans (g)", g100: 0.2, g60: 0.1, vd: 5 },
    { name: "Sódio (mg)", g100: 55, g60: 33, vd: 2 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Contém aromatizante sintético idêntico ao natural.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},

s_47 = {
  id: 47,
  name: "UVA",
  ingredientes: "uva, açúcar, água, glicose líquida, mistura de hidrocolóides (gelatina, açúcar, mono e diglicerídeos de ácidos graxos, carboximetilcelulose sódica, goma jataí e goma guar) e saborizante de uva em pó (açúcar, amido de milho, regulador de acidez: ácido fumárico, aromatizante artificial, corantes artificiais: amaranto, azul indigotina e amarelo crepúsculo). CONTÉM GLÚTEN.",
  alergicos: "PODE CONTER TRIGO, CENTEIO, CEVADA, AVEIA E SUAS ESTIRPES HIBRIDIZADAS, OVO, LEITE, SOJA, AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS, PISTACHES, PINOLI E CASTANHAS.",
  comp: [
    { name: "Valor energético (kcal)", g100: 132, g60: 79, vd: 4 },
    { name: "Carboidratos (g)", g100: 33, g60: 20, vd: 7 },
    { name: "Açúcares totais (g)", g100: 22, g60: 13, vd: 5 },
    { name: "Açúcares adicionados (g)", g100: 22, g60: 13, vd: 26 },
    { name: "Gorduras totais (g)", g100: 0.3, g60: 0.2, vd: 0 },
    { name: "Gorduras saturadas (g)", g100: 0.2, g60: 0.1, vd: 1 },
    { name: "Fibras alimentares (g)", g100: 0.8, g60: 0.5, vd: 2 },
    { name: "Sódio (mg)", g100: 13, g60: 7.5, vd: 0 },
  ],
  quantsignificativas: "",
  maisinfo: [
    "Aromatizado artificialmente.",
    "Colorido artificialmente."
  ],
  alto_em: ["ALTO EM", "AÇÚCAR ADICIONADO"],
},


]

//-----------------------------------------------------------------------------//

const closebtn = document.querySelector(".btn-close")

closebtn.addEventListener("click", ()=> {
    const info = document.querySelector(".back-ice")
    info.style.display = "none"

    const ulComp = document.querySelector(".comp")
    const ulg100 = document.querySelector('.g100')
    const ulg60 = document.querySelector('.g60')
    const ulvd = document.querySelector('.vd')
    const maisinfo = document.querySelector(".maisinfo")
    const quant = document.querySelector('.quantidade')
    const pquant = document.querySelector('.quantidade p')
    const altoEm = document.querySelector('.alto-em')

    const liComp = document.querySelectorAll(".comp li")
    const lig100 = document.querySelectorAll(".g100 li")
    const lig60 = document.querySelectorAll(".g60 li")
    const livd = document.querySelectorAll(".vd li")
    const limaisinfo = document.querySelectorAll(".maisinfo li")
    const altoEmCard = document.querySelectorAll('.alto-em-card')

    liComp.forEach((li, index)=> {
        if (index === 0) return
        ulComp.removeChild(li)
    })

    lig100.forEach((li, index)=> {
        if (index === 0) return
        ulg100.removeChild(li)
    })

    lig60.forEach((li, index)=> {
        if (index === 0) return
        ulg60.removeChild(li)
    })

    livd.forEach((li, index)=> {
        if (index === 0) return
        ulvd.removeChild(li)
    })

    limaisinfo.forEach((li)=> {
        maisinfo.removeChild(li)
    })

    if(pquant){
         quant.removeChild(pquant)
    }

    altoEmCard.forEach((item)=> {
        altoEm.removeChild(item)
    })
   

})

//-----------------------------------------------------------------------------//

const showIce = (nameIce, listComp, contem, ingr, alergic, maisin, alto ) => {

    const info = document.querySelector(".back-ice")
    info.style.display = "flex"

    const name = document.querySelector('.nameice')
    const cont = document.querySelector(".cont")
    const ingredientes = document.querySelector(".ingredientes")
    const alergicos = document.querySelector('.alergicos')

    name.innerHTML = nameIce

    const ulComp = document.querySelector(".comp")
    const ulg100 = document.querySelector('.g100')
    const ulg60 = document.querySelector('.g60')
    const ulvd = document.querySelector('.vd')
    const maisinfo = document.querySelector(".maisinfo")
    const altoEm = document.querySelector('.alto-em')

    listComp.forEach((item) => {
        const liComp = document.createElement("li")
        const lig100 = document.createElement("li")
        const lig60 = document.createElement("li")
        const livd = document.createElement("li")
        liComp.innerHTML = item.name
        lig100.innerHTML = item.g100
        lig60.innerHTML = item.g60
        livd.innerHTML = item.vd
        ulComp.appendChild(liComp)
        ulg100.appendChild(lig100)
        ulg60.appendChild(lig60)
        ulvd.appendChild(livd)
    })

    if(contem){
        const newCont = document.createElement('p')
        const quant = document.querySelector('.quantidade')
        newCont.innerHTML = contem
        quant.appendChild(newCont)
    } else {
        if(cont){
             cont.remove()
        } 
    }

    if(alergic){
        alergicos.innerHTML = alergic
    } else {
        alergicos.innerHTML = ""
    }

    if(maisin){
        maisin.forEach((item) => {
            const liInfo = document.createElement("li")
            liInfo.innerHTML = item
            maisinfo.appendChild(liInfo)
        })
    }

    if(alto){
        altoEm.style.display = 'flex'
        alto.forEach((item) => {
            const labelAlto = document.createElement('div')
            labelAlto.innerHTML = item
            labelAlto.classList.add('alto-em-card')
            altoEm.appendChild(labelAlto)
        })
    }else{
        altoEm.style.display = 'none'
    }

    ingredientes.innerHTML = ingr

}

//-----------------------------------------------------------------------------//

const listIcecream = document.querySelector(".list");
let lista = []; // armazenará os sorvetes da API

// 🔹 busca sorvetes da API
async function loadIcecreams() {
  try {
    const res = await fetch("http://localhost:4000/api");
    if (!res.ok) throw new Error("Erro ao buscar sorvetes");

    lista = await res.json();
    console.log(lista)
    showList(); // exibe todos ao carregar
  } catch (err) {
    console.error("Erro ao carregar lista:", err);
  }
}



const showList = (nameIce) => {

    let glutem = document.getElementById('check1').checked
    let lactose = document.getElementById('check2').checked
    let acucar = document.getElementById('check3').checked

    const liIce = document.querySelectorAll(".list li")

    if(!nameIce) {
        nameIce = document.getElementById('inputIce').value.toUpperCase()
    }

    liIce.forEach((li)=> {
        listIcecream.removeChild(li)
    })

    /** 
    lista.forEach((item) => {
        if(item.nome.includes(nameIce) || nameIce == null){
        const liIcecream = document.createElement("li")
        const iceTitle = document.createElement("h2")
        iceTitle.innerHTML = item.nome
        liIcecream.appendChild(iceTitle)
        listIcecream.appendChild(liIcecream)
        liIcecream.addEventListener("click", ()=> {
            showIce(item.nome, item.nutricoes, item.nao_contem, item.ingredientes, item.alergicos, item.contem)
        })
        } else {
            return
        }

    })
        */

        list.forEach((item) => {

        if(glutem == true){
            if(item.ingredientes.includes('GLÚTEN')){
                return
            }
        }

        if(acucar == true){
            if(item.ingredientes.includes('açúcar')){
                return
            }
        }

        if(lactose == true){
            if(item.ingredientes.includes('LACTOSE')){
                return
            }
        }

        if(item.name.includes(nameIce) || nameIce == null){
        const liIcecream = document.createElement("li")
        const iceTitle = document.createElement("h2")
        iceTitle.innerHTML = item.name
        liIcecream.appendChild(iceTitle)
        listIcecream.appendChild(liIcecream)
        liIcecream.addEventListener("click", ()=> {
            showIce(item.name, item.comp, item.quantsignificativas, item.ingredientes, item.alergicos, item.maisinfo, item.alto_em)
        })
        } else {
            return
        }
    })

}

const inputIce = document.getElementById("inputIce");

inputIce.addEventListener("input", () => {
  showList(inputIce.value.toUpperCase());
});


//loadIcecreams()

showList()



const contemGlutem = document.getElementById('check1')
const contemLactose = document.getElementById('check2')
const contemAcucar = document.getElementById('check3')

contemGlutem.addEventListener('click', ()=> {
    showList()
})

contemLactose.addEventListener('click', ()=> {
    showList()
})

contemAcucar.addEventListener('click', ()=> {
    showList()
})