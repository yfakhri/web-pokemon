function changePokemon(pokemon) {
  if (pokemon.value === "base") {
    document.getElementById("pkmn1-name").innerText = "Charmander";
    document.getElementById("pkmn1-image").src = "assets/image/charmander.png";
    document.getElementById("pkmn1-desc").innerText =
      "Charmander adalah Pokémon reptil berkaki dua dengan tubuh oranye dan mata biru. Bagian bawahnya dari dada ke bawah dan telapak kakinya berwarna krem. Ia memiliki dua taring kecil yang terlihat di rahang atasnya dan dua taring yang lebih kecil di rahang bawahnya. Api menyala di ujung ekor ramping Pokémon ini dan telah berkobar di sana sejak kelahiran Charmander. Nyala api dapat digunakan sebagai indikasi kesehatan dan suasana hati Charmander, menyala terang saat Pokemon kuat, lemah saat kelelahan, goyah saat bahagia, dan menyala saat marah. Dikatakan bahwa Charmander mati jika nyala apinya padam. Namun, jika Pokemon sehat, nyala api akan terus menyala meskipun agak basah dan dikatakan mengepul saat hujan.";

    document.getElementById("pkmn2-name").innerText = "Squirtle";
    document.getElementById("pkmn2-image").src = "assets/image/squirtle.png";
    document.getElementById("pkmn2-desc").innerText =
      "Squirtle adalah Pokémon reptil kecil yang menyerupai kura-kura biru muda. Meskipun biasanya berjalan dengan dua kaki pendek, ia juga dapat berjalan dengan empat kaki. Brawl. Ia memiliki mata besar, keunguan atau kemerahan dan bibir atas yang sedikit bengkok. Masing-masing tangan dan kakinya memiliki tiga jari runcing. Ujung ekornya yang panjang melengkung ke dalam. Tubuhnya terbungkus oleh cangkang keras yang terbentuk dan mengeras setelah lahir. Cangkang ini berwarna coklat di bagian atas, kuning pucat di bagian bawah, dan memiliki tonjolan putih tebal di antara kedua bagiannya.";

    document.getElementById("pkmn3-name").innerText = "Bulbasaur";
    document.getElementById("pkmn3-image").src = "assets/image/bulbasaur.png";
    document.getElementById("pkmn3-desc").innerText =
      "Bulbasaur adalah Pokémon amfibi berkaki empat kecil yang memiliki kulit biru-hijau dengan bercak lebih gelap. Ia memiliki mata merah dengan pupil putih, runcing, struktur seperti telinga di atas kepalanya, dan moncong pendek dan tumpul dengan mulut lebar. Sepasang gigi kecil runcing terlihat di rahang atas saat mulutnya terbuka. Masing-masing kakinya yang tebal berakhir dengan tiga cakar yang tajam. Di punggung Bulbasaur ada bohlam tanaman hijau, yang tumbuh dari biji yang ditanam di sana saat lahir. Bulbasaur juga menyembunyikan dua tanaman merambat ramping seperti tentakel dan memberinya energi melalui fotosintesis serta dari biji kaya nutrisi yang terkandung di dalamnya.";
  } else if (pokemon.value === "ev1") {
    document.getElementById("pkmn1-name").innerText = "Charmeleon";
    document.getElementById("pkmn1-image").src = "assets/image/charmeleon.png";
    document.getElementById("pkmn1-desc").innerText =
      "Charmeleon adalah Pokémon reptil berkaki dua. Ini memiliki sisik merah gelap dan krim di bawah dari dada ke bawah. Ia memiliki mata biru dan moncong panjang dengan ujung yang sedikit bengkok. Di bagian belakang kepalanya ada tonjolan seperti tanduk tunggal. Ia memiliki lengan yang relatif panjang dengan tiga cakar yang tajam. Kakinya yang pendek memiliki kaki plantigrade dengan tiga cakar dan sol berwarna krem. Ujung ekornya yang panjang dan kuat memiliki nyala api di atasnya. Suhu naik ke tingkat yang tak tertahankan jika Charmeleon mengayunkan ekornya.";

    document.getElementById("pkmn2-name").innerText = "Wartortle";
    document.getElementById("pkmn2-image").src = "assets/image/wartortle.png";
    document.getElementById("pkmn2-desc").innerText =
      "Wartortle adalah Pokémon reptil berkaki dua, nila yang mirip dengan kura-kura. Ia memiliki mata cokelat, garis biru tua di setiap pipi, dan dua gigi tajam menonjol dari rahang atasnya. Ia memiliki tiga jari cakar dan jari kaki runcing. Di setiap sisi kepalanya ada telinga seperti bulu yang ditutupi bulu biru pucat. Cangkang coklat dengan bagian bawah kuning pucat membungkus tubuhnya. Pelek putih tebal memisahkan bagian atas dan bawah cangkang. Wartortle yang lebih tua mungkin memiliki bekas luka dan ganggang yang tumbuh di cangkangnya. Menyembul dari bagian bawah cangkang adalah ekor tebal bergelombang yang juga memiliki bulu biru muda dan tidak dapat sepenuhnya ditarik ke dalam cangkangnya. Bulu ekornya akan menggelap seiring bertambahnya usia. Ekornya adalah simbol populer umur panjang dan keberuntungan, membuat Pokémon ini populer di kalangan orang tua.";

    document.getElementById("pkmn3-name").innerText = "Ivysaur";
    document.getElementById("pkmn3-image").src = "assets/image/ivysaur.png";
    document.getElementById("pkmn3-desc").innerText =
      "Ivysaur adalah Pokémon amfibi berkaki empat yang memiliki kulit biru-hijau dengan bercak lebih gelap. Di atas kepalanya terdapat telinga runcing dengan bagian dalam berwarna hitam dan memiliki mata merah yang sipit. Ivysaur memiliki moncong bulat pendek dengan mulut lebar dan dua gigi runcing di rahang atasnya. Masing-masing kakinya memiliki tiga cakar. Umbi di punggungnya telah mekar menjadi kuncup merah muda yang besar. Batang coklat pendek dikelilingi oleh daun hijau berdaun mendukung kuncup.";
  } else {
    document.getElementById("pkmn1-name").innerText = "Charizard";
    document.getElementById("pkmn1-image").src = "assets/image/charizard.png";
    document.getElementById("pkmn1-desc").innerText =
      "Charizard adalah Pokémon berkaki dua yang drakonik memiliki warna utama oranye dan warna krem dari dada hingga ujung ekor. Ia memiliki leher panjang, mata biru kecil, lubang hidung sedikit terangkat, dan tanduk yang menonjol dari bagian belakang kepala persegi panjangnya. Ada dua taring yang terlihat di rahang atasnya saat mulutnya tertutup. Dua sayap besar dengan bagian bawah biru-hijau tumbuh dari punggungnya, dan embel-embel seperti tanduk menonjol dari atas sambungan ketiga setiap sayap. Jari sayap tunggal terlihat melalui bagian tengah setiap membran sayap. Lengan Charizard pendek dan kurus dibandingkan dengan perutnya yang kuat, dan setiap anggota badan memiliki tiga cakar putih. Ia memiliki kaki kekar dengan sol berwarna krem pada setiap kaki plantigrade-nya. Ujung ekornya yang panjang dan lancip terbakar dengan nyala api yang cukup besar.";

    document.getElementById("pkmn2-name").innerText = "Blastoise";
    document.getElementById("pkmn2-image").src = "assets/image/blastoise.png";
    document.getElementById("pkmn2-desc").innerText =
      "Blastoise adalah Pokémon kura-kura berkaki dua yang besar. Tubuhnya berwarna biru dan sebagian besar tersembunyi oleh cangkang cokelatnya yang keras. Cangkang ini memiliki bagian bawah berwarna krem ​​dan punggungan putih melingkari lengannya dan memisahkan bagian atas dan bawah. Dua meriam air yang kuat berada di bagian atas cangkangnya di atas bahunya. Meriam ini dapat diperpanjang atau ditarik. Kepala Blastoise memiliki telinga segitiga yang berwarna hitam di bagian dalam, mata cokelat kecil, dan rahang bawah berwarna krem. Lengannya tebal, dan memiliki tiga cakar di masing-masing tangan. Kakinya memiliki tiga cakar di depan dan satu di belakang. Menyembul dari bagian bawah cangkangnya adalah ekor yang gemuk.";

    document.getElementById("pkmn3-name").innerText = "Venusaur";
    document.getElementById("pkmn3-image").src = "assets/image/venusaur.png";
    document.getElementById("pkmn3-desc").innerText =
      "Venusaur adalah Pokémon amfibi berkaki empat yang jongkok dengan kulit bergelombang berwarna biru-hijau. Ia memiliki mata merah kecil melingkar dan moncong pendek dan tumpul. Mulutnya lebar dengan dua gigi runcing di rahang atas dan empat di rahang bawah. Di atas kepalanya kecil, telinga runcing dengan bagian dalam merah muda kemerahan. Ia memiliki tiga jari cakar di setiap kakinya. Kuncup di punggungnya telah mekar menjadi bunga merah muda besar berbintik-bintik putih. Bunganya ditopang oleh batang cokelat tebal yang dikelilingi oleh daun hijau. Venusaur betina memiliki biji di tengah bunganya.";
  }
}
