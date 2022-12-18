import Body from "../components/Body";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Header>
        <h1>My Blog</h1>
      </Header>
      <Body>
        <Search placeholder="Search Title" />
        <Card>
          <h2>Blog Post 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt facilisis posuere. Praesent tempus ipsum et libero pretium
            rutrum. Curabitur condimentum, ipsum ac laoreet iaculis, tortor diam
            convallis neque, in malesuada risus justo quis lacus. Etiam tempor
            non elit at molestie. Integer ac magna aliquet, malesuada ante eget,
            viverra lacus. Donec tincidunt libero quam, malesuada bibendum nibh
            imperdiet vel. Aenean turpis mauris, mollis a rutrum in, finibus in
            odio. Aliquam ut ante ipsum. Nam a sem id diam mollis dictum nec
            vitae sapien. Praesent tempor, nisl eu ultricies luctus, justo
            tortor viverra orci, ac gravida urna ex at ex. Curabitur feugiat est
            maximus placerat rutrum. Duis finibus ac turpis a finibus. Nam
            cursus sed ligula efficitur ultrices. Suspendisse potenti.
          </p>
        </Card>
        <Card>
          <h2>Blog Post 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt facilisis posuere. Praesent tempus ipsum et libero pretium
            rutrum. Curabitur condimentum, ipsum ac laoreet iaculis, tortor diam
            convallis neque, in malesuada risus justo quis lacus. Etiam tempor
            non elit at molestie. Integer ac magna aliquet, malesuada ante eget,
            viverra lacus. Donec tincidunt libero quam, malesuada bibendum nibh
            imperdiet vel. Aenean turpis mauris, mollis a rutrum in, finibus in
            odio. Aliquam ut ante ipsum. Nam a sem id diam mollis dictum nec
            vitae sapien. Praesent tempor, nisl eu ultricies luctus, justo
            tortor viverra orci, ac gravida urna ex at ex. Curabitur feugiat est
            maximus placerat rutrum. Duis finibus ac turpis a finibus. Nam
            cursus sed ligula efficitur ultrices. Suspendisse potenti.
          </p>
        </Card>
        <Card>
          <h2>Blog Post 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt facilisis posuere. Praesent tempus ipsum et libero pretium
            rutrum. Curabitur condimentum, ipsum ac laoreet iaculis, tortor diam
            convallis neque, in malesuada risus justo quis lacus. Etiam tempor
            non elit at molestie. Integer ac magna aliquet, malesuada ante eget,
            viverra lacus. Donec tincidunt libero quam, malesuada bibendum nibh
            imperdiet vel. Aenean turpis mauris, mollis a rutrum in, finibus in
            odio. Aliquam ut ante ipsum. Nam a sem id diam mollis dictum nec
            vitae sapien. Praesent tempor, nisl eu ultricies luctus, justo
            tortor viverra orci, ac gravida urna ex at ex. Curabitur feugiat est
            maximus placerat rutrum. Duis finibus ac turpis a finibus. Nam
            cursus sed ligula efficitur ultrices. Suspendisse potenti.
          </p>
        </Card>
      </Body>
      <Footer>&copy;2022 Lowri M</Footer>
    </>
  );
}
