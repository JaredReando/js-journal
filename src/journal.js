function Entry(title, body) {
  this.title = title;
  this.body = body
}

Entry.prototype.wordCount = function() {
  var body = this.body;
  var body_count = body.split(" ").length;
  return body_count
}

Entry.prototype.getTeaser = function(){
  var body = this.body;
  if (body.wordCount <= 8){
    return body;
  } else {
    var teaser = [];
    for (var i= 0; i<8; i++){
      teaser.push(body.split(" ")[i]);
    }
    return teaser.join(" ");
  }
}

Entry.prototype.vowelCount = function(){
  var body = this.body;
  var vowels = "aeiou";
  var vowelCount = 0;
  body.toLowerCase().split("").forEach(function(char){
    if (vowels.includes(char)){
    vowelCount += 1 ;
  }
  });
  return vowelCount;
}

Entry.prototype.consonantCount = function(){
  var body = this.body;
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var consonantCount = 0;
  body.toLowerCase().split("").forEach(function(char){
    if (consonants.includes(char)){
    consonantCount += 1 ;
  }
  });
  return consonantCount;
}
