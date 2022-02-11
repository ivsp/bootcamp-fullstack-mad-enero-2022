import PrintH1 from "./components/greeting";

//import Cards from "./components/country-card";
import Anime from "./components/anime-card/anime";

function App() {
  // EJERCICIO 1
  /*
  const names = [
    "Alex",
    "José",
    "Iván",
    "Sergio",
    "Alba",
    "Andrea",
    "Pepe",
    "Robin",
    "Maca",
    "Jorge",
  ];
  return (
    <main>
      {names.map((n) => (
        <PrintH1 name={`${n}`} extend={n.length < 6}></PrintH1>
      ))}
    </main>
  );
}
*/

  /**
   * EJERCICIO2
   *
   */
  // let pais = {
  //   name_en: "Afghanistan",
  //   name_es: "Afganistán",
  //   dial_code: "+93",
  //   code: "AF",
  //   img: "https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg",
  // };

  let countries = [
    {
      name_en: "Afghanistan",
      name_es: "Afganistán",
      dial_code: "+93",
      code: "AF",
      img: "https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg",
    },
    {
      code: "DZ",
      dial_code: "+213",
      name_en: "Algeria",
      name_es: "Argelia",
      img: "https://www.iflr.com/Media/images/iflr/11-ahmed-data-images/Matouk%20Algeria.jpeg",
    },
    {
      code: "AS",
      dial_code: "+1684",
      name_en: "AmericanSamoa",
      name_es: "Samoa Americana",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/AmericanSamoa.jpg",
    },
    {
      code: "AD",
      dial_code: "+376",
      name_en: "Andorra",
      name_es: "Andorra",
      img: "https://estaticos-cdn.sport.es/clip/401ebd76-4d64-44b2-b2f2-f780a22c997d_alta-libre-aspect-ratio_default_0.jpg",
    },
    {
      code: "AO",
      dial_code: "+244",
      name_en: "Angola",
      name_es: "Angola",
      img: "https://www.kayak.es/rimg/dimg/ec/9d/01dfcc84-city-9951-172c0bb1d2b.jpg?width=400&height=300&xhint=1953&yhint=905&crop=true",
    },
    {
      code: "TG",
      dial_code: "+228",
      name_en: "Togo",
      name_es: "Togo",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2014-06-16_19-07-24_Togo_Maritime_-_Adjogbl%C3%A9.JPG/280px-2014-06-16_19-07-24_Togo_Maritime_-_Adjogbl%C3%A9.JPG",
    },
  ];

  let animes = [
    {
      image:
        "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
      title: "Shingeki no Kyojin",
      rank: 1,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      title: "Death Note",
      rank: 2,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      title: "Fullmetal Alchemist",
      rank: 3,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
      title: "One Punch Man",
      rank: 4,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d",
      title: "Sword Art Online",
      rank: 5,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2",
      title: "Boku no Hero Academia",
      rank: 6,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/5/64449.jpg?s=f1af76501ac3d4238170191d5e0679f2",
      title: "Tokyo Ghoul",
      rank: 7,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
      title: "Naruto",
      rank: 8,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
      title: "Kimetsu no Yaiba",
      rank: 9,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6",
      title: "Kimi no Na wa.",
      rank: 10,
    },
  ];

  return (
    <main className="main__comtainer">
      {/* Ejercicio 4 */}
      {/* <Cards
         name={pais.name_es}
         img={pais.img}
         code={pais.code}
         dial_code={pais.dial_code}
       ></Cards> */}
      {/* Ejercicio 5 */}
      {/*countries.map((c) =>
         c.name_en.length > 4 ? (
           <Cards
             name={c.name_es}
             img={c.img}
             code={c.code}
             dial_code={c.dial_code}
           ></Cards>
         ) : (
           ""
         )
       )*/}

      {/* Ejercicio 6 y 7*/}
      {animes.map((c) => (
        <Anime title={c.title} rank={c.rank} img={c.image}></Anime>
      ))}
    </main>
  );
}

export default App;
