var listaFilmes = [
    "https://m.media-amazon.com/images/I/51DgYTEd49L.jpg",
    "https://m.media-amazon.com/images/I/515J1emcbkL.jpg",
    "https://m.media-amazon.com/images/I/41prSQnkSiL.jpg",
    "https://m.media-amazon.com/images/I/511p8jnsATL.jpg",
    "https://m.media-amazon.com/images/I/41I1NK83piL.jpg",
    "https://m.media-amazon.com/images/I/51o38t7bl+L.jpg",
    "https://play-lh.googleusercontent.com/yqG-DMUksRrOs4creXE09OAj9h2bHm5_-tMX7FEPaUVW-i6O8ZJS_ydeqZlS18HxXg_MKw",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7fbb229ba2ece10b7033828c658b6c4873d81fbd1e07443d8f507b51cd1134d0._RI_V_TTW_.jpg"
  ];
  
  var assistirFilmes = [
    "https://play.google.com/store/movies/details/Harry_Potter_e_a_Pedra_Filosofal?id=T64FAw-0Wj4.P&hl=pt_BR",
    "https://play.google.com/store/movies/details/HP2_e_a_C%C3%A2mara_Secreta?id=2yrd1iSoOoM.P&hl=pt_BR",
    "https://play.google.com/store/movies/details/Harry_Potter_and_the_Prisoner_of_Azkaban?id=wsJmHfn_qks&hl=pt_BR",
    "https://play.google.com/store/movies/details/HP4_e_o_C%C3%A1lice_de_Fogo?id=Ku163nzZSCM.P&hl=pt_BR",
  
    "https://www.nowonline.com.br/filme/harry-potter-e-a-ordem-da-fenix/42388",
    "https://www.nowonline.com.br/filme/harry-potter-e-o-enigma-do-principe/42309",
    "https://www.warnerbros.com.br/filmes/harry-potter-e-reliquias-da-morte-part-1",
    "https://www.nowonline.com.br/filme/harry-potter-e-as-reliquias-da-morte-parte-2/42473"
  ];
  
  for (i = 0; i < listaFilmes.length; i++) {
    document.write(
      "<a href=" +
        assistirFilmes[i] +
        'target="_blank"><img src=' +
        listaFilmes[i] +
        "></a>"
    );
  }
  