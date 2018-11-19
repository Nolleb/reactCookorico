const receipes = {
    receipe1: {
    name: "Parmentier de canard",
    subname: "aux oignons",
    image: "/images/parmentier-canard-small.jpg",
    category: "viande",
    color: "#ffbbd6",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 4,
          "unit": "",
          "name": "cuisses de canard"
        },
        {
          "quantity": 2,
          "unit": "",
          "name": "oignons coupés en 4"
        },
        {
          "quantity": 2,
          "unit": "",
          "name": "c. à café de cassonade"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "cube de bouillon de volaille"
        },
        {
          "quantity": 800,
          "unit": "g",
          "name": "de pommes de terre en dés de 1 cm"
        },
        {
          "quantity": 400,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 2,
          "unit": "c. à soupe",
          "name": "de fromage frais (type boursin)"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Retire les os, la peau (la réserver) et un maximum de gras autour des cuisses de canard"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong>8 min / varoma / sens inverse / vitesse 1</strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 15,
        "bake": 33
      }
  },
    receipe2: {
    name: "Saucisses de volailles,",
    subname: "lentilles et carottes",
    image: "/images/saucisses-lentilles-small.jpg",
    category: "viande",
    color: "#ffbbd6",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 1,
          "unit": "sans unité",
          "name": "rôti de porc"
        },
        {
          "quantity": 2,
          "unit": "gousses",
          "name": "ail"
        },
        {
          "quantity": 300,
          "unit": "grammes",
          "name": "figue"
        },
        {
          "quantity": 2,
          "unit": "",
          "name": "orange"
        },
        {
          "quantity": 0.5,
          "unit": "",
          "name": "citron jaune"
        },
        {
          "quantity": 2,
          "unit": "cuillères à soupe",
          "name": "pignon de pin"
        },
        {
          "quantity": 10,
          "unit": "centilitre",
          "name": "porto"
        },
        {
          "quantity": 1,
          "unit": "filet",
          "name": "huile d'olive"
        },
        {
          "quantity": 50,
          "unit": "gramme",
          "name": "beurre"
        },
        {
          "quantity": 1,
          "unit": "cuillère à café",
          "name": "fond de veau"
        },
        {
          "quantity": 5,
          "unit": "gramme",
          "name": "sucre en poudre"
        },
        {
          "quantity": 2,
          "unit": "sans unité",
          "name": "feuille de laurier"
        },
        {
          "quantity": 400,
          "unit": "gramme",
          "name": "riz"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Épluchez l'ail. Pratiquez avec la pointe d'un couteau des incisions dans la viande puis enfoncez-y des éclats d'ail. Frottez-la avec un demi-citron."
        },
        {
          "order": 2,
          "step": "Mettez le rôti dans un plat, assaisonnez-le avec du sel, du poivre, le laurier ciselé et le zeste d'un demi-citron et d'une demi-orange finement râpés. Arrosez-le d'huile."
        },
        {
          "order": 3,
          "step": "Chauffez votre four 210°C. Disposez sur le rôti 30g de beurre en parcelles. Enfournez et laissez cuire 50 minutes en arrosant régulièrement avec le jus de citron."
        },
        {
          "order": 4,
          "step": "Faites cuire le riz dans une fois et demie son volume d'eau bouillante salée."
        }
      ],
      time: {
        "prep": 15,
        "bake": 60
      }
  },
    receipe3: {
    name: "Taboulé de Quinoa",
    subname: "exotique aux crevettes",
    image: "/images/taboule-quinoa-small.jpg",
    category: "salade",
    color: "#8cd790",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 200,
          "unit": "g",
          "name": "de quinoa"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "citron"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de coriandre (tiges retirées)"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de menthe (tiges retirées)"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de tomates cerises coupées en deux"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "mangue"
        },
        {
          "quantity": 40,
          "unit": "g",
          "name": "d'huile d'olive"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de petites crevettes décortiquées"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Rincer le quinoa longuement sous l'eau froide dans une passoire fine, le mettre dans le bol et verser l'eau. Cuire <strong>13 min /100°C / sens inverses / vitesse mijotage </strong>"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong>8 min / varoma / sens inverse / vitesse 1</strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 15,
        "bake": 33
      }
  },
    receipe4: {
    name: "Crème de butternut",
    subname: "aux châtaignes",
    image: "/images/creme-butternut-small.jpg",
    category: "soupe",
    color: "#f68657",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 200,
          "unit": "g",
          "name": "de quinoa"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "citron"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de coriandre (tiges retirées)"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de menthe (tiges retirées)"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de tomates cerises coupées en deux"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "mangue"
        },
        {
          "quantity": 40,
          "unit": "g",
          "name": "d'huile d'olive"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de petites crevettes décortiquées"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Rincer le quinoa longuement sous l'eau froide dans une passoire fine, le mettre dans le bol et verser l'eau. Cuire <strong>13 min /100°C / sens inverses / vitesse mijotage </strong>"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong>8 min / varoma / sens inverse / vitesse 1</strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 15,
        "bake": 20
      }
  },
    receipe5: {
    name: "Quiche de la boîte",
    subname: "à fromage",
    image: "/images/quiche-boite-small.jpg",
    category: "tarte",
    color:'#8c9184',
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 200,
          "unit": "g",
          "name": "de quinoa"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "citron"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de coriandre (tiges retirées)"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de menthe (tiges retirées)"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de tomates cerises coupées en deux"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "mangue"
        },
        {
          "quantity": 40,
          "unit": "g",
          "name": "d'huile d'olive"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de petites crevettes décortiquées"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Rincer le quinoa longuement sous l'eau froide dans une passoire fine, le mettre dans le bol et verser l'eau. Cuire <strong>13 min /100°C / sens inverses / vitesse mijotage </strong>"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong>8 min / varoma / sens inverse / vitesse 1</strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 15,
        "bake": 40
      }
  },
    receipe6: {
    name: "Gnocchis",
    subname: "à la carbonara",
    image: "/images/gnocchis-small.jpg",
    category: "pate",
    color: "#ffda8e",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 200,
          "unit": "g",
          "name": "de quinoa"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "citron"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de coriandre (tiges retirées)"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de menthe (tiges retirées)"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de tomates cerises coupées en deux"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "mangue"
        },
        {
          "quantity": 40,
          "unit": "g",
          "name": "d'huile d'olive"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de petites crevettes décortiquées"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Rincer le quinoa longuement sous l'eau froide dans une passoire fine, le mettre dans le bol et verser l'eau. Cuire <strong>13 min /100°C / sens inverses / vitesse mijotage </strong>"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong>8 min / varoma / sens inverse / vitesse 1</strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 5,
        "bake": 8
      }
  },
    receipe7: {
    name: "Brandade de morue",
    subname: "et persillade",
    image: "/images/brandade-small.jpg",
    category: "poisson",
    color: "#1ce",
    favorite: "inactive",
    portions: 4,
    ingredients: [
        {
          "quantity": 200,
          "unit": "g",
          "name": "de quinoa"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "d'eau"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "citron"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de coriandre (tiges retirées)"
        },
        {
          "quantity": 25,
          "unit": "g",
          "name": "de menthe (tiges retirées)"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de tomates cerises coupées en deux"
        },
        {
          "quantity": 1,
          "unit": "",
          "name": "mangue"
        },
        {
          "quantity": 40,
          "unit": "g",
          "name": "d'huile d'olive"
        },
        {
          "quantity": 200,
          "unit": "g",
          "name": "de petites crevettes décortiquées"
        }
      ],
      steps: [
        {
          "order": 1,
          "step": "Rincer le quinoa longuement sous l'eau froide dans une passoire fine, le mettre dans le bol et verser l'eau. Cuire <strong>13 min /100°C / sens inverses / vitesse mijotage </strong>"
        },
        {
          "order": 2,
          "step": "Dans le bol, mettre les oignons, la cassonade, le cube de bouillon émietté et la moitié de la peau réservé. Faire dorer <strong> 8 min / varoma / sens inverse / vitesse 1 </strong> sans le gobelet doseur."
        },
        {
          "order": 3,
          "step": "Ajouter les pommes de terre et l'eau dans le bol. Placer le Varoma, y mettre les cuisses de canard. Cuire <strong>25 min / 100°C / sens inverse / vitesse 1.</strong>"
        },
        {
          "order": 4,
          "step": "Réserver le Varoma sur une assiette. <strong>Insérer le fouet</strong>, ajouter le fromage et mélanger <strong>1 min / vitesse 3.</strong>"
        },
        {
          "order": 5,
          "step": "Servir la purée avec le canard effiloché dessus."
        }
      ],
      time: {
        "prep": 12,
        "bake": 34
      }
  }
};

export default receipes;

