
/* Initialisation of global Variable */
var arrays = [9];
var scienceWord = ["Science"];
var scienceKeys = ["Species.", "Plant", "Nuclear", "Lab’s", "Science", "Extinct", "FDA", "health", "dementia", 
    "depression", "diabetes", "Fermilab", "organ", "CERN", "Argonne", "Abbott", "placebo", "medicine", "doctor", "biomedical"];
var spaceWord =["Space"];
var spaceKeys = ["NASA", "satellite", "planets", "solar system", "Carl Sagan", "Neil DeGrasse Tyson", "Mercury", "Venus", 
    "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "stars", "moon", "eclipse", "space"];
var envWord = ["Environment"];
var envKeys = ["Environment", "Climate", "pesticides", "EPA", "climate", "environment", "global warming", "pollution", 
    "arctic", "wildfires", "energy"];
var techWord = ["Tech"];
var techKeys = ["tech", "Facebook", "Google", "email", "robot", "Twitter", "Silicon Valley", "social media", "internet", "Tesla", 
    "device", "Elon Musk", "artificial intelligence", "algorithm", "amazon", "tv", "video games", "cyber tech", "mobile", 
    "cell phones", "iPad", "Apple", "Android", "computer", "iPhones"];
var busWord = ["Business"];
var busKeys = ["entrepreneurship", "Business", "401K", "401(K)", "IRS", "Billion", "finances", "big business", "arbitration"]; 
var econWord = ["Economy"];
var econKeys = ["stock markets", "markets", "money", "election", "Economy", "employment", "Corporate", "unemployment", "tax", 
    "interest rates","York", "Wall Street", "NYSE", "NASDAQ", "Fed"];
 
// This function will load when the browser loads
window.onload = function()
{
    //Get the button element
    var homeButton = document.getElementById('home');
    var technologyButton = document.getElementById('techButton');
    var spaceButton = document.getElementById("spaceButton");
    var environmentButton = document.getElementById("envButton");
    var scienceButton = document.getElementById('scienceButton');
    var businessButton = document.getElementById("busButton");
    var economyButton = document.getElementById("econButton");
    var allButton = document.getElementById("allButton");
    
    //Initialize the buton handler
    homeButton.onclick = homeButtonHandler;
    technologyButton.onclick = technologyButtonHandler;
    spaceButton.onclick = spaceButtonHandler;
    environmentButton.onclick = environmentButtonHandler;
    scienceButton.onclick = scienceButtonHandler;
    businessButton.onclick = businessButtonHandler;
    economyButton.onclick = economyButtonHandler;
    allButton.onclick = allButtonHandler;
    
    //Invoke method to initialize the keywords for machine learning
    readScienceRSSfeed();
    readTechnologyRSSfeed();
    readSpaceRSSfeed();
    readBusinessRSSfeed();
    readEnvironmentRSSfeed();
    readEconomoyRSSfeed();
    
    //getRSSfeed();
};

//Home button handler implementation
function homeButtonHandler()
{
    var text = document.createTextNode('Lets get Going!!!');
    document.getElementById("contentDiv").innerHTML=text.wholeText;
    return false;
}

//technology button handler implementation
function technologyButtonHandler()
{
   /* var text = document.createTextNode('Technology');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    getTechnologyRSSfeed();
    return false;
}

//Space button handler implementation
function spaceButtonHandler()
{
    /*var text = document.createTextNode('Space');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    getSpaceRSSfeed();
    return false;
}

//Environment button handler implementation
function environmentButtonHandler()
{
    /*var text = document.createTextNode('Environment');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    getEnvironmentRSSfeed();
    return false;
}

//Science button handler implementation
function scienceButtonHandler()
{
    /*var text = document.createTextNode('Science');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    
    getScienceRSSfeed();
    return false;
}

//Business button handler implementation
function businessButtonHandler()
{
   /* var text = document.createTextNode('Small Business');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    getBusinessRSSfeed();
    return false;
}

//Economy button handler implemenation
function economyButtonHandler()
{
    /*var text = document.createTextNode(' ');
    document.getElementById("contentDiv").innerHTML=text.wholeText;*/
    getEconomyRSSfeed();
    return false;
}

//All button handler implementation
function allButtonHandler()
{
   // var text = document.createTextNode('All');
    //document.getElementById("contentDiv").innerHTML=text.wholeText;
    getRSSfeed();
    return false;
}

// Get RSS feed to Categorize Technology Articles
function getTechnologyRSSfeed()
{
     var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       //arrays[i] = loadTechnologyXMLurl(URLs[i]);
       loadTechnologyXMLurl(URLs[i]);
    } 
}
// Get RSS feed for Categorize Space Articles
function     getSpaceRSSfeed(){
     var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       loadSpaceXMLurl(URLs[i]);
    } 
}

