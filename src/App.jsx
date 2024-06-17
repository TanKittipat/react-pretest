import CardCompo from "./CardCompo";

function App() {
  return (
    <div className="container">
      <div className="title" id="title">
        <header>
          <h2>Grab Restaurant</h2>
        </header>
      </div>
      <div className="search" id="search">
        <input
          type="text"
          className="form-control"
          id="search-bar"
          placeholder="Search"
        />
      </div>
      <div className="card-lists" id="card-lists">
        <div className="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/items/THITE2021042006463787451/detail/menueditor_item_a9c94c76fca2412eaf15471ec714c62b_1658287441624692726.webp"
            alt=""
          />
          <div class="card-body">
            <h6 class="card-title">กาแฟบุตรี - เสาชิงช้า</h6>
            <p class="card-text">ชา กาแฟ</p>
            <a href="#" class="btn btn-primary">
              Order now!
            </a>
          </div>
        </div>
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
      </div>
    </div>
  );
}

export default App;
