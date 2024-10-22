$(document).ready(function () {
  let quotes = [];

  $.ajax({
    url: "./quotes.json",
    method: "GET",
    success: function (data) {
      quotes = data;
      showQuote();
    },
    error: function () {
      alert("Error fetching data");
    },
  });

  const showQuote = () => {
    const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $("#text").text(randQuote.quote);
    $("#author").text("– " + randQuote.author);
  };

  $("#new-quote").click(function () {
    showQuote();
  });

  $("#tweet-quote").click(function () {
    const quote = $("#text").text();
    const author = $("#author").text();
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote + "\n" + author
    )}`;
    // window.open(tweetUrl, "_blank");
    $("a").attr("href", tweetUrl);
  });
});
