/* ALERT landing - firm lookup over bundled verified dataset. No build step. */
(function () {
  "use strict";

  var DATA = [];
  var EMBEDDED = [{"firm": "Pesquera Costa Brava S.R.L.", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 13", "country": "ARGENTINA", "address": "Calle 1002 Esq.1003 Puerto Mar De Plata \n\t\t\t, Buenos Aires,\n\t\t\tARGENTINA", "fda_record_date": "03/29/2011", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Frozen Yellow Croaker). Importer; Gold Coast Trading Co. FEI #1000299910;"}, {"firm": "Pesquera Costa Brava S.R.L.", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 13", "country": "ARGENTINA", "address": "Calle 1002 Esq.1003 Puerto Mar De Plata \n\t\t\t, Buenos Aires,\n\t\t\tARGENTINA", "fda_record_date": "03/29/2011", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Frozen White Croaker). Importer; Gold Coast Trading Co. FEI #1000299910;"}, {"firm": "Pesquera Costa Brava S.R.L.", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 44", "country": "ARGENTINA", "address": "Calle 1002 Esq.1003 Puerto Mar De Plata \n\t\t\t, Buenos Aires,\n\t\t\tARGENTINA", "fda_record_date": "03/29/2011", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Frozen Sea Trout). Importer; Gold Coast Trading Co. FEI #1000299910;"}, {"firm": "Coastal Seafoods Limited", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 70", "country": "BANGLADESH", "address": "B-11, BSCIC Industrial Estate , Sagarika Road\n\t\t\t, Chittagong,\n\t\t\tBD-10 BANGLADESH", "fda_record_date": "08/19/2021", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Hilsa (Shad) Steak). Importer:"}, {"firm": "MASHUD FISH PROCESSING & ICE COMPLEX, UNIT-2", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 33", "country": "BANGLADESH", "address": "Bfdc Plot # 22, Block # B , Ichanagar, Karnafuly\n\t\t\t, Chattagram,\n\t\t\tBANGLADESH", "fda_record_date": "12/18/2025", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Oil Sardine; Sardinella longiceps). IMPORTER: CK Frozen Fish and Food Inc., FEI# 3011442744"}, {"firm": "MASHUD FISH PROCESSING & ICE COMPLEX, UNIT-2", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 70", "country": "BANGLADESH", "address": "Bfdc Plot # 22, Block # B , Ichanagar, Karnafuly\n\t\t\t, Chattagram,\n\t\t\tBANGLADESH", "fda_record_date": "12/18/2025", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Hilsa Shad; Tenualosa ilisha). IMPORTER: CK Frozen Fish and Food Inc., FEI# 3011442744"}, {"firm": "MASHUD FISH PROCESSING & ICE COMPLEX, UNIT-2", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 83", "country": "BANGLADESH", "address": "Bfdc Plot # 22, Block # B , Ichanagar, Karnafuly\n\t\t\t, Chattagram,\n\t\t\tBANGLADESH", "fda_record_date": "12/18/2025", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Tank Goby; Glossogobius giuris). IMPORTER: CK Frozen Fish and Food Inc., FEI# 3011442744"}, {"firm": "Empresa Pesqueira de Barra de Sao Joao Ltda.", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - --", "country": "BRAZIL", "address": "Avenida Amaral Peixoto 117 , Municipio de Casmiro\n\t\t\t, Barra De Sao Joao,\n\t\t\tRio de Janeiro BRAZIL", "fda_record_date": "09/10/2009", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (). All histamine producing fish"}, {"firm": "C.K Frozen Foods Yangon Company Limited", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 70", "country": "BURMA (MYANMAR)", "address": "181, PAN TAL WUN U SHWE BIN STREET , EAST DAGON TOWNSHIP\n\t\t\t, Yangon,\n\t\t\tYangon BURMA (MYANMAR)", "fda_record_date": "12/18/2025", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Hilsa; Tenualosa Ilisha; Hilsa ilisha). IMPORTER: CK Frozen Fish and Food Inc., FEI# 3011442744"}, {"firm": "C.K Frozen Foods Yangon Company Limited", "alert_no": "16-119", "list_type": "Red List", "product_code": "16 A - - 99", "country": "BURMA (MYANMAR)", "address": "181, PAN TAL WUN U SHWE BIN STREET , EAST DAGON TOWNSHIP\n\t\t\t, Yangon,\n\t\t\tYangon BURMA (MYANMAR)", "fda_record_date": "12/18/2025", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/CMS_IA/importalert_23.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-119 (Keski). IMPORTER: CK Frozen Fish and Food Inc., FEI# 3011442744"}, {"firm": "Khulna Frozen Foods Export Limited", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 J - - 05", "country": "BANGLADESH", "address": "Bagmara, Naihati Union, Char Rupsha \n\t\t\t, Khulna,\n\t\t\tBANGLADESH", "fda_record_date": "10/23/2018", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Shrimp). Problems: LEUCOMALACHITE GREEN;"}, {"firm": "Khulna Frozen Foods Export Limited", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 X - - 21", "country": "BANGLADESH", "address": "Bagmara, Naihati Union, Char Rupsha \n\t\t\t, Khulna,\n\t\t\tBANGLADESH", "fda_record_date": "10/23/2018", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Shrimp). Problems: LEUCOMALACHITE GREEN;"}, {"firm": "SOUTHERN FOODS LTD.", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 J - - 05", "country": "BANGLADESH", "address": "Elahipur, Rupsha \n\t\t\t, Khulna,\n\t\t\tBANGLADESH", "fda_record_date": "02/18/2021", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Shrimp). Problems: OXOLINIC ACID;"}, {"firm": "SOUTHERN FOODS LTD.", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 X - - 21", "country": "BANGLADESH", "address": "Elahipur, Rupsha \n\t\t\t, Khulna,\n\t\t\tBANGLADESH", "fda_record_date": "02/18/2021", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Shrimp). Problems: OXOLINIC ACID;"}, {"firm": "Seaborn Enterprises Ltd", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 A - - 32", "country": "CANADA", "address": "79 E Kent Ave North \n\t\t\t, Vancouver,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "05/06/2022", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (FROZEN SMOKED ATLANTIC/PINK TID BITS). Problem(s); ISOEUGENOL;"}, {"firm": "Seaborn Enterprises Ltd", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 I - - 32", "country": "CANADA", "address": "79 E Kent Ave North \n\t\t\t, Vancouver,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "05/06/2022", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (FROZEN SMOKED ATLANTIC/PINK TID BITS). Problem(s); ISOEUGENOL;"}, {"firm": "Seaborn Enterprises Ltd", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 X - - 03", "country": "CANADA", "address": "79 E Kent Ave North \n\t\t\t, Vancouver,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "05/06/2022", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (FROZEN SMOKED ATLANTIC/PINK TID BITS). Problem(s); ISOEUGENOL;"}, {"firm": "Seven Seas Seafood Fish Co., Ltd.", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 A - - 32", "country": "CANADA", "address": "12411 Vulcan Way \n\t\t\t, Richmond,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "02/22/2019", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Salmon). Problem(s);"}, {"firm": "Seven Seas Seafood Fish Co., Ltd.", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 I - - 32", "country": "CANADA", "address": "12411 Vulcan Way \n\t\t\t, Richmond,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "02/22/2019", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Salmon). Problem(s);"}, {"firm": "Seven Seas Seafood Fish Co., Ltd.", "alert_no": "16-124", "list_type": "Red List", "product_code": "16 S - - 32", "country": "CANADA", "address": "12411 Vulcan Way \n\t\t\t, Richmond,\n\t\t\tBritish Columbia CANADA", "fda_record_date": "02/22/2019", "as_of": "2026-10-10", "source_url": "https://www.accessdata.fda.gov/cms_ia/importalert_27.html", "verification_status": "VERIFIED", "verification_notes": "Observed live on official FDA page 16-124 (Salmon). Problem(s); Isoeugenol"}];
  var q = document.getElementById("q");
  var status = document.getElementById("status");
  var results = document.getElementById("results");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function rowHtml(r) {
    var src = esc(r.source_url);
    return (
      '<article class="card lookup-hit">' +
      '<header class="alert-head"><span class="pill pill-critical">' + esc(r.list_type) + '</span>' +
      '<span class="mono">' + esc(r.alert_no) + '</span></header>' +
      '<dl class="alert-body">' +
      "<dt>Firm</dt><dd>" + esc(r.firm) + ", " + esc(r.country) + "</dd>" +
      "<dt>Product</dt><dd class='mono'>" + esc(r.product_code) + "</dd>" +
      "<dt>Record date</dt><dd class='mono'>" + esc(r.fda_record_date) + "</dd>" +
      "<dt>Checked</dt><dd class='mono'>" + esc(r.as_of) + "</dd>" +
      "<dt>Source</dt><dd><a href='" + src + "' target='_blank' rel='noopener nofollow'>Official FDA page</a></dd>" +
      "</dl></article>"
    );
  }

  function render(filter) {
    filter = (filter || "").toLowerCase().trim();
    var hits = DATA.filter(function (r) {
      if (!filter) return true;
      var hay = (r.firm + " " + r.country + " " + r.alert_no + " " + r.product_code + " " + (r.verification_notes || "")).toLowerCase();
      return hay.indexOf(filter) !== -1;
    });
    status.textContent = hits.length + " match(es) in the verified dataset of " + DATA.length + " rows.";
    if (!hits.length) {
      results.innerHTML = '<div class="lookup-none"><strong>No matching record found in the displayed dataset.</strong><br>This does not mean the firm is absent from all FDA Import Alerts. Always verify on the official FDA page before acting.</div>';
      return;
    }
    results.innerHTML = hits.slice(0, 25).map(rowHtml).join("");
  }

  // Works both over http(s) and on direct file:// open (fetch fails on file://, use embedded data).
  fetch("firms.json")
    .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
    .then(function (d) { DATA = d; render(q ? q.value : ""); })
    .catch(function () {
      if (EMBEDDED && EMBEDDED.length) { DATA = EMBEDDED; render(q ? q.value : ""); }
      else status.textContent = "Dataset could not be loaded. The verified records are listed in the sample section above.";
    });

  if (q) q.addEventListener("input", function (e) { render(e.target.value); });

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getUTCFullYear());

  // Scroll reveal
  try {
    var els = document.querySelectorAll(".steps .step, .example-grid .alert-card");
    els.forEach(function (el) { el.classList.add("reveal"); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add("in"); });
    }
  } catch (e) { /* no-JS stays visible via CSS fallback */ }

  // Interest form: validate first, submit only on a real-looking email.
  // Empty or malformed address -> error shown, nothing is sent.
  // Honeypot filled (bot) -> fake success shown, nothing is sent.
  var iform = document.getElementById("interest-form");
  if (iform) {
    var iemail = document.getElementById("interest-email");
    var itrap = document.getElementById("interest-company");
    var ierr = document.getElementById("interest-error");
    var iok = document.getElementById("interest-ok");
    iform.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = (iemail && iemail.value || "").trim();
      if (ierr) ierr.hidden = true;
      if (iok) iok.hidden = true;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (iemail) { iemail.setAttribute("aria-invalid", "true"); iemail.focus(); }
        if (ierr) { ierr.hidden = false; ierr.textContent = "That email address doesn't look right. Check it and try again."; }
        return;
      }
      if (iemail) iemail.removeAttribute("aria-invalid");
      if (itrap && (itrap.value || "").trim() !== "") {
        if (iok) { iok.hidden = false; iok.textContent = "Saved. We will send the sample shortly."; }
        return;
      }
      if (iok) { iok.hidden = false; iok.textContent = "Sending..."; }
      iform.submit();
    });
  }

  // Gumroad placeholder: inform instead of dead link
  var g = document.getElementById("gumroad-link");
  if (g) {
    g.addEventListener("click", function (e) {
      if (g.getAttribute("data-pending") === "true") {
        e.preventDefault();
        alert("Purchase link pending: the $149 Gumroad product has not been created yet.");
      }
    });
  }
})();
