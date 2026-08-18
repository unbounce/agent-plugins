// Google Analytics click tracking.
//
// Google Analytics (when the page's domain has the GA integration enabled)
// already records pageviews and form submissions on its own. It does not record
// clicks on plain links, so this adds that: it listens on every <a> and sends a
// GA event describing the click. If GA is not enabled on the domain, this does
// nothing.
(function () {
  function cleanUrl(url) {
    // Links that are conversion goals are served through a redirect wrapper;
    // unwrap it so the reported URL is the real destination.
    return /clk[n,g]\//.test(url) ? url.replace(/clk[n,g]\//, "").replace("/", "://") : url;
  }

  function categorize(href) {
    var host = href.split("/")[2] || "";
    if (!href || href.charAt(0) === "#") return { category: "In-Page", action: href || "none" };
    if (host.indexOf("facebook") !== -1) return { category: "Social", action: "Facebook" };
    if (host.indexOf("twitter") !== -1) return { category: "Social", action: "Twitter" };
    if (host.indexOf("linkedin") !== -1) return { category: "Social", action: "Linkedin" };
    if (host.indexOf("plus.google.com") !== -1) return { category: "Social", action: "Google+" };
    if (href.indexOf("mailto:") !== -1)
      return { category: "Email", action: href.replace("mailto:", "") };
    if (href.indexOf("tel:") !== -1) return { category: "Phone", action: href.replace("tel:", "") };
    if (href.indexOf("://") === -1 && /-lightbox\.html$/.test(href))
      return { category: "Lightbox", action: "Lightbox" };
    if (/\.(pdf|doc|docx|csv)/.test(href)) return { category: "Download", action: cleanUrl(href) };
    return { category: "Outbound", action: cleanUrl(href) };
  }

  function send(category, action, label) {
    // Use beacon transport so the event still sends as the click navigates away.
    if (typeof window.gtag === "function") {
      window.gtag("event", "event", {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        transport_type: "beacon",
      });
    } else if (typeof window.ga === "function") {
      window.ga("send", {
        hitType: "event",
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        transport: "beacon",
      });
    }
    // No Google Analytics on this domain: do nothing.
  }

  function wire() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener("click", function (event) {
        var anchor = event.currentTarget;
        // getAttribute (not .href) so in-page "#..." links aren't resolved to absolute URLs.
        var href = anchor.getAttribute("href") || "";
        var info = categorize(href);
        var label = (anchor.textContent || "").trim() || href;
        send(info.category, info.action, label);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
