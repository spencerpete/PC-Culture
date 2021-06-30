import './CategoryCard.css';
const CategoryCard = () => {
  return (
    <div className="category-cards-container">
      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img src="https://c1.neweggimages.com/ProductImage/19-113-569-V01.jpg" alt="CPU img" />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">CPUs</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img src="https://c1.neweggimages.com/ProductImage/20-231-941-03.jpg" alt="RAM img" />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">RAMs</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img
            src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/629457_186510_01_front_zoom.jpg"
            alt="Motherboard img"
          />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">Motherboards</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img
            src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/628346_173013_01_front_zoom.jpg"
            alt="GPU img"
          />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">GPUs</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img
            src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/633661_232421_01_front_zoom.jpg"
            alt="Storage img"
          />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">Storage</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img
            src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638084_281121_01_front_zoom.jpg"
            alt="Case img"
          />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">Cases</div>
        </div>
      </div>

      <div className="categoryCard-shell">
        <div className="categoryCard-img-shell">
          <img
            src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/624907_128025_01_front_zoom.jpg"
            alt="Power Supply img"
          />
        </div>
        <div className="categoryCard-info-shell">
          <div className="categoryCard-info-body">Power Supplies</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
