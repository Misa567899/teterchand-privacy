// script.js
(function () {
  "use strict";

  var translations = {
    fa: {
      pageTitle: "سیاست حفظ حریم خصوصی | تترچند",
      skip: "پرش به محتوای اصلی",
      brand: "تترچند",
      brandSub: "افزونه کروم",
      eyebrow: "حریم خصوصی",
      heroTitle: "سیاست حفظ حریم خصوصی",
      heroText: "این صفحه توضیح می‌دهد افزونه تترچند چه داده‌هایی را ذخیره می‌کند، چه درخواست‌های شبکه‌ای انجام می‌دهد و چگونه می‌توانید درباره حریم خصوصی با ما در ارتباط باشید.",
      updated: "آخرین به‌روزرسانی: ۲۹ اکتبر ۲۰۲۶",
      overviewTitle: "مرور کلی",
      overviewP1: "تترچند یک افزونه مرورگر کروم است که قیمت‌های عمومی بازار تتر (USDT) به تومان را نمایش می‌دهد. این افزونه برای کارکرد خود به حساب کاربری، اطلاعات هویتی یا داده‌های حساس دسترسی ندارد.",
      overviewP2: "ما ادعا نمی‌کنیم که افزونه هیچ درخواست شبکه‌ای انجام نمی‌دهد یا هیچ فراداده‌ای منتقل نمی‌شود؛ بخش «درخواست‌های شبکه‌ای» این موضوع را دقیق توضیح می‌دهد.",
      storageTitle: "داده‌هایی که به‌صورت محلی ذخیره می‌شوند",
      storageIntro: "افزونه آخرین قیمت‌های دریافت‌شده و اطلاعات کش را به‌صورت محلی روی دستگاه شما و با استفاده از chrome.storage.local نگه می‌دارد:",
      storageLi1: "آخرین مقادیر قیمت تتر/تومان که از Wallex دریافت شده‌اند.",
      storageLi2: "زمان دریافت یا انقضای کش، تا افزونه بدون درخواست تکراری داده‌های به‌روز را نمایش دهد.",
      storageLi3: "این داده‌ها فقط در پروفایل مرورگر شما باقی می‌مانند؛ توسعه‌دهنده سروری برای جمع‌آوری آن‌ها ندارد.",
      networkTitle: "درخواست‌های شبکه‌ای",
      networkIntro: "برای نمایش قیمت‌ها، افزونه از طریق HTTPS درخواست‌هایی به API عمومی Wallex ارسال می‌کند. این درخواست‌ها فقط برای دریافت قیمت‌های عمومی بازار انجام می‌شوند.",
      networkLi1: "درخواست‌ها با HTTPS و به دامنه API والکس ارسال می‌شوند.",
      networkLi2: "مانند هر درخواست اینترنتی، فراداده‌های فنی استاندارد مانند آدرس IP، زمان درخواست و اطلاعات عامل کاربر می‌تواند برای Wallex قابل مشاهده باشد.",
      networkLi3: "تترچند از این درخواست‌ها برای ردیابی، تبلیغات یا تحلیل رفتار استفاده نمی‌کند و داده تحلیلی ارسال نمی‌کند.",
      permissionsTitle: "مجوزهای افزونه",
      permStorageName: "storage",
      permStorageBody: "برای ذخیره محلی قیمت‌ها و اطلاعات کش با chrome.storage.local.",
      permHostName: "دسترسی میزبان",
      permHostBody: "دسترسی به دامنه API والکس، فقط برای دریافت قیمت‌های عمومی بازار از طریق HTTPS.",
      thirdTitle: "سرویس‌های شخص ثالث",
      thirdWallexTitle: "Wallex",
      thirdWallexBody: "منبع قیمت‌های عمومی بازار است. درخواست‌های افزونه به سرورهای Wallex می‌رسد و پردازش آن‌ها تابع سیاست حریم خصوصی خود Wallex است. تترچند کنترلی بر داده‌هایی که Wallex نگه می‌دارد ندارد.",
      thirdGithubTitle: "GitHub",
      thirdGithubBody: "برای ارتباط و گزارش مشکل از GitHub Issues استفاده می‌کنیم. هر محتوایی که در GitHub منتشر می‌کنید تابع سیاست حریم خصوصی GitHub است.",
      contactTitle: "ارتباط با ما",
      contactText: "برای پرسش، گزارش مشکل یا درخواست مربوط به حریم خصوصی، از طریق GitHub Issues با ما در ارتباط باشید. لطفاً اطلاعات حساس یا خصوصی را در Issues عمومی منتشر نکنید.",
      updatesTitle: "به‌روزرسانی سیاست",
      updatesText: "ممکن است این سیاست با تغییر عملکرد افزونه به‌روزرسانی شود. نسخه جدید در همین صفحه منتشر می‌شود و تاریخ به‌روزرسانی در بالای صفحه تغییر می‌کند. استفاده مستمر از افزونه پس از انتشار تغییرات به معنای پذیرش نسخه به‌روزشده است.",
      footerNote: "تترچند — نمایش قیمت تتر به تومان"
    },
    en: {
      pageTitle: "Privacy Policy | TeterChand",
      skip: "Skip to main content",
      brand: "TeterChand",
      brandSub: "Chrome extension",
      eyebrow: "Privacy",
      heroTitle: "Privacy Policy",
      heroText: "This page explains what data the TeterChand extension stores, which network requests it makes, and how to reach us about privacy.",
      updated: "Last updated: October 29, 2026",
      overviewTitle: "Overview",
      overviewP1: "TeterChand is a Chrome browser extension that displays public USDT/Toman market prices. The extension does not require an account and does not access identity information or sensitive data.",
      overviewP2: "We do not claim that the extension makes no network requests or that no metadata is transmitted. The \u201cNetwork requests\u201d section explains this precisely.",
      storageTitle: "Data stored locally",
      storageIntro: "The extension keeps the most recent prices it has fetched and cache information locally on your device using chrome.storage.local:",
      storageLi1: "The latest USDT/Toman price values retrieved from Wallex.",
      storageLi2: "The fetch time or cache expiry used to decide when the cached price is stale, so the extension can avoid redundant requests.",
      storageLi3: "This data stays in your browser profile only. The developer does not operate a server that collects it.",
      networkTitle: "Network requests",
      networkIntro: "To display prices, the extension makes HTTPS requests to Wallex\u2019s public API. These requests are used only to retrieve public market prices.",
      networkLi1: "Requests are sent over HTTPS to the Wallex API domain.",
      networkLi2: "As with any internet request, standard technical metadata such as your IP address, request time, and user-agent information may be visible to Wallex.",
      networkLi3: "TeterChand does not use these requests for tracking, advertising, or behavioral analytics, and sends no analytics data.",
      permissionsTitle: "Extension permissions",
      permStorageName: "storage",
      permStorageBody: "Used to store prices and cache information locally with chrome.storage.local.",
      permHostName: "Host access",
      permHostBody: "Access to the Wallex API domain, used only to fetch public market prices over HTTPS.",
      thirdTitle: "Third-party services",
      thirdWallexTitle: "Wallex",
      thirdWallexBody: "Wallex is the source of the public market prices. The extension\u2019s requests reach Wallex servers, and their processing is governed by Wallex\u2019s own privacy policy. TeterChand does not control the data Wallex retains.",
      thirdGithubTitle: "GitHub",
      thirdGithubBody: "We use GitHub Issues for contact and bug reports. Anything you publish on GitHub is subject to GitHub\u2019s privacy policy.",
      contactTitle: "Contact",
      contactText: "For questions, bug reports, or privacy requests, contact us through GitHub Issues. Please do not post sensitive or private information in public issues.",
      updatesTitle: "Policy updates",
      updatesText: "This policy may be updated as the extension changes. The new version will be published on this page and the update date above will change. Continued use of the extension after changes are published means you accept the updated policy.",
      footerNote: "TeterChand \u2014 USDT price in Toman"
    }
  };

  var root = document.documentElement;
  var toggle = document.getElementById("langToggle");
  var toggleLabel = document.getElementById("langToggleLabel");
  var current = "fa";

  function readStoredLanguage() {
    try {
      var saved = window.localStorage.getItem("teterchand-lang");
      if (saved === "fa" || saved === "en") { return saved; }
    } catch (error) {
      /* Storage may be unavailable; fall back to Persian. */
    }
    return "fa";
  }

  function storeLanguage(lang) {
    try {
      window.localStorage.setItem("teterchand-lang", lang);
    } catch (error) {
      /* Ignore storage failures; the switch still works for this page view. */
    }
  }

  function render() {
    var t = translations[current];
    var isEnglish = current === "en";

    root.lang = current;
    root.dir = isEnglish ? "ltr" : "rtl";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        node.textContent = t[key];
      }
    });

    document.title = t.pageTitle;
    toggleLabel.textContent = isEnglish ? "فارسی" : "English";
    toggle.setAttribute("aria-pressed", isEnglish ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isEnglish ? "تغییر زبان به فارسی" : "Switch language to English"
    );
  }

  function switchLanguage() {
    current = current === "fa" ? "en" : "fa";
    storeLanguage(current);
    render();
  }

  current = readStoredLanguage();
  toggle.addEventListener("click", switchLanguage);
  render();
})();