// Get RSS feed to Categorize Environmental Articles
function getEnvironmentRSSfeed()
{
     var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       arrays[i] = loadEnvironmentXMLurl(URLs[i]);
    } 
}

// Get RSS feed to Categorize Science Articles
function getScienceRSSfeed()
{  
    var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       arrays[i] = loadScienceXMLurl(URLs[i]);
    }
}

// Get RSS feed to Categorize Business  Articles
function getBusinessRSSfeed()
{
     var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       arrays[i] = loadBusinessXMLurl(URLs[i]);
    } 
}

// Get RSS feed to Categorize Economoy Articles
function getEconomyRSSfeed()
{
     var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       arrays[i] = loadEconomyXMLurl(URLs[i]);
    } 
}

// Get all the RSS feed
function getRSSfeed()
{  
    var URLs = [9];
    
    URLs[0] = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    URLs[1] = "http://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml";
    URLs[2] = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    URLs[3] = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    URLs[4] = "http://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml";
    URLs[5] = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    URLs[6] = "http://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml";
    URLs[7] = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    URLs[8] = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"; 
    var i;
    for(i = 0; i < URLs.length; i++){
       arrays[i] = loadXMLurl(URLs[i]);
    }
    //loadXMLurl(URLs[0]);
}
 
// Read only the Science feed to populate the machine learning keywords
function readScienceRSSfeed()
{
    var SciURL;
    var xmlhttp = new XMLHttpRequest();

    SciURL = "http://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"science");
        }
    };
    xmlhttp.open("GET", SciURL, true);
    xmlhttp.send();
}

// Read only the Technology feed to populate the machine learning keywords
function readTechnologyRSSfeed()
{
    var TechURL;
    var xmlhttp = new XMLHttpRequest();

    TechURL = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"technology");
        }
    };
    xmlhttp.open("GET", TechURL, true);
    xmlhttp.send();
}

// Read only the Space feed to populate the machine learning keywords
function readSpaceRSSfeed()
{
    var SpaceURL;
    var xmlhttp = new XMLHttpRequest();

    SpaceURL = "http://rss.nytimes.com/services/xml/rss/nyt/Space.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"space");
        }
    };
    xmlhttp.open("GET", SpaceURL, true);
    xmlhttp.send();
}

// Read only the Business feed to populate the machine learning keywords
function readBusinessRSSfeed()
{
    var SpaceURL;
    var xmlhttp = new XMLHttpRequest();

    SpaceURL = "http://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"business");
        }
    };
    xmlhttp.open("GET", SpaceURL, true);
    xmlhttp.send();
}

// Read only the Environment feed to populate the machine learning keywords
function readEnvironmentRSSfeed()
{
    var EnvURL;
    var xmlhttp = new XMLHttpRequest();

    EnvURL = "http://rss.nytimes.com/services/xml/rss/nyt/Environment.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"environment");
        }
    };
    xmlhttp.open("GET", EnvURL, true);
    xmlhttp.send();
}

// Read only the Economoy feed to populate the machine learning keywords
function readEconomoyRSSfeed()
{
    var EcoURL;
    var xmlhttp = new XMLHttpRequest();

    EcoURL = "http://rss.nytimes.com/services/xml/rss/nyt/Economy.xml";
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            myPopulateWords(this,"economy");
        }
    };
    xmlhttp.open("GET", EcoURL, true);
    xmlhttp.send();
}

