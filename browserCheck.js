(function checkBrowser() {
  // Get the user-agent string
  let userAgentString = navigator.userAgent;

  // Detect Chrome
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;

  // Detect Firefox
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

  // Detect Safari
  let safariAgent = userAgentString.indexOf("Safari") > -1;

  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false;

  // Detect Opera
  let operaAgent = userAgentString.indexOf("OP") > -1;

  // Detect Edge
  let EdgAgent = userAgentString.indexOf("Edg") > -1;

  // Discard Chrome since it also matches Opera
  if (chromeAgent && operaAgent) chromeAgent = false;
  if (chromeAgent && EdgAgent) chromeAgent = false;

  const userAgentArray = {
    FireFox: firefoxAgent,
    Chrome: chromeAgent,
    Edge: EdgAgent,
    Safari: safariAgent,
    Opera: operaAgent,
  };

  getBrowser(userAgentArray);
})();

function getBrowser(userBrowser) {
  var filteredObject = Object.keys(userBrowser).reduce((r, e) => {
    if (userBrowser[e]) r[e] = userBrowser[e];
    return r;
  }, {});

  setBrowser(Object.keys(filteredObject)[0]);
}

function setBrowser(userBrowserName) {
  let browerURL = "";
  switch (userBrowserName) {
    case "FireFox":
      browerURL = "https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/";
      break;

    case "Chrome":
      browerURL = "https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg";
      break;

    case "Edge":
      browerURL = "https://duckduckgo.com/install?t=hr";
      break;

    case "Safari":
      browerURL = "https://duckduckgo.com/install?t=hr";
      break;

    case "Opera":
      browerURL = "https://duckduckgo.com/install?t=hr";
      break;
  }

  browserInfo(userBrowserName, browerURL);
}

function browserInfo(userBrowserName, browerURL) {
  const browserExtension = document.querySelectorAll(".add-browser");

  document.querySelector(".add-browser-content").innerText = `${userBrowserName} Extension.`;
  document.querySelector(".add-browser-content").parentElement.href = browerURL;

  document.querySelector(".content-info__item__title").innerText = `Privacy for ${userBrowserName}`;
  browserExtension.forEach((e) => {
    e.innerText = `Add DuckDuckGo to ${userBrowserName}`;
    e.parentElement.href = browerURL;
  });
}
