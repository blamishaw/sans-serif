const courses = {
  "AAL": "African and Asian Languages",
  "ACCOUNT": "Accounting",
  "ACCT": "Accounting and Information Systems",
  "ACCT": "Accounting & Info Systems",
  "ACCTL": "Accounting and Information Systems",
  "ACCTM": "Accounting & Info Systems",
  "ACE_IBS": "American Culture & English",
  "ADV_FINC": "Advanced Topics in Financial Planning",
  "ADVT": "Advertising",
  "AF_AM_ST": "African American Studies",
  "AFST": "African Studies",
  "ALT_CERT": "Alternative Certification",
  "AMER_ST": "American Studies",
  "AMES": "Asian and Middle Eastern Studies",
  "ANIM_ART": "Animate Arts",
  "ANTHRO": "Anthropology",
  "AP_INST": "AP Institute",
  "APP_PHYS": "Applied Physics",
  "APPRAIS": "Appraisal of Fine & Decorative Art",
  "ARABIC": "Arabic",
  "ART": "Art Theory & Practice",
  "ART_HIST": "Art History",
  "ART_THER": "Art Therapy",
  "ASIAN_AM": "Asian American Studies",
  "ASIAN_LC": "Asian Languages and Cultures",
  "ASIAN_ST": "Asian Studies",
  "ASTRON": "Astronomy",
  "ATHL_PRA": "Athletic Practicum",
  "BASE": "Business & its Social Environment",
  "BIOETHIC": "Medical Humanities & Bioethics",
  "BIOL_SCI": "Biological Sciences",
  "BIOT": "Biotechnology",
  "BIO_TECH": "Fostering Innovation in Biotechnology",
  "BLAW": "Business Law",
  "BMD_ENG": "Biomedical Engineering",
  "BUS_ADM": "Business Administration",
  "BUS_ALYS": "Business Analyst",
  "BUS_ANLY": "Business Analytics",
  "BUSCOM": "Business and Commercial Law",
  "BUS_DM": "Business Analytics for Decision Makers",
  "BUS_INST": "Business Institutions",
  "BUS_LAW": "Business Law",
  "CASH_MGT": "Cash Management Fundamentals",
  "CAT": "Center for Art & Technology",
  "CBB": "Computational Biology & Bioinformatics",
  "CFS": "Chicago Field Studies",
  "CHEM": "Chemistry",
  "CHEM_ENG": "Chemical Engineering",
  "CHINESE": "Chinese",
  "CHSS": "Comparative & Historical Social Science",
  "CIC": "CIC Traveling Scholar",
  "CIS": "Computer Information Systems",
  "CISSP": "Cert IS Security Professional",
  "CIV_ENG": "Civil Engineering",
  "CIV_ENV": "Civil and Environmental Engineering",
  "CLASSICS": "Classics - Readings in English",
  "CLIN_EMB": "Clinical Embryology",
  "CLIN_PSY": "Clinical Psychology",
  "CLIN_RES": "Clinical Research & Regulatory Administration",
  "CME": "Chicago Metropolitan Exchange Program",
  "CMN": "Communication Related Courses",
  "COACH": "Summer Institute in Coaching",
  "CODING": "Coding Boot Camp",
  "COG_HLTH": "Women and Cognitive Health",
  "COG_SCI": "Cognitive Science",
  "COMM_ST": "Communication Studies",
  "COMP_ENG": "Computer Engineering",
  "COMP_LIT": "Comparative Literary Studies",
  "COMP_SCI": "Computer Science",
  "COMP_STU": "Computer Studies",
  "CONDUCT": "Conducting",
  "CONN_ART": "Connoisseurship Fine & Decorative Art",
  "CONPUB": "Constitutional and Public Law",
  "COOP": "Cooperative Engineering Education",
  "COUN": "Counseling",
  "COUN_PSY": "Counseling Psychology",
  "CRD": "Comparative Race and Diaspora",
  "CRDV": "Career Development",
  "CRIM": "Criminal Law",
  "CRT_FRAU": "Certified Fraud Examiner Exam Review",
  "CRT_INT": "Certified Internal Auditor",
  "CRT_TRES": "Certified Treasury Professional",
  "CSD": "Communication Sciences and Disorders",
  "CYBER_BC": "Cybersecurity Boot Camp",
  "DANCE": "Dance",
  "DATA_BC": "Data Science Boot Camp",
  "DATA_SCI": "Data Science",
  "DECS": "Managerial Economics and Decision Sciences",
  "DECS": "Managerial Economics & Decision Sciences",
  "DECSM": "Managerial Economics & Decision Sciences",
  "DIV_MED": "Divorce Mediation Training Program",
  "DRAMA": "Drama",
  "DSDV_IN": "Data Sci, Design & Visuali IN",
  "DSGN": "Segal Design Institute",
  "EARTH": "Earth and Planetary Sciences",
  "ECE": "Electrical & Computer Engineering",
  "ECON": "Economics",
  "EDIT": "Editorial",
  "EECS": "Electrical Engineering & Computer Science",
  "ELEC_ENG": "Electrical Engineering",
  "EMTA": "Emergency Management Threat Assessment",
  "ENGLISH": "English",
  "ENTR": "Entrepreneurship",
  "ENTREP": "Entrepreneurship & Innovation",
  "ENVR_POL": "Environmental Policy & Culture",
  "ENVR_SCI": "Environmental Science",
  "EPI_BIO": "Epidemiology & Biostatistics",
  "ES_APPM": "Engineering Science & Applied Math",
  "ESL_PROF": "ESL for Professionals",
  "EUR_ST": "European Studies",
  "FINANCE": "Finance",
  "FINC": "Finance",
  "FINCL": "Finance",
  "FINCM": "Finance",
  "FN_EXTND": "CFP Extended",
  "FN_PLAN": "Financial Planing Cert",
  "FOREN": "Forensics",
  "FRAUD": "Investigation and Prevention of Commercial Fraud",
  "FRENCH": "French",
  "GAMS": "Global Avant-garde and Modernist Studies",
  "GBL_HLTH": "Global Health",
  "GEN_CMN": "General Communication & Introductory Courses",
  "GEN_ENG": "General Engineering",
  "GENET_CN": "Genetic Counseling",
  "GEN_LA": "General Liberal Arts",
  "GEN_MUS": "General Music",
  "GEOG": "Geography",
  "GEOL_SCI": "Geological Sciences",
  "GERMAN": "German",
  "GNDR_ST": "Gender Studies",
  "GREEK": "Greek",
  "HBMI": "Health and Biomedical Informatics",
  "HCAK": "Health Care at Kellogg",
  "HC_COM": "Healthcare Compliance",
  "HDPS": "Human Development & Psychological Services",
  "HDSP": "Human Development & Social Policy",
  "HEBREW": "Hebrew",
  "HEMA": "Health Enterprise Management",
  "HIMT": "Health Industry Management",
  "HINDI": "Hindi",
  "HIND_URD": "Hindi and Urdu",
  "HISTORY": "History",
  "HIST_PRE": "Historic Preservation",
  "HLTH_COM": "Health Communication",
  "HORT": "Landscaping(Hort)",
  "HQS": "Healthcare Quality and Patient  Safety",
  "HSIP": "Health Sciences Integrated Program",
  "HSR": "Health Services and Outcomes Research",
  "HUM": "Humanities",
  "IBIS": "Interdepartmental Biological Sciences Program",
  "IBIS": "Interdisciplinary Biological Sciences Program",
  "IDEA": "Institute for Design Engineering & Applications",
  "IEMS": "Industrial Engineering & Management Sciences",
  "IGP": "Integrated Life Sciences",
  "IMC": "Integrated Marketing Communications",
  "INF_TECH": "Information Technology",
  "INTG_SCI": "Integrated Science",
  "INTL": "International Business",
  "INTLM": "International Business",
  "INTL_ST": "International Studies",
  "INTPROP": "Intellectual Property",
  "IPLS": "Liberal Studies",
  "ISEN": "Initiative for Sustainability & Energy at NU",
  "ISM": "Information Security Management",
  "ISPM": "Information Systems Project Management",
  "ITALIAN": "Italian",
  "JAPANESE": "Japanese",
  "JAVA_BC": "Java Programming Boot Camp",
  "JAZZ_ST": "Jazz Studies",
  "JOUR": "Journalism",
  "JRN_WRIT": "Journalistic Writing",
  "JW_LEAD": "Jewish Leadership",
  "JWSH_ST": "Jewish Studies",
  "KACI": "Architectures of Collaboration",
  "KACIM": "Architectures of Collaboration",
  "KELLG_CP": "Kellogg Certificate Program for Undergraduates",
  "KELLG_FE": "Financial Economics",
  "KELLG_MA": "Managerial Analytics",
  "KIEI": "Kellogg Innovation and Entrepreneurship Initiative",
  "KMCI": "Markets and Customers",
  "KOREAN": "Korean",
  "KPHD": "Interdisciplinary Seminar",
  "KPPI": "Kellogg Public-Private Initiative",
  "LAND_DM": "Residential Landscape Design",
  "LATIN": "Latin",
  "LATIN_AM": "Latin American & Caribbean Studies",
  "LATINO": "Latina and Latino Studies",
  "LAWSTUDY": "Law Studies-General or Interdisciplinary",
  "LDRSHP": "Center for Leadership",
  "LEAD_ART": "Art of  Leadership Development",
  "LEADERS": "Leadership",
  "LEGAL_ST": "Legal Studies",
  "LESI": "Legal English Summer Institute",
  "LING": "Linguistics",
  "LIT": "Literature",
  "LITARB": "Litigation and Arbitration",
  "LOC": "Learning & Organizational Change",
  "LRN_SCI": "Learning Sciences",
  "MATH": "Mathematics",
  "MAT_SCI": "Materials Science & Engineering",
  "MBIOTECH": "Masters in Biotechnology Program",
  "MCW": "Master of Creative Writing",
  "MDVL_ST": "Medieval Studies",
  "MECH_ENG": "Mechanical Engineering",
  "MECN": "Decision Sciences",
  "MECN": "Managerial Economics",
  "MECNL": "Managerial Economics",
  "MECNM": "Managerial Economics",
  "MECS": "Managerial Economics and Strategy",
  "MECS": "Managerial Econ & Strategy",
  "MED_INF": "Medical Informatics",
  "MEDM": "Media Management",
  "MED_SKIL": "Mediation Skills Training Program",
  "MEM": "Master of Engineering Management",
  "MENA": "Middle East and North African Studies",
  "MGMT": "Management",
  "MGMT_ACT": "Management Accountants",
  "MGMTM": "Management",
  "MHB": "Medical Humanities and Bioethics",
  "MHI": "MS in Health Informatics",
  "MIT": "Media Industries and Technologies",
  "MKTG": "Marketing",
  "MKTGL": "Marketing",
  "MKTGM": "Marketing",
  "MMI": "MS in Medical Informatics",
  "MMSS": "Math Methods in the Social Sciences",
  "MOB_APP": "Mobile Application Developer",
  "MORS": "Management and Organizations",
  "MORSL": "Management and Organizations",
  "MORSM": "Management and Organizations",
  "MPD": "Master of Product Development",
  "MPPA": "Master of Public Policy & Administration",
  "MSA": "Master of Arts in Sports Administration",
  "MSAI": "Artificial Intelligence",
  "MSC": "Master of Science in Communication",
  "MSCI": "Master of Science in Clinical Investigation",
  "MSDS": "Master of Data Science",
  "MS_ED": "MS in Education & Social Policy",
  "MS_FT": "MS in Marital & Family Therapy",
  "MSGH": "Master of Science Global Health",
  "MSHA": "Master of Science in Health Analytics",
  "MS_HE": "MS in Higher Education Administration and Policy",
  "MSIA": "Master of Science in Analytics",
  "MS_IDS": "Master of Science Information Design & Strategy",
  "MSLCE": "MS Leadership for Creative Enterprises",
  "MS_LOC": "Learning & Organizational Change",
  "MSRC": "Master of Regulatory Compliance",
  "MSTP": "Medical Scientist Training",
  "MTS": "Media, Technology & Society",
  "MUS_COMP": "Music Composition",
  "MUSEUM": "Museum Studies",
  "MUS_GRD": "Music Graduate",
  "MUS_HIST": "Music History & Literature",
  "MUSIC": "Music",
  "MUSIC_ED": "Music Education",
  "MUSICOL": "Musicology",
  "MUS_TECH": "Music Technology",
  "MUS_THRY": "Music Theory",
  "MUS_WKSP": "Music Workshop",
  "NAV_SCI": "Naval Science",
  "NEUROBIO": "Neurobiology & Physiology",
  "NEUROSCI": "Neuroscience",
  "NHSI": "National High School Institute",
  "NICO": "Northwestern Institute for Complex Systems",
  "NPMT": "Non-Profit Management",
  "NUIN": "Neuroscience",
  "OPNS": "Operations Management",
  "OPNSM": "Operations Management",
  "ORG_BEH": "Organizational Behavior",
  "PBC": "Plant Biology & Conservation",
  "PERF_ST": "Performance Studies",
  "PERSIAN": "Persian",
  "PHIL": "Philosophy",
  "PHIL_NP": "Philanthropy and Nonprofit Fundraising",
  "PHYSICS": "Physics",
  "PIANO": "Piano",
  "POLI_SCI": "Political Science",
  "POLISH": "Polish",
  "PORT": "Portuguese",
  "PPTYTORT": "Property and Tort Law",
  "PRDV": "Personal Development",
  "PRED_BUS": "Predictive Business Analytics",
  "PREDICT": "Master of Science Predictive Analytics",
  "PRO_HLTH": "Professional Health",
  "PROJ_MGT": "Project Management",
  "PROJ_PMI": "Project Management",
  "PR_PM_IN": "Project Management- IN",
  "PSED": "Predictive Science and Engineering",
  "PSYCH": "Psychology",
  "PUB_HLTH": "Master's in Public Health",
  "PUB_HLTH": "Public Health",
  "QARS": "Quality Assurance & Regulatory Science",
  "QSB": "Quantitative and Systems Biology",
  "REAL": "Real Estate",
  "REAL_EST": "Real Estate",
  "REGLAW": "Regulatory Law",
  "RELIGION": "Religion",
  "RELIGION": "Religious Studies",
  "REPR_SCI": "Reproductive Science and Medicine",
  "RESEARCH": "McCormick Research",
  "RTVF": "Radio/Television/Film",
  "RUSSIAN": "Russian",
  "SAI": "Sound Arts and Industries",
  "SCS": "School of Continuing Studies",
  "SEEK": "Social Enterprise",
  "SEM_ONLN": "Semester Online Courses",
  "SESP": "School of Education & Social Policy Core",
  "SHC": "Science in Human Culture",
  "SHRM": "Society of Human Resource Management",
  "SLAVIC": "Slavic Languages & Literature",
  "SOCIOL": "Sociology",
  "SOC_POL": "Social Policy",
  "SPANISH": "Spanish",
  "SPANPORT": "Spanish and Portuguese",
  "SPS": "School of Professional Studies",
  "STAT": "Statistics",
  "STRINGS": "String Instruments",
  "STRT": "Strategy",
  "STRTL": "Strategy",
  "STRTM": "Strategy",
  "SU_CODE": "Summer Coding Boot Camp",
  "SUM_GCTY": "Summer Institute Green City",
  "SUM_NEG": "Summer Institute Negotiation",
  "SUM_PLAW": "Summer Institute Pre Law",
  "SWAHILI": "Swahili",
  "TAXLAW": "Taxation Law",
  "TEACH_ED": "Teacher Education",
  "TECH": "Technology & E-Commerce",
  "TGS": "TGS General Registrations",
  "TH&DRAMA": "Theatre & Drama",
  "THEATRE": "Theatre",
  "TRADE": "Futures and Option Trading Courses",
  "TRAN": "KSM - Transportation & Logistics",
  "TRANS": "Transportation",
  "TURKISH": "Turkish",
  "URBAN_ST": "Urban Studies",
  "VOICE": "Voice & Opera",
  "WIND_PER": "Wind & Percussion",
  "WRITING": "Writing Arts",
  "YIDDISH": "Yiddish",
};

const create_dropdown = () => {

  let dropdown_list = "";

  for (let subject of Object.entries(courses)){
    dropdown_list += `<li><a href="#">${subject[0]}</a></li>`;
  }
  return '<ul class="dropdown-menu scrollable-menu" role="menu">' + dropdown_list + '</ul>';

}

const create_selector_card = () => {
  let root = document.querySelector('#root');
  root.innerHTML = '';
  dropdown_menu = create_dropdown();

  for (let i = 0; i < 4; i++){
    const template = `
    <div class="row justify-content-center">
      <div class="course-selector">
      <h2 class="class_num">Class ${i+1}</h2>
        <div class="btn-group">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label id="major" class="form-check-label" for="inlineRadio1">Major</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label id="minor" class="form-check-label" for="inlineRadio2">Minor</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label id="distro" class="form-check-label" for="inlineRadio3">Distro</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
              <label id="credit" class="form-check-label" for="inlineRadio3">Credit</label>
            </div>
          </div>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Area<span class="caret"></span></button>
          ${dropdown_menu}
      </div>
    </div>
    `;
    root.innerHTML += template;

  }
}

window.addEventListener('DOMContentLoaded', (ev) => {create_selector_card();})