// List all the articles based on category
function loadTechnologyXMLurl(url) 
{
  var content = document.getElementById("contentDiv");
  while (content.firstChild) {
  content.removeChild(content.firstChild);
}
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"Technology");
    }
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// List all the articles based on category
function loadSpaceXMLurl(url) 
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"Space");
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// List all the articles based on category
function loadEnvironmentXMLurl(url) 
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"Environment");
    }
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// List all the articles based on category
function loadScienceXMLurl(url) 
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"science");
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// List all the articles based on category
function loadBusinessXMLurl(url) 
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"Business");
         }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// List all the articles based on category
function loadEconomyXMLurl(url) 
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
        myFunction(this,"Economy");
         }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// List all the articles based on category
function loadXMLurl(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
       myFunction(this,"all");
     }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// Find the most frequence word in the array
function findmostfrequent (array)
{
    var counts = [];
    var compare = -1;
    var mostFrequent;
    mostFrequent="empty";
    for(var i = 0, len = array.length; i < len; i++)
    {
       //console.log("The word is " + array[i]);
       var word = array[i];
       
       if(counts[word] === undefined)
       {
           counts[word] = 1;
       }
       else
       {
           counts[word] = counts[word] + 1;
       }
       if(counts[word] > compare){
             compare = counts[word];
             mostFrequent = array[i];
       }
       
    }
  //console.log("The most Frequent word is:-" + mostFrequent);
  return mostFrequent;
}

