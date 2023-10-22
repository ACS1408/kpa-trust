import style from "./AboutLegalInfo.module.scss";

const AboutLegalInfo = (props) => {
  return (
    <div className={style.section}>
      <div className="container">
        <h2 className={`${style.section_title} h2 fw-bold ff-secondary text-center`}>
          Legal Information
        </h2>
        <p className={`${style.section_description} text-center`}>
          KPA Trust is registered as Kerala Pravasi Association Trust, a
          not-for-profit company u/s 8 of the Companies Act, 2013. , with the
          RoC, Kerala. KPA Trust is registered u/s 12A of the Income Tax Act,
          1961, and with the Director of Income Tax (Exemptions) u/s 80G, valid
          until 31/3/2026 KPA Trust is registered under section 6 (1) (a) of the
          Foreign Contribution (Regulation) Act, 1976 .
        </p>
      </div>
    </div>
  );
};

export default AboutLegalInfo;
