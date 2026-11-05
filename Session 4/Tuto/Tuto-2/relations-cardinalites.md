
## Relations identifiées

| Entité A | Cardinalité A | Verbe | Cardinalité B | Entité B |
| :--- | :---: | :---: | :---: | :--- |
| VILLE | 1,N | habite | 1,1 | AUTEUR |
| AUTEUR | 1,N | rédige | 1,1 | ARTICLE |
| CATEGORIE | 1,N | regroupe | 1,1 | ARTICLE |
| ARTICLE | 0,N | possède | 0,N | TAG |