//Populate method to build the keywords for machine learning
function myPopulateWords(xml,type)
{
    var titlelist, titlevalue,xmlDoc;
    xmlDoc = xml.responseXML;
    titlelist="";
    titlevalue="";
    titlelist = xmlDoc.getElementsByTagName("title");
    for (i=0;i<5;i++)
    {
        titlevalue = titlelist[i].childNodes[0].nodeValue;
        var titlesplit = titlevalue.split(" ");
        //You need to check if title match your technology learning keys
        var arrayLength = titlesplit.length;
            for (j=0;j<arrayLength;j++)
            {  
                if (titlesplit[j] !== "in")
                {   
                    if (titlesplit[j] !== "the")
                    {
                        if (titlesplit[j] !== "to")
                        {
                            if (titlesplit[j] !== "Is")
                            {
                                if (titlesplit[j] !== "The")
                                {
                                    if (titlesplit[j] !== "NYT")
                                    {
                                        if (titlesplit[j] !== ">")
                                        {
                                            if (titlesplit[j] !== "&")
                                            {
                                                if (type === "science")
                                                {
                                                    scienceWord.push(titlesplit[j]);
                                                }
                                                if (type === "technology")
                                                {
                                                    techWord.push(titlesplit[j]);
                                                }
                                                if (type === "space")
                                                {
                                                    spaceWord.push(titlesplit[j]);
                                                }
                                                if (type === "business")
                                                {
                                                    busWord.push(titlesplit[j]);
                                                }
                                                if (type ==="environment")
                                                {
                                                    envWord.push(titlesplit[j]);
                                                }
                                                if (type ==="economy")
                                                {
                                                    econWord.push(titlesplit[j]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
    for (u=0;u<4;u++)
    { 
        var most="";
        if (type === "science")
        {
            most = findmostfrequent(scienceWord);
            scienceWord.splice(scienceWord.indexOf(most),1);
            scienceKeys.push(most);
            /*for (i=0;i<scienceKeys.length;i++)
            {
                console.log("My Science key is: " + scienceKeys[i]);
            }*/
        }
        if (type === "technology")
        {
            most = findmostfrequent(techWord);
            techWord.splice(techWord.indexOf(most),1);
            techKeys.push(most);
            /*for (i=0;i<techKeys.length;i++)
            {
                console.log("My techKeys key is: " + techKeys[i]);
            }*/
        }
        if (type === "space")
        {
            most = findmostfrequent(spaceWord);
            spaceWord.splice(spaceWord.indexOf(most),1);
            spaceKeys.push(most);
            /*for (i=0;i<spaceKeys.length;i++)
            {
                console.log("My Space key is: " + spaceKeys[i]);
            }*/
        }
        if (type === "business")
        {
            most = findmostfrequent(busWord);
            busWord.splice(busWord.indexOf(most),1);
            busKeys.push(most);
            /*for (i=0;i<busKeys.length;i++)
            {
                console.log("My Business key is: " + busKeys[i]);
            }*/
        }
        if (type === "environment")
        {
            most = findmostfrequent(envWord);
            envWord.splice(envWord.indexOf(most),1);
            envKeys.push(most);
            /*for (i=0;i<envKeys.length;i++)
            {
                console.log("My Environment key is: " + envKeys[i]);
            }*/
        }
        if (type === "economy")
        {
            most = findmostfrequent(econWord);
            econWord.splice(econWord.indexOf(most),1);
            econKeys.push(most);
            /*for (i=0;i<econKeys.length;i++)
            {
                console.log("My Economy key is: " + econKeys[i]);
            }*/
        }
    }



}

//Function to display the articles on the website
function myFunction(xml,type) 
{
  var content = document.getElementById("contentDiv");
 
  var table = document.createElement('table');
  
  var linklist, titlelist, i, xmlDoc, linkvalue,titlevalue;
  xmlDoc = xml.responseXML;
  linkvalue = "";
  titlevalue= "";
  //tr="";
  linklist = xmlDoc.getElementsByTagName("link");
  titlelist = xmlDoc.getElementsByTagName("title");
  for (i = 0; i< linklist.length; i++) 
  {
      
      
      linkvalue  = linklist[i].childNodes[0].nodeValue;
      titlevalue = titlelist[i].childNodes[0].nodeValue;
      
      if (type==="all")
      {
        
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var td1 = document.createElement('td');
        var a = document.createElement('a');
        var title = document.createTextNode(titlevalue);
        var link = document.createTextNode(linkvalue);
        a.appendChild(title);
        a.title = title;
        a.href = linkvalue;
        td.appendChild(a);
        td1.appendChild(link);
        tr.appendChild(td);
        tr.appendChild(td1);
        table.appendChild(tr);
      }
      else if (type==="Technology")
      {
        
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your technology learning keys
          var arrayLength = titlesplit.length;
          for (j=0;j<arrayLength;j++)
          {
              for (k=0;k<techKeys.length;k++)
              {
                  if (titlesplit[j]===techKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      //xmlDoc.getElementsByTagName("table")[0].childNodes[0].insertData(0,tr);
                      table.appendChild(tr);
                  }
              }
          }
      }
      
      else if (type==="Space")
      {
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your space learning keys
        var arrayLength = titlesplit.length;
        for (j=0;j<arrayLength;j++){
            for (k=0;k<spaceKeys.length;k++)
              {
                  if (titlesplit[j]===spaceKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      table.appendChild(tr);
                  }
              }
          }
      }
      
      else if (type==="Environment")
      {
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your environment learning keys
          var arrayLength = titlesplit.length;
          for (j=0;j<arrayLength;j++){
             for (k=0;k<envKeys.length;k++)
              {
                  if (titlesplit[j]===envKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      table.appendChild(tr);

                  }
              }
          }
      }
      else if (type==="science")
      {
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your science learning keys
        var arrayLength = titlesplit.length;
        for (j=0;j<arrayLength;j++){
              for (k=0;k<scienceKeys.length;k++)
              {
                  if (titlesplit[j]===scienceKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      table.appendChild(tr);

                  }
              }
          }
      }
      
      else if (type==="Business")
      {
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your business learning keys
          var arrayLength = titlesplit.length;
          for (j=0;j<arrayLength;j++){
              for (k=0;k<busKeys.length;k++)
              {
                  if (titlesplit[j]===busKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      table.appendChild(tr);

                  }
              }
          }
      }
      
      else if (type==="Economy")
      {
        var titlesplit = titlevalue.split(" ");
          //You need to check if title match your science learning keys
        var arrayLength = titlesplit.length;
        for (j=0;j<arrayLength;j++){
              for (k=0;k<econKeys.length;k++)
              {
                  if (titlesplit[j]===econKeys[k])
                  {
                      tr = document.createElement('tr');
                      var td = document.createElement('td');
                      var a = document.createElement('a');
                      var title = document.createTextNode(titlevalue);
                      a.appendChild(title);
                      a.title = title;
                      a.href = linkvalue;
                      td.appendChild(a);
                      tr.appendChild(td);
                      table.appendChild(tr);

                  }
              }
          }
      }
      
      //content.appendChild(tr);
     
      
      table.insertBefore(table.firstChild,tr);
  }
   content.appendChild(table);
} 

