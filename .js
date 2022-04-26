var tweetURL = "";
  var tempList = "";
  var randomQuote = "";
  var html = "";
  var quoteBody = document.querySelector("#quote-body");
  var quote = document.querySelector("#quote");
  var button = document.querySelector("#quote-btn");
  var share = document.querySelector("#share");
  
  
  
  var quotes = [
   { 
    text: "iki kişinin bildiği sır sır değildir.",
    author: "- zed -"
   },
   {
    text: "Onur keskin bir kılıçtır",
    author: "- akali -"
   },
   { 
    text: "Ölümde rüzgar gibi hep yanı başımda" ,
    author: "- yasuo -"
   },
   { 
    text: "Gerçek ölüm, yaşamayı bilmemektir. Yarın bir umuttur, vaat değil.", 
    author: "- kindred -"
   },
   { 
    text: "Kalpten inanlar sonsuza dek yaşar derler ama unutulunca herkes ölür.", 
    author: "- kayn -"
   },
   { 
    text: "Yaşadığını hissetmek istiyorsan her an ölebileceğini düşün.", 
    author: "- morgana -"
   },
   { 
    text: "Çağlar kılıçlarla değil, onları kullanan insanlar tarafından yaratılır." ,
    author: "- aatrox -"
   }
   ]
  
  
   
  function randomize(){
    tempList = Object.keys(quotes);
    randomQuote = tempList[ Math.floor(Math.random() * tempList.length)];
    console.dir(randomize);
  }
  
  
  function loadQuote(){
    randomize();
    
    
    html = '<p id="quote"><q>' + 
            quotes[randomQuote].text + 
            '</q><span class="quote-author">' + 
            quotes[randomQuote].author + '</span></p>';
    
    
   
    
   
    quoteBody.innerHTML = html;
   
  }
  loadQuote();  
    
  
  button.onclick = function(){
     loadQuote();
  }

  
  share.onclick = function(){
    window.open(tweetURL);
  